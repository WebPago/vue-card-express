# vue-card-express

Leitor de Bin de Cartões 

![img](https://raw.githubusercontent.com/WebPago/vue-card-express/master/imagens/elo.JPG)


# install 

- npm i vue-card-express


# import 
- import vueCard from 'vue-card-express'


# exemplo 
```js
<script>
 import vueCard from 'vue-card-express'
 export default {
   components: {
     vueCard
   },
   data: () => ({
     number: '000000000000000',
     ano: 2018,
     cvv: 888,
     mes: 04,
     nome: 'WEBPAGO SA'
   })
 }
</script>
<template>
   <div>
      <vue-card :number='number' :cvv='cvv' :mes='mes'
         :ano='ano' :nome='nome'
       ></vue-card>
   </div>
</template>
````
