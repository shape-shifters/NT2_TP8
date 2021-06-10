<template>
  <section class="src-componentes-navbar">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      
      <router-link to="/">
        <a class="navbar-brand" href="#">Home</a>
      </router-link>

      <button class="navbar-toggler" 
      type="button" 
      data-toggle="collapse" 
      data-target="#navbarNav" 
      aria-controls="navbarNav" 
      aria-expanded="false" 
      aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/formulario">
              <a class="nav-link" href="#">P1 - Formulario</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/punto2">
              <a class="nav-link" href="#">P2 - Componente</a>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-componentes-navbar',
    props: []
}
</script>
<style scoped lang="css">

a {
  text-decoration: none;
}

.navbar-brand {
  padding-left: 35px;
}
</style>

