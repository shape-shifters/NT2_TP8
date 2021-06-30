
export default {
  name: 'src-componentes-formulario',
  components: {},
  props: [],
  data () {
    return {
      formData : this.getInicialData(),
      formState : {},
      allMyData: [],
      nombreMinLength : 5,
      nombreMaxLength : 15,
      edadMin : 18,
      edadMax : 120
    }
  },

  methods: {
    
    getInicialData() {
      return {
        nombre: '',
        edad: '',
        email: ''
      }
    },

    clear() {
      this.formData = {
        nombre: '',
        edad: '',
        email: ''
      }
      this.formState._reset()
    },

    // POST THEN/CATCH
    postUserThenCatch() {
      const user = { "nombre": 'then catch' + this.formData.nombre, "email": this.formData.email, "edad": this.formData.edad }
      this.$store.dispatch('postUserThenCatch', user)
    },

    // POST ASYNC/AWAIT
    async postUser() {
      const user = { "nombre": 'async await' + this.formData.nombre, "email": this.formData.email, "edad": this.formData.edad }
        this.$store.dispatch('postUser', user)
    },

  }
}


