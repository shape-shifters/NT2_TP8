<template>
  <div id="app" class="container-fluid mt-3">
    <div class="jumbotron">
      <h1>TRABAJO PRÁCTICO NRO. 6</h1>
      <br>
      <Navbar />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import Navbar from './componentes/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
#app {

}

.jumbotron {
  padding: 32px !important;
}

h1 {
  color: rgb(115, 209, 115);
}

</style>
