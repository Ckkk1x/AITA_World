// Сторінка модуля «Проєкти». Вигляд скопійовано зі справжньої платформи (проєкт marketing),
// дані — псевдопроєкт «СЕС + BESS, 8,5 МВт» (див. AITA_Site/Проєкти_псевдопроєкт_дані.md), решта демо.
(function () {
  var L = LU;
  var av = function (i, c) { return '<span class="av" style="width:22px;height:22px;font-size:9px;background:' + (c || "#E8F0F7") + '">' + i + "</span>"; };
  // Справжній інтерфейс платформи: копії сторінок у ui_pj/ (збирає energy_mockup/build_ui_pj.py),
  // дані псевдопроєкту підставлено у відкритій сторінці платформи, на платформі нічого не змінено.
  var B = window.PJBOX || {};
  var fr = function (st) { return '<iframe class="pjfr" src="ui_pj/' + st + '.html?v=1611" tabindex="-1" loading="eager"></iframe>'; };
  var hl = function (k, n) { var r = B[k]; return r ? '<div class="pjhl" data-hl="' + n + '" style="left:' + r[0] + 'px;top:' + r[1] + 'px;width:' + r[2] + 'px;height:' + r[3] + 'px"></div>' : ""; };
  // .pjz — обгортка екрана (наближення прибрано на прохання Ліни 16.11, як на інших модулях)
  var sc = function (n, st, h) { return '<div class="pop pg0" data-show="' + n + '"><div class="pjz">' + fr(st) + (h || "") + "</div></div>"; };
  var list = '<div class="pjz">' + fr("list") + hl("list", 0) + "</div>";
  var css = `
.l4 .pjfr{position:absolute;left:0;top:0;width:1240px;height:860px;border:0;background:#FAFAFA;pointer-events:none}
.l4 .pjhl{position:absolute;pointer-events:none;border-radius:12px}.l4 .pjhl.hon{background:rgba(0,80,214,.04)!important}
.l4 .pjz{position:absolute;left:0;top:0;width:1240px;height:860px;transform-origin:0 0;transition:transform .7s cubic-bezier(.2,.7,.2,1)}
.l4 .rcs .sc{overflow:hidden}.l4 .rcs .pop.pg0{overflow:hidden}
@media(prefers-reduced-motion:reduce){.l4 .pjz{transition:none}}
.l4 .pjin .nb{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
`;
  MP({
    name: "Proyectos",
    promise: "Cada planta en una sola ficha: del terreno a la explotación",
    lead: "Las etapas, el dinero, las tareas y los archivos del proyecto están en la ficha, así que el equipo y el inversor miran el mismo sitio.",
    hero: list,
    flow: [["folder", "Proyecto"], ["target", "Etapas"], ["chart", "Dinero"], ["check", "Trabajo"], ["lock", "Acceso"]],
    diff: [["folder", "Una sola ficha", "Tareas, archivos, objetivo y chat están en el proyecto, no en cinco programas."], ["chart", "El dinero al momento", "La TIR, el VAN y el retorno los calcula el modelo financiero; no se introducen a mano."], ["target", "Se ve el camino", "El mapa de trabajo muestra qué está listo y en quién se ha parado."]],
    steps: [["Cartera", "Todas las plantas de la empresa con filtros por tipo, etapa y país. Arriba, la potencia total."], ["Etapas", "La barra muestra dónde está ahora el proyecto y qué viene después: del lead a la explotación."], ["Resumen", "TIR, VAN, CAPEX y retorno en la primera pantalla, y debajo lo que está vencido."], ["Tareas", "Tareas del proyecto con responsable y plazo; las vencidas se ven al momento."], ["DataRoom", "Archivos del proyecto en carpetas: datos de partida, condiciones de conexión, contratos, actas, 3D y documentación."], ["Objetivo", "Los objetivos del proyecto con plazos y estado, junto al trabajo."], ["Chat", "La conversación del proyecto, y Aita crea tareas a partir de ella."], ["Mapa de trabajo", "La receta de la planta divide el camino desde el briefing hasta la explotación en 52 pasos."], ["Permisos", "El inversor, el contratista y el equipo ven exactamente lo que se les ha abierto."]],
    dim: [],
    scene: list + sc(1, "ov", hl("stage", 1)) + sc(2, "ov", hl("kpi", 2)) + sc(3, "tasks", hl("tasks", 3)) + sc(4, "dr", hl("dr", 4)) + sc(5, "goal", hl("goal", 5)) + sc(6, "chat", hl("chat", 6)) + sc(7, "wm", hl("wm", 7)) + sc(8, "adm", hl("inv", 8)),
    css: css,
    ai: [["Estado del proyecto", "El agente te cuenta en qué etapa está la planta y qué la bloquea.", `<small>Petición al agente</small><br>¿Qué bloquea ahora el proyecto?<div class="msg">El contrato EPC no está firmado. Responsable: Oleh Martyniuk.</div>`],
      ["Ficha técnica", "El agente propone valores de la ficha técnica con su fuente, y tú los aceptas.", `<small>Petición al agente</small><br>Rellena la ficha técnica a partir de las condiciones de conexión<div class="msg">Potencia de conexión: 7,2 MW. Fuente: condiciones_conexion.pdf</div>`],
      ["Cartera", "El agente reúne un resumen de todas las plantas de la empresa.", `<small>Petición al agente</small><br>¿Cuántos MW tenemos en RTB?<div class="msg">Un proyecto, 8,5 MW.</div>`]],
    more: `<div class="tall"><h3>Filtros</h3><div class="w">${L.row("filter", "Tipo")}${L.row("compass", "Etapa")}${L.row("globe", "País")}${L.row("users", "Propietario y gestor")}${L.row("pin", "Etiquetas: PPA, 2026, cartera")}</div></div>
      <div><h3>Moneda</h3><div class="w">${L.row("dollar", "Moneda del proyecto o euros")}</div></div>
      <div><h3>Indicadores de madurez</h3><div class="w">${L.row("ccheck", "Terreno, conexión, venta de energía, EPC")}</div></div>
      <div class="tall"><h3>Datos en vivo de la planta</h3><div class="w">${L.row("cloud", "Deye")}${L.row("cloud", "Huawei FusionSolar")}${L.row("cloud", "Sungrow iSolarCloud")}${L.row("clock", "Actualización cada 5 minutos")}</div></div>
      <div><h3>Vista para el cliente</h3><div class="w">${L.row("share", "Planta 3D y CAPEX por enlace")}</div></div>
      <div><h3>Propuestas del agente</h3><div class="w">${L.row("spark", "Valores de la ficha técnica con su fuente")}</div></div>`,
    access: [["Empresa", "El proyecto pertenece a la empresa, y el acceso se da a cada proyecto por separado."], ["Roles", "Propietario, administrador, escritura y lectura."], ["SPV", "Los accesos del proyecto pasan a la SPV, así que el inversor ve sus plantas."]],
    start: [["Proyecto", "Crea un proyecto o convierte un lead ganado."], ["Ficha técnica", "Rellena la ficha técnica tú mismo o encárgasela al agente."], ["Equipo", "Abre el acceso al equipo, al contratista y al inversor."]],
    faq: [["¿Qué es el módulo «Proyectos»?", "Es la ficha de cada planta: etapas, ficha técnica, dinero, trabajo y accesos."], ["¿Se puede mostrar un proyecto al cliente?", "Sí, por enlace: planta 3D, CAPEX y documentos sin cuenta."], ["¿De dónde salen la TIR y el VAN?", "Los calcula el modelo financiero del proyecto; no se introducen a mano."], ["¿Qué es el mapa de trabajo?", "El camino de la planta desde el briefing hasta la puesta en marcha. El agente del proyecto trabaja con él."], ["¿Hay que pagar aparte por el módulo?", "No. «Proyectos» está incluido en cada paquete."]],
    final: "Te mostramos tu proyecto en una ficha de Aita"
  });
  // Блок «Що входить у проєкт»: модулі, які відкриваються з картки, показуємо плитками-посиланнями
  var IN = ["Presupuesto", "Modelo financiero", "Energy Design (diseño 3D)", "Esquema unifilar", "Simulador BESS", "Documentación de proyecto", "Constructor de proyectos", "Cajas de soluciones", "SPV"];
  var addIn = function () {
    var how = [].slice.call(document.querySelectorAll(".l4 section")).filter(function (s) { var h = s.querySelector("h2"); return h && h.textContent.trim() === "Cómo funciona"; })[0];
    if (!how) return setTimeout(addIn, 60);
    if (document.querySelector(".l4 .pjin")) return;
    var s = document.createElement("section"); s.className = "pjin md-next";
    s.innerHTML = '<h2>Qué incluye un proyecto</h2><div class="nb">' + IN.filter(function (k) { return typeof IDX !== "undefined" && IDX[k]; }).map(function (k) { return '<a href="' + modUrl(k) + '"><span class="tile" style="background:' + tint(k) + '">' + icon(k) + "</span><span><b>" + k + "</b><small>" + (D[k] || IDX[k].g) + "</small></span></a>"; }).join("") + "</div>";
    how.parentNode.insertBefore(s, how.nextSibling);
  };
  addIn();

})();
