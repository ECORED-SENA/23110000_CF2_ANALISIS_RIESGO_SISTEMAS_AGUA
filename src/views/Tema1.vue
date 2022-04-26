<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    //- El componente "Muestras" tiene las aplicaciones de todos los componentes de la base
    //- se encuentra en src/components/Muestras.vue
    //- Una vez el componente "Muestras" no se necesite 
    //- Se debe borrar el "import Muestras from '../components/Muestras'" y en "components" en "<script"
    //- esto evitará que se compile en la carpeta final de distribución
    //- Muestras
    .titulo-principal.color-acento-contenido(data-aos="fade")
      .titulo-principal__numero
        span 1
      h1 Normativa relacionada con riesgos de agua potable
    .row.justify-content-center
      .col-xl-7.col-sm-12(data-aos="slide-left")
        p.mb-5 En materia de lineamientos, políticas y normas legales relacionadas con la prestación del servicio público domiciliario de acueducto, el cual tiene que ver con el tratamiento y la distribución de agua destinada al consumo humano, el 
          span.text-bold Ministerio de Vivienda, Ciudad y Territorio (MVCT), a través del Viceministerio de Agua y Saneamiento Básico
          span , es la entidad encargada de propiciar el desarrollo sostenible, formulando y adoptando políticas, programas, proyectos y la regulación para el acceso de la población a agua potable y saneamiento básico , así como expidiendo la reglamentación relacionada, formulando programas y apoyando financieramente a los municipios de país que no pueda atender las inversiones que se requieran en el tema de agua y saneamiento, 
          span.text-bold ver figura 1 (Ministerio de Vivienda, Ciudad y Territorio, s.f.).
      .col-xl-5.col-sm-6(data-aos="slide-right")
        img(src='@/assets/curso/tema1/imagen1.png')

    .row.justify-content-center.mt-5.mb-3.fondo1.py-5
      .col-xl-10.col-sm-12
        .titulo-sexto.color-acento-contenido(data-aos="fade")
          h5 Figura 1
          span Interfaz de la página web del Viceministerio de Agua y Saneamiento Básico
        img(src='@/assets/curso/tema1/imagen2.png')(data-aos="slide-left")

    p.mt-5 Con base en lo anterior, en Colombia se cuenta con la normativa relacionada con el control de los riesgos en sistemas de agua para consumo humano, la cual se presenta a continuación.
    separador
    #res330.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.1. Resolución 330 de 2017
    p.mt-5.mb-3 Una de las funciones de los ministerios del país es “señalar los requisitos técnicos que deben cumplir las obras, equipos y procedimientos que utilicen las empresas de servicios públicos del sector, cuando la comisión respectiva haya resuelto por vía general que ese señalamiento es realmente necesario para garantizar la calidad del servicio, y que no implica restricción indebida de la competencia”, de acuerdo con el 
      span.text-bold numeral 67.1 de la Ley 142 de 1994
      span , por la cual se establece el régimen de los servicios públicos domiciliarios y se dictan otras disposiciones.
    p-mb-5 Teniendo en cuenta esta premisa:
    .row.mt-4.fondo1
      .col-12.mt-4
        .row.justify-content-center.py-5
          .col-12(data-aos="slide-left")
            p.ms-5.me-3 El MVCT expidió en el año 2017 el reglamento técnico del sector de agua potable y saneamiento Básico-RAS. Dicha resolución establece los requisitos técnicos que se deben tener en cuenta en los diseños, las obras y procedimientos complementarios de proyectos relacionados con el sector de agua potable y saneamiento básico, adelantados por las entidades que prestan los servicios públicos municipales de acueducto, alcantarillado y aseo.
            p.ms-5.me-3 Establece la reglamentación en la infraestructura de los sistemas de agua y saneamiento de las directrices que se deben cumplir en las etapas de:

            .row.justify-content-center.align-items-center
              .col-xl-6.col-sm-12.mb-5.mb-sm-0.mt-5(data-aos="slide-up")
                ol.lista-ol--cuadro.lista-ol--separador.ms-5
                  li 
                    .lista-ol--cuadro__vineta
                      span.color-nro 1
                    | Planeación
                  li 
                    .lista-ol--cuadro__vineta
                      span 2
                    | Diseño
                  li 
                    .lista-ol--cuadro__vineta
                      span 3
                    | Construcción
                  li 
                    .lista-ol--cuadro__vineta
                      span 4
                    | Puesta en marcha
                  li 
                    .lista-ol--cuadro__vineta
                      span 5
                    | Operación
                  li 
                    .lista-ol--cuadro__vineta
                      span 6
                    | Mantenimiento
                  li 
                    .lista-ol--cuadro__vineta
                      span 7
                    | Rehabilitación
                p.my-4.ms-5.me-3 Específicamente dentro de la Resolución 330 de 2017, el artículo 106 define el nivel de riesgo sanitario de sistemas de abastecimiento de agua destinada al consumo humano. La norma establece textualmente:
              .col-xl-6.col-sm-12(data-aos="slide-down")
                img.reducir(src='@/assets/curso/tema1/figura1.svg')
                p.mb-5.ms-5.me-3.text-bold.mt-4 Las personas prestadoras deberán definir los riesgos sanitarios presentes y potenciales hacia el futuro en la microcuenca de la fuente de abastecimiento, de acuerdo con la siguiente información:

        .row.justify-content-center
          .col-xl-8.col-sm-12(data-aos="flip-left")
            ImagenInfograficaB.color-acento-botones.mb-5
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/infografia1.svg')

              div(x="2.6%" y="32.25%" tooltip="Click para leer..." numero="+")
                p Mapas de riesgo existentes asociados a la fuente de abastecimiento

              div(x="16.5%" y="76%" tooltip="Click para leer...")
                p Visitas de inspección sanitaria de acuerdo con la 
                  span.text-bold resolución número 82 de 2009 
                  span del entonces ministerio de protección social o aquella que la adicione, modifique o sustituya y concepto sanitario según el 
                  span.text-bold decreto número 1575 de 2007 
                  span del entonces ministerio de la protección social, o aquella que la reglamente, adicione, modifique o sustituya y la 
                  span.text-bold resolución conjunta número 2115 de 2007 
                  span de los entonces ministerios de protección social y ministerio de ambiente, vivienda y desarrollo territorial en su 
                  span.text-bold artículo 28
                  span , o aquella que la adicione, modifique o sustituya.

              div(x="50%" y="96.8%" tooltip="Click para leer...")
                p Clasificación de riesgo en salud por Índice de Riesgo de la Calidad del Agua para Consumo Humano (IRCA) según artículos 13, 14 y 15 de la resolución conjunta número 2115 de 2007 de los entonces ministerios de protección social y ministerio de ambiente, vivienda y desarrollo territorial, o aquella que la adicione, modifique o sustituya.
              div(x="84.1%" y="76%" tooltip="Click para leer...")
                p Clasificación de riesgo en salud por índice de riesgo municipal por abastecimiento de agua para consumo humano (IRABAm) según artículos 17, 18 y 19 de la resolución conjunta número 2115 de 2007 de los entonces ministerios de protección social y ministerio de ambiente, vivienda y desarrollo territorial, o aquella que la adicione, modifique o sustituya.
              div(x="97.5%" y="32.25%" tooltip="Click para leer..." numero="+")
                p Recopilación de información para elaboración de los mapas de riesgo, según el artículo 4° de la resolución conjunta número 4716 de 2010 de los entonces ministerios de protección social y ministerio de ambiente, vivienda y desarrollo territorial”.
    separador
    #dec1575.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.2 Decreto 1575 de 2007 y Resolución 2115 de 2007
    p.mb-5 Teniendo en cuenta la calidad del agua entregada a la población, el 
      span.text-bold Decreto 1575 de 2007 
      span establece en el 
      span.text-bold artículo 1 
      span como su objeto:

    .row.justify-content-center.mb-2
      .col-10(data-aos="zoom-in")
        .bloque-texto-g.fondo2.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/figura2.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Establecer el sistema para la protección y control de la calidad del agua, con el fin de monitorear, prevenir y controlar los riesgos para la salud humana causados por su consumo, exceptuando el agua envasada. Aplica a todas las personas prestadoras que suministren o distribuyan agua para consumo humano, ya sea cruda o tratada, en todo el territorio nacional, independientemente del uso que de ella se haga para otras actividades económicas, a las direcciones territoriales de salud, autoridades ambientales y sanitarias y a los usuarios.

    .row.justify-content-center.align-items-center.my-5
      .col-xl-5.col-sm-6(data-aos="slide-up")
        img.mb-4(src='@/assets/curso/tema1/imagen3.png')
      .col-xl-7.col-sm-12(data-aos="slide-down")
        p En dicho decreto se establece que 
          span.text-bold las autoridades sanitarias deben llevar a cabo las inspecciones sanitarias 
          span para recopilar información, conocer, analizar y evaluar los riesgos asociados al sistema de abastecimiento. De igual manera, dicha inspección debe ser útil en el momento de la identificación de los factores asociados al riesgo que se relacionan con prácticas operativas inadecuadas y con la determinación de la calidad del agua que se suministra en el sistema. 
        p El 
          span.text-bold decreto 1575 (artículo 7)
          span , establece que el 
          span.text-bold Instituto Nacional de Salud (INS) 
          span debe cumplir, entre otras, con las funciones relacionadas a continuación:

    .row.mb-5.justify-content-center.align-items-center
      .col-12.col-sm-6.col-lg-4.col-xl-3.mb-4.mb-lg-0(data-aos="flip-right")
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.fondo3.p-4.tamano
          .row.justify-content-center.mb-3
            .col-7(data-aos="flip-down")
              figure
                img(src='@/assets/componentes/tema1/microscopio.svg')

          p Coordinación de la red nacional de laboratorios para el control y la vigilancia de la calidad del agua para consumo humano, estableciendo las orientaciones a los laboratorios prestadores del servicio de los análisis físicos, químicos y microbiológicos.

      .col-12.col-sm-6.col-lg-4.col-xl-3.mb-4.mb-lg-0(data-aos="slide-left")
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.fondo3.p-4.tamano
          .row.justify-content-center.mb-3
            .col-7(data-aos="flip-right")
              figure
                img(src='@/assets/componentes/tema1/lupa.svg')

          p Coordinación del programa interlaboratorio de control de calidad del agua potable - PICCAP.

      .col-12.col-sm-6.col-lg-4.col-xl-3.mb-4.mb-sm-0(data-aos="slide-right")
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.fondo3.p-4.tamano
          .row.justify-content-center.mb-3
            .col-7(data-aos="zoom-up")
              figure
                img(src='@/assets/componentes/tema1/celulas.svg')

          p Inscripción en el programa interlaboratorio de control de calidad para agua potable - PICCAP, a laboratorios pertenecientes a la red de salud pública y los laboratorios privados que lo soliciten (nacionales o extranjeros) que lleven a cabo análisis físicos, químicos o microbiológicos de agua para consumo humano.
    .row.align-items-center.justify-content-center.my-5
      .col-xl-7.col-12(data-aos="flip-right")
        p.mb-4 Es así como el 
          span.text-bold decreto 1575 
          span presenta las responsabilidades concernientes a:
        ul.lista-ul--color
          li 
            i.fas.fa-thumbtack
            p Las direcciones departamentales, distritales y municipales de salud (en el 
              span.text-bold artículo 8
              span ). 
          li 
            i.fas.fa-thumbtack
            p Las empresas prestadoras del servicio de acueducto (
              span.text-bold artículo 9
              span ).
          li 
            i.fas.fa-thumbtack
            p Los usuarios (
              span.text-bold artículo 10
              span ).
      .col-xl-3.col-6(data-aos="zoom-right")
        img.mb-3(src='@/assets/curso/tema1/figura3.svg')

    p.mb-5(data-aos="flip-right") Otro aspecto relevante que se establece en el decreto tiene que ver con los indicadores y herramientas necesarias para la vigilancia de los factores de riesgo de calidad de agua suministrada en el sistema, estableciendo en el 
      span.text-bold artículo 12 
      span el índice de riesgo de la calidad del agua para consumo humano (
      span.text-bold  IRCA
      span ), el cual se define como el grado de riesgo de ocurrencia de enfermedades relacionadas con el incumplimiento de características físico-químicas y microbiológicas del agua en redes de distribución de agua potable. 

    .row
      .col-xl-12
        .cajon.color-secundario.py-3.px-5.mb-4(data-aos="flip-right")
          .row.justify-content-center.align-items-center
            .col-xl-1.col-md-4.col-sm-4.col-5
              img(src='@/assets/curso/tema1/figura4.svg')
            .col-xl-11.col-md-12
              p.mt-2 Dentro del 
                span.text-bold  artículo 15 
                span del 
                span.text-bold decreto 1575 
                span se contempla la elaboración del mapa de riesgo de calidad del agua para consumo humano, que debe ser realizado por la autoridad sanitaria departamental o distrital y por la autoridad ambiental competente, en la jurisdicción que se encuentre el sistema.
    p.mt-5(data-aos="flip-left") En relación con la 
      span.text-bold resolución 2115 de 2007 
      span se tiene que:
    p.my-5(data-aos="flip-right") Contempla las características o parámetros, los instrumentos básicos y las frecuencias en el sistema de control y vigilancia para la calidad del agua de consumo humano, se establecen los valores máximos aceptables en los parámetros físicos, químicos y microbiológicos del agua para consumo humano.
    p.mb-5(data-aos="flip-up") De esta manera, la 
      span.text-bold resolución establece valores máximos 
      span para los siguientes parámetros:

    .row
      .col-xl-6.col-sm-12(data-aos="flip-left")
        ul.lista-ul--color
          li.fondo15.pt-3.ps-3
            i.fas.fa-microscope.color-micro
            p.text-bold Artículo 2
              span.nuevo-font . Color aparente, olor y sabor, turbiedad 
          li.fondo15.pt-3.ps-3
            i.fas.fa-microscope.color-micro
            p.text-bold Artículo 3
              span.nuevo-font . Conductividad
          li.fondo15.pt-3.ps-3 
            i.fas.fa-microscope.color-micro
            p.text-bold Artículo 4
              span.nuevo-font . pH
          li.fondo15.pt-3.ps-3 
            i.fas.fa-microscope.color-micro
            p.text-bold Artículo 5
              span.nuevo-font . Características químicas con efecto adverso en la salud
          li.fondo15.pt-3.ps-3 
            i.fas.fa-microscope.color-micro
            p.text-bold Artículo 6
              span.nuevo-font . Características químicas con implicaciones sobre salud humana
      .col-xl-6.col-sm-12(data-aos="flip-right")
        ul.lista-ul--color
          li.fondo15.pt-2.px-3.pb-0 
            i.fas.fa-microscope.color-micro
            p.text-bold.mb-0 Artículo 7
              span.nuevo-font . Características químicas con mayores consecuencias económicas e indirectas sobre la salud humana
          li.fondo15.pt-2.px-3.pb-0 
            i.fas.fa-microscope.color-micro
            p.text-bold.mb-0 Artículo 8
              span.nuevo-font . Características químicas en relación con plaguicidas y otras sustancias

          li.fondo15.pt-2.px-3.pb-0 
            i.fas.fa-microscope.color-micro
            p.text-bold.mb-0 Artículo 9
              span.nuevo-font . Características químicas de otras sustancias del proceso de potabilización
          li.fondo15.pt-3.px-3.pb-0
            i.fas.fa-microscope.color-micro
            p.text-bold Artículo 11
              span.nuevo-font . Características microbiológicas

    .tarjeta.fondo-azul.p-4.mb-5(data-aos="zoom-up")
      SlyderA(tipo="b")
        .row.align-items-center.justify-content-center
          .col-md-6
            figure
              img.mb-3.ancho-img(src='@/assets/template/tema1/imagen1.png', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            p.me-3.ms-0 Con un adecuado control de las anteriores características por parte de las autoridades sanitarias y de las empresas prestadoras, encargadas de la operación de sistemas de tratamiento y distribución de agua potable, se esperará que los 
              span.text-bold factores que ponen en riesgo la calidad de agua sean minimizados.

        .row.align-items-center
          .col-md-6
            figure
              img.mb-3.ancho-img(src='@/assets/template/tema1/imagen2.png')
          .col-md-6.mb-4.mb-md-0
            p.me-3.ms-0.mt-5 Otro componente fundamental de la 
              span.text-bold resolución 2115 
              span , está establecido en los 
              span.text-bold  artículos 21 y 22 del capítulo V
              span , donde se relacionan las frecuencias y número de muestras para el control de la calidad fisicoquímica del agua se invita al aprendiz a consultar el 
              span.text-bold cuadro 11 del artículo 21 de la resolución 2115 
              span ubicada en la sección de material complementario así como las frecuencias y número de muestras de control de la calidad microbiológica del agua ubicadas en el 
              span.text-bold cuadro 12 del artículo 22 de la resolución 2115.
        .row.align-items-center
          .col-md-6
            figure
              img.mb-3.ancho-img(src='@/assets/template/tema1/imagen3.png')
          .col-md-6.mb-4.mb-md-0
            p.mt-3.me-3.ms-0 Es necesario consultar y tener en cuenta lo establecido en el 
              span.text-bold parágrafo 1 del artículo 21 de la resolución 2115
              span , en el cual se establece que en el caso de emplear sales metálicas de hierro y aluminio como coagulante deben cumplirse las frecuencias establecidas en el 
              span.text-bold cuadro 11 de la resolución 2115
              span , pero cuando se haga uso de otro coagulante, las frecuencias mínimas para la medición deben tomarse tal cual como se presenta en el 
              span.text-bold parágrafo 1 del artículo 21 presente en la resolución 2115.
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            p.ms-2 La autoridad sanitaria también debe ejercer vigilancia de la calidad física, química y microbiológica del agua para consumo humano, de acuerdo con lo establecido en los 
              span.text-bold artículos 24, 25, 26 y 27 de la Resolución 2115 de 2007
              span , según lo presentado en la siguiente tabla:
          .col-md-6
            figure
              img.me-2(src='@/assets/template/tema1/tabla.svg')
              figcaption.fondo5
                p.text-bold Nota. 
                  span.nuevo-font Adaptado de la 
                  span.text-bold Resolución 2115 de 2007, artículos 24, 25, 26 y 27.
    separador
    #res4716.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.3 Resolución 4716 de 2010
    .row.justify-content-center.align-items-center
      .col-xl-7.col-sm-12(data-aos="fade-right")
        .cajon-b.fondo6.p-3.mb-5
          p.mb-0 La 
            span.text-bold Resolución 4716 de 2010
            span , reglamenta el parágrafo perteneciente al 
            span.text-bold  artículo 15 del Decreto 1575 de 2007
            span , en relación con la elaboración, revisión y actualización del mapa de riesgo de calidad del agua para consumo humano, responsabilidad de la autoridad sanitaria departamental o distrital y la autoridad ambiental competente.
      .col-xl-3.col-sm-6(data-aos="flip-right")
        img(src='@/assets/curso/tema1/figura5.svg')

    .cajon.color-primario.p-4.my-5
      .row.justify-content-center.align-items-center
        .col-xl-11.col-md-12(data-aos="zoom-up")
          p El 
            span.text-bold artículo 15 del decreto 1575 de 2007 
            span establece que dichas autoridades “deberán coordinar con los comités de vigilancia epidemiológica departamentales, distritales y municipales - 
            span.text-bold COVES 
            span -, con las personas prestadoras que suministran o distribuyen agua para consumo humano y con la administración municipal; la identificación de los factores de riesgo y las características físicas, químicas y microbiológicas de las fuentes de agua aferentes a las captaciones de acueducto que puedan afectar la salud humana, contribuyendo con ello a las acciones de inspección, vigilancia y control por parte de las autoridades competentes”. 
        .col-xl-1.col-md-4.col-sm-4.col-5(data-aos="flip-down")
          img(src='@/assets/curso/tema1/figura4.svg')
    .row.justify-content-center.mt-4
      .col-xl-4.col-sm-8(data-aos="flip-right")
        img.mb-4(src='@/assets/curso/tema1/imagen4.png')
      .col-xl-8.col-sm-12(data-aos="flip-up")
        p De igual forma, el mismo 
          span.text-bold artículo 15 del decreto 1575 
          span contempla que “la revisión y actualización del mapa de riesgo de la calidad del agua para consumo humano de los sistemas de abastecimiento y red de distribución de la respectiva jurisdicción, se hará anualmente con base en la información suministrada por las autoridades ambientales competentes y secretarias de planeación municipal, según las normas legales vigentes”. 
        .cajon.color-secundario.p-4.mb-4
          p La 
            span.text-bold resolución 4716 
            span establece en su 
            span.text-bold artículo 1 
            span que su objeto es “establecer las condiciones, recursos y obligaciones mínimas que deben cumplir las autoridades sanitaria departamental, distrital y municipal categoría especial, 1, 2 y 3 y ambiental competente, para elaborar los mapas de riesgo de la calidad del agua para consumo humano”.
    separador
    #res811.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.4 Resolución 811 de 2008

    .cajon.color-primario.p-4.my-5(data-aos="fade-right")
      .row.justify-content-center.align-items-center
        .col-xl-11.col-md-12
          p El 
            span.text-bold La Resolución 811 de 2008 
            span tiene por objeto “establecer los lineamientos para que en forma concertada la autoridad sanitaria y las personas prestadoras que suministran y distribuyen agua para consumo humano, definan en su área de influencia los lugares y puntos para recolectar las muestras de agua para consumo humano en la red de distribución. Dichos lineamientos, deben  ser utilizados para llevar a cabo las acciones de control y vigilancia de la calidad del agua”. 
        .col-xl-1.col-md-4.col-sm-4.col-5
          img(src='@/assets/curso/tema1/figura4.svg')

    p.my-5(data-aos="flip-right") De esta manera, en la 
      span.text-bold resolución 811:

    .row.justify-content-center
      .col-xl-5.col-sm-12
        .tarjeta--container.row.mb-5.tamano-tar(data-aos="zoom")
          .col-md.tarjeta.borde-der.fondo10.p-5.mb-5
            .row.justify-content-center.mb-4
              .col-4.col-xl-4
                figure
                  img(src='@/assets/componentes/tema1/libro.svg')
              
            p.text-dark Según el 
              span.text-bold.text-dark artículo 2
              span.text-dark , los puntos de muestreo en redes de distribución del sistema de agua potable deben instalarse teniendo en cuenta los planos del sistema de redes de distribución o el catastro de redes de distribución. sin embargo, se invita al aprendiz a consultar los lineamientos del 
              span.text-bold.text-dark artículo 2 de la resolución 811
              span.text-dark , ubicada en la sección de material complementario, en donde se establecen los criterios mínimos para la ubicación de los puntos de muestreo.
      .col-xl-5.col-sm-12(data-aos="fade-right")
        .tarjeta--container.row.mb-5.tamano-tar
          .col-md.tarjeta.fondo13.p-5.borde-izq.mb-5
            .row.justify-content-center.mb-4
              .col-4.col-xl-4
                figure
                  img(src='@/assets/componentes/tema1/libro.svg')
              
            p.text-dark(data-aos="fade-in") El 
              span.text-bold.text-dark artículo 3 
              span.text-dark establece el número mínimo de puntos de muestreo en la red de distribución, de acuerdo con el número de habitantes de la población atendida por el sistema, el cual es muy importante para consultarlo dentro de la norma.
    separador
    #dec4741.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.5 Decreto 4741 de 2005 (compilado en el Decreto 1076 de 2015)

    .row.justify-content-center.align-items-center
      .col-xl-3.col-sm-4(data-aos="flip-right")
        img(src='@/assets/curso/tema1/figura6.svg')
      .col-xl-7.col-sm-10(data-aos="flip-up")
        .bloque-texto-b.fondo9.p-4
          .bloque-texto-b__texto
            p El Decreto 4741 de 2005, el cual fue compilado en el Decreto 1076 de 2015, establece la reglamentación en materia de la gestión de los residuos peligrosos. 
            p En el campo de la gestión de riesgo en sistemas de tratamiento y distribución de agua es importante debido a que en las operaciones unitarias se pueden emplear sustancias que pueden convertirse en residuos peligrosos. Esta normativa tiene por objeto que se prevenga la generación de residuos peligrosos, e igualmente que se regule el manejo de los residuos generados, para la protección de la salud humana y del ambiente.

    .cajon.color-secundario.p-4.mb-4.my-5(data-aos="fade-down")
      p El decreto 4741 (compilado en el decreto 1076, artículo 2.2.6.1.1.3), define como residuo o desecho a “cualquier objeto, material, sustancia, elemento o producto que se encuentra en estado sólido o semisólido, o es un líquido o gas contenido en recipientes o de pósitos, cuyo generador descarta, rechaza o entrega porque sus propiedades no permiten usarlo nuevamente en la actividad que lo generó o porque la legislación o la normatividad vigente así lo estipula”.
    p.mb-5 En este decreto se definen conceptos como:

    .row.justify-content-center.justify-content-center
      .col-xl-4.col-sm-8.mb-4
        .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor.fondo5
            .tarjeta-flip__img.imagen-conf(:style="{'background-image': `url(${require('@/assets/curso/tema1/sustanciapeligrosa.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              p.text-bold Residuo peligroso
              span “Aquel residuo o desecho que, por sus características corrosivas, reactivas, explosivas, tóxicas, inflamables, infecciosas o radiactivas, puede causar riesgos, daños o efectos no deseados, directos e indirectos, a la salud humana y el ambiente. Así mismo, se considerará residuo peligroso los empaques, envases y embalajes que estuvieron en contacto con ellos”. 

      .col-xl-4.col-sm-8.mb-4
        .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor.fondo11
            .tarjeta-flip__img.imagen-conf(:style="{'background-image': `url(${require('@/assets/curso/tema1/figura8.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              p.text-bold Riesgo
              span “Probabilidad o posibilidad de que el manejo, la liberación al ambiente y la exposición a un material o residuo, ocasionen efectos adversos en la salud humana y/o al ambiente”.

    p.mt-5(data-aos="flip-right") En el 
      span.text-bold Anexo I 
      span del decreto se establece un listado de residuos o desechos peligrosos clasificados por procesos o actividades, de acuerdo con la 
      span.text-bold Ley 253 de 1996
      span , que aprueba el Convenio de Basilea (control de movimientos transfronterizos de los residuos peligrosos y su eliminación).

    p(data-aos="flip-in") Es importante consultar el 
      span.text-bold Anexo III del decreto 4741 
      span ubicado en la sección material complementario, en el cual se definen las características de peligrosidad de los residuos.
    separador
    #dec1609.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.6 Decreto 1609 de 2002

    .bloque-texto-g.fondo16.p-3.p-sm-4.p-md-5.my-5(data-aos="flip-right")
      .bloque-texto-g__img.bloque-texto-img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/figura7.svg')})`}"
      )
      .bloque-texto-texto.p-4
        p.mb-0 En concordancia con el 
          span.text-bold Decreto 4741 de 2005
          span , el 
          span.text-bold Decreto 1609 de 2002 
          span reglamenta del manejo y transporte terrestre automotor por carretera de mercancías peligrosas.
          br
          br
        p.mb-0 El objeto del 
          span.text-bold decreto 1609
          span , de acuerdo con el 
          span.text-bold  artículo 1
          span , “establecer los requisitos técnicos y de seguridad para el manejo y transporte de mercancías peligrosas por carretera en vehículos automotores en todo el territorio nacional, con el fin de minimizar los riesgos, garantizar la seguridad y proteger la vida y el medio ambiente, de acuerdo con las definiciones y clasificaciones establecidas en la 
          span.text-bold Norma Técnica Colombiana NTC 1692”. 

    .tarjeta.fondo12.mb-5.disminuir.paddCelTop.p-3
      .row.justify-content-around.align-items-center(data-aos="flip-right")
        .col-md.col-lg-9
          p.mb-4.text-white.ms-4.mt-2 Con el fin de aprender más de esta norma técnica se invita al aprendiz a consultarla en la base de datos del 
            span.text-bold ICONTEC
            span , disponible en las bases de datos del 
            span.text-bold Sistema de Bibliotecas del SENA 
          
          a.boton.color-acento-botones.ms-4(:href="('https://biblioteca.sena.edu.co/paginas/bases.html')" target="_blank" type="text/html")
            span Consultar
            i.fas.fa-search
        .col-8.col-sm-6.col-md-3.mb-4.mb-md-0
          img.aumentar.mover-arriba(src="@/assets/componentes/tema1/imagen2.png")  
    .row.justify-content-center.align-items-center
      .col-xl-5.col-12
        img.mb-4(src="@/assets/curso/tema1/imagen5.png")(data-aos="flip-left")
      .col-xl-7.col-12
        p(data-aos="flip-left") Su alcance y aplicación aplica en el 
          span.text-bold artículo 2
          span , “al transporte terrestre y manejo de mercancías peligrosas, los cuales comprenden todas las operaciones y condiciones relacionadas con la movilización de estos productos, la seguridad en los envases y embalajes, la preparación, envío, carga, segregación, transbordo, trasiego, almacenamiento en tránsito descarga y recepción en el destino final. El manejo y transporte se considera tanto en condiciones normales, como las ocurridas en accidentes que se produzcan durante el traslado y almacenamiento en tránsito”. 
        p(data-aos="flip-left") En el 
          span.text-bold artículo 4 
          span establece el rotulado y etiquetado de embalajes y envases, las pruebas de ensayo, marcado y requisitos de los embalajes y envases y los requisitos generales para el transporte por carretera de mercancías peligrosas. 

</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    BannerInterno,
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
