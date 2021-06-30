<template>

  <section class="src-componentes-http">
    <div class="jumbotron">
      <h2>Punto 2 - Componente</h2>
      <hr>
      
      <button class="btn btn-secondary my-3 mr-3" @click="clearData()">LIMPIAR DATOS</button>
      <button class="btn btn-info my-3 mr-3" @click="getUsersThenCatch()">AXIOS - THEN/CATCH</button>
      <button class="btn btn-success my-3 mr-3" @click="getUsers()">AXIOS - ASYNC/AWAIT</button> 
      
      <div v-if="$store.state.users.length" class="table-responsive">
        <table class="table table-dark">
          <tr>
            <th v-for="(col,index) in getCols" :key="index">{{col}}</th>
          </tr>
          <tr v-for="(user,index) in $store.state.users" :key="index">
            <td v-for="(col,index) in getCols" :key="index">{{user[col]}}</td>
          </tr>
        </table>
        <h4 class="alert alert-primary">Se encontraron {{$store.state.users.length}} usuarios</h4>
      </div>
      <h4 v-else class="alert alert-danger">No se encontraron datos de usuarios para mostrar</h4>

    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-componentes-http',
    props: [],
    
    mounted () {
      this.getUsersThenCatch()
    },

    data () {
      return {
        users: []
      }
    },

    methods: {
      
      getUsersThenCatch() {
        this.$store.dispatch('getUsersThenCatch')
      },

      async getUsers(){
        this.$store.dispatch('getUsers')
      },

      clearData(){
        this.$store.state.users = {}
      }

    },

    computed: {
      getCols() {
        return Object.keys(this.$store.state.users[0])
      }
    }
  }

</script>

<style scoped lang="css">
  .jumbotron {
    background: rgb(180,221,180);
    color: white;
  }

  hr {
    background-color: #fff;
  }

  button {
    margin-right: 20px;
  }
</style>