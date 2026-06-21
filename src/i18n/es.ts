// Spanish content — mirrors the shape of en.ts.
import type en from './en'

const es: typeof en = {
  meta: {
    langName: 'ES',
    switchTo: 'English',
  },

  nav: {
    about: 'Nosotros',
    trade: 'Qué Comercializamos',
    capabilities: 'Capacidades',
    reach: 'Alcance Global',
    compliance: 'Cumplimiento',
    why: 'Por qué JELIRO',
    contact: 'Contacto',
    cta: 'Contáctanos',
  },

  hero: {
    badge: 'Comercializadora con sede en Dubái',
    title: 'JELIRO METALS TRADING FZCO',
    tagline: 'Comercio Global de Estaño y Metales No Ferrosos',
    subtitle:
      'Tu socio de confianza en estaño y minerales. Nos especializamos en casiterita (mineral de estaño) y estaño refinado, conectando un suministro mineral confiable con los mercados globales.',
    ctaPrimary: 'Solicitar Cotización',
    ctaSecondary: 'Contáctanos',
    stats: [
      { value: 'Dubái', label: 'Sede · EAU' },
      { value: 'Sn', label: 'Mineral y estaño refinado' },
      { value: 'Global', label: 'Asia · América y más' },
    ],
  },

  about: {
    kicker: 'Nosotros',
    title: 'Una comercializadora internacional de metales basada en un suministro confiable',
    body: 'JELIRO Metals Trading FZCO es una empresa internacional de comercialización de commodities con sede en Dubái (Dubai Silicon Oasis). Nos especializamos en el abastecimiento, comercialización y exportación de mineral de estaño (casiterita), estaño refinado y metales no ferrosos. Respaldados por operaciones mineras propias, conectamos un suministro mineral confiable con fundiciones y compradores industriales en Asia, América y más allá.',
    highlights: [
      { value: 'Sede', label: 'Dubai Silicon Oasis, EAU' },
      { value: 'Origen', label: 'Respaldados por operaciones mineras' },
      { value: 'Exportación', label: 'Fundiciones y compradores industriales' },
    ],
  },

  trade: {
    kicker: 'Qué Comercializamos',
    title: 'Nuestro portafolio de productos',
    intro: 'Una oferta enfocada en estaño y commodities no ferrosos.',
    items: [
      {
        name: 'Mineral de Estaño / Casiterita',
        desc: 'Concentrados de mineral de estaño con ley de Sn % especificada, provenientes de operaciones confiables.',
      },
      {
        name: 'Estaño Refinado',
        desc: 'Lingotes de estaño refinado y metal de Sn para fundiciones y compradores industriales.',
      },
      {
        name: 'Metales No Ferrosos',
        desc: 'Un portafolio creciente de metales no ferrosos para atender diversas demandas industriales.',
      },
      {
        name: 'Comercio General',
        desc: 'Capacidades flexibles de comercio general para apoyar a nuestros socios en distintos mercados.',
      },
    ],
  },

  capabilities: {
    kicker: 'Nuestras Capacidades',
    title: 'Comercialización y logística de extremo a extremo',
    items: [
      { title: 'Abastecimiento y suministro confiable', desc: 'Suministro mineral confiable respaldado por relaciones directas con el origen.' },
      { title: 'Comercio internacional', desc: 'Compra y reventa en los mercados internacionales de commodities.' },
      { title: 'Exportación y coordinación logística', desc: 'Exportación y envío coordinados desde el origen hasta el destino.' },
      { title: 'Aseguramiento de calidad y ensayo', desc: 'Ensayos y control de calidad para verificar ley y especificaciones.' },
      { title: 'Transacciones con financiamiento comercial', desc: 'Operaciones respaldadas por trade finance para una ejecución segura.' },
    ],
  },

  reach: {
    kicker: 'Alcance Global',
    title: 'Del origen a las fundiciones del mundo',
    intro:
      'Conectamos el suministro mineral en origen con compradores industriales y fundiciones en los mercados globales.',
    origin: {
      label: 'Origen',
      title: 'Latinoamérica',
      desc: 'Operaciones mineras en toda Latinoamérica proveen nuestro suministro mineral.',
    },
    destination: {
      label: 'Destino',
      title: 'China · Asia y mercados internacionales',
      desc: 'Fundiciones y compradores industriales en China, Asia y mercados internacionales.',
    },
  },

  compliance: {
    kicker: 'Abastecimiento Responsable y Cumplimiento',
    title: 'Comprometidos con una cadena de suministro transparente y conforme',
    body: 'Estamos comprometidos con un abastecimiento mineral responsable, en línea con la Guía de Debida Diligencia de la OCDE, aplicando KYC a todas las contrapartes y manteniendo una cadena de suministro transparente y conforme.',
    points: [
      { title: 'Debida Diligencia OCDE', desc: 'Abastecimiento alineado con la Guía de Debida Diligencia de la OCDE para cadenas de suministro mineral responsables.' },
      { title: 'KYC a contrapartes', desc: 'Verificaciones de conocimiento de la contraparte aplicadas a todas nuestras relaciones comerciales.' },
      { title: 'Cadena de suministro transparente', desc: 'Una cadena de suministro transparente, trazable y conforme desde el origen hasta la entrega.' },
    ],
    note: 'Nuestro compromiso refleja nuestra política y diligencia continua como comercializador responsable de estaño y minerales relacionados (3TG).',
  },

  why: {
    kicker: 'Por qué JELIRO',
    title: 'Los valores en los que confían nuestros socios',
    values: [
      { title: 'Confiabilidad', desc: 'Suministro confiable y ejecución consistente con la que nuestros socios pueden contar.' },
      { title: 'Transparencia', desc: 'Trato claro y honesto en cada transacción.' },
      { title: 'Cumplimiento', desc: 'Abastecimiento responsable y debida diligencia rigurosa.' },
      { title: 'Relaciones directas de suministro', desc: 'Respaldados por relaciones directas con la minería de origen.' },
      { title: 'Calidad', desc: 'Ley y especificaciones verificadas mediante ensayo y control de calidad.' },
    ],
  },

  contact: {
    kicker: 'Contacto',
    title: 'Hablemos de negocios',
    intro: 'Escríbenos para cotizaciones, alianzas u oportunidades de suministro.',
    emailLabel: 'Correo',
    email: 'info@jelirometals.com',
    addressLabel: 'Dirección',
    address: 'Dubai Silicon Oasis, Dubái, EAU',
    phoneLabel: 'Teléfono',
    phones: ['+57 318 3077582', '+1 (786) 239-7730'],
    form: {
      name: 'Nombre completo',
      email: 'Correo electrónico',
      company: 'Empresa',
      message: '¿Cómo podemos ayudarte?',
      submit: 'Enviar mensaje',
      success: 'Gracias — tu mensaje ha sido preparado. Nos pondremos en contacto pronto.',
    },
  },

  footer: {
    company: 'JELIRO METALS TRADING FZCO',
    tagline: 'Comercio Global de Estaño y Metales No Ferrosos',
    license: 'Licencia No. 89308',
    address: 'Dubai Silicon Oasis, EAU',
    rights: 'Todos los derechos reservados.',
    nav: 'Navegación',
    legal: 'Empresa',
  },
}

export default es
