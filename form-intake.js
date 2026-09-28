/*
 * Landing form intake — AITA «landing-forms» plugin.
 *
 * Replaces the n8n webhook (n8n-prod.aita.today) that went dark behind a dead
 * Cloudflare tunnel (530 / error 1033) while the forms kept redirecting to the
 * thank-you page — every lead in that window was lost without a trace.
 *
 * Rules this file enforces for every form on the site:
 *   - a submission counts as sent ONLY on a 2xx answer; anything else throws;
 *   - the caller shows the error and keeps what the visitor typed;
 *   - one public key per form (constant — the platform never re-mints it).
 */
(function () {
    'use strict';

    // Public form keys per environment. A key is not a secret: it only lets a
    // page POST a submission into one form of one company.
    var FORM_KEYS = {
        prod: {
            contact: '',
            platform: '',
            powerconnectLead: '',
            powerconnectDatasheet: ''
        },
        dev: {
            contact: '',
            platform: '',
            powerconnectLead: '',
            powerconnectDatasheet: ''
        }
    };

    function environment() {
        var host = window.location.hostname;
        var override = null;
        try { override = localStorage.getItem('aita-form-api'); } catch (e) {}
        if (override) {
            // Local testing only: point the forms at another API and its own keys.
            var keys = FORM_KEYS.dev;
            try { keys = JSON.parse(localStorage.getItem('aita-form-keys') || 'null') || keys; } catch (e) {}
            return { base: override.replace(/\/$/, ''), keys: keys };
        }
        if (host === 'localhost' || host === '127.0.0.1') return { base: 'https://api.aita.today', keys: FORM_KEYS.dev };
        if (/\.aita\.today$/.test(host)) return { base: 'https://api.aita.today', keys: FORM_KEYS.dev };
        return { base: 'https://api.aita.world', keys: FORM_KEYS.prod };
    }

    /**
     * POST one submission. Resolves with the parsed body on 2xx; rejects with
     * an Error whose `message` is safe to show and whose `code` is the
     * platform's refusal code (e.g. RATE_LIMITED, FORM_PAUSED) when known.
     */
    window.aitaSubmitForm = async function (formName, payload) {
        var env = environment();
        var key = env.keys[formName];
        if (!key) {
            var missing = new Error('Form is not configured');
            missing.code = 'FORM_KEY_MISSING';
            throw missing;
        }
        var res;
        try {
            res = await fetch(env.base + '/api/plugins/landing-forms/public/f/' + encodeURIComponent(key), {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify(payload)
            });
        } catch (networkError) {
            var net = new Error('Network error');
            net.code = 'NETWORK_ERROR';
            throw net;
        }
        var data = {};
        try { data = await res.json(); } catch (e) {}
        if (!res.ok || data.ok === false) {
            var failure = new Error(data.reason || ('Submit failed (' + res.status + ')'));
            failure.code = data.code || ('HTTP_' + res.status);
            throw failure;
        }
        return data;
    };

    /** Hidden field humans never fill; the platform drops submissions that carry it. */
    window.aitaHoneypotValue = function (form) {
        var field = form && form.querySelector('input[name="website_url"]');
        return field ? field.value : '';
    };
})();
