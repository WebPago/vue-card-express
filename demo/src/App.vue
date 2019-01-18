<template>
  <div id="app">
    <div class="container">
      <c-form v-model="card"></c-form>
      <vue-card :number='card.number'
      :mes='card.mes' :ano='card.ano'
      :nome='card.nome' :cvv='card.cvv'
      />
    </div>
  </div>
</template>

<script>
import vueCard from 'vue-card-express'
import cForm from './components/form'
export default {
  components: {
    cForm, vueCard
  },
  name: 'app',
  data () {
    return {
      card: {}
    }
  }
}
</script>

<style lang="scss">
#app {
  color: #2c3e50;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ddd;
  padding: 25px;
  border-radius: 5px;
  border: 1px solid #ccc
}
</style>
