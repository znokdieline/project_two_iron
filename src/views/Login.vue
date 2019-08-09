<template>
<div>
  <div class="container col-sm-4" style="@media (max-width: 575px)"> 

    <form action="" method="post">
          <img src="../assets/icon.png" class="icon" alt="">
      <div class="card-body">
            <h5 class="card-title">Hola, bienvenido a Facturatron</h5>
            <p class="card-text">Por favor ingresa tus datos de usuario o crea una cuenta</p>
            
        
            <div class="form-group ">
                <label for="exampleInputEmail1">Ingresa tu correo</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Mail" v-model="form.mail">
                <small id="emailHelp" class="form-text text-muted">No compartas tu información a terceros.</small>
            </div>

            <div class="form-group">
                <label for="exampleInputPassword1">Ingresa tu contraseña</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="form.pasword">
            </div>

          <div class="d-flex justify-content-around">

            <router-link to="/myprofile">
              <a class="btn btn-primary disabled" tabindex="-1" role="button" aria-disabled="true">Ingresar</a>
            </router-link>

            <router-link to="/newaccunt">
              <a class="btn btn-secondary disabled" tabindex="-1" role="button" >Crear cuenta nueva </a>
            </router-link>

          </div>

      </div>
    </form>
  </div>
</div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          pasword: '',
        },
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.pasword = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>


