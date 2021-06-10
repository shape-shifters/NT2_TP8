<template>

  <section class="src-componentes-http">
    <div class="jumbotron">
      <h2>Punto 2 - Componente</h2>
      <hr>
      
      <button class="btn btn-secondary my-3 mr-3" @click="clearData()">LIMPIAR DATOS</button>
      <button class="btn btn-info my-3 mr-3" @click="getPostsAxiosThenCatch()">AXIOS - THEN/CATCH</button>
      <button class="btn btn-success my-3 mr-3" @click="getPostsAxiosAsyncAwait()">AXIOS - ASYNC/AWAIT</button> 
      
      <div v-if="posts.length" class="table-responsive">
        <table class="table table-dark">
          <tr>
            <th v-for="(col,index) in getCols" :key="index">{{col}}</th>
          </tr>
          <tr v-for="(post,index) in posts" :key="index">
            <td v-for="(col,index) in getCols" :key="index">{{post[col]}}</td>
          </tr>
        </table>
        <h4 class="alert alert-primary">Se encontraron {{posts.length}} usuarios</h4>
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
      this.getPostsAxiosThenCatch()
    },
    data () {
      return {
        url: 'https://60aeb9365b8c300017deb261.mockapi.io/users',
        posts : []
        
      }
    },
    methods: {
      clearData(){
        this.posts = {}
      },

      // AXIOS THEN/CATCH
      getPostsAxiosThenCatch() {
          this.axios(this.url)
          .then( respuesta => {
            console.log('AXIOS GET THEN/CATCH', respuesta.data);
            this.posts = respuesta.data
          })
          .catch(error => console.error(error))
      },

      // AXIOS ASYNC/AWAIT
      async getPostsAxiosAsyncAwait() {
          try {
            let respuesta = await this.axios(this.url)
            console.log('AXIOS GET ASYNC/AWAIT', respuesta.data)
            this.posts = respuesta.data
          } 
        catch (error) {
          console.error(error)
        }
      }
    },
    computed: {
      getCols() {
        return Object.keys(this.posts[0])
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
</style>