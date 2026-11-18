// Сторінка модуля «SPV». Вигляд — копія справжньої картки SPV платформи (ui_spv/, збирає energy_mockup/build_ui_spv.py),
// дані вигадані: SPV «Термобуд Енерджі», власник станції СЕС + BESS 8,5 МВт з модуля «Проєкти». На платформі нічого не змінено.
(function () {
  var L = LU, B = window.SPVBOX || {};
  var fr = function (st) { return '<iframe class="pjfr" src="ui_spv/' + st + '.html?v=1611b" tabindex="-1" loading="eager"></iframe>'; };
  var hl = function (k, n) { var r = B[k]; return r ? '<div class="pjhl" data-hl="' + n + '" style="left:' + r[0] + 'px;top:' + r[1] + 'px;width:' + r[2] + 'px;height:' + r[3] + 'px"></div>' : ""; };
  var sc = function (n, st, h) { return '<div class="pop pg0" data-show="' + n + '"><div class="pjz">' + fr(st) + (h || "") + "</div></div>"; };
  var first = '<div class="pjz">' + fr("ov") + hl("stage", 0) + "</div>";
  var css = `
.l4 .pjfr{position:absolute;left:0;top:0;width:1240px;height:860px;border:0;background:#FAFAFA;pointer-events:none}
.l4 .pjhl{position:absolute;pointer-events:none;border-radius:12px}.l4 .pjhl.hon{background:rgba(0,80,214,.04)!important}
.l4 .pjz{position:absolute;left:0;top:0;width:1240px;height:860px;transform-origin:0 0;transition:transform .7s cubic-bezier(.2,.7,.2,1)}
.l4 .rcs .sc{overflow:hidden}.l4 .rcs .pop.pg0{overflow:hidden}
@media(prefers-reduced-motion:reduce){.l4 .pjz{transition:none}}
`;
  MP({
    name: "SPV",
    promise: "Propietarios, firmantes, licencias y pagos de cada SPV en una sola ficha",
    lead: "Cuando un comprador o un banco pide documentos, la empresa los envía desde la ficha en vez de pasarse semanas reuniéndolos con abogados y contables.",
    hero: first,
    flow: [["folder", "Empresa"], ["chart", "Capital"], ["check", "Decisiones"], ["shield", "Licencias"], ["lock", "Inversor"]],
    diff: [["shield", "Licencias en el cálculo", "El simulador BESS tiene en cuenta las licencias de la SPV. Sin precalificación ante el TSO, el cálculo no incluye ingresos del mercado FCR."],
      ["check", "Se sabe quién firma", "La ficha muestra los firmantes y la vigencia de sus poderes, así que la contraparte lo sabe antes del contrato, no después."],
      ["lock", "Cartera del inversor", "Los accesos de los proyectos vinculados pasan a la SPV, así que el inversor ve sus plantas, pagos y documentos."]],
    steps: [["Fases", "La barra de fases muestra dónde está ahora la SPV: constitución, captación de capital, operación o liquidación."],
      ["Plantas", "Las plantas que posee la SPV, con potencia y etapa. Arriba, la potencia total, el CAPEX y la TIR."],
      ["Propietarios", "Las participaciones de los propietarios las calcula la plataforma a partir de las rondas de inversión; no se introducen a mano. Aquí también se ve la operación de venta de una participación."],
      ["Pagos", "Dividendos, devolución de préstamos e intereses con fechas e importes."],
      ["Firmantes", "Quién tiene poder de firma y hasta qué importe. Cuando los poderes vencen, el registro se guarda en el historial."],
      ["Decisiones", "Registro de decisiones del consejo y de la junta general. Los votos se reparten según las participaciones, y para cambios grandes hace falta el 75%."],
      ["Licencias", "Licencias y precalificaciones ante el TSO con número y vigencia. Los estatutos y el extracto del registro se guardan al lado."],
      ["Acceso", "El inversor y el auditor ven la SPV sin poder cambiar datos. El contratista recibe acceso de edición."]],
    dim: [],
    scene: first + sc(1, "pf", hl("pf", 1)) + sc(2, "fin", hl("own", 2)) + sc(3, "find", hl("dist", 3)) + sc(4, "gov", hl("sign", 4)) + sc(5, "gov", hl("dec", 5)) + sc(6, "cmp", hl("lic", 6)) + sc(7, "adm", hl("inv", 7)),
    css: css,
    ai: [["Quién firma", "El agente te dice quién tiene hoy poder de firma y hasta qué importe.", `<small>Petición al agente</small><br>¿Quién puede firmar el contrato EPC?<div class="msg">Oleh Martyniuk, director, de forma individual. El consejo lo aprobó el 05.11.</div>`],
      ["Documentos para el comprador", "El agente reúne estatutos, extracto, composición de propietarios y licencias para que el comprador pueda revisar la SPV.", `<small>Petición al agente</small><br>Reúne los documentos de la SPV para la revisión del comprador<div class="msg">Estatutos, extracto del registro, pacto de socios y cuatro licencias. Falta una valoración actualizada.</div>`],
      ["Mercado FCR", "El agente comprueba las licencias de la SPV antes de calcular los ingresos del almacenamiento.", `<small>Petición al agente</small><br>¿Puede el BESS de 2 MW operar en el mercado FCR?<div class="msg">Sí, la precalificación ante el TSO para FCR está vigente, 2 MW.</div>`]],
    more: `<div class="tall"><h3>Tipo de SPV</h3><div class="w">${L.row("folder", "Financiación de proyecto")}${L.row("users", "Empresa conjunta")}${L.row("building", "Otro fin")}</div></div>
      <div><h3>SPV virtual</h3><div class="w">${L.row("filepen", "Borrador de empresa antes del registro")}</div></div>
      <div><h3>Valoración</h3><div class="w">${L.row("trendup", "Cada valoración se guarda por separado")}</div></div>
      <div class="tall"><h3>Licencias</h3><div class="w">${L.row("ccheck", "Productor, comercializador, trader")}${L.row("ccheck", "Operador de almacenamiento")}${L.row("shield", "Precalificación ante el TSO: FCR, aFRR, mFRR")}${L.row("ccheck", "Agregador y garantías de origen")}</div></div>
      <div><h3>Documentos constitutivos</h3><div class="w">${L.row("folder", "Estatutos y extracto en el Almacén")}</div></div>
      <div><h3>A través del agente</h3><div class="w">${L.row("spark", "El agente gestiona propietarios, rondas y firmantes")}</div></div>`,
    access: [["Empresa", "La SPV pertenece a la empresa que la creó. Se puede pasar a otra empresa junto con sus propietarios."], ["Roles", "Cuatro niveles de acceso: de propietario a solo lectura. La lectura sirve para auditores e inversores."], ["Proyectos", "Cuando un proyecto se vincula a una SPV, sus accesos pasan a la SPV."]],
    start: [["SPV", "Crea una SPV o un borrador virtual antes de registrar la empresa."], ["Plantas", "Vincula los proyectos que posee la SPV."], ["Propietarios", "Añade propietarios, rondas de inversión y firmantes."]],
    faq: [["¿Qué es el módulo «SPV»?", "Es la ficha de la sociedad vehículo a la que pertenecen las plantas. Reúne todo lo que preguntan el banco, el inversor y el comprador."],
      ["¿Qué es una SPV virtual?", "Un borrador de una empresa aún no registrada. Las rondas y los firmantes indican una intención, no un hecho jurídico."],
      ["¿Se puede mostrar la SPV a un inversor?", "Sí. Con acceso de «Lectura», el inversor ve plantas, pagos y documentos, pero no cambia nada."],
      ["¿Para qué están las licencias en la ficha?", "El simulador BESS las tiene en cuenta en el cálculo. Sin precalificación ante el TSO no se cuentan los ingresos del mercado FCR."],
      ["¿Hay que pagar aparte por el módulo?", "No. «SPV» está incluido en cada paquete."]],
    final: "Te mostramos cómo gestionar las SPV de tu empresa en Aita"
  });
})();
