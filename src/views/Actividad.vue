<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-tasks" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.tarjeta--azul.h-100.d-flex.align-items-center(data-aos="flip-left")
          figure
            img(src="@/assets/curso/actividad/FALSOYVERDADERO.png", alt="Texto que describa la imagen")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo(data-aos="fade")
          h2 Actividad didáctica 1
        p.mb-4 Establecer la comprensión de conceptos relacionados con el diagnóstico de riesgos en sistemas de tratamiento de agua potable.
        .tarjeta.tarjeta--azul.p-3(data-aos="flip-right")
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Preguntas de Falso/Verdadero.
            .col-auto(data-aos="zoom-left")
              a.boton.boton--b(:href="obtenerLink('/actividades/actividad.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece

</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Actividad',
  components: {
    BannerInterno,
  },
}
</script>

<style lang="sass"></style>
