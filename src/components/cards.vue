<template>
  <div class="cartao">
    <div class="frente">
      <div class="corpo">
        <div class="chip">
          <img src='./../statics/chipcartao.png' />
        </div>
        <div class="numero">
          {{number | formattype}}
        </div>
        <div class="rodape">
          <div class="dados">
            <div class="datas">
              {{mes}} / {{ano}}
            </div>
            <div class="nome">
              {{nome}}
            </div>
          </div>
          <div class="bandeira">
            <img :src="bandeiraImg" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="verso">
      <div class="corpo">
        <div class="tarja">
          <div class="magnetica">

          </div>
        </div>
        <div class="cvv">
          {{cvv}}
        </div>
        <div class="bandeira">
          <img :src="bandeiraImg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import v from './../bin/binCards'
export default {
  props: {
    number: {
      default: '0000 0000 0000 0000',
      required: true
    },
    cvv: {
      required: true
    },
    mes: {
      default: '00'
    },
    ano: {
      default: '0000'
    },
    nome: {
      default: 'NOME CLIENTE'
    }
  },
  filters: {
    formattype (value) {
      return value
    }
  },
  data: () => ({
    bandeira: null,
    numberInicio: '0000 0000 0000 0000'
  }),
  computed: {
    bandeiraImg () {
      if (this.bandeira) {
        return './../statics/' + this.bandeira + '.svg'
      }
      else {
        return './../statics/noBandeira.svg'
      }
    }
  },
  methods: {
    BuscarBandeira () {
      if (this.number) {
        if (this.SomenteNumeros(this.number).length >= 13) {
          var card = v.validaCards(this.SomenteNumeros(this.number), this.cvv)
          this.bandeira = card.type
        }
        else {
          this.bandeira = null
        }
      }
    },
    SomenteNumeros (value) {
      var numero = ''
      for (var x = 0; x < value.length; x++) {
        numero += value.charAt(x).replace(' ', '')
      }
      return numero
    }
  },
  watch: {
    cvv () {
      this.BuscarBandeira()
    },
    number () {
      this.BuscarBandeira()
    }
  }
}
</script>
<style lang="stylus" scoped>
.cartao
  display flex
  flex-direction column
  align-items center
  justify-content center
  .frente
    background linear-gradient(#afafaf, #dddddd, #ccc, #afafaf)
    width 250px
    height 150px
    border-radius 10px
    box-shadow 2px 1px 0px #ccc
    border 1px solid #cccc
    overflow hidden
    .corpo
      background url('./../statics/mapacartao.png') no-repeat center
      padding 10px
      height 100%
      .chip
        margin-top 25px
        img
          max-width 40px
    .numero
      height 25px
      margin-top 5px
      font-weight bold
      text-shadow:1px 0px 2px #5f5f5f
    .rodape
      display flex
      flex-direction row
      .dados
         width 70%
         font-size 13px
         text-shadow:1px 0px 2px #5f5f5f
         font-weight bold
         .datas
           text-align center
           padding 6px
          .nome
            font-size 11px
            padding 2px
      .bandeira
         width 30%
         display flex
         justify-content center
         img
           width 100%
           max-width 100px
  .verso
    background linear-gradient(#afafaf, #dddddd, #ccc, #afafaf)
    margin-top 10px
    width 250px
    height 150px
    border-radius 10px
    box-shadow 2px 1px 0px #ccc
    border 1px solid #cccc
    overflow hidden
    .corpo
      background url('./../statics/mapacartao.png') no-repeat center
      height 100%
      margin 0px
      .tarja
        width 100%
        padding-top 20px
        .magnetica
           height 40px
           background #000
           width 100%
      .cvv
        height 30px
        background #fff
        margin 5px
        max-width 180px
        padding 5px
        text-align: right
       .bandeira
         padding 10px
         img
           width 100%
           max-width 50px

</style>
