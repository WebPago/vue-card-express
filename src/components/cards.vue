<template>
  <div class="cartao">
    <div class="frente">
      <div class="corpo">
        <div class="chip">
          <img src='./../img/chipcartao.png' />
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
            <div :class="bandeiraImg">
            </div>
            <!-- <img :src="bandeiraImg" alt=""> -->
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
          <div :class="bandeiraImg">
          </div>
          <!-- <img :src="bandeiraImg" alt=""> -->
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
      default: '00',
      required: true
    },
    ano: {
      default: '0000',
      required: true
    },
    nome: {
      default: 'NOME CLIENTE',
      required: true
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
        return this.bandeira
      }
      else {
        return 'noBandeira'
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
@import './style.styl'
.noBandeira
 background: url('./../img/noBandeira.svg') no-repeat center
 width 100%
.mastercard
 background: url('./../img/mastercard.svg') no-repeat center
 width 100%
.amex
 background: url('./../img/amex.svg') no-repeat center
 width 100%
.citi
 background: url('./../img/citi.svg') no-repeat center
 width 100%
.elo
 background: url('./../img/elo.svg') no-repeat center
 width 100%
.jcb
 background: url('./../img/jcb.svg') no-repeat center
 width 100%
.visa
 background: url('./../img/visa.svg') no-repeat center
 width 100%
.dinersclub
 background: url('./../img/dinersclub.svg') no-repeat center
 width 100%
</style>
