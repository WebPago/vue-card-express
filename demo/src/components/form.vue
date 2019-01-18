<template>
  <div class="Demo">
      <h1>Demo - vue card express</h1>
      <div id="form">
       <div class="number">
          <div class="numero">
            <label for="">Numero</label>
            <input type="number" v-model='card.number'>
          </div>
          <div class="data">
            <div class="mes">
                <label for="">Mês</label>
                <input type="number" v-model='card.mes'>
            </div>
            <div class="ano">
              <label for="">Ano</label>
              <input type="number" v-model='card.ano'>
            </div>
          </div>
        </div>
        <div class="nome">
            <div class="nomecartao">
                <label for="">Nome</label>
                <input type="text" v-model='card.nome'>
            </div>
            <div class="data">
                <label for="">CVV</label>
                <input type="number" v-model='card.cvv'>
            </div>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      required: true
    }
  },
  data: () => ({
    card: {
    }
  }),
  mounted () {
    this.card = {
      number: '000000000000000',
      ano: '2018',
      cvv: '085',
      mes: '05',
      nome: 'WEBPAGO SA'
    }
  },
  watch: {
    value () {
      this.value = this.card
    },
    card () {
      this.$emit('input', this.card)
    }
  }
}
</script>
<style lang="stylus" scoped>
.Demo
  h1
    color red
  #form
    padding 20px
    background: #eee
    margin 10px
    label
      margin 5px
      margin-left 0px
      text-align: left
    .number
      display flex
      justify-content: center;
      align-items: center;
      label
        margin 5px
        margin-left 0px
      .numero
        width 80%
        display flex
        justify-content: center;
        flex-direction:column;
        text-align: left
        padding 10px
      .data
        display flex
        justify-content: center;
        align-items: center;
        text-align: left
        input
          max-width:50px
        .mes
          display flex
          justify-content: center;
          flex-direction: column;
          text-align: left;
          padding 10px
          label
            margin 5px
            margin-left 0px
            text-align: left
        .ano
          display flex
          justify-content: center;
          flex-direction: column;
          text-align: left;
          padding 10px
          label
            margin 5px
            margin-left 0px
            text-align: left
    .nome
      display flex
      justify-content: center;
      align-items: center;
      label
        margin 5px
        margin-left 0px
      .nomecartao
        display flex
        justify-content: center;
        flex-direction: column;
        padding 10px
        width 90%
        label
          margin 5px
          margin-left 0px
      .data
        display flex
        justify-content: center;
        flex-direction: column;
        padding 10px
        label
          margin 5px
          margin-left 0px
        input
          max-width: 50px
</style>
