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
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Normativa relacionada con riesgos de agua potable
    .row.justify-content-center
      .col-xl-7.col-sm-12
        p.mb-5 En materia de lineamientos, políticas y normas legales relacionadas con la prestación del servicio público domiciliario de acueducto, el cual tiene que ver con el tratamiento y la distribución de agua destinada al consumo humano, el 
          span.text-bold Ministerio de Vivienda, Ciudad y Territorio (MVCT), a través del Viceministerio de Agua y Saneamiento Básico
          span , es la entidad encargada de propiciar el desarrollo sostenible, formulando y adoptando políticas, programas, proyectos y la regulación para el acceso de la población a agua potable y saneamiento básico , así como expidiendo la reglamentación relacionada, formulando programas y apoyando financieramente a los municipios de país que no pueda atender las inversiones que se requieran en el tema de agua y saneamiento, 
          span.text-bold ver figura 1 (Ministerio de Vivienda, Ciudad y Territorio, s.f.).
      .col-xl-5.col-sm-6
        img(src='@/assets/curso/tema1/imagen1.png')

    .row.justify-content-center.mt-5.mb-3.fondo1.py-5
      .col-xl-10.col-sm-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 1
          span Interfaz de la página web del Viceministerio de Agua y Saneamiento Básico
        img(src='@/assets/curso/tema1/imagen2.svg')

    p.my-5 Con base en lo anterior, en Colombia se cuenta con la normativa relacionada con el control de los riesgos en sistemas de agua para consumo humano, la cual se presenta a continuación.

    #resolucion.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1. Resolución 330 de 2017
    p.mt-5.mb-3 Una de las funciones de los ministerios del país es “señalar los requisitos técnicos que deben cumplir las obras, equipos y procedimientos que utilicen las empresas de servicios públicos del sector, cuando la comisión respectiva haya resuelto por vía general que ese señalamiento es realmente necesario para garantizar la calidad del servicio, y que no implica restricción indebida de la competencia”, de acuerdo con el 
      span.text-bold numeral 67.1 de la Ley 142 de 1994
      span , por la cual se establece el régimen de los servicios públicos domiciliarios y se dictan otras disposiciones.
    p-mb-5 Teniendo en cuenta esta premisa:
    .row.justify-content-center.fondo1.py-5
      .col-12
        p.ms-5 El MVCT expidió en el año 2017 el reglamento técnico del sector de agua potable y saneamiento Básico-RAS. Dicha resolución establece los requisitos técnicos que se deben tener en cuenta en los diseños, las obras y procedimientos complementarios de proyectos relacionados con el sector de agua potable y saneamiento básico, adelantados por las entidades que prestan los servicios públicos municipales de acueducto, alcantarillado y aseo.
        p.ms-5 Establece la reglamentación en la infraestructura de los sistemas de agua y saneamiento de las directrices que se deben cumplir en las etapas de:

    .row.justify-content-center.align-items-center
      .col-xl-6.col-sm-12.mb-5.mb-sm-0.mt-5
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span 1
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
              span 4
            | Operación
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Mantenimiento
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Rehabilitación
        p.my-5 Específicamente dentro de la Resolución 330 de 2017, el artículo 106 define el nivel de riesgo sanitario de sistemas de abastecimiento de agua destinada al consumo humano. La norma establece textualmente:
      .col-xl-6.col-sm-12
        img.mt-4.reducir(src='@/assets/curso/tema1/figura1.svg')
        p.my-5 Las personas prestadoras deberán definir los riesgos sanitarios presentes y potenciales hacia el futuro en la microcuenca de la fuente de abastecimiento, de acuerdo con la siguiente información:

    .row.justify-content-center
      .col-xl-8.col-sm-12
        ImagenInfograficaB.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/infografia1.svg')

          div(x="2.6%" y="32.25%" tooltip="tooltip de max 35 caracteres" numero="+")
            p Mapas de riesgo existentes asociados a la fuente de abastecimiento

          div(x="16.5%" y="76%" tooltip="tooltip de max 35 caracteres")
            p Visitas de inspección sanitaria de acuerdo con la 
              span.text-bold resolución número 82 de 2009 
              span del entonces ministerio de protección social o aquella que la adicione, modifique o sustituya y concepto sanitario según el 
              span.text-bold decreto número 1575 de 2007 
              span del entonces ministerio de la protección social, o aquella que la reglamente, adicione, modifique o sustituya y la 
              span.text-bold resolución conjunta número 2115 de 2007 
              span de los entonces ministerios de protección social y ministerio de ambiente, vivienda y desarrollo territorial en su 
              span.text-bold artículo 28
              span , o aquella que la adicione, modifique o sustituya.

          div(x="50%" y="96.8%" tooltip="tooltip de max 35 caracteres")
            p Clasificación de riesgo en salud por Índice de Riesgo de la Calidad del Agua para Consumo Humano (IRCA) según artículos 13, 14 y 15 de la resolución conjunta número 2115 de 2007 de los entonces ministerios de protección social y ministerio de ambiente, vivienda y desarrollo territorial, o aquella que la adicione, modifique o sustituya.
          div(x="84.1%" y="76%" tooltip="tooltip de max 35 caracteres")
            p Clasificación de riesgo en salud por índice de riesgo municipal por abastecimiento de agua para consumo humano (IRABAm) según artículos 17, 18 y 19 de la resolución conjunta número 2115 de 2007 de los entonces ministerios de protección social y ministerio de ambiente, vivienda y desarrollo territorial, o aquella que la adicione, modifique o sustituya.
          div(x="97.5%" y="32.25%" tooltip="tooltip de max 35 caracteres" numero="+")
            p Recopilación de información para elaboración de los mapas de riesgo, según el artículo 4° de la resolución conjunta número 4716 de 2010 de los entonces ministerios de protección social y ministerio de ambiente, vivienda y desarrollo territorial”.

    #dec1575.titulo-segundo.color-acento-contenido.mt-5(data-aos="flip-up")
      h2 1.2 Decreto 1575 de 2007 y Resolución 2115 de 2007
    p.mb-5 Teniendo en cuenta la calidad del agua entregada a la población, el 
      span.text-bold Decreto 1575 de 2007 
      span establece en el 
      span.text-bold artículo 1 
      span como su objeto:

    .row.justify-content-center.mb-2
      .col-10
        .bloque-texto-g.fondo2.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/figura2.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Establecer el sistema para la protección y control de la calidad del agua, con el fin de monitorear, prevenir y controlar los riesgos para la salud humana causados por su consumo, exceptuando el agua envasada. Aplica a todas las personas prestadoras que suministren o distribuyan agua para consumo humano, ya sea cruda o tratada, en todo el territorio nacional, independientemente del uso que de ella se haga para otras actividades económicas, a las direcciones territoriales de salud, autoridades ambientales y sanitarias y a los usuarios.

    .row.justify-content-center.align-items-center.my-5
      .col-xl-5.col-sm-6
        img.mb-4(src='@/assets/curso/tema1/imagen3.png')
      .col-xl-7.col-sm-12
        p En dicho decreto se establece que 
          span.text-bold las autoridades sanitarias deben llevar a cabo las inspecciones sanitarias 
          span para recopilar información, conocer, analizar y evaluar los riesgos asociados al sistema de abastecimiento. De igual manera, dicha inspección debe ser útil en el momento de la identificación de los factores asociados al riesgo que se relacionan con prácticas operativas inadecuadas y con la determinación de la calidad del agua que se suministra en el sistema. 
        p El 
          span.text-bold decreto 1575 (artículo 7)
          span , establece que el 
          span.text-bold Instituto Nacional de Salud (INS) 
          span debe cumplir, entre otras, con las funciones relacionadas a continuación:

    .row.mb-5.justify-content-center.align-items-center
      .col-12.col-sm-6.col-lg-4.col-xl-3.mb-4.mb-lg-0
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.fondo3.text-white--hover.p-4.tamano
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/componentes/tema1/microscopio.svg')

          p Coordinación de la red nacional de laboratorios para el control y la vigilancia de la calidad del agua para consumo humano, estableciendo las orientaciones a los laboratorios prestadores del servicio de los análisis físicos, químicos y microbiológicos.

      .col-12.col-sm-6.col-lg-4.col-xl-3.mb-4.mb-lg-0
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.fondo4.text-white--hover.p-4.tamano
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/componentes/tema1/lupa.svg')

          p Coordinación del programa interlaboratorio de control de calidad del agua potable - PICCAP.

      .col-12.col-sm-6.col-lg-4.col-xl-3.mb-4.mb-sm-0
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.fondo3.text-white--hover.p-4.tamano
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/componentes/tema1/celulas.svg')

          p Inscripción en el programa interlaboratorio de control de calidad para agua potable - PICCAP, a laboratorios pertenecientes a la red de salud pública y los laboratorios privados que lo soliciten (nacionales o extranjeros) que lleven a cabo análisis físicos, químicos o microbiológicos de agua para consumo humano.
    .row.align-items-center.my-5
      .col-xl-7.col-12
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
      .col-xl-3.col-6
        img(src='@/assets/curso/tema1/figura3.svg')

    p.mb-5 Otro aspecto relevante que se establece en el decreto tiene que ver con los indicadores y herramientas necesarias para la vigilancia de los factores de riesgo de calidad de agua suministrada en el sistema, estableciendo en el 
      span.text-bold artículo 12 
      span el índice de riesgo de la calidad del agua para consumo humano (
      span.text-bold  IRCA
      span ), el cual se define como el grado de riesgo de ocurrencia de enfermedades relacionadas con el incumplimiento de características físico-químicas y microbiológicas del agua en redes de distribución de agua potable. 

    .row
      .col-xl-12
        .cajon.color-secundario.p-4.mb-4
          .row.justify-content-center
            .col-xl-1.col-md-6.col-sm-6
              img(src='@/assets/curso/tema1/figura4.svg')
            .col-xl-11.col-md-12
              p Dentro del 
                span.text-bold  artículo 15 
                span del 
                span.text-bold decreto 1575 
                span se contempla la elaboración del mapa de riesgo de calidad del agua para consumo humano, que debe ser realizado por la autoridad sanitaria departamental o distrital y por la autoridad ambiental competente, en la jurisdicción que se encuentre el sistema.
    p.mt-5 En relación con la 
      span.text-bold resolución 2115 de 2007 
      span se tiene que:
    p.my-5 Contempla las características o parámetros, los instrumentos básicos y las frecuencias en el sistema de control y vigilancia para la calidad del agua de consumo humano, se establecen los valores máximos aceptables en los parámetros físicos, químicos y microbiológicos del agua para consumo humano.
    p.mb-5 De esta manera, la 
      span.text-bold resolución establece valores máximos 
      span para los siguientes parámetros:

    .row
      .col-xl-6.col-sm-12
        ul.lista-ul--color
          li 
            i.fas.fa-microscope.color-micro
            p.text-bold Artículo 2
            span . Color aparente, olor y sabor, turbiedad 
          li 
            i.fas.fa-microscope.color-micro
            p.text-bold Artículo 3
            span . Conductividad
          li 
            i.fas.fa-microscope.color-micro
            p.text-bold Artículo 4
            span . pH
          li 
            i.fas.fa-microscope.color-micro
            p.text-bold Artículo 5
              span.nuevo-font . Características químicas con efecto adverso en la salud
          li 
            i.fas.fa-microscope.color-micro
            p.text-bold Artículo 6
              span.nuevo-font . Características químicas con implicaciones sobre salud humana
      .col-xl-6.col-sm-12
        ul.lista-ul--color
          li 
            i.fas.fa-microscope.color-micro
            p.text-bold Artículo 7
              span.nuevo-font . Características químicas con mayores consecuencias económicas e indirectas sobre la salud humana
          li 
            i.fas.fa-microscope.color-micro
            p.text-bold Artículo 8
              span.nuevo-font . Características químicas en relación con plaguicidas y otras sustancias

          li 
            i.fas.fa-microscope.color-micro
            p.text-bold Artículo 9
              span.nuevo-font . Características químicas de otras sustancias del proceso de potabilización
          li 
            i.fas.fa-microscope.color-micro
            p.text-bold Artículo 11
              span.nuevo-font . Características microbiológicas

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
