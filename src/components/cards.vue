<template>
  <div class="cartao">
      <div class="frente" v-if="animacaolado(1)">
        <div class="corpo">
          <div class="numero">
            {{formattypeNumber()}}
          </div>
          <div class="rodape">
            <div class="dados">
              <div class="nome">
                {{nome}}
              </div>
              <div class="datas">
                VÁLIDO ATE: {{mes}} / {{ano}}
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
      <div class="verso" v-if="animacaolado(2)">
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
      required: true,
      default: '000'
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
    },
    animate: {
      default: false,
      type: Boolean
    },
    side: {
      default: 0
    }
  },
  data: () => ({
    bandeira: null,
    numberInicio: '0000 0000 0000 0000'
  }),
  mounted () {
    this.formataValore()
  },
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
    formataValore () {
      // if (!this.mes) {
      //   this.mes = '00'
      // }
      // if (!this.ano) {
      //   this.ano = '0000'
      // }
      // if (!this.nome) {
      //   this.nome = 'WEBPAGO INC'
      // }
      // if (!this.cvv) {
      //   this.cvv = '000'
      // }
    },
    formattypeNumber () {
      if (this.number) {
        if (this.SomenteNumeros(this.number).length >= 13) {
          var card = v.validaCards(this.SomenteNumeros(this.number), this.cvv)
          if (card) {
            if (card.type) {
              var result = this.number.toString().replace(card.format, '$1 ')
              return result
            }
          }
        }
        return this.SomenteNumeros(this.number)
      }
      return '0000 0000 0000 0000'
    },
    animacaolado (lado) {
      if (this.animate) {
        if (this.side === 0 && lado == 1) return true
        else if (this.side === lado) return true
        else return false
      }
      return true
    },
    BuscarBandeira () {
      if (this.number) {
        if (this.SomenteNumeros(this.number).length >= 13) {
          var card = v.validaCards(this.SomenteNumeros(this.number), this.cvv)
          if (card) {
            this.bandeira = card.type
          }
        }
        else {
          this.bandeira = null
        }
      }
    },
    SomenteNumeros (value) {
      var numero = ''
      for (var x = 0; x < value.length; x++) {
        numero += value.charAt(x).replace(/\D/g, '')
      }
      return numero
    }
  },
  watch: {
    side () {
      this.formataValore()
    },
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
