export default {
  global: {
    componenteFormativo: 'Diagnóstico de riesgos en sistemas de tratamiento',
    descripcionCurso:
      'En Colombia existe normativa relacionada con el control de la calidad del agua potable que consume la población, que sirve de base para el diagnóstico de la gestión de los riesgos asociados, teniendo en cuenta el cálculo de indicadores de riesgo en la calidad del agua y a la elaboración de mapas de riesgo que se convierten en herramientas útiles en dicho diagnóstico.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    fondoBannerInterno: require('@/assets/curso/interno.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Normativa relacionada con riesgos de agua potable',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Resolución 330 de 2017',
            hash: 'res330',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Decreto 1575 de 2007 y Resolución 2115 de 2007os',
            hash: 'dec1575',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Resolución 4716 de 2010',
            hash: 'res4716',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Resolución 811 de 2008',
            hash: 'res811',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Decreto 4741 de 2005', //--(compilado en el Decreto 1076 de 2015)',
            hash: 'dec4741',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Decreto 1609 de 2002',
            hash: 'dec1609',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Mapas de riesgo en sistemas de tratamiento', //--y distribución de agua potable',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Principios básicos de muestreo de agua potable',
            hash: 'principios',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Cálculo del Índice de Riesgo', //--de la Calidad del Agua Potable (IRCA)',
            hash: 'calculo',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Elaboración de mapas de riesgo',
            hash: 'mapas',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'USGS. (s.f.). El Ciclo del Agua, The Water Cycle, Spanish. Recuperado el 13 de 10 de 2021',
      link:
        'https://www.usgs.gov/special-topic/water-science-school/science/el-ciclo-del-agua-water-cycle-spanish?qt-science_center_objects=0#qt-science_center_objects',
    },
  ],
  glosario: [
    {
      termino: 'Análisis fisicoquímico del agua',
      significado:
        'Procedimientos de laboratorio que se efectúan a una muestra de agua para evaluar sus características físicas, químicas o ambas.',
    },
    {
      termino: 'Análisis microbiológico del agua',
      significado:
        'Procedimientos de laboratorio que se efectúan a una muestra de agua para consumo humano para evaluar la presencia o ausencia, tipo y cantidad de microorganismos.',
    },
    {
      termino: 'Característica',
      significado:
        'Término usado para identificar elementos, compuestos, sustancias y microorganismos presentes en el agua para consumo humano.',
    },
    {
      termino: 'Calidad del agua',
      significado:
        'Resultado de comparar las características físicas, químicas y microbiológicas encontradas en el agua, con el contenido de las normas que regulan la materia.',
    },
    {
      termino: 'INS',
      significado: ' Instituto Nacional de Salud.',
    },
    {
      termino: 'IRABAm',
      significado:
        'Índice de riesgo municipal por abastecimiento de agua para consumo humano.',
    },
    {
      termino: 'IRCA',
      significado: 'Índice de Riesgo de la Calidad del Agua Potable.',
    },
    {
      termino: 'MVCT',
      significado: ' Ministerio de Vivienda, Ciudad y Territorio.',
    },
    {
      termino:
        'Persona prestadora que suministra o distribuye agua para consumo humano (persona prestadora)',
      significado:
        'Aquellas personas prestadoras que, acorde con la Ley 142 de 1994, suministran agua para consumo humano tratada o sin tratamiento.',
    },
    {
      termino: 'Red de distribución o red pública ',
      significado:
        'Conjunto de tuberías, accesorios, estructura y equipos que conducen el agua desde el tanque de almacenamiento o planta de tratamiento hasta las acometidas domiciliarias.',
    },
    {
      termino: 'Riesgo',
      significado:
        'Probabilidad de que un agente o sustancia produzca o genere una alteración a la salud como consecuencia de una exposición al mismo.',
    },
    {
      termino:
        'Sistema para la protección y control de la calidad del agua para consumo humano',
      significado:
        'Conjunto de responsables, instrumentos, procesos, medidas de seguridad, recursos, características y criterios organizados entre sí para garantizar la calidad de agua para consumo humano.',
    },
    {
      termino: 'SIVICAP',
      significado:
        ' Sistema de Información de la Vigilancia de la Calidad del Agua para Consumo Humano.',
    },
    {
      termino: 'SUI',
      significado: ' Sistema Único de Información.',
    },
    {
      termino: 'Tratamiento o potabilización ',
      significado:
        'Conjunto de operaciones y procesos que se realizan sobre el agua cruda, con el fin de modificar sus características físicas, químicas y microbiológicas, para hacerla apta para el consumo humano.',
    },
    {
      termino: 'Valor aceptable',
      significado:
        'Establecido para la concentración de un componente o sustancia, que garantiza que el agua para consumo humano no representa riesgos conocidos a la salud.',
    },
  ],
  complementario: [
    {
      texto:
        'Resolución 330 de 2017. [Ministerio de Salud y Protección Social]. Por la cual se adopta el procedimiento técnico-científico y participativo para la determinación de los servicios y tecnologías que no podrán ser financiados con recursos públicos asignados a la salud y se establecen otras disposiciones. Febrero 14 de 2017.',
      tipo: 'PDF',
      descarga: '/downloads/Anexo11_CF002_Resolucio_330_de_2017.pdf',
    },
    {
      texto:
        'Decreto 1575 de 2007. [Presidencia de La República de Colombia]. por el cual se establece el Sistema para la Protección y Control de la Calidad del Agua para Consumo Humano. Diario Oficial 46623 de mayo 09 de 2007.',
      tipo: 'PDF',
      descarga: '/downloads/Anexo2_CF002_Decreto_1575_de_2007.pdf',
    },
    {
      texto:
        'Resolución 4716 de 2010. [Ministerio de Salud y Protección Social]. Por medio de la cual se reglamenta el parágrafo del artículo 15 del Decreto 1575 de 2007. 18 de noviembre de 2010.',
      tipo: 'PDF',
      descarga: '/downloads/Anexo8_CF002_Resolució_ 4716_de_2010.pdf',
    },
    {
      texto:
        'Resolución 811 de 2008. [Ministerio de la Protección Social]. Por medio de la cual se definen los lineamientos a partir de los cuales la autoridad sanitaria y las personas prestadoras, concertadamente definirán en su área de influencia los lugares y puntos de muestreo para el control y la vigilancia de la calidad del agua para consumo humano en la red de distribución. marzo 5 de 2008.',
      tipo: 'PDF',
      descarga: ['/downloads/Anexo10_CF002_Resolucion_811_de_2008.pdf'],
    },
    {
      texto:
        'Resolución 2115 de 2007. [Ministerio de la Protección Social Ministerio de Ambiente, Vivienda y Desarrollo Territorial]. Por medio de la cual se señalan características, instrumentos básicos y frecuencias del sistema de control y vigilancia para la calidad del agua para consumo humano. Junio 22 de 2007.',
      tipo: 'PDF',
      descarga: ['/downloads/Anexo4_CF002_Resolución_2115_de_2007.pdf'],
    },
    {
      texto:
        'Decreto 4741 de 2005. [Ministerio de Ambiente, Vivienda y Desarrollo Territorial].  Por el cual se reglamenta parcialmente la prevención y el manejo de los residuos o desechos peligrosos generados en el marco de la gestión integra. 30 de diciembre de 2005.',
      tipo: 'PDF',
      descarga: ['/downloads/Anexo5_CF002_Decreto_4741_de_2005.pdf'],
    },
    {
      texto:
        'Decreto 1076 de 2015. [Ministerio de Ambiente y Desarrollo Sostenible].  Por medio del cual se expide el Decreto Único Reglamentario del Sector Ambiente y Desarrollo Sostenible a partir de la fecha de su expedición. Mayo 26 de 2015.',
      tipo: 'PDF',
      descarga: ['/downloads/Anexo7_CF002_Decreto_1076_de_2015.pdf'],
    },
    {
      texto:
        'Decreto 1609 de 2002. [Presidencia de la República de Colombia]. Por el cual se reglamenta el manejo y transporte terrestre automotor de mercancías peligrosas por carretera. Julio 31 de 2002.',
      tipo: 'PDF',
      descarga: ['/downloads/Anexo6_CF002_Decreto_1609_de_2002.pdf'],
    },
    {
      texto:
        'Organización Mundial de la Salud-OMS. (2017). Guías para la calidad del agua de consumo humano.',
      tipo: 'PDF',
      descarga: [
        '/downloads/Anexo3_CF002_Guías_calidad_agua potable_OMS_2017.pdf',
        '/downloads/ANEXO9_1.pdf',
      ],
    },
    {
      texto:
        'Corredor, N. (2014, diciembre 10). Mapa de riesgo del agua para consumo humano, UESVALLE. [video]. ',
      tipo: 'Video',
      link: ['https://www.youtube.com/watch?app=desktop&v=ixvr5queW6Q'],
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Alexander Gómez Reyes',
        cargo: 'Instructor',
        centro: 'Regional Valle - Centro de la Construcción',
      },
      {
        nombre: 'Gustavo Santis Mancipe',
        cargo: 'Diseñador instruccional',
        centro: 'Centro de Diseño y Metrología Regional distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica.',
      },
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: ['Jaime Enrique Díaz Reyes '],
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: ['Laura Ximena Hurtado Villalba '],
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jorge Enrique Haylock Calderín',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
