// Тексти сторінок модулів за шаблоном (AITA_Site/Модулі_шаблон_сторінки_модуля.md).
// Модуль без запису тут показується старим шаблоном. video: шлях до ролика; якщо порожньо, показуємо img.
const MODC = {
  "Leads": {
    h1: "Cada llamada rellena la ficha del cliente",
    sub: "Las solicitudes del sitio web, el correo y el teléfono llegan solas al embudo de ventas, y la ficha del cliente se completa tras cada correo, reunión y llamada.",
    hero: { img: "/modules-assets/leads-hero.jpg", video: "" },
    diff: [
      ["Tras la llamada, el gestor apunta a mano lo acordado", "Aita transcribe la llamada y escribe el resumen en la ficha del cliente", "Los acuerdos se guardan aunque el gestor no haya llegado a anotarlos"],
      ["Cada gestor toma notas a su manera", "Para cada embudo defines una instrucción para la IA, y los resúmenes de las llamadas siguen tu estructura", "Necesidades, presupuesto y próximos pasos se describen igual en todo el equipo"],
      ["El cliente ganado se vuelve a dar de alta en proyectos", "El proyecto se crea directamente desde la ficha del lead", "Quienes van a ejecutar el pedido ven todo el historial del cliente"]
    ],
    tasks: [
      { tab: "Solicitud", h: "La solicitud llega al embudo sin introducirla a mano", p: "La plataforma muestra de dónde vino el cliente: del sitio web, el correo, Telegram o una llamada. Otras fuentes, como la publicidad, se pueden conectar aparte. Cada línea telefónica puede ir a su propio embudo, así que la consulta llega directamente al equipo adecuado.", img: "/modules-assets/leads-board.jpg", video: "" },
      { tab: "Llamada", h: "La conversación se convierte en un registro en la ficha", p: "Las llamadas entrantes y salientes se transcriben solas, y el resumen se actualiza tras cada conversación. La descripción que escribió una persona no cambia. Las llamadas sin contenido, como un contestador o un número equivocado, no modifican la ficha.", img: "/modules-assets/leads-call.jpg", video: "" },
      { tab: "Instrucción para la IA", h: "Tú decides qué se anota tras la llamada", p: "Describe el embudo con palabras normales y la plataforma redactará la instrucción para la IA. O escribe tu propia instrucción con tu formato de informe. Antes de ponerla en marcha puedes probarla con el botón «Probar prompt».", img: "/modules-assets/leads-prompt.jpg", video: "" },
      { tab: "Acuerdo", h: "Se ve qué hacer después con cada cliente", p: "La etapa, el importe, el último y el próximo contacto se ven en la ficha. El filtro «Vencidos» muestra los clientes a los que no se contactó a tiempo.", img: "/modules-assets/leads-board.jpg", video: "" },
      { tab: "Historial", h: "Todo el trabajo con el cliente en una sola ficha", p: "Los correos y las reuniones se vinculan a la ficha, y las pestañas «Chat», «Correspondencia», «Conversaciones» e «Historial» guardan todo lo que ha pasado con el cliente. Si cambia el gestor, el compañero sigue desde el mismo punto.", img: "/modules-assets/leads-history.jpg", video: "", link: null },
      { tab: "Proyecto", h: "El lead ganado se convierte en proyecto", p: "En la ficha pulsas «Crear proyecto», y el proyecto recuerda de qué lead salió.", img: "/modules-assets/blog-cover-project_stages.jpg", video: "", link: null }
    ],
    ai: [
      ["Resumen de la llamada", "La IA anota el contenido de la conversación según tu instrucción."],
      ["Próximos pasos", "Tras la llamada, el agente de IA propone qué hacer después."],
      ["Secretario de IA", "La IA lee los correos nuevos y propone crear un lead, un contacto o una tarea."]
    ],
    aiLimit: "La IA no cambia la descripción que escribió el gestor. El resumen de la llamada se guarda en un campo aparte.",
    more: ["Varios embudos", "Etiquetas y filtros", "Motivos de pérdida", "Importación desde CSV y Excel", "Exportación a CSV y XLSX", "Formularios para el sitio web"],
    access: ["Los embudos y los leads los ven los miembros de tu empresa.", "Un embudo se puede compartir con otra empresa.", "El acceso a un lead concreto se configura en «Gestión de acceso»."],
    start: ["Elige una configuración lista o crea tu propio embudo.", "Sube clientes desde CSV o Excel, hasta 5 000 filas cada vez.", "Conecta el correo y la telefonía."],
    industry: "La ficha del lead tiene campos de potencia y capacidad, que pasan al proyecto de la planta.",
    faq: [
      ["¿Qué es un lead y para qué necesita una empresa este módulo?", "Un lead es un cliente potencial. El módulo lo acompaña desde el primer contacto hasta la operación ganada, para que no se pierda ninguna solicitud."],
      ["¿Puedo decidir yo qué se anota tras una llamada?", "Sí. Cada embudo tiene su propia instrucción para la IA, y el idioma de la descripción lo elige la empresa."],
      ["¿Qué telefonía se puede conectar?", "Cualquier telefonía con API abierta. Ahora funciona Unitalk: envía la grabación de la llamada, y la transcripción y el resumen los hace Aita."],
      ["¿La transcripción de llamadas está incluida en el paquete?", "Sí, solo necesitas un número de telefonía. La transcripción consume pocos créditos de IA de tu paquete."],
      ["¿Se pueden pasar los clientes desde otro CRM?", "Sí, desde un archivo CSV o Excel. O nuestro equipo traslada los datos."],
      ["¿Hay que pagar aparte por el módulo?", "No. «Leads» está incluido en cada paquete."]
    ],
    final: "Te mostramos cómo las llamadas rellenarán las fichas de clientes en tu empresa"
  }
};
