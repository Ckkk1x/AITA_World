// Сторінка модуля «Сховище». Вигляд скопійовано зі справжньої платформи, демо-дані вигадані.
// Весь текст тут, у коді, щоб сторінку можна було перекласти.
(function () {
  // значки lucide, як у платформі
  var FD = "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z";
  var I = {
    folder: '<path d="' + FD + '"/>',
    file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/>',
    filetext: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
    share: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>',
    down: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>',
    up: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/>',
    pen: '<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/>',
    dots: '<circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/>',
    fup: '<path d="' + FD + '"/><path d="M12 10v6"/><path d="m9 13 3-3 3 3"/>',
    fplus: '<path d="' + FD + '"/><path d="M12 10v6"/><path d="M9 13h6"/>',
    finput: '<path d="M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1"/><path d="M2 13h10"/><path d="m9 16 3-3-3-3"/>',
    sort: '<path d="m21 16-4 4-4-4"/><path d="M17 20V4"/><path d="m3 8 4-4 4 4"/><path d="M7 4v16"/>',
    aup: '<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>',
    aright: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    chev: '<path d="m9 18 6-6-6-6"/>',
    ext: '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
    x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    trash: '<path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/>',
    tag: '<path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/>',
    lock: '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    menu: '<path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/>',
    minus: '<path d="M5 12h14"/>',
    plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
    print: '<path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"/><rect x="6" y="14" width="12" height="8" rx="1"/>',
    rotate: '<path d="M3 12a9 9 0 1 0 9-9 9.750 9.750 0 0 0-6.740 2.740L3 8"/><path d="M3 3v5h5"/>',
    fit: '<rect width="14" height="18" x="5" y="3" rx="2"/><path d="M12 8v8"/><path d="m9.500 10 2.500-2 2.500 2"/><path d="m9.500 14 2.500 2 2.500-2"/>',
    spark: '<path d="M9.937 15.500A2 2 0 0 0 8.500 14.063l-6.135-1.582a.500.500 0 0 1 0-.962L8.500 9.936A2 2 0 0 0 9.937 8.500l1.582-6.135a.500.500 0 0 1 .963 0L14.063 8.500A2 2 0 0 0 15.500 9.937l6.135 1.581a.500.500 0 0 1 0 .964L15.500 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.500.500 0 0 1-.963 0z"/>',
    check: '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
    phone: '<rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>',
    chat: '<path d="M7.900 20A9 9 0 1 0 4 16.100L2 22Z"/>',
    zip: '<path d="M10 12v-1"/><path d="M10 18v-2"/><path d="M10 7V6"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M15.500 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 .274 1.010"/><circle cx="10" cy="20" r="2"/>'
  };
  var L = function (n, s, st) { return '<svg class="lu" width="' + (s || 16) + '" height="' + (s || 16) + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"' + (st ? ' style="' + st + '"' : "") + ' aria-hidden="true">' + I[n] + "</svg>"; };

  // Демо-документи: усі відкриваються так, як PDF у платформі
  var h1 = function (t) { return '<h4>' + t + '</h4>'; };
  var hero = function (a, b) { return '<div class="dvlogo">Soniachni Systemy</div><h3>' + a + '</h3><p class="dvs">' + b + '</p>'; };
  var tb = function (rows) { return '<table>' + rows.map(function (r, i) { var c = i ? "td" : "th"; return "<tr>" + r.map(function (x) { return "<" + c + ">" + x + "</" + c + ">"; }).join("") + "</tr>"; }).join("") + "</table>"; };
  var DOCS = {
    "Sobre_la_empresa.pdf": { d: "14 oct. 2026", s: "2.1 MB", p: [
      hero("Sobre la empresa", "Diseñamos y construimos plantas solares para empresas.") + '<div class="dvband"></div>' + h1("Quiénes somos") + "<p>12 años en el mercado, más de 40 obras ejecutadas y cuadrilla de montaje propia.</p>" + h1("Qué hacemos") + tb([["Servicio", "Qué incluye"], ["Auditoría de consumo", "Curva de carga, tarifa, potencial de ahorro"], ["Diseño", "Implantación, esquema, especificación"], ["Montaje", "Cuadrilla propia, puesta en marcha"], ["Servicio", "Monitorización y mantenimiento programado"]]),
      h1("Nuestro equipo") + "<p>Ingenieros, proyectistas y montadores trabajan en la misma oficina, así que un solo equipo lleva el proyecto desde la medición hasta la puesta en marcha.</p>" + h1("Dónde trabajamos") + "<p>Kyiv, Brovary, Vinnytsia, Leópolis y su región.</p>",
      h1("Contactos") + "<p>Kyiv, c/ Soniachna, 12<br>hello@sonyachni.example</p>"
    ] },
    "Casos_FV.pdf": { d: "09 oct. 2026", s: "3.2 MB", p: [
      hero("Casos FV", "Tres obras que entregamos este año.") + '<div class="dvband"></div>' + tb([["Obra", "Potencia", "Retorno"], ["Almacén en Brovary", "150 kW", "4,2 años"], ["Complejo agrícola", "320 kW", "4,8 años"], ["Centro de negocios", "90 kW", "5,1 años"]]) + h1("Almacén en Brovary") + "<p>La planta se instaló en la cubierta del almacén en seis semanas, sin parar la actividad del almacén.</p>",
      h1("Complejo agrícola") + "<p>La planta cubre la carga diurna de las cámaras frigoríficas en temporada.</p>"
    ] },
    "Manual_de_marca.pdf": { d: "20 sept. 2026", s: "6.4 MB", p: [
      hero("Manual de marca", "Logotipo, colores y tipografías de la empresa.") + '<div class="dvband"></div>' + h1("Colores") + '<div class="dvsw"><i style="background:#0086CC"></i><i style="background:#39B54A"></i><i style="background:#FFB800"></i><i style="background:#D62828"></i></div>' + h1("Tipografía") + "<p>Una sola tipografía para todos los documentos: títulos en negrita, texto principal normal.</p>"
    ] },
    "Tarifa_servicios_2026.pdf": { d: "11 oct. 2026", s: "96 KB", p: [
      hero("Tarifa de servicios 2026", "Precios sin IVA, válidos hasta fin de año.") + '<div class="dvband"></div>' + tb([["Servicio", "Precio"], ["Auditoría de consumo", "12 000 UAH"], ["Proyecto FV hasta 100 kW", "45 000 UAH"], ["Proyecto FV de más de 100 kW", "según cálculo"], ["Servicio, año", "desde 30 000 UAH"]])
    ] },
    "Datos_fiscales.pdf": { d: "02 oct. 2026", s: "48 KB", p: [
      hero("Datos fiscales", "Para contratos y facturas.") + '<div class="dvband"></div>' + tb([["Campo", "Valor"], ["Nombre", "TOV «Soniachni Systemy»"], ["Dirección", "Kyiv, c/ Soniachna, 12"], ["Director", "Kateryna Rudenko"]])
    ] },
    "Contrato_Termobud_v3.pdf": { d: "21 oct. 2026", s: "1.4 MB", p: [
      hero("Contrato de obra", "Construcción de una planta solar de 150 kW en el almacén de Brovary.") + '<div class="dvband"></div>' + h1("1. Objeto del contrato") + "<p>El contratista diseña y construye la planta; el cliente acepta los trabajos y los paga.</p>" + h1("2. Plazos") + "<p>El montaje dura seis semanas desde la fecha del anticipo.</p>" + h1("3. Pago") + tb([["Etapa", "Parte"], ["Anticipo", "50%"], ["Suministro de equipos", "30%"], ["Inicio", "20%"]]),
      h1("4. Garantía") + "<p>Garantía de los trabajos: 5 años. De los equipos: según las condiciones del fabricante.</p>" + h1("5. Partes") + "<p>Soniachni Systemy, Termobud.</p>"
    ] },
    "Presentacion_Termobud.pdf": { d: "hoy", s: "4.8 MB", p: [
      hero("Planta solar para Termobud", "Dos variantes para el almacén de Brovary.") + '<div class="dvband"></div>' + tb([["", "Variante A", "Variante B"], ["Potencia", "150 kW", "150 kW + almacenamiento"], ["Retorno", "4,2 años", "5,0 años"]]) + h1("Por qué nosotros") + "<p>Más de 40 obras, cuadrilla propia y servicio tras la puesta en marcha.</p>",
      h1("Siguiente paso") + "<p>Reunión en la obra el jueves a las 10:00.</p>"
    ] },
    "Retorno_FV_150kW.pdf": { d: "18 oct. 2026", s: "210 KB", p: [
      hero("Retorno FV 150 kW", "Cálculo para el almacén de Brovary.") + '<div class="dvband"></div>' + tb([["Indicador", "Valor"], ["Producción anual", "172 000 kWh"], ["Ahorro anual", "1,1 M UAH"], ["Retorno", "4,2 años"]])
    ] }
  };

  // Вікно перегляду: те саме в карусельці й на екрані після кліку
  var viewer = function (n, pageNo) {
    var d = DOCS[n], k = pageNo || 0, total = d.p.length;
    var thumbs = d.p.map(function (p, i) { return '<div class="dvt' + (i === k ? " on" : "") + '" data-pg="' + i + '"><div class="dvth"><div class="dvmini dvpage">' + p + '</div></div><span>' + (i + 1) + '</span></div>'; }).join("");
    return '<div class="dvm" role="dialog" aria-label="' + n + '"><div class="dvh"><div class="dvn"><b>' + n + '</b><small>Vista previa del archivo subido</small></div>'
      + '<span class="dvix"><i></i>Sin indexar</span><span class="dvd">' + L("filetext", 15) + 'Documentos</span><span class="dvo" data-newtab>Abrir en una pestaña nueva' + L("ext", 15) + '</span><span class="dvx" data-close title="Cerrar">' + L("x", 18) + '</span></div>'
      + '<div class="dvv"><div class="dvbar">' + L("menu", 17) + '<b>' + n.replace(/\.pdf$/, "").replace(/_/g, " ") + '</b><span class="dvpn"><u>' + (k + 1) + '</u> / ' + total + '</span><s></s>' + L("minus", 16) + '<span class="dvz"><u>66%</u></span>' + L("plus", 16) + '<s></s>' + L("fit", 16) + L("rotate", 16) + '<em>' + L("down", 16) + L("print", 16) + L("dots", 16) + '</em></div>'
      + '<div class="dvb"><div class="dvside">' + thumbs + '</div><div class="dvmain"><div class="dvpage">' + d.p[k] + '</div></div></div></div></div>';
  };

  // Рядки списку
  var acts = '<em class="ac">' + L("share") + L("down") + L("pen") + L("dots") + "</em>";
  var folder = function (n, tag) { return '<div class="fr2">' + L("folder") + "<span>" + n + "</span>" + (tag ? '<small class="ln">por enlace</small>' : "") + acts + "</div>"; };
  var file = function (n) { var d = DOCS[n]; return '<div class="fr2" data-doc="' + n + '">' + L("file") + "<span>" + n + '</span><i class="ix" title="Sin indexar"></i><small>' + d.d + " (" + d.s + ")</small>" + acts + "</div>"; };
  var bar = function (crumb) { return '<div class="bh"><b>Almacén</b><span class="cmp">Soniachni Systemy</span></div><div class="pg st"><div class="tbr"><span class="cr">' + crumb + '</span><span class="so">' + L("sort", 14) + 'Orden: <b>Última actualización</b></span>' + L("aup", 15) + '<span class="b2">' + L("up", 15) + 'Subir archivos</span><span class="b2">' + L("fup", 15) + 'Subir carpeta</span><span class="b2">' + L("fplus", 15) + "Nueva carpeta</span></div>"; };
  var sep = L("chev", 14, "margin:0 6px;vertical-align:-2px;color:#737373");

  var root = bar("Carpeta raíz") + folder("01_Empresa") + folder("02_Contratos", 1) + folder("03_Finanzas") + folder("04_Comercial") + folder("05_Proyectos") + folder("06_Plantillas") + folder("07_Reuniones") + folder("08_Equipo") + folder("Contrapartes") + "</div>";
  var files = '<div class="ly" data-show="1 2 3 4" style="left:0;right:0;top:0;bottom:0;border:0;border-radius:0;box-shadow:none;display:block;background:#FAFAFA">' + bar("Carpeta raíz" + sep + "01_Empresa")
    + '<div data-hl="1">' + file("Sobre_la_empresa.pdf") + file("Casos_FV.pdf") + file("Manual_de_marca.pdf") + file("Tarifa_servicios_2026.pdf") + file("Datos_fiscales.pdf") + "</div></div></div>";
  var prev = '<div class="pop full" data-show="2"><div class="dvwrap" data-doc="Sobre_la_empresa.pdf">' + viewer("Sobre_la_empresa.pdf") + "</div></div>";
  var mi = function (ic, t, x) { return '<div class="mi' + (x || "") + '">' + L(ic, 15) + "<span>" + t + "</span></div>"; };
  var menu = '<div class="pop" data-show="3" style="right:22px;top:176px;width:230px;padding:6px;box-shadow:0 12px 34px -10px rgba(0,0,0,.3);border:1px solid #E6E6E6"><div data-hl="3">' + mi("down", "Descargar") + mi("pen", "Renombrar") + mi("share", "Compartir") + '<hr class="mh">' + mi("finput", "Mover") + '<div class="mi">' + L("tag", 15) + "<span>Marcar para la memoria</span>" + L("chev", 14, "margin-left:auto") + '</div><hr class="mh">' + mi("trash", "Eliminar", " rd") + "</div></div>";
  var shHead = function (n) { return '<div class="shh"><b>Compartir «' + n + '»</b>' + L("x", 17) + '</div><div class="shs">Quién ve la carpeta y cómo enviarla a alguien sin cuenta en Aita.</div>'; };
  var share = '<div class="pop full" data-show="4"><div class="shd">' + shHead("01_Empresa") + '<b class="sht">Personas con acceso</b><div class="shv" data-hl="4">' + L("lock", 16) + '<span><b>Visibilidad</b><small>Abierta: ven la carpeta todos los que tienen acceso a esta empresa, proyecto o SPV.</small></span><span class="b2">Restringir</span></div><p class="shn">La carpeta está abierta, así que el acceso se hereda de la empresa, el proyecto o la SPV a la que pertenece. Restríngela para dar acceso a equipos o personas concretas.</p><hr class="mh"><b class="sht">Acceso general</b><div class="seg"><span class="on">Solo personas con acceso</span><span>Cualquiera con el enlace</span></div><p class="shn">Solo pueden abrirla las personas a las que se ha dado acceso en Aita.</p><div class="shf"><span class="b2 g">Hecho</span></div></div></div>';
  var link = '<div class="pop full" data-show="5"><div class="shd">' + shHead("02_Contratos") + '<b class="sht">Acceso general</b><div class="seg"><span>Solo personas con acceso</span><span class="on">Cualquiera con el enlace</span></div><div class="shg"><label>Qué puede hacer el destinatario<span>Ver y descargar</span></label><label>Válido<span>30 días</span></label></div><div class="shl" data-hl="5"><span>El enlace se ha abierto 4 veces</span><span class="b2 g">Copiar enlace</span></div><div class="shf"><span class="b2 g">Hecho</span></div></div></div>';
  var hit = function (n, w) { return '<div class="kr" data-doc="' + n + '">' + L("aright", 15) + "<b>" + n + "</b><small>" + w + "</small></div>"; };
  var find = '<div class="pop full" data-show="6"><div class="kd"><div class="kt"><span class="kc">' + L("folder", 13) + 'Almacén</span><small>Ctrl+K busca aquí y en toda la plataforma</small>' + L("x", 16, "margin-left:auto") + '</div><div class="ki">' + L("search", 17) + 'retorno</div><div class="kl"><small>Encontrados: 3</small><div class="kg">Archivos</div><div data-hl="6">' + hit("Retorno_FV_150kW.pdf", "en «Termobud»") + hit("Casos_FV.pdf", "en «01_Empresa»") + '</div><div class="kg">Carpetas</div><div class="kr">' + L("aright", 15) + '<b>Retorno</b></div><div class="kg">Agente</div><div class="kr ag">' + L("spark", 15, "color:#7C3AED") + "<b>Preguntar al agente: retorno</b></div></div></div></div>";
  var en = function (n, w) { return '<div class="en2" data-doc="' + n + '"><span><b>' + n + "</b><small>" + w + "</small></span>" + L("ext", 14) + "</div>"; };
  var ai = '<div class="pop" data-show="7" style="right:24px;top:24px;bottom:24px;width:470px;display:flex;flex-direction:column;overflow:hidden;border:1px solid #E6E6E6"><div class="agh"><i>' + L("spark", 16) + '</i><span><b>Prepara una presentación sobre nosotros…</b><small>Aita</small></span></div><div class="agb"><div class="agq">Prepara una presentación sobre nosotros para Termobud</div><div class="ags">' + L("check", 15) + "Buscando los datos de la empresa</div><div class=\"ags\">" + L("check", 15) + 'Leyendo archivos</div><div class="agc" data-hl="7"><div class="agt"><code>file.create</code>Archivo creado</div>' + en("Presentacion_Termobud.pdf", "04_Comercial · 8 diapositivas") + en("Sobre_la_empresa.pdf", "fuente · 01_Empresa") + en("Casos_FV.pdf", "fuente · 01_Empresa") + '</div><p>La presentación se ha montado con los archivos de la empresa. Pulsa el archivo y se abrirá.</p></div></div>';

  var css = `
.l4 .pg.st,.dvwrap{font-family:inherit}
.l4 .pg.st{padding:18px 22px;background:#FAFAFA;min-height:800px}
.l4 .bh .cmp{background:#F2F2F2;border-radius:999px;padding:2px 10px;font-size:12px;font-weight:500}
.l4 .tbr{display:flex;align-items:center;gap:8px;margin-bottom:14px;font-size:13.5px;color:#171717}.l4 .tbr .cr{margin-right:auto;font-size:14px}.l4 .tbr .so{display:inline-flex;align-items:center;gap:6px;font-size:12.5px;color:#555;margin-right:8px}.l4 .tbr .so b{font-weight:500;color:#171717}
.l4 .b2{display:inline-flex;align-items:center;gap:7px;border:1px solid #E6E6E6;border-radius:8px;padding:6px 12px;font-size:13.5px;font-weight:500;background:#fff;white-space:nowrap}.l4 .b2.g{background:#EEF8EE;border-color:#9FDCAE;color:#14532D}
.l4 .fr2{display:flex;align-items:center;gap:9px;height:40px;padding:0 6px;border-radius:8px;font-size:15px;color:#111827}.l4 .fr2 small{color:#737373;font-size:12.5px}.l4 .fr2 small.ln{background:#EEF8EE;color:#14532D;border-radius:999px;padding:1px 9px;font-size:12px}.l4 .fr2 .ix{width:9px;height:9px;border:1.5px solid #BDBDBD;border-radius:50%;flex:none}.l4 .fr2 .ac{margin-left:auto;display:flex;gap:17px;font-style:normal;color:#111}
.l4 [data-doc],.dvwrap{pointer-events:auto;cursor:pointer}.l4 .fr2[data-doc]:hover{background:#F0F4FA}
.l4 .pop.full{left:0;right:0;top:0;bottom:0;background:rgba(0,0,0,.42);box-shadow:none;border-radius:0;display:flex;justify-content:center;align-items:flex-start;padding-top:44px}
.l4 .mi{display:flex;align-items:center;gap:9px;padding:7px 9px;font-size:14px;border-radius:6px}.l4 .mi.rd{color:#D62828}.l4 .mh,.dvx-none{border:0;border-top:1px solid #EDEDED;margin:6px 0}
.l4 .shd{width:556px;background:#fff;border-radius:10px;padding:20px 20px 16px;font-size:14px;line-height:1.4}.l4 .shh{display:flex;justify-content:space-between;align-items:center}.l4 .shh b{font-size:17px;font-weight:600}.l4 .shs{color:#555;font-size:13px;margin:3px 0 14px}.l4 .sht{display:block;font-weight:600;margin:0 0 8px;font-size:13.5px}.l4 .shv{display:flex;gap:10px;align-items:center;border:1px solid #E6E6E6;border-radius:8px;padding:9px 12px;color:#555}.l4 .shv span:first-of-type{flex:1;min-width:0}.l4 .shv b{display:block;color:#111;font-weight:500;font-size:13.5px}.l4 .shv small{color:#555;font-size:12px}.l4 .shn{color:#737373;font-size:12px;margin:7px 0 10px}.l4 .seg{display:grid;grid-template-columns:1fr 1fr;background:#F2F2F2;border-radius:8px;padding:3px;font-size:13.5px;text-align:center;color:#555}.l4 .seg span{padding:6px;border-radius:6px}.l4 .seg .on{background:#fff;color:#111;font-weight:500}.l4 .shf{text-align:right;margin-top:12px}.l4 .shg{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:12px 0}.l4 .shg label{font-size:12.5px;color:#555}.l4 .shg span{display:block;border:1px solid #E6E6E6;border-radius:8px;padding:7px 10px;color:#111;font-size:13.5px;margin-top:4px}.l4 .shl{display:flex;justify-content:space-between;align-items:center;padding:7px 10px;color:#555;font-size:13.5px}
.l4 .kd{width:420px;background:#fff;border-radius:10px;overflow:hidden;font-size:14px}.l4 .kt{display:flex;align-items:center;gap:7px;padding:10px 12px 4px;color:#737373}.l4 .kt small{font-size:11.5px}.l4 .kc{display:inline-flex;align-items:center;gap:4px;border:1px solid #CDEBD2;background:#EEF8EE;color:#14532D;border-radius:999px;padding:1px 8px;font-size:11.5px}.l4 .ki{display:flex;align-items:center;gap:9px;padding:6px 12px 10px;border-bottom:1px solid #EDEDED;font-size:14.5px}.l4 .kl{padding:8px}.l4 .kl>small{color:#737373;font-size:11.5px;padding:0 6px}.l4 .kg{color:#737373;font-size:12px;padding:8px 6px 3px}.l4 .kr{display:flex;align-items:center;gap:9px;padding:7px 8px;border-radius:6px;color:#555}.l4 .kr b{font-weight:500;color:#171717;font-size:13.5px}.l4 .kr small{margin-left:auto;font-size:11.5px;color:#737373}.l4 .kr.ag{background:#F5F5F5}
.l4 .agh{display:flex;gap:10px;align-items:center;padding:12px 14px;border-bottom:1px solid #EDEDED}.l4 .agh i{width:30px;height:30px;border-radius:8px;background:#EEF8EE;color:#14532D;display:grid;place-items:center}.l4 .agh b{display:block;font-size:14px;font-weight:600}.l4 .agh small{color:#737373;font-size:12px}.l4 .agb{padding:14px;font-size:14px;line-height:1.45;flex:1;overflow:hidden}.l4 .agq{background:#F2F2F2;border-radius:12px;padding:8px 12px;margin:0 0 12px auto;width:fit-content;max-width:85%}.l4 .ags{display:flex;align-items:center;gap:8px;border:1px solid #E6E6E6;border-radius:8px;padding:6px 10px;margin-bottom:6px;font-size:13px;color:#555}.l4 .ags svg{color:#39B54A}.l4 .agc{border:1px solid #E6E6E6;border-radius:10px;padding:8px 10px;margin:8px 0 12px}.l4 .agt{font-size:12.5px;color:#555;margin-bottom:4px}.l4 .agt code{font:11.5px ui-monospace,Menlo,monospace;background:#F2F2F2;border-radius:4px;padding:1px 5px;margin-right:6px}.l4 .en2{display:flex;justify-content:space-between;align-items:center;padding:6px 4px;border-radius:6px;color:#737373}.l4 .en2:hover{background:#F0F4FA}.l4 .en2 b{display:block;color:#171717;font-weight:500;font-size:13.5px}.l4 .en2 small{font-size:12px}
.l4 .w .row{display:flex;align-items:center;gap:8px;padding:5px 0;font-size:13px}.l4 .w .row small{color:#737373;margin-left:auto;font-size:11.5px}.l4 .w .row[data-doc]:hover{color:#0050D6}
.dvm{width:732px;height:700px;background:#fff;border-radius:10px;padding:18px 20px 20px;display:flex;flex-direction:column;box-sizing:border-box;color:#111;font:14px/1.4 "Golos Text",system-ui,sans-serif;text-align:left}
.dvh{display:flex;align-items:center;gap:12px;margin-bottom:14px}.dvn{margin-right:auto;min-width:0}.dvn b{display:block;font-size:14.5px;font-weight:600}.dvn small{color:#737373;font-size:11.5px}.dvix{display:inline-flex;align-items:center;gap:5px;border:1.5px solid #39B54A;border-radius:999px;padding:1px 8px;font-size:11.5px;color:#555;white-space:nowrap}.dvix i{width:7px;height:7px;border:1px solid #9E9E9E;border-radius:50%}.dvd{display:inline-flex;align-items:center;gap:3px;font-size:12.5px;white-space:nowrap}.dvo{display:inline-flex;align-items:center;gap:6px;border:1px solid #E6E6E6;border-radius:6px;padding:6px 10px;font-size:13px;white-space:nowrap;cursor:pointer}.dvx{cursor:pointer;display:grid;place-items:center}
.dvv{flex:1;min-height:0;display:flex;flex-direction:column;background:#525659}.dvbar{height:46px;flex:none;background:#323639;color:#F1F1F1;display:flex;align-items:center;gap:11px;padding:0 14px;font-size:12.5px}.dvbar b{max-width:120px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-weight:500}.dvbar u{text-decoration:none;background:#1F2224;padding:1px 7px;border-radius:2px}.dvbar s{width:1px;height:20px;background:#5F6368}.dvbar em{margin-left:auto;font-style:normal;display:flex;gap:13px}
.dvb{flex:1;min-height:0;display:flex}.dvside{width:230px;flex:none;background:#282A2D;overflow:hidden;padding:14px 0;display:flex;flex-direction:column;align-items:center;gap:12px}.dvt{text-align:center;color:#E8EAED;font-size:12px;cursor:pointer}.dvth{width:88px;height:124px;background:#fff;overflow:hidden;margin:0 auto 5px;outline:4px solid transparent}.dvt.on .dvth{outline-color:#8AB4F8}.dvmini{transform:scale(.2);transform-origin:0 0;width:440px!important;height:620px;box-shadow:none!important}
.dvmain{flex:1;min-width:0;overflow:auto;background:#525659;padding:8px;display:flex;justify-content:center}.dvpage{background:#fff;color:#171717;width:100%;max-width:440px;min-height:620px;padding:28px 32px;box-sizing:border-box;font:11.5px/1.5 "Golos Text",system-ui,sans-serif;box-shadow:0 1px 4px rgba(0,0,0,.4)}.dvpage h3{font-size:20px;font-weight:700;margin:12px 0 4px}.dvpage h4{font-size:13px;font-weight:700;margin:14px 0 4px}.dvpage p{margin:0 0 7px}.dvpage .dvs{color:#555}.dvlogo{font-weight:700;font-size:11px;letter-spacing:.02em}.dvband{height:52px;border-radius:6px;background:linear-gradient(100deg,#EEF4FF,#EEF8EE 55%,#FFF6E2);margin:10px 0}.dvpage table{width:100%;border-collapse:collapse;margin:6px 0}.dvpage th{background:#F5F5F5;text-align:left;font-weight:600;padding:4px 7px}.dvpage td{border-bottom:1px solid #EDEDED;padding:4px 7px}.dvsw{display:flex;gap:6px}.dvsw i{width:60px;height:28px;border-radius:5px}
.dvov{position:fixed;inset:0;z-index:2147483600;background:rgba(0,0,0,.5);display:flex;align-items:center;justify-content:center;padding:16px;box-sizing:border-box}.dvov .dvm{max-width:100%;max-height:100%}
@media(max-width:700px){.dvside{display:none}.dvd,.dvix{display:none}.dvbar b,.dvbar s{display:none}}
`;
  var st = document.createElement("style"); st.textContent = css; document.body.appendChild(st);

  // Відкрити документ на весь екран
  var ov = null;
  var close = function () { if (ov) { ov.remove(); ov = null; } };
  var open = function (n, k) { if (!DOCS[n]) return; close(); ov = document.createElement("div"); ov.className = "dvov"; ov.dataset.name = n; ov.innerHTML = viewer(n, k); document.body.appendChild(ov); };
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
  document.addEventListener("click", function (e) {
    var t = e.target;
    if (ov && ov.contains(t)) {
      if (t === ov || t.closest("[data-close]")) return close();
      var pg = t.closest("[data-pg]"); if (pg) return open(ov.dataset.name, +pg.dataset.pg);
      if (t.closest("[data-newtab]")) { var d = DOCS[ov.dataset.name], u = URL.createObjectURL(new Blob(['<!doctype html><meta charset="utf-8"><title>' + ov.dataset.name + '</title><body style="font:15px/1.5 system-ui;max-width:640px;margin:32px auto;padding:0 16px">' + d.p.join("<hr>")], { type: "text/html" })); window.open(u, "_blank"); }
      return;
    }
    var a = t.closest('a[href^="#doc="]');
    if (a) { e.preventDefault(); e.stopPropagation(); return open(decodeURIComponent(a.getAttribute("href").slice(5))); }
    var s = t.closest('a[href^="#step="]');
    if (s) { e.preventDefault(); var h = document.querySelector('.hs[data-i="' + s.getAttribute("href").slice(6) + '"]'); if (h) { h.scrollIntoView({ block: "center" }); h.click(); } return; }
    var el = t.closest("[data-doc]");
    if (el) { e.preventDefault(); open(el.getAttribute("data-doc")); }
  }, true);

  var row = function (ic, n, s, doc) { return '<div class="row"' + (doc ? ' data-doc="' + doc + '"' : "") + ">" + L(ic, 15) + "<span>" + n + "</span>" + (s ? "<small>" + s + "</small>" : "") + "</div>"; };
  MP({
    name: "Almacén",
    promise: "Todos los documentos de la empresa en un solo lugar",
    lead: "Los archivos están donde el equipo los buscará, y el agente de IA saca de aquí los datos para documentos y presentaciones.",
    hero: root,
    flow: [["file", "Archivo"], ["folder", "Carpeta"], ["lock", "Acceso"], ["link", "Enlace"], ["star", "AI"]],
    diff: [["star", "Datos para la IA", "El agente toma del almacén los datos de la empresa cuando prepara documentos."], ["link", "Sin cuenta", "Puedes compartir una carpeta por enlace con un contratista o un banco."], ["lock", "Acceso a la carpeta", "La restricción se aplica a toda la carpeta, y el enlace no abre los documentos financieros."]],
    steps: [["Carpetas", "La empresa, cada proyecto y cada sociedad vehículo (SPV) tienen sus propias carpetas."], ["Archivos", "Junto al nombre se ven la fecha y el tamaño. Pulsa el archivo y se abrirá."], ["Ver", "El archivo se abre en una ventana de la plataforma, con páginas y zoom."], ["Acciones", "Descargar, renombrar, mover o marcar para la memoria de la plataforma."], ["Acceso", "La carpeta se puede restringir a equipos y personas concretas."], ["Enlace", "La persona abre la carpeta por enlace sin registrarse, y tú decides cuánto tiempo es válido."], ["Búsqueda", "Ctrl+K busca en los nombres de los archivos y en su texto."], ["Agente de IA", "El agente toma datos del almacén y prepara una presentación o un documento."]],
    dim: [],
    scene: root + files + menu + prev + share + link + find + ai,
    ai: [["Memoria", "El asistente tiene en cuenta en sus respuestas los archivos marcados para la memoria.", `<small>Tarifa_servicios_2026.pdf</small><div class="msg">Indexado para la memoria de la plataforma.</div>`],
      ["Documentos", "El agente prepara una presentación o una oferta comercial con los datos de la empresa.", `<small>Petición al agente</small><br>Prepara una oferta para Termobud<div class="msg">Tomo los datos de la carpeta 01_Empresa.</div>`],
      ["Búsqueda", "Pregunta dónde está un archivo y el asistente te enseña la carpeta.", `<small>Petición</small><br>¿Dónde está el contrato con Termobud?<div class="msg">02_Contratos / Termobud.</div>`]],
    more: `<div class="tall"><h3>Subida</h3><div class="w">${row("up", "Arrastra archivos y carpetas a la ventana")}<hr>${row("file", "Sustituir (nueva versión)")}${row("file", "Conservar ambos")}${row("file", "Omitirlos")}</div></div>
      <div><h3>Versiones</h3><div class="w">${row("file", "Contrato_Termobud_v3.pdf", "nueva versión", "Contrato_Termobud_v3.pdf")}</div></div>
      <div><h3>Archivo ZIP</h3><div class="w">${row("zip", "Descargar la carpeta en un solo archivo")}</div></div>
      <div class="tall"><h3>Teléfono</h3><div class="w">${row("phone", "Casos_FV.pdf", "3 de 12", "Casos_FV.pdf")}<hr>${row("down", "Descargar")}${row("share", "Compartir")}${row("ext", "Abrir")}</div></div>
      <div><h3>Archivos del chat</h3><div class="w">${row("chat", "Carpeta Chat", "12")}${row("folder", "Se guardan solos")}</div></div>
      <div><h3>Proyectos y SPV</h3><div class="w">${row("folder", "Termobud", "24")}${row("folder", "SPV Skhid", "9")}</div></div>`,
    access: [["Carpeta abierta", "Por defecto la ven todos los que tienen acceso a la empresa o al proyecto."], ["Carpeta restringida", "La restricción se aplica a la carpeta y a todo su contenido."], ["Enlace", "Las subcarpetas restringidas y los documentos financieros siguen cerrados."]],
    start: [["Carpetas", "Crea carpetas para tu empresa."], ["Archivos", "Sube documentos y datos de la empresa."], ["Acceso", "Restringe las carpetas que no deben ver todos."]],
    faq: [["¿Qué es el módulo «Almacén» y para qué lo necesita una empresa?", "Es el lugar para todos los archivos de la empresa, los proyectos y las SPV, con carpetas, accesos y búsqueda por contenido."], ["¿Cómo usa el almacén el agente de IA?", "El agente lee los archivos a los que tiene acceso y saca de ellos los datos para documentos y presentaciones."], ["¿Se puede compartir una carpeta con alguien sin cuenta?", "Sí. El enlace funciona sin iniciar sesión, y la vigencia la decides tú."], ["¿Qué pasa si adjunto un archivo a una tarea?", "No se crea una copia: la tarea enlaza al archivo del almacén."], ["¿Hay que pagar aparte por el módulo?", "No. «Almacén» está incluido en cada paquete."]],
    final: "Te mostramos cómo reunir los documentos de la empresa en un solo lugar"
  });
})();
