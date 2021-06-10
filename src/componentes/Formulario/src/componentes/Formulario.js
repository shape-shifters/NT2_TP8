
export default {
  name: 'src-componentes-formulario',
  components: {},
  props: [],
  data () {
    return {
      url: "https://60aeb9365b8c300017deb261.mockapi.io/users",
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
    enviarThenCatch() {
      fetch(this.url, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(this.formData)
      })
      .then(respuesta => respuesta.json())
      .then(respuesta => {
        this.allMyData.push(respuesta);
      })
      .catch(error => console.log(error));
    this.clear();
  },

  // POST ASYNC/AWAIT
  async enviar() {
    try {
      let { data } = await this.axios.post(this.url, this.formData);
      this.allMyData.push(data);
    } catch(error) {
      console.log(error);
    }
    this.clear();
  },
  
  }
}


