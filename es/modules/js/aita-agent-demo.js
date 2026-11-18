// AI-агент у правому нижньому куті сторінок модулів: кодова копія вікна з платформи.
// Запитання й відповіді готові, із сервером нічого не обмінюється. Демо-дані вигадані.
(function () {
  var mod = window.AITA_M || "";
  var P = { pg: "plugins", gp: "user-groups", pr: "products", od: "orders", sl: "contractor", mk: "work-market", fn: "finance", ct: "contracts", pl: "planning", st2: "weekly-summary", sb: "business-plans", sr: "progress-review", sv: "vision", so: "overview", ml: "mail", ib: "queue", cl: "calendar", db: "dashboard", kb: "knowledge-base", gl: "goals", dc: "decisions", ch: "chat", dr: "drafts", as: "my-questions", nt: "notes", mt: "meeting-notes", leads: "leads", tasks: "tasks", cont: "contacts", org: "organizations", st: "storage", cp: "competitors", net: "network", co: "companies" };

  // chip: підпис кнопки; q: повне запитання; mem: скільки спогадів; steps: дії агента; tool: картки-посилання; a: відповідь блоками
  var QA = {
    "SPV": [
      { chip: "Quién firma", ic: "s", q: "¿Quién puede firmar el contrato EPC en nombre de Termobud Energy?", mem: 4, steps: ["Leyendo la ficha de la SPV", "Comprobando las decisiones del consejo"], tool: { k: "spv.signatories", t: "Firmantes", e: [["Oleh Martyniuk", "Director · firma única · desde 01.02.2026", "#step=4"], ["Iryna Tkach", "Directora financiera · hasta 50 000 €", "#step=4"]] }, a: ["Firma <b>Oleh Martyniuk</b>, director, con firma única. El consejo aprobó el contrato EPC el 05.11.", "Iryna Tkach solo firma documentos de hasta 50 000 €, así que no puede firmar el contrato EPC."] },
      { chip: "Documentos para el comprador", ic: "z", q: "Reúne los documentos de la SPV para la revisión del comprador", mem: 9, steps: ["Leyendo los documentos constitutivos", "Comprobando las licencias", "Leyendo la tabla de capitalización"], tool: { k: "spv.documents", t: "Documentos de la SPV", e: [["Estatutos", "Versión n.º 2 · 30.09.2026", "#step=6"], ["Extracto del registro", "A fecha de 01.11.2026", "#step=6"], ["Pacto de accionistas", "Termobud · Green Invest Fund", "#step=6"]] }, a: ["He reunido los estatutos, el extracto del registro, el pacto de accionistas, la composición de propietarios (70 y 30 %) y cuatro licencias.", "<b>Falta</b> una valoración actualizada: la última se hizo antes de la ronda Series A."] },
      { chip: "Mercado FCR", ic: "c", q: "¿Puede una BESS de 2 MW operar en el mercado FCR?", mem: 3, steps: ["Leyendo las licencias de la SPV"], tool: { k: "spv.licenses", t: "Licencias", e: [["Precalificación TSO · FCR", "Activa · 2 MW", "#step=6"], ["Precalificación TSO · aFRR", "En curso · presentada el 20.10.2026", "#step=6"]] }, a: ["Sí. La precalificación del TSO para FCR está vigente para 2 MW, así que el simulador BESS tendrá en cuenta estos ingresos.", "En el mercado aFRR todavía no: la solicitud se presentó el 20.10 y aún no hay decisión."] }
    ],    "Proyectos": [
      { chip: "Estado del proyecto", ic: "s", q: "¿Qué bloquea ahora FV + BESS 8,5 MW?", mem: 7, steps: ["Leyendo la ficha del proyecto", "Comprobando las tareas"], tool: { k: "task.list", t: "Tareas vencidas", e: [["Contrato EPC con EnergoMontazh", "Oleh Martyniuk · vencida hace 6 días", "#step=3"], ["Pedir transformador de 7,2 MW", "Roman Boiko · vencida hace 6 días", "#step=3"]], more: "Y 3 más: abrir todas las tareas", href: "#step=3" }, a: ["El proyecto está en la etapa <b>Ready to build</b>, pero la obra no empezará sin el contrato EPC. Responsable: <b>Oleh Martyniuk</b>.", "El pedido del transformador espera ese mismo contrato, así que es un solo nudo, no dos."] },
      { chip: "Dinero del proyecto", ic: "z", q: "¿Se amortizará la planta?", mem: 4, steps: ["Leyendo el modelo financiero"], a: ["Según el modelo financiero: TIR <b>18,6 %</b>, VAN <b>4,1 M€</b>, CAPEX <b>8,4 M€</b>. Retorno en <b>4,6 años</b>.", "Las cifras las ha calculado el modelo; nadie las ha introducido a mano."] },
      { chip: "Abrir al inversor", ic: "c", q: "Abre el proyecto en modo lectura al inversor Green Invest Fund", mem: 3, steps: ["Comprobando los accesos", "Preparando la invitación"], tool: { k: "access.grant", t: "Acceso", e: [["Green Invest Fund", "Lectura · FV + BESS 8,5 MW", "#step=8"]] }, a: ["El inversor verá el resumen, las finanzas y los documentos, pero no podrá cambiar nada. Confirma y le enviaré la invitación."] }
    ],    "Leads": [
      { chip: "Mostrar leads", ic: "s", q: "Muestra todos los leads activos", mem: 12, steps: ["Buscando leads", "Leyendo las etapas del embudo"], tool: { k: "entity.list", t: "Lista de leads", e: [["Andrii Melnyk", "Ventas FV · Negociación", P.leads], ["Kateryna Rudenko", "Ventas FV · Demo", P.leads], ["Nataliia Melnyk", "Ventas FV · Primer contacto", P.leads]], more: "Y 4 más: abrir la lista completa", href: P.leads },
        a: ["<b>Etapa «Negociación»</b><ul><li><b>Andrii Melnyk</b> (Termobud): propuesta con dos opciones antes del viernes.</li></ul><b>Etapa «Demo»</b><ul><li><b>Kateryna Rudenko</b> (Energobud Service): caliente, reunión el 22.10 a las 12:00.</li><li><b>Viktor Savchuk</b> (Dnipro Agro): espera la segunda presentación.</li></ul>", "<b>Nota:</b> los leads en la etapa «Nuevo lead» aún no están cualificados, así que no los cuento como activos."] },
      { chip: "Resumen de leads", ic: "z", q: "Dame un resumen de los últimos leads", mem: 9, steps: ["Buscando leads", "Leyendo las últimas llamadas"], a: ["Esta semana han entrado 3 leads y uno ha pasado a la etapa «Negociación».<ul><li><b>Andrii Melnyk</b>: propuesta antes del viernes; el director compara otras 2 propuestas.</li><li><b>Nataliia Melnyk</b>: el siguiente contacto era ayer, está vencido.</li><li><b>Ihor Petrenko</b>: nueva solicitud desde la web.</li></ul>", "<b>Qué hacer:</b> llamar a Nataliia y enviar la propuesta a Termobud. Si quieres, leo las notas de cualquiera de estos leads."] },
      { chip: "Crear lead", ic: "c", q: "Crea un lead para Termobud en el embudo Socios", mem: 3, steps: ["Buscando el contacto", "Creando el lead"], tool: { k: "entity.create", t: "Lead creado", e: [["Termobud: alianza", "Socios · Nuevo lead", P.leads]] }, a: ["Listo. El contacto <b>Andrii Melnyk</b> ya estaba en la base, así que el lead se ha vinculado a él en lugar de crear un contacto nuevo."] }
    ],
    "Tareas": [
      { chip: "Mostrar tareas", ic: "s", q: "Muestra mis tareas abiertas", mem: 7, steps: ["Buscando tareas"], tool: { k: "task.list", t: "Lista de tareas", e: [["Termobud: propuesta con dos opciones", "In Progress · High · hasta el viernes", P.tasks], ["Termobud: visita a la obra y medición de la cubierta", "To Do · Medium · 23.10", P.tasks], ["Alfa Merezhi: actualizar la especificación", "To Do · Low", P.tasks]], more: "Y 2 más: abrir el tablero", href: P.tasks }, a: ["Tienes 5 tareas abiertas, una con plazo esta semana.", "<b>Lo más urgente:</b> la propuesta para Termobud, porque bloquea la reunión en la obra."] },
      { chip: "Qué está bloqueado", ic: "z", q: "¿Qué está bloqueado ahora?", mem: 5, steps: ["Buscando tareas", "Comprobando las relaciones"], tool: { k: "task.relations", t: "Relaciones entre tareas", e: [["Acordar el precio del equipo", "Blocked · Critical · vencida hace 3 días", P.tasks]] }, a: ["<b>La cadena:</b> sin el precio del equipo no hay propuesta, y sin propuesta no hay reunión en la obra.", "Si quieres, le escribo a Oleh en el chat de la tarea."] },
      { chip: "Crear tarea", ic: "c", q: "Asigna a Iryna una tarea: propuesta para Termobud antes del viernes", mem: 4, steps: ["Buscando a la persona", "Creando la tarea"], tool: { k: "task.create", t: "Tarea creada", e: [["Termobud: propuesta con dos opciones", "Iryna Tkach · hasta el viernes", P.tasks]] }, a: ["La tarea está creada y vinculada al lead Termobud. Iryna recibirá una notificación."] }
    ],
    "Contactos": [
      { chip: "Buscar contacto", ic: "s", q: "Busca a Andrii Melnyk", mem: 8, steps: ["Buscando contactos"], tool: { k: "contact.list", t: "Contactos", e: [["Andrii Melnyk", "Termobud · subdirector", P.cont]] }, a: ["<b>Andrii Melnyk</b> está en dos embudos:<ul><li><b>Ventas FV:</b> etapa «Negociación».</li><li><b>Socios:</b> etapa «Primer contacto».</li></ul>"] },
      { chip: "De qué se habló", ic: "z", q: "¿De qué hablamos con Andrii la última vez?", mem: 11, steps: ["Buscando el contacto", "Leyendo las grabaciones de reuniones"], tool: { k: "meeting.list", t: "Reuniones", e: [["Termobud - Aita", "20 oct. · grabación lista · 42 min", P.cont]] }, a: ["El 20 de octubre acordamos lo siguiente:<ul><li>Propuesta con dos opciones antes del viernes.</li><li>Reunión en la obra el jueves a las 10:00.</li></ul>", "El director compara otras dos propuestas, así que importa el retorno."] },
      { chip: "Crear contacto", ic: "c", q: "Añade a Pavlo Hnatiuk de Termobud, ingeniero", mem: 2, steps: ["Buscando la organización", "Creando el contacto"], tool: { k: "contact.create", t: "Contacto creado", e: [["Pavlo Hnatiuk", "Termobud · ingeniero", P.cont]] }, a: ["El contacto está creado y vinculado a la organización <b>Termobud</b>."] }
    ],
    "Organizaciones": [
      { chip: "Buscar organización", ic: "s", q: "Muestra todos los clientes", mem: 6, steps: ["Buscando organizaciones"], tool: { k: "org.list", t: "Organizaciones", e: [["Termobud", "Construcción · 3 contactos", P.org], ["Energobud Service", "Energía · 1 contacto", P.org], ["Agro Zakhid", "Agricultura · 1 contacto", P.org]] }, a: ["Tienes 3 clientes. <b>Termobud</b> es el que tiene más contactos."] },
      { chip: "Quién decide", ic: "z", q: "¿Quién decide en Termobud?", mem: 7, steps: ["Leyendo la ficha de la organización"], tool: { k: "contact.list", t: "Contactos de la organización", e: [["Olena Sydorenko", "Directora · toma decisiones", P.cont], ["Andrii Melnyk", "Subdirector · toma decisiones", P.cont]] }, a: ["Deciden dos personas. La parte técnica del proyecto la lleva <b>Andrii Melnyk</b>."] },
      { chip: "Crear organización", ic: "c", q: "Añade la organización Logist Plus, cliente", mem: 1, steps: ["Comprobando duplicados", "Creando la organización"], tool: { k: "org.create", t: "Organización creada", e: [["Logist Plus", "Rol: cliente", P.org]] }, a: ["Listo. Esta organización aún no estaba en la base."] }
    ],
    "Chat": [
      { chip: "Novedades", ic: "s", q: "¿Qué me he perdido hoy en los chats?", mem: 6, steps: ["Leyendo los chats", "Buscando menciones"], tool: { k: "chat.rooms", t: "Chats", e: [["Task · Propuesta para Termobud", "3 mensajes nuevos", P.ch], ["Oleh Martyniuk", "El agente de Oleh espera respuesta", P.ch]] }, a: ["Dos chats te esperan. <b>El agente de Oleh</b> pide dos líneas sobre la reunión con Termobud."] },
      { chip: "Decisiones", ic: "z", q: "¿Qué decisiones esperan confirmación?", mem: 4, steps: ["Leyendo los acuerdos de las reuniones"], tool: { k: "decision.list", t: "Acuerdos", e: [["Reparto 15/85 hasta 400 mil €", "De una reunión · espera confirmación", P.ch]] }, a: ["Un acuerdo espera confirmación. Puedes hacerlo directamente en el chat."] },
      { chip: "Escribir al equipo", ic: "c", q: "Escribe a Iryna que la propuesta hace falta antes del viernes", mem: 2, steps: ["Buscando a la persona", "Preparando el mensaje"], tool: { k: "chat.send", t: "Borrador", e: [["Iryna Tkach", "La propuesta para Termobud hace falta antes del viernes", P.ch]] }, a: ["El borrador está listo. ¿Lo envío?"] }
    ],
    "Borradores": [
      { chip: "Mis documentos", ic: "s", q: "¿Qué documentos esperan mi revisión?", mem: 3, steps: ["Buscando documentos"], tool: { k: "draft.list", t: "Documentos", e: [["Propuesta Termobud: texto y tabla", "2 comentarios · 1 sugerencia", P.dr]] }, a: ["Un documento te espera."] },
      { chip: "Cambios abiertos", ic: "z", q: "¿Qué queda pendiente en la propuesta para Termobud?", mem: 5, steps: ["Leyendo el documento"], tool: { k: "draft.get", t: "Documento", e: [["Propuesta Termobud: texto y tabla", "Comentario de Oleh · plazos de montaje", P.dr]] }, a: ["Queda una pregunta sobre los plazos de montaje."] },
      { chip: "Sugerir un cambio", ic: "c", q: "Acorta el segundo párrafo", mem: 2, steps: ["Leyendo el documento", "Preparando la sugerencia"], tool: { k: "draft.suggest", t: "Sugerencia", e: [["Propuesta Termobud: texto y tabla", "Espera tu aprobación", P.dr]] }, a: ["He preparado la sugerencia; el texto no lo he cambiado."] }
    ],
    "Mis preguntas": [
      { chip: "Quién no ha respondido", ic: "s", q: "¿Quién no ha respondido aún a mis preguntas?", mem: 3, steps: ["Buscando preguntas"], tool: { k: "ask.list", t: "Preguntas", e: [["¿Está listo el presupuesto para Termobud?", "Iryna Tkach · hasta el 7 nov.", P.as], ["¿Hay inversores en el almacén?", "Roman Boiko · hasta el 8 nov.", P.as]] }, a: ["Esperamos dos respuestas."] },
      { chip: "Me preguntan", ic: "z", q: "¿Qué me preguntan a mí?", mem: 2, steps: ["Buscando preguntas"], tool: { k: "ask.list", t: "Preguntas", e: [["¿Vamos a la obra el jueves?", "Agente de Oleh · hoy hasta las 20:15", P.as]] }, a: ["Una pregunta con plazo hoy."] },
      { chip: "Preguntar a un compañero", ic: "c", q: "Pregunta a Iryna si el presupuesto está listo, espera un día", mem: 2, steps: ["Buscando a la persona", "Creando la pregunta"], tool: { k: "ask.create", t: "Pregunta enviada", e: [["¿Está listo el presupuesto?", "Iryna Tkach · 1 día", P.as]] }, a: ["Pregunta enviada. Verás la respuesta en la tarea."] }
    ],
    "Notas": [
      { chip: "Buscar una nota", ic: "s", q: "¿Dónde está la nota sobre la cubierta del almacén?", mem: 2, steps: ["Buscando notas"], tool: { k: "note.list", t: "Notas", e: [["Revisión de la cubierta del almacén", "Hoy, 10:46", P.nt]] }, a: ["He encontrado la nota con la checklist y las fotos."] },
      { chip: "Qué hay en las notas", ic: "z", q: "¿Qué tenía previsto revisar en la obra?", mem: 3, steps: ["Leyendo la nota"], a: ["En la checklist quedan dos puntos abiertos:<ul><li>Estado de la cubierta y la impermeabilización.</li><li>Sitio para los inversores.</li></ul>"] },
      { chip: "Tomar una nota", ic: "c", q: "Toma nota: visita el jueves a las 10:00", mem: 1, steps: ["Creando la nota"], tool: { k: "note.create", t: "Nota creada", e: [["Visita el jueves", "Añadida a la cola", P.nt]] }, a: ["Listo. La nota ya está en la cola."] }
    ],
    "Notas de reuniones": [
      { chip: "Qué se decidió", ic: "s", q: "¿Qué se decidió en la reunión de ayer?", mem: 9, steps: ["Buscando la reunión", "Leyendo el resumen"], tool: { k: "meeting.get", t: "Reunión", e: [["Termobud - Aita", "42 min 18 s · 4 decisiones · 5 tareas", P.mt]] }, a: ["Se acordó lo siguiente:<ul><li>Propuesta en dos opciones.</li><li>Visita a la obra el jueves a las 10:00.</li></ul>"] },
      { chip: "Mis tareas", ic: "z", q: "¿Qué tengo que hacer después de la reunión?", mem: 5, steps: ["Leyendo las tareas de la reunión"], tool: { k: "meeting.get", t: "Tareas de la reunión", e: [["Acordar la fecha de la visita a la obra", "Kateryna Rudenko", P.mt]] }, a: ["Tienes un punto pendiente. ¿Creo la tarea?"] },
      { chip: "Grabar reunión", ic: "c", q: "Graba esta reunión", mem: 1, steps: ["Comprobando el enlace", "Iniciando la grabación"], tool: { k: "meeting.start", t: "Grabación", e: [["Termobud - Aita", "El notetaker se une en un minuto", P.mt]] }, a: ["El notetaker se unirá en un minuto aproximadamente con el nombre Aita Notetaker."] }
    ],
    "Registro de decisiones": [
      { chip: "Buscar una decisión", ic: "s", q: "¿Qué se decidió sobre el anticipo?", mem: 7, steps: ["Buscando en el registro"], tool: { k: "decision.list", t: "Decisiones", e: [["El montaje empieza solo tras un anticipo del 50 %", "Vigente · evidencia A · revisión 29 ene.", P.dc]] }, a: ["La decisión está vigente. Motivo: sin anticipo, el contratista no reserva la cuadrilla."] },
      { chip: "Qué está pendiente", ic: "z", q: "¿Qué espera confirmación?", mem: 4, steps: ["Leyendo la cola"], tool: { k: "decision.list", t: "Cola", e: [["Orientamos la publicidad a empresas de ingeniería", "Pendiente · evidencia C", P.dc], ["La opción con almacenamiento la mostramos en segundo lugar", "Pendiente · evidencia B", P.dc]] }, a: ["Dos registros te esperan."] },
      { chip: "Registrar una decisión", ic: "c", q: "Registra la decisión: anticipo del 50 %, porque reservamos la cuadrilla con antelación", mem: 3, steps: ["Comprobando duplicados", "Creando el registro"], tool: { k: "decision.create", t: "Registro creado", e: [["El montaje empieza solo tras un anticipo del 50 %", "Revisión en 90 días", P.dc]] }, a: ["La decisión está registrada con su motivo. La revisión será dentro de 90 días."] }
    ],
    "Objetivos": [
      { chip: "Mostrar objetivos", ic: "s", q: "Muestra nuestros objetivos", mem: 6, steps: ["Leyendo los objetivos"], tool: { k: "goal.list", t: "Objetivos", e: [["Cerrar 20 proyectos FV", "Confianza 70 % · según el plan", P.gl], ["Reducir el montaje a cinco semanas", "Confianza 30 % · en riesgo", P.gl]] }, a: ["Hay 7 objetivos activos. Uno está en riesgo: los plazos de montaje."] },
      { chip: "Qué está en riesgo", ic: "z", q: "¿Qué objetivos están en riesgo?", mem: 4, steps: ["Leyendo los resultados clave"], a: ["<b>Reducir el montaje a cinco semanas:</b> ahora son seis y media, y queda un mes de plazo."] },
      { chip: "Actualizar resultado", ic: "c", q: "Actualiza el resultado: 14 plantas puestas en marcha", mem: 2, steps: ["Buscando el resultado", "Introduciendo el valor"], tool: { k: "kr.checkin", t: "Actualización", e: [["Plantas puestas en marcha", "13 → 14 de 20", P.gl]] }, a: ["Resultado actualizado."] }
    ],
    "Base de conocimiento": [
      { chip: "Buscar un procedimiento", ic: "s", q: "¿Qué llevo a la visita de obra?", mem: 5, steps: ["Buscando en la base de conocimiento"], tool: { k: "kb.search", t: "Páginas", e: [["Visita a la obra", "Montaje · Procedimientos", P.kb]] }, a: ["Cinta métrica, telémetro y dron. Antes de ir, avisa a seguridad."] },
      { chip: "Qué está desactualizado", ic: "z", q: "¿Qué páginas toca revisar?", mem: 3, steps: ["Comprobando las fechas de revisión"], tool: { k: "kb.search", t: "Páginas", e: [["Seguridad en la cubierta", "La revisión venció hace 3 días", P.kb]] }, a: ["Una página espera revisión. Roman ya tiene el recordatorio."] },
      { chip: "Escribir una página", ic: "c", q: "Prepara la checklist de entrega de la planta", mem: 4, steps: ["Leyendo los procedimientos", "Creando la página"], tool: { k: "kb.create", t: "Página creada", e: [["Checklist de entrega de la planta", "Montaje · Checklists", P.kb]] }, a: ["La página está creada. Revísala antes de publicarla para el equipo."] }
    ],
    "Panel": [
      { chip: "Resumen del día", ic: "s", q: "¿Qué es urgente hoy?", mem: 8, steps: ["Leyendo las tareas"], tool: { k: "task.list", t: "Tareas", e: [["Termobud: propuesta con dos opciones", "Vencida: 2 d", P.tasks]] }, a: ["Dos tareas críticas. Empieza por la propuesta, porque sin ella no hay reunión."] },
      { chip: "Estado de la cartera", ic: "z", q: "¿Cómo está la cartera?", mem: 3, steps: ["Leyendo los proyectos"], a: ["17 proyectos, 5 en explotación, CAPEX de la cartera 4,1 M$."] },
      { chip: "A quién llamar", ic: "c", q: "¿A quién llamo hoy?", mem: 5, steps: ["Leyendo los leads"], tool: { k: "entity.list", t: "Leads", e: [["Nataliia Melnyk", "El siguiente contacto era ayer", P.leads]] }, a: ["Empieza por Nataliia: el contacto está vencido."] }
    ],
    "Calendario": [
      { chip: "Qué hay hoy", ic: "s", q: "¿Qué reuniones tengo hoy?", mem: 4, steps: ["Leyendo el calendario"], tool: { k: "event.list", t: "Eventos", e: [["Termobud - Aita", "15:00 · en línea · vendrá el notetaker", P.cl]] }, a: ["Hoy tienes una reunión con un cliente a las 15:00."] },
      { chip: "Tiempo libre", ic: "z", q: "Busca una hora para mí, Oleh e Iryna", mem: 2, steps: ["Comprobando los calendarios"], a: ["Hueco común: martes, 14:00–15:00."] },
      { chip: "Programar reunión", ic: "c", q: "Programa una reunión con Termobud el jueves a las 10:00", mem: 3, steps: ["Buscando el lead", "Creando el evento"], tool: { k: "event.create", t: "Evento creado", e: [["Visita a la obra", "Jueves, 10:00 · vinculado al lead", P.cl]] }, a: ["El evento está creado y vinculado al lead Termobud."] }
    ],
    "Cola": [
      { chip: "Qué hay en la cola", ic: "s", q: "¿Qué tengo en la cola?", mem: 5, steps: ["Leyendo la cola"], tool: { k: "inbox.queue", t: "Cola", e: [["Termobud: solicitud de una segunda opción de la propuesta", "Requiere decisión", P.ib], ["Bank Skhid: documentos", "Requiere decisión", P.ib]] }, a: ["Dos correos esperan tu decisión; otro ya lo ha procesado el agente."] },
      { chip: "Resumen de la noche", ic: "z", q: "¿Qué ha pasado esta noche?", mem: 3, steps: ["Leyendo el registro del agente"], a: ["El agente ha filtrado 23 correos, ha hecho 11 acciones y 2 te esperan."] },
      { chip: "Crear tarea", ic: "c", q: "Convierte este correo en una tarea para Iryna", mem: 2, steps: ["Leyendo el correo", "Creando la tarea"], tool: { k: "task.create", t: "Tarea creada", e: [["Termobud: segunda opción de la propuesta", "Iryna Tkach · hasta el viernes", P.tasks]] }, a: ["Tarea creada. Puedes deshacerlo en las próximas 24 horas."] }
    ],
    "Correo": [
      { chip: "Buscar un correo", ic: "s", q: "¿Dónde está el correo del banco?", mem: 3, steps: ["Buscando en el correo"], tool: { k: "inbox.search", t: "Correos", e: [["Bank Skhid: documentos para el crédito", "Hoy, 8:40", P.ml]] }, a: ["Correo de hoy a las 8:40: piden los informes de tres trimestres."] },
      { chip: "Resumir", ic: "z", q: "Resume la correspondencia con Termobud", mem: 6, steps: ["Leyendo la correspondencia"], a: ["El cliente pide una segunda opción de la propuesta antes del viernes y ha enviado el esquema de la cubierta."] },
      { chip: "Redactar respuesta", ic: "c", q: "Redacta una respuesta a Andrii", mem: 4, steps: ["Leyendo la correspondencia", "Preparando el borrador"], tool: { k: "inbox.draft", t: "Borrador", e: [["Respuesta a Andrii Melnyk", "Pendiente de envío", P.ml]] }, a: ["El borrador está listo. El envío lo haces tú."] }
    ],
    "Almacén": [
      { chip: "Buscar un archivo", ic: "s", q: "¿Dónde está el contrato con Termobud?", mem: 5, steps: ["Buscando en el almacén"], tool: { k: "file.search", t: "Archivos", e: [["Contrato_Termobud_v3.pdf", "02_Contratos / Termobud", "#doc=Contrato_Termobud_v3.pdf"]] }, a: ["El archivo está en la carpeta <b>02_Contratos / Termobud</b>. Es la tercera versión, del 21 de octubre."] },
      { chip: "Qué hay en el enlace", ic: "z", q: "¿Qué carpetas están abiertas por enlace?", mem: 3, steps: ["Leyendo los accesos"], tool: { k: "folder.list", t: "Carpetas", e: [["02_Contratos", "Cualquiera con el enlace · válido 30 días", "#step=5"]] }, a: ["Hay una carpeta abierta por enlace. Se ha abierto 4 veces."] },
      { chip: "Preparar presentación", ic: "c", q: "Prepara una presentación sobre nosotros para Termobud", mem: 14, steps: ["Buscando los datos de la empresa", "Leyendo los archivos", "Montando la presentación"], tool: { k: "file.create", t: "Archivo creado", e: [["Presentacion_Termobud.pdf", "04_Comercial · 8 diapositivas", "#doc=Presentacion_Termobud.pdf"], ["Sobre_la_empresa.pdf", "fuente · 01_Empresa", "#doc=Sobre_la_empresa.pdf"], ["Casos_FV.pdf", "fuente · 01_Empresa", "#doc=Casos_FV.pdf"]] }, a: ["Los datos salen de los archivos <b>Sobre_la_empresa.pdf</b>, <b>Casos_FV.pdf</b> y <b>Manual_de_marca.pdf</b>.", "Revisa la diapositiva de precios: conviene aprobarla antes de enviarla."] }
    ],
    "Competidores": [
      { chip: "Mostrar competidores", ic: "s", q: "¿Quién es la mayor amenaza?", mem: 4, steps: ["Leyendo el registro de competidores"], tool: { k: "competitor.list", t: "Competidores", e: [["EnergyDesk", "Amenaza: alta · 12 M€", P.cp], ["Volta Suite", "Amenaza: alta · 28 M€", P.cp]] }, a: ["Dos competidores suponen una amenaza alta. <b>EnergyDesk</b> aparece más a menudo en tus leads."] },
      { chip: "Comparar con nosotros", ic: "z", q: "¿En qué es EnergyDesk más fuerte que nosotros?", mem: 6, steps: ["Leyendo la tabla comparativa"], a: ["EnergyDesk va por delante en dos filas:<ul><li><b>Almacén y repuestos.</b></li><li><b>App para instaladores.</b></li></ul>", "<b>Tus puntos fuertes:</b> el modelo financiero y la transcripción de llamadas."] },
      { chip: "Añadir competidor", ic: "c", q: "Añade el competidor energydesk.example", mem: 1, steps: ["Leyendo la web", "Creando la ficha"], tool: { k: "competitor.create", t: "Ficha creada", e: [["EnergyDesk", "Externo · datos de la web", P.cp]] }, a: ["La ficha está creada. Revisa los datos: la IA puede equivocarse."] }
    ],
    "Red": [
      { chip: "Buscar una persona", ic: "s", q: "¿A quién tenemos de montaje?", mem: 5, steps: ["Buscando en la red"], tool: { k: "network.search", t: "Personas", e: [["Dmytro Tkach", "Technopark · Proyecto, Acuerdo", P.net], ["Roman Boiko", "Soniachni Systemy · Equipo", P.net]] }, a: ["<b>Dmytro Tkach</b> ya ha trabajado contigo en un proyecto, así que conviene empezar por él."] },
      { chip: "De qué lo conozco", ic: "z", q: "¿De qué conozco a Andrii Melnyk?", mem: 8, steps: ["Buscando en la red"], tool: { k: "network.search", t: "Personas", e: [["Andrii Melnyk", "Termobud · CRM", P.cont]] }, a: ["Andrii está en tu CRM: es un contacto de Termobud. Aún no se ha registrado en la plataforma, así que no se le puede escribir por chat."] },
      { chip: "Buscar un socio", ic: "c", q: "Busca una empresa de montaje en Lviv", mem: 2, steps: ["Buscando entre las personas de la plataforma"], tool: { k: "profile.search", t: "Personas", e: [["Tetiana Shevchuk", "Montazh Sontse · directora de montaje", P.net]] }, a: ["En Lviv hay una persona. ¿Le escribo un mensaje?"] }
    ],
    "Empresas": [
      { chip: "Buscar una empresa", ic: "s", q: "Busca una empresa de montaje en Ucrania", mem: 3, steps: ["Buscando empresas"], tool: { k: "company.search", t: "Empresas", e: [["Montazh Sontse", "UA · Lviv · verificada · 14 proyectos", P.co], ["Svitlo Pro", "UA · Vinnytsia · verificada", P.co]] }, a: ["Encajan dos empresas. <b>Montazh Sontse</b> estuvo activa hace 2 días."] },
      { chip: "Quién está activo", ic: "z", q: "¿Quién está activo esta semana?", mem: 2, steps: ["Buscando empresas"], tool: { k: "company.search", t: "Empresas", e: [["Montazh Sontse", "hace 2 días", P.co], ["GreenBud", "hace 3 días", P.co]] }, a: ["Esta semana hay dos empresas activas."] },
      { chip: "Invitar a una reunión", ic: "c", q: "¿Cómo invito a Montazh Sontse a una reunión?", mem: 1, steps: ["Leyendo el perfil de la empresa"], tool: { k: "company.get", t: "Empresa", e: [["Montazh Sontse", "Proponer reunión", P.co]] }, a: ["En el perfil, pulsa «Proponer reunión». La reunión se celebrará cuando la empresa la confirme."] }
    ]
  };
  var desc = (typeof D !== "undefined" && D[mod]) || "";
  var general = [
    { chip: "Qué hace el módulo", ic: "s", q: "¿Qué hace este módulo?", mem: 3, steps: ["Leyendo la base de conocimiento"], a: [desc ? "<b>«" + mod + "»:</b> " + desc + "." : "Te cuento el módulo en la demo gratuita."] },
    { chip: "¿Está incluido en el paquete?", ic: "z", q: "¿Está incluido en el paquete?", mem: 1, steps: ["Leyendo la base de conocimiento"], a: ["Sí. Los 48 módulos están incluidos en cada paquete."] },
    { chip: "Verlo en mi empresa", ic: "c", q: "¿Cómo lo veo en mi empresa?", mem: 1, steps: ["Leyendo la base de conocimiento"], a: ["Reserva una demo gratuita y te mostramos cómo funcionaría el módulo en tu caso.<br><a href=\"../demo\">Demo gratuita</a>"] }
  ];
  var items = QA[mod] || general;

  var I = function (p) { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" stroke-linecap="round" aria-hidden="true"><path d="' + p + '"/></svg>'; };
  var star = I("M11 4l1.9 5.6L18.5 11.5l-5.6 1.9L11 19l-1.9-5.6L3.5 11.5l5.6-1.9zM19 3v4M17 5h4");
  var wand = I("M4 20 15 9M14 5v3M12.5 6.5h3M19 11v3M17.5 12.5h3M8 4v2M7 5h2");
  var clip = I("M21 11l-9 9a5 5 0 0 1-7-7l9-9a3.5 3.5 0 0 1 5 5l-9 9a1.800 1.800 0 0 1-2.500-2.500l8-8");
  var zone = I("M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 1v4M12 19v4M1 12h4M19 12h4");
  var mic = I("M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3zM5 11a7 7 0 0 0 14 0M12 18v3");
  var ext = I("M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5");
  var bot = I("M12 4v3M5 9h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2zM9 14v.5M15 14v.5");
  var chk = I("M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM8 12l3 3 5-6");
  var cpy = I("M9 9h11v11H9zM5 15H4V4h11v1");
  var newc = I("M21 12a8 8 0 0 1-12 7l-6 2 2-6a8 8 0 1 1 16-3zM12 9v6M9 12h6");
  var chipI = { s: I("M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM21 21l-4.300-4.300"), z: I("M13 3 5 14h6l-1 7 8-11h-6z"), c: star };

  var css = `
#agB{position:fixed;right:24px;bottom:24px;z-index:90;width:56px;height:56px;border-radius:50%;border:0;background:#fff;color:#171717;cursor:pointer;display:grid;place-items:center;box-shadow:0 0 0 1.5px #39B54A,0 0 12px rgba(57,181,74,.75),0 0 32px rgba(57,181,74,.4);animation:agGlow 2.6s ease-in-out infinite}
#agB svg{width:26px;height:26px}#agB:focus-visible,#agP button:focus-visible{outline:2px solid #0086CC;outline-offset:2px}#agP form:focus-within{border-color:#39B54A}
@keyframes agGlow{50%{box-shadow:0 0 0 1.5px #39B54A,0 0 20px rgba(57,181,74,.95),0 0 50px rgba(57,181,74,.55)}}
#agP{position:fixed;right:24px;bottom:24px;z-index:91;width:430px;height:600px;max-height:calc(100vh - 48px);background:#fff;border:1px solid #E6E6E6;border-radius:18px;box-shadow:0 24px 70px -20px rgba(10,40,80,.35);display:none;flex-direction:column;overflow:hidden;font-family:"Golos Text",system-ui,sans-serif;color:#171717;font-size:14.5px;line-height:1.5}
#agP.on{display:flex}#agP svg{width:18px;height:18px;display:block}
#agP .hd{display:flex;align-items:center;gap:10px;padding:12px 14px;border-bottom:1px solid #F0F0F0}
#agP .ic{width:34px;height:34px;border-radius:50%;background:#E9F7EC;color:#1E7A2E;display:grid;place-items:center;flex:none}
#agP .tt{min-width:0;flex:1}#agP .tt b{font-weight:600;display:block;line-height:1.25;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#agP .tt small{color:#737373;font-size:12px}
#agP .hb{border:0;background:none;color:#555;cursor:pointer;padding:5px;border-radius:6px;font-size:18px;line-height:1;display:grid;place-items:center}#agP .hb:hover{background:#F2F2F2}
#agP .bd{flex:1;min-height:0;overflow-y:auto;padding:14px 16px;display:flex;flex-direction:column;gap:10px}
#agP .hi{margin:auto;text-align:center;color:#666;max-width:300px}#agP .hi i{width:48px;height:48px;border-radius:14px;background:#E9F7EC;color:#1E7A2E;display:grid;place-items:center;margin:0 auto 14px}#agP .hi i svg{width:26px;height:26px}#agP .hi b{display:block;color:#171717;font-weight:600;font-size:17px;margin-bottom:6px}
#agP .me{align-self:flex-end;background:#F2F2F2;border-radius:14px 14px 4px 14px;padding:7px 12px;max-width:85%}
#agP .mem{align-self:flex-start;display:inline-flex;align-items:center;gap:5px;background:#F5F5F5;color:#737373;border-radius:12px;padding:1px 9px;font-size:12px}
#agP .rw{display:grid;grid-template-columns:28px minmax(0,1fr);gap:10px}#agP .bt{width:28px;height:28px;border-radius:8px;background:#F2F2F2;color:#444;display:grid;place-items:center}#agP .bt svg{width:16px;height:16px}#agP .col{display:flex;flex-direction:column;gap:8px;min-width:0}
#agP .st{display:flex;align-items:center;gap:8px;border:1px solid #E6E6E6;border-radius:9px;padding:6px 10px;font-size:13px;color:#555}#agP .st svg{width:15px;height:15px;color:#39B54A}#agP .st em{margin-left:auto;font-style:normal;color:#888}
#agP .tl{border:1px solid #E6E6E6;border-radius:10px;overflow:hidden}#agP .th{display:flex;align-items:center;gap:8px;padding:7px 10px;border-bottom:1px solid #F0F0F0;font-size:13px;font-weight:600}#agP .th code{font:11px ui-monospace,Menlo,monospace;background:#F5F5F5;border:1px solid #E6E6E6;border-radius:5px;padding:0 5px;color:#555}
#agP .tb{padding:8px;display:flex;flex-direction:column;gap:6px}#agP .en{display:grid;grid-template-columns:minmax(0,1fr) 18px;gap:6px;align-items:center;border:1px solid #E6E6E6;border-radius:8px;padding:6px 10px;color:#171717;text-decoration:none}#agP .en:hover{background:#F7F7F7}#agP .en b{font-weight:500;font-size:13.5px;display:block}#agP .en small{display:block;color:#737373;font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#agP .en svg{width:14px;height:14px;color:#555}
#agP .mo{font-size:12.5px;color:#555;text-decoration:none;padding:2px}#agP .mo:hover{color:#111}#agP .dt{font:11px ui-monospace,Menlo,monospace;color:#888;padding:0 2px}
#agP .an b{font-weight:600}#agP .an ul{margin:4px 0;padding-left:20px}#agP .an li{margin-bottom:3px}#agP .an a{color:#178A36}
#agP .ft2{display:flex;align-items:center;gap:6px;color:#888;font-size:12px}#agP .ft2 svg{width:13px;height:13px}
#agP .dots span{display:inline-block;width:6px;height:6px;margin-right:4px;border-radius:50%;background:#39B54A;animation:agDot 1s infinite}#agP .dots span:nth-child(2){animation-delay:.15s}#agP .dots span:nth-child(3){animation-delay:.3s}
@keyframes agDot{50%{opacity:.25}}
#agP .ch{display:flex;flex-wrap:wrap;gap:8px;padding:0 14px 10px}#agP .ch button{display:inline-flex;align-items:center;gap:6px;border:1px solid #E6E6E6;background:#fff;border-radius:16px;padding:5px 11px;font:inherit;font-size:13px;color:#444;cursor:pointer}#agP .ch button:hover{background:#F7F7F7}#agP .ch svg{width:14px;height:14px}
#agP form{display:flex;gap:4px;align-items:center;margin:0 12px;border:1px solid #E6E6E6;border-radius:12px;padding:6px 8px}#agP input{flex:1;min-width:0;border:0;outline:0;font:inherit;background:none;padding:0 6px}
#agP .tool{border:0;background:none;color:#555;cursor:pointer;padding:5px;border-radius:6px;display:grid;place-items:center}#agP .tool:hover{background:#F2F2F2}#agP .go{width:32px;height:32px;border-radius:9px;border:1px solid #9FDCAE;background:#EEF8EE;color:#1E7A2E;font-size:15px;cursor:pointer;flex:none}
#agP .fb{display:flex;align-items:center;gap:12px;padding:7px 16px 10px;color:#888;font-size:12px}#agP .fb span:last-child{margin-left:auto}
@media(max-width:560px){#agP{right:8px;left:8px;bottom:8px;width:auto;height:calc(100vh - 16px)}#agB{right:16px;bottom:16px}}
@media(prefers-reduced-motion:reduce){#agB,#agP .dots span{animation:none}}
`;
  var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

  var btn = document.createElement("button");
  btn.id = "agB"; btn.type = "button"; btn.setAttribute("aria-label", "Asistente Aita"); btn.innerHTML = star;
  var box = document.createElement("div");
  box.id = "agP"; box.setAttribute("role", "dialog"); box.setAttribute("aria-label", "Asistente Aita");
  box.innerHTML = '<div class="hd"><span class="ic">' + wand + '</span><span class="tt"><b>Nueva conversación ⌄</b><small>Aita · demo en la web</small></span><button class="hb nw" type="button" aria-label="Nueva conversación">' + newc + '</button><span class="hb" aria-hidden="true">⋯</span><button class="hb mn" type="button" aria-label="Minimizar">–</button><button class="hb x" type="button" aria-label="Cerrar">×</button></div>'
    + '<div class="bd" aria-live="polite"></div><div class="ch"></div>'
    + '<form><button class="tool" type="button" aria-label="Adjuntar archivo">' + clip + '</button><button class="tool" type="button" aria-label="Seleccionar zona">' + zone + '</button><input type="text" placeholder="Escribe un mensaje..." aria-label="Mensaje"><button class="tool" type="button" aria-label="Dictar en el campo">' + mic + '</button><button class="go" type="submit" aria-label="Enviar">↑</button></form>'
    + '<div class="fb"><span>Claude Haiku 5.5 ⌄</span><span>Preguntar antes de cambiar</span><span>Ctrl+J</span></div>';
  document.body.appendChild(btn); document.body.appendChild(box);

  var bd = box.querySelector(".bd"), ch = box.querySelector(".ch"), inp = box.querySelector("input"), title = box.querySelector(".tt b"), busy = false;
  var hello = '<div class="hi"><i>' + star + '</i><b>¿En qué puedo ayudarte?</b>Pregúntame cualquier cosa sobre tu espacio de trabajo...</div>';
  var reset = function () { bd.innerHTML = hello; title.textContent = "Nueva conversación ⌄"; ch.style.display = ""; busy = false; };
  var esc = function (x) { var d = document.createElement("div"); d.textContent = x; return d.innerHTML; };
  var down = function () { bd.scrollTop = bd.scrollHeight; };
  var fast = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  var wait = function (ms, f) { setTimeout(f, fast ? 0 : ms); };
  var stamp = function () { var d = new Date(), p = function (n) { return (n < 10 ? "0" : "") + n; }; return { full: p(d.getDate()) + "." + p(d.getMonth() + 1) + "." + d.getFullYear() + ", " + p(d.getHours()) + ":" + p(d.getMinutes()) + ":" + p(d.getSeconds()), t: p(d.getHours()) + ":" + p(d.getMinutes()) }; };
  var ask = function (q, it) {
    if (busy) return; busy = true;
    bd.innerHTML = ""; ch.style.display = "none"; title.textContent = q;
    var me = document.createElement("div"); me.className = "me"; me.textContent = q; bd.appendChild(me);
    if (it.mem) { var m = document.createElement("div"); m.className = "mem"; m.textContent = "Recuerdos usados: " + it.mem; bd.appendChild(m); }
    var rw = document.createElement("div"); rw.className = "rw"; rw.innerHTML = '<span class="bt">' + bot + '</span><div class="col"></div>'; bd.appendChild(rw);
    var col = rw.querySelector(".col");
    var think = document.createElement("div"); think.className = "dots"; think.innerHTML = "<span></span><span></span><span></span>"; col.appendChild(think);
    var queue = [];
    (it.steps || []).forEach(function (s) { queue.push(function () { var e = document.createElement("div"); e.className = "st"; e.innerHTML = chk + esc(s) + "<em>›</em>"; col.insertBefore(e, think); }); });
    if (it.tool) queue.push(function () {
      var w = stamp(), t = it.tool, e = document.createElement("div"); e.className = "tl";
      e.innerHTML = '<div class="th"><code>' + t.k + '</code>' + esc(t.t) + '</div><div class="tb">' + t.e.map(function (x) { return '<a class="en" href="' + x[2] + '"><span><b>' + esc(x[0]) + '</b><small>' + esc(x[1]) + '</small></span>' + ext + '</a>'; }).join("") + (t.more ? '<a class="mo" href="' + t.href + '">' + esc(t.more) + '</a>' : "") + '<div class="dt">datos del ' + w.full + '</div></div>';
      col.insertBefore(e, think);
    });
    (it.a || []).forEach(function (html) { queue.push(function () { var e = document.createElement("div"); e.className = "an"; e.innerHTML = html; col.insertBefore(e, think); }); });
    var i = 0;
    (function next() {
      if (i < queue.length) { queue[i++](); down(); wait(i === 1 ? 600 : 520, next); return; }
      think.remove();
      var f = document.createElement("div"); f.className = "ft2"; f.innerHTML = cpy + "Copiar &nbsp; " + stamp().t; col.appendChild(f); down(); busy = false; ch.style.display = "";
    })();
  };
  items.forEach(function (it) {
    var b = document.createElement("button"); b.type = "button"; b.innerHTML = (chipI[it.ic] || star) + esc(it.chip);
    b.onclick = function () { ask(it.q, it); }; ch.appendChild(b);
  });
  var note = { mem: 0, steps: [], a: ["En la web solo se muestran ejemplos preparados. En la plataforma puedes adjuntar un archivo, dictar la petición y seleccionar una zona de la pantalla.<br><a href=\"../demo\">Demo gratuita</a>"] };
  box.querySelectorAll(".tool").forEach(function (b) { b.onclick = function () { ask(b.getAttribute("aria-label"), note); }; });
  box.querySelector("form").onsubmit = function (e) {
    e.preventDefault(); var v = inp.value.trim(); if (!v) return; inp.value = "";
    ask(v, { mem: 0, steps: [], a: ["En la web solo se muestran ejemplos preparados. En la plataforma, el agente responde con los datos de tu empresa.<br><a href=\"../demo\">Demo gratuita</a>"] });
  };
  var open = function (on) { box.classList.toggle("on", on); btn.style.display = on ? "none" : ""; (on ? inp : btn).focus(); };
  btn.onclick = function () { open(true); };
  box.querySelector(".x").onclick = function () { open(false); };
  box.querySelector(".mn").onclick = function () { open(false); };
  box.querySelector(".nw").onclick = reset;
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && box.classList.contains("on")) open(false); if (e.ctrlKey && (e.key === "j" || e.key === "J")) { e.preventDefault(); open(!box.classList.contains("on")); } });
  reset();
})();
