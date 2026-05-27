import { tokens as t } from '../styles/tokens';

// ─── NAVBAR ───────────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Problema",     href: "#problema" },
  { label: "Solución",     href: "#solucion" },
  { label: "Alcances",     href: "#alcances" },
  { label: "Usuarios",     href: "#usuarios" },
  { label: "Monetización", href: "#monetizacion" },
  { label: "Demo",         href: "#demo" },
];

// ─── HERO ─────────────────────────────────────────────────────────────────────
export const HERO_BADGES = [
  { label: "NOM-052",  sub: "Certificado" },
  { label: "SEMARNAT", sub: "Compatible" },
  { label: "LGPGIR",   sub: "Normativa" },
];

export const PHONE_STEPS = [
  "Envasa en tambo hermético.",
  "Etiqueta con fecha y volumen.",
  "Máx. 6 meses para traslado.",
];

// ─── PROBLEMA ─────────────────────────────────────────────────────────────────
export const PROBLEMA_STATS = [
  { num: "400K+",   label: "talleres mecánicos en México sin guía ambiental", color: t.orange },
  { num: "NOM-052", label: "norma que 9 de 10 mecánicos jamás han leído",     color: t.blue },
  { num: "≥$500K",  label: "pesos de multa por clausura SEMARNAT",             color: t.red },
  { num: "0",       label: "herramientas gratuitas accesibles hoy en día",     color: t.textSec },
];

export const PROBLEMA_ITEMS = [
  { icon: "⚙️", text: "Juntos, los talleres mecánicos de barrio generan cientos de toneladas de residuos peligrosos al año: aceite usado, baterías, anticongelante y solventes." },
  { icon: "📄", text: "Las leyes ambientales mexicanas (NOM-052, LGPGIR) están escritas en un lenguaje tan técnico y burocrático que ningún microempresario las entiende." },
  { icon: "💸", text: "Sin dinero para un consultor ambiental privado, los mecánicos operan con miedo a inspecciones y terminan tirando residuos al drenaje o mezclándolos con basura normal." },
  { icon: "🚫", text: "Actualmente no existe ninguna herramienta gratuita y accesible que traduzca la ley al lenguaje del taller." },
];

// ─── SOLUCIÓN ─────────────────────────────────────────────────────────────────
export const TECH_STACK = [
  { layer: "Móvil (Flutter)",   items: ["Chat RAG amigable", "Bitácora digital", "Alertas proactivas"],          color: t.cyan },
  { layer: "Web (React)",       items: ["Mapa de calor PostGIS", "Manifiestos digitales", "Panel de normas"],    color: t.blue },
  { layer: "Backend (FastAPI)", items: ["API Python", "Clasificador NLP", "Prophet predicciones"],               color: t.orange },
  { layer: "IA Local (LLM)",    items: ["Llama-3 / Mistral", "Sentence Transformers", "Sin internet requerido"], color: t.yellow },
];

export const HOW_IT_WORKS = [
  { num: "01", icon: "💬", title: "El mecánico describe",    desc: "Escribe en su idioma: \"líquido negro de motor\" o \"trapos con grasa\". Sin formularios raros." },
  { num: "02", icon: "🤖", title: "La IA local clasifica",   desc: "Sentence Transformers + Llama-3 identifican el residuo y lo mapean a la NOM-052 sin internet." },
  { num: "03", icon: "✅", title: "Recibe su plan de acción", desc: "Checklist claro paso a paso, alertas de límite anual y conexión con recicladores cercanos." },
];

// ─── ALCANCES ─────────────────────────────────────────────────────────────────
export const ALCANCES = [
  { status: "IN",  label: "App móvil Flutter (Android)",       desc: "Registro de residuos, chatbot RAG, bitácora visual y alertas de 400 kg.",                         color: t.blue },
  { status: "IN",  label: "Motor NLP local",                   desc: "Sentence Transformers all-MiniLM-L6-v2 para entender vocabulario coloquial de taller.",            color: t.blue },
  { status: "IN",  label: "LLM local (Llama-3/Mistral)",       desc: "Genera planes de acción en lenguaje humano a partir de artículos LGPGIR, sin APIs externas.",     color: t.blue },
  { status: "IN",  label: "Panel web React para recicladores", desc: "Mapa de calor PostGIS, manifiestos digitales y rutas de recolección optimizadas.",                 color: t.blue },
  { status: "IN",  label: "Alertas inteligentes Prophet",      desc: "Predicción de acumulación de residuos basada en historial para anticipo legal.",                   color: t.blue },
  { status: "OUT", label: "App para iOS (fase 2)",             desc: "No contemplado en MVP; roadmap post-lanzamiento.",                                                   color: t.textMuted },
  { status: "OUT", label: "APIs externas (ChatGPT/Gemini)",    desc: "Fuera de alcance por diseño: toda la IA corre localmente en servidor propio.",                     color: t.textMuted },
  { status: "OUT", label: "Módulo fiscal / contable",          desc: "EcoReg-AI se enfoca en cumplimiento ambiental, no en administración fiscal.",                      color: t.textMuted },
];

// ─── USUARIOS ─────────────────────────────────────────────────────────────────
export const USERS = [
  {
    icon: "🔧",
    title: "Mecánico / Dueño de Taller",
    subtitle: "App móvil Flutter",
    color: t.orange,
    features: [
      "Registro rápido del taller con ubicación y giro",
      "Chatbot RAG para describir residuos en lenguaje natural",
      "Bitácora digital con kilos acumulados por mes",
      "Alertas proactivas antes del límite de 400 kg/año",
      "Mapa para encontrar centro de acopio más cercano",
    ],
  },
  {
    icon: "♻️",
    title: "Gestor / Reciclador Autorizado",
    subtitle: "Panel web React",
    color: t.blue,
    features: [
      "Mapa de calor de talleres con contenedores llenos",
      "Coordinación de rutas de recolección eficientes",
      "Envío de propuestas de recolección a talleres",
      "Emisión de manifiestos digitales de entrega",
      "Comprobante legal de destino seguro para el mecánico",
    ],
  },
  {
    icon: "🏛️",
    title: "Consultor / Inspector Ambiental",
    subtitle: "Panel web React",
    color: t.cyan,
    features: [
      "Panel para subir y actualizar normas (NOM, LGPGIR)",
      "Gráficas de cumplimiento por colonia y zona",
      "Visualización de tendencias de mejora ecológica",
      "Gestión de biblioteca de criterios normativos",
      "Reportes exportables de indicadores ambientales",
    ],
  },
];

// ─── MONETIZACIÓN ─────────────────────────────────────────────────────────────
export const PRICING_TIERS = [
  {
    name: "Freemium",
    price: "Gratis",
    color: t.textSec,
    target: "Mecánico individual",
    featured: false,
    features: ["Chatbot IA ilimitado", "Bitácora básica (1 usuario)", "Mapa de centros de acopio", "Alertas de 400 kg"],
  },
  {
    name: "Taller Pro",
    price: "$249/mes",
    color: t.orange,
    target: "Taller con 2–10 empleados",
    featured: true,
    features: ["Todo Freemium incluido", "Hasta 5 usuarios", "Reportes PDF para SEMARNAT", "Historial ilimitado", "Soporte prioritario"],
  },
  {
    name: "Flota",
    price: "$899/mes",
    color: t.blue,
    target: "Cadenas o franquicias",
    featured: false,
    features: ["Usuarios ilimitados", "Dashboard multi-sucursal", "API de integración", "Manifiestos automáticos", "Consultor asignado"],
  },
];

export const B2B_STREAMS = [
  { icon: "🏭", title: "SaaS para recicladores",       desc: "Suscripción mensual para centros de acopio que usen el panel de rutas y manifiestos digitales.",                         color: t.cyan },
  { icon: "📊", title: "Datos anónimos agregados",      desc: "Venta de reportes geoespaciales a municipios, consultoras y SEMARNAT regional.",                                          color: t.blue },
  { icon: "🎓", title: "Certificación y consultoría",   desc: "Cursos online NOM-052 para mecánicos con certificado descargable. Alianzas CANACINTRA.",                                  color: t.orange },
  { icon: "🤝", title: "Marketplace de residuos",       desc: "8% de comisión por contrato de recolección entre talleres y recicladores autorizados.",                                   color: t.yellow },
];

// ─── MAPA ─────────────────────────────────────────────────────────────────────
export const MAP_PINS = [
  { x: "28%", y: "38%", type: "w", label: "Taller El Güero" },
  { x: "53%", y: "22%", type: "w", label: "Mecánica Reyes" },
  { x: "70%", y: "56%", type: "w", label: "Taller Hernández" },
  { x: "17%", y: "66%", type: "w", label: "Moto-Taller Norteño" },
  { x: "44%", y: "74%", type: "w", label: "Hojalatería Ruíz" },
  { x: "39%", y: "46%", type: "c", label: "Acopio SEMARNAT Norte" },
  { x: "63%", y: "31%", type: "c", label: "EcoMex Reciclaje" },
  { x: "55%", y: "67%", type: "c", label: "Centro Autorizado Sur" },
];

// ─── FOOTER ───────────────────────────────────────────────────────────────────
export const FOOTER_COLS = [
  { title: "Plataforma", links: ["Inicio", "Solución", "Alcances", "Usuarios", "Monetización", "Demo"] },
  { title: "Legal",      links: ["Aviso de privacidad", "Términos de uso", "NOM-052", "LGPGIR"] },
  { title: "Contacto",   links: ["hola@ecoreg.ai", "SEMARNAT Mérida", "GitHub", "Documentación"] },
];
