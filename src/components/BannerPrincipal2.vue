<template lang="pug">
.banner-principal
  .container.tarjeta.position-relative(
    :style="{'background-image': globalData.fondoBannerPrincipal ? `url(${globalData.fondoBannerPrincipal})` : 'none'}"
  )
    .row.banner-principal__row.position-relative.justify-content-center.align-items-center
      .col-lg-7.col-xxl-6.py-4.py-sm-5.banner-principal__info.ps-5
        .banner-principal__componente
          h1.mb-0(v-html="globalData.componenteFormativo")
        .col-lg-12
          .banner-principal__descripcion
            p.mb-0(v-html="globalData.descripcionCurso")
        .banner-principal__accion
          router-link.boton(:to="{name: iniciarLnk.nombreRuta }")
            span.me-1 Ver más
            i.fas.fa-angle-right

      .d-none.d-lg-block.col-lg-5.px-0.banner-principal__img
        img(:src="globalData.imagenBannerPrincipal" style="width: 350px;")
    //--.imagen_flotante_1.d-none.d-xl-block: img(src="@/assets/curso/inicio/float1.svg")
    //--.imagen_flotante_2.d-none.d-xl-block: img(src="@/assets/curso/inicio/float2.svg")
    //--.imagen_flotante_3.d-none.d-xl-block: img(src="@/assets/curso/inicio/float3.svg")
    //--.imagen_flotante_4.d-none.d-xl-block: img(src="@/assets/curso/inicio/float4.svg")
    //--.imagen_flotante_5.d-none.d-xl-block: img(src="@/assets/curso/banner-principal.png")
  

</template>

<script>
import mixins from '../components/plantillaMixins'
export default {
  name: 'BannerPrincipal',
  mixins: [mixins],
  computed: {
    globalData() {
      return this.$config.global
    },
  },
}
</script>

<style lang="sass">
.fondo-contenido
  position: absolute
  padding: 0px
  z-index: 2
  height: 100%
  width: 100%
.banner-principal__info
  padding-left: 80px  !important
  z-index: 3
.banner-principal
  p, h1, h2, h3, h4, h5, h6
    color: $color-banner-text
  .tarjeta
    background-color: $color-banner-fondo
    background-size: cover
    background-position: center
  &__info
    display: flex
    flex-direction: column
    justify-content: center
  &__programa
    display: flex
    align-items: center
    margin-bottom: 20px
  &__componente
    margin-bottom: 20px
    h1
      line-height: 1.1em
      @media (max-width: $bp-max-xs)
        font-size: 2em
  &__descripcion
    margin-bottom: 20px
  &__row
    @if $banner-principal-img-x == 'derecha'
      justify-content: space-between
    @else
      justify-content: space-around
      .banner-principal__img
        padding-right: 1.5rem!important
      @media (min-width: $bp-min-sm)
        .banner-principal__img
          padding-right: 3rem!important
  &__img
    animation: scale 1s ease-in-out infinite alternate
    @if $banner-principal-img-y == 'arriba'
      align-self: flex-start
      padding-bottom: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-bottom: 3rem!important
    @else if $banner-principal-img-y == 'abajo'
      align-self: flex-end
      padding-top: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-top: 3rem!important
    @else
      align-self: center
      padding-top: 1.5rem
      padding-bottom: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-top: 3rem!important
        padding-bottom: 3rem!important
.imagen_flotante
  &_1
    animation: float1 3s ease-in-out infinite alternate
    position: absolute
    width: 70px
    bottom: 30px
    left: 55%
  &_2
    animation: float1 3.5s ease-in-out infinite alternate
    position: absolute
    width: 60px
    bottom: 35%
    left: 80%
  &_3
    animation: float1 3.8s ease-in-out infinite alternate
    position: absolute
    width: 60px
    bottom: 50%
    left: 55%
  &_4
    animation: float1 4s ease-in-out infinite alternate
    position: absolute
    width: 30px
    top: 21%
    left: 81%
    z-index: 99
  &_5
    animation: float1 3.9s ease-in-out infinite alternate
    position: absolute
    width: 65px
    top: 45%
    left: 85%
    z-index: 99
  &_6
    filter: blur(2px)
    animation: float1 2.7s ease-in-out infinite alternate
    position: absolute
    width: 167px
    top: 30%
    right: 3%
    z-index: 99
  &_7
    animation: float1 2.5s ease-in-out infinite alternate
    position: absolute
    width: 50px
    bottom: 10%
    right: 3%
    z-index: 99
  &_8
    filter: blur(1px)
    animation: float1 3s ease-in-out infinite alternate
    position: absolute
    width: 50px
    bottom: 20%
    right: 8%
    z-index: 99
@keyframes float1
  0%
    transform: translate(30px,30px)
  100%
    transform: translate(0px)
@keyframes scale
  0%
    transform: scale(1.1)
  100%
    transform: scale(1)
@media (max-width: $bp-max-md)
  .fondo-contenido
    display: none
  .fondo-contenido2
    background-repeat: no-repeat
    background-size: cover
</style>
