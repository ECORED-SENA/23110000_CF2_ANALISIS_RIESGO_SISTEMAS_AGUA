<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido(data-aos="fade")
      .titulo-principal__numero
        span.texto-blanco 2
      h1 Mapas de riesgo en sistemas de tratamiento y distribución de agua potable

    .row.justify-content-center
      .col-xl-7.col-10(data-aos="flip-left")
        p Tal como se anotó en los anteriores contenidos, se deben crear mapas de riesgo de los sistemas de tratamiento y distribución de agua para consumo humano. Para tal fin en primer lugar es necesario conocer los principios básicos del muestreo de agua potable, establecer el cálculo del Índice de 
          span.text-bold Riesgo de la Calidad del Agua Potable (IRCA) 
          span y elaborar el mapa de riesgo.
      .col-xl-3.col-5(data-aos="flip-up")
        img(src='@/assets/curso/tema2/figura1.svg')
    #principios.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 2.1. Principios básicos de muestreo de agua potable
    p.my-5(data-aos="flip-down") En este apartado se debe tener en cuenta lo establecido en el “Manual de Instrucciones para la Toma, Preservación y Transporte de Muestras de Agua de Consumo Humano para Análisis de Laboratorio”, elaborado por el 
      span.text-bold Instituto Nacional de Salud (INS) 
      span en el año 2011, ubicado en la sección material complementario.
    .row.justify-content-center.align-items-center
      .col-xl-4.col-md-5.col-sm-10(data-aos="flip-left")
        img.mb-4(src='@/assets/curso/tema2/imagen1.png')
      .col-xl-8.col-md-7.col-sm-12(data-aos="zoom-in")
        p En dicho manual se establecen los “elementos básicos que deben tener en cuenta los técnicos y operarios de las Personas Prestadoras del servicio de acueducto y las autoridades sanitarias correspondientes, para el establecimiento y realización de programas de monitoreo de calidad del agua para consumo humano, y cubre aspectos contenidos en el decreto 1575 de mayo 09 de 2007 y la resolución 2115 de junio 22 de 2007 por el cual se establece el sistema para la protección y control de la calidad del agua para consumo humano” (Instituto Nacional de Salud-INS, 2011).
        p El manual, contiene los lineamientos de muestreo de agua potable necesarios para la gestión del riesgo de sistemas de tratamiento y distribución de agua potable, y sus objetivos son: 
    .row.justify-content-center
      .col-lg-5.col-md-5.col-sm-10.px-0.mt-4.ms-3
        .tarjeta-avatar.efecto-tarjeta.fondo7.pt-3
          .row
            .col-xl-12(data-aos="flip-left")
              img(src='@/assets/curso/tema2/imagen2.png')
              p.mt-5.mx-4.mb-5 Establecer directrices para aplicar técnicas de muestreo de agua en los sistemas de distribución municipal, destinada para el consumo humano, con el fin de evaluar su calidad cuando esta es entregada en forma continua o intermitente por sistemas colectivos de distribución municipal, ya sea con distribución domiciliaria o a través de pilas públicas, en cumplimiento de lo dispuesto en el decreto 1575 de 2007 y sus resoluciones complementarias.
      .col-lg-5.col-md-5.col-sm-10.px-0.me-4.mt-4.ms-3
        .tarjeta-avatar.efecto-tarjeta.fondo8.pt-3
          .row
            .col-xl-12(data-aos="zoom-up")
              img(src='@/assets/curso/tema2/imagen3.png')
              p.mt-5.mx-4 Aplicar procedimientos de muestreo de sistemas individuales como los de las viviendas rurales dispersas que tienen sus propios sistemas de abastecimiento y a los suministros de agua potable obtenidos de fuentes no continuas de agua en bloque como carro tanques, aviones, trenes, barcos, etc.

    .row.justify-content-center.my-5.align-items-center
      .col-xl-8.col-sm-12(data-aos="fade-left")
        p El campo de aplicación del manual incluye “los procedimientos para la toma de muestras en la red de distribución, en la red pública o el sistema de distribución, definido como el conjunto de tuberías, accesorios, estructuras y equipos que conducen el agua desde el tanque de almacenamiento o planta de tratamiento hasta las acometidas domiciliarias. Es en la red de distribución donde la Persona Prestadora debe controlar la calidad del agua para consumo humano y las Direcciones departamentales, distritales y municipales de salud realizar sus acciones de vigilancia de esta calidad, en cumplimiento de su responsabilidad como autoridad sanitaria” (Instituto Nacional de Salud-INS, 2011).
      .col-xl-4.col-sm-8(data-aos="flip-up")
        img(src='@/assets/curso/tema2/imagen4.png')

    #calculo.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 2.2. Cálculo del Índice de Riesgo de la Calidad del Agua Potable (IRCA)

    .row.mb-5.justify-content-center.align-items-center
      .col-xl-3.col-sm-8(data-aos="flip-down")
        img.mb-4(src='@/assets/curso/tema2/figura2.svg')
      .col-xl-7.col-sm-10(data-aos="zoom-left")
        p El Índice de 
          span.text-boldRiesgo de la Calidad del Agua Potable (IRCA) 
          span hace parte de los instrumentos básicos que garantizan la calidad del agua para consumo humano, especificado en el 
          span.text-bold artículo 13 de la Resolución 2115 de 2007
          span . En la 
          span.text-bold resolución 2115 
          span se asigna el puntaje de riesgo contemplado en la 
          span.text-bold tabla 1 
          span a cada característica física, química y microbiológica, por el no cumplimiento de los valores aceptables establecidos.

    .titulo-sexto.color-acento-contenido(data-aos="fade")
      h5 Tabla 1
      span Puntaje de riesgo de las características fisicoquímicas y microbiológicas para el cálculo del 
      span.text-bold IRCA

    .row.justify-content-center
      .col-xl-10.col-lg-10.col-md-10(data-aos="flip-left")
        .tarjeta.fondo-azul.p-4.mb-5
          SlyderA(tipo="b")
            .row.justify-content-center
              .col-md-8.col-xl-8
                .tabla-a.color-acento-contenido.my-5
                  table
                    caption Nota. Resolución 2115 (2007). 
                    thead
                      tr
                        th.ancho-columna1 Características
                        th.ancho-columna2 Puntaje de riesgo
                    tbody
                      tr.fondo-blanco
                        td 
                          span.ms-5 Color Aparente
                        td.text-center 6
                      tr.fondo-gris
                        td 
                          span.ms-5 Turbiedad
                        td.text-center 15
                      tr.fondo-blanco
                        td 
                          span.ms-5 Ph
                        td.text-center 1,5
                      tr.fondo-gris
                        td 
                          span.ms-5 Cloro Residual Libre
                        td.text-center 15
                      tr.fondo-blanco
                        td 
                          span.ms-5 Alcalinidad Total
                        td.text-center 1
                      tr.fondo-gris
                        td 
                          span.ms-5 Calcio
                        td.text-center 1
                      tr.fondo-blanco
                        td 
                          span.ms-5 Fosfatos
                        td.text-center 1
                      tr.fondo-gris
                        td 
                          span.ms-5 Manganeso
                        td.text-center 1
            .row.justify-content-center
              .col-md-8.col-xl-8
                .tabla-a.color-acento-contenido.my-5
                  table
                    caption Nota. Resolución 2115 (2007). 
                    thead
                      tr
                        th.ancho-columna1 Características
                        th.ancho-columna2 Puntaje de riesgo
                    tbody
                      tr.fondo-blanco
                        td 
                          span.ms-5 Molibdeno
                        td.text-center 1
                      tr.fondo-gris
                        td 
                          span.ms-5 Magnesio
                        td.text-center 1
                      tr.fondo-blanco
                        td 
                          span.ms-5 Zinc
                        td.text-center 1
                      tr.fondo-gris
                        td 
                          span.ms-5 Dureza Total
                        td.text-center 1
                      tr.fondo-blanco
                        td 
                          span.ms-5 Sulfatos
                        td.text-center 1
                      tr.fondo-gris
                        td 
                          span.ms-5 Hierro Total
                        td.text-center 1,5
                      tr.fondo-blanco
                        td 
                          span.ms-5 Cloruros
                        td.text-center 1
                      tr.fondo-gris
                        td 
                          span.ms-5 Nitratos
                        td.text-center 1

            .row.justify-content-center.align-items-top
              .col-md-8.col-xl-8
                .tabla-a.color-acento-contenido.my-5
                  table
                    caption Nota. Resolución 2115 (2007). 
                    thead
                      tr
                        th.ancho-columna1 Características
                        th.ancho-columna2 Puntaje de riesgo
                    tbody
                      tr.fondo-blanco
                        td 
                          span.ms-5 Nitritos
                        td.text-center 3
                      tr.fondo-gris
                        td 
                          span.ms-5 Aluminio (Al3+)
                        td.text-center 3
                      tr.fondo-blanco
                        td 
                          span.ms-5 Fluoruros
                        td.text-center 1
                      tr.fondo-gris
                        td 
                          span.ms-5 COT
                        td.text-center 3
                      tr.fondo-blanco
                        td 
                          span.ms-5 Coliformes Totales
                        td.text-center 15
                      tr.fondo-gris
                        td 
                          span.ms-5 Escherichia Coli
                        td.text-center 25
                      tr.fondo-blanco
                        td.text-bold 
                          span.ms-5 Sumatoria de puntajes asignados
                        td.text-bold.text-center 100
                      tr.fondo-gris

    p.mb-5 De acuerdo con los puntajes anteriores:

    .row
      .col-12.fondo14
        .row
          .col-lg-6(data-aos="flip-left")
            p.my-5 En el artículo 14 de la resolución 2115, se establece el procedimiento de cálculo del IRCA, de acuerdo con las siguientes ecuaciones:
        .row.justify-content-end
          .col-lg-8(data-aos="zoom-in")
            TabsC.mover-arriba2
              .py-3.py-md-4.me-3(titulo="IRCA mensual")
                .row.justify-content-end
                  .col-md-12.mb-4.mb-md-0(data-aos="flip-left")
                    img(src='@/assets/curso/tema2/formula1.svg')
              .py-3.py-md-4(titulo="IRCA por muestra")
                .row
                  .col-md-12.mb-4.mb-md-0(data-aos="flip-right")
                    img(src='@/assets/curso/tema2/formula2.svg')
        .row.justify-content-center.my-5
          .col-xl-10(data-aos="zoom-left")
            p Si el cálculo del 
              span.text-bold IRCA
              span  arroja un 
              span.text-bold resultado cero (0) 
              span puntos quiere decir que se está cumpliendo con los valores aceptables para cada una de las características fisicoquímicas y microbiológicas. Por el contrario, si el 
              span.text-bold resultado es de cien puntos (100)
              span , quiere decir que existe el más alto riesgo, por el no cumplimiento de ninguna de las características mencionadas.
            p Es importante mencionar que el parágrafo del 
              span.text-bold artículo 13 
              span de la 
              span.text-bold resolución 2115
              span , establece que “si los resultados de los elementos, compuestos químicos y mezclas de compuestos químicos, contemplados en los 
              span.text-bold artículos 5° y 8° 
              span de la presente resolución, exceden los valores máximos aceptables, al valor del 
              span.text-bold IRCA 
              span se le asignará el puntaje máximo de 
              span.text-bold 100 puntos 
              span independientemente de los otros resultados. Igualmente, se le asignará el valor de 100 puntos si hay presencia de 
              span.text-bold Giardia y Cryptosporidium
              span , teniendo en cuenta los plazos estipulados en el 
              span.text-bold artículo 34° 
              span de esta resolución”.

    .row.justify-content-center
      .col-md-12.col-xl-12(data-aos="fade-left")
        .tabla-a.color-acento-contenido.my-5
          table
            caption Nota. Resolución 2115 (2007). 
            thead
              tr
                th Clasificación IRCA (%)
                th Nivel de riesgo
                <th style="width: 30%;"> IRCA por muestra (notificaciones que adelantará la autoridad sanitaria de manera inmediata)</th>
                <th style="width: 40%;"> IRCA mensual (Acciones)</th>
            tbody
              tr.fondo-blanco
                td 
                  span.ms-4 80,1 -100
                td.text-center Inviable sanitaria-
                  span mente
                td 
                  span Informar a la persona prestadora, al COVE, alcalde, gobernador, SSPD, MPS, INS, MAVDT, contraloría y procuraduría generales.
                td Agua no apta para consumo humano, gestión directa de acuerdo con su competencia de la persona prestadora, alcaldes, gobernadores y entidades del orden nacional.
              tr.fondo-gris
                td 
                  span.ms-4 35,1 - 80
                td.text-center Alto
                td 
                  span Informar a la persona prestadora, COVE, alcalde, gobernador y a la SSPD. 
                td 
                  span Agua no apta para consumo humano, gestión directa de acuerdo con su competencia de la persona prestadora y de los alcaldes y gobernadores respectivos.         
              tr.fondo-blanco
                td 
                  span.ms-4 14,1 - 35
                td.text-center Medio
                td 
                  span Informar a la persona prestadora, COVE, alcalde y gobernador.
                td Agua no apta para consumo humano, gestión directa de la persona prestadora.
              tr.fondo-gris
                td 
                  span.ms-4 5,1 - 14
                td.text-center Bajo
                td 
                  span Informar a la persona prestadora y al COVE.
                td Agua no apta para consumo humano, susceptible de mejoramiento.
              tr.fondo-blanco
                td 
                  span.ms-4 0 - 5
                td.text-center Sin riesgo
                td 
                  span Continuar el control y la vigilancia
                td Agua apta para consumo humano. Continuar la vigilancia.

    .row.my-5.justify-content-center.align-items-center
      .col-xl-3.col-sm-8.col-6(data-aos="flip-left")
        img.mb-4(src='@/assets/curso/tema2/figura3.svg')
      .col-xl-7.col-sm-10(data-aos="flip-up")
        p En el 
          span.text-bold artículo 16 de la resolución 2115 
          span se establece el procedimiento de registro del 
          span.text-bold IRCA
          span , en el cual se establece que el cálculo del valor de los 
          span.text-bold IRCA 
          span de tipo mensual de control los debe llevar a cabo la empresa prestadora, quien los suministrará al 
          span.text-bold Sistema Único de Información - SUI 
          span de la 
          span.text-bold Superintendencia de Servicios Públicos Domiciliarios

    .cajon.color-primario.p-4.my-5
      .row.justify-content-center.align-items-center
        .col-xl-12.col-md-12.p-4(data-aos="flip-down")
          p También establece que “la autoridad sanitaria de los municipios categoría 1, 2 y 3 calculará los IRCA provenientes de los resultados de las muestras de vigilancia y los reportará a la autoridad sanitaria departamental de su jurisdicción. Los IRCA de los municipios categoría 4, 5 y 6 serán calculados por la autoridad sanitaria departamental. En ambos casos, la autoridad sanitaria departamental remitirá esta información al subsistema de vigilancia de la calidad del agua – SIVICAP del Instituto Nacional de Salud”.
    #mapas.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 2.3. Elaboración de mapas de riesgo

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.my-5(data-aos="flip-left")
      .bloque-texto-g__img.bloque-texto-img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/imagen5.png')})`}"
      )
      .bloque-texto-texto.p-4
        p.mb-0 Como se estableció en el 
          span.text-bold numeral 1.3 
          span del presente 
          span.text-bold Componente Formativo, la 
          span.text-bold Resolución 4716 de 2010
          span , establece la elaboración de los mapas relacionados con el riesgo de la calidad de agua potable en las poblaciones del país.
        p Específicamente, se hace fundamental revisar, consultar y apropiar lo consignado en el 
          span.text-bold artículo 4 
          span de la 
          span.text-bold resolución 4716
          span , ubicada en la sección material complementario, en el cual se establece que, para la recopilación de la información del mapa de riesgo, la autoridad sanitaria debe realizar las acciones que se presentan en dicho artículo.
    p De igual manera, es importante realizar la consulta del 
      span.text-bold artículo 7 de la resolución 4716
      span , en donde se establecen las frecuencias y número de muestras de agua para control y vigilancia de las características físicas, químicas y microbiológicas definidas en el mapa de riesgo de la calidad del agua para consumo humano.
    p Para complementar el tema del mapa de riesgo de la calidad de agua potable se sugiere visualizar el video denominado “Mapa De Riesgo del agua para consumo humano, UESVALLE”, ubicado en la sección de material complementario.


</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
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
