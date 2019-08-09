<template >
  <div>
    <div class="container col-sm-4" style="@media (max-width: 575px)">
    <img src="../assets/icon.png" class="icon" alt="">
    <div class="card-body">
      <h5 class="card-title">Hola, bien venido a Facturatron</h5>
      <p class="card-text">Por favor ingresa tus datos para darte de alta</p>
      <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group
        id="input-group-1"
        label="Ingrese su mail"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.mail"
          type="mail"
          required
          placeholder="Mail"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Nombre de usuario" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.username"
          required
          placeholder="Nombre de usuario"
        ></b-form-input>
      </b-form-group>

     <b-form-group id="input-group-2" label="Cree su contraseña" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          required
          placeholder="Contraseña"
        ></b-form-input>
      </b-form-group>

     <b-form-group id="input-group-2" label="Confirme su contraseña" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.passwordconf"
          required
          placeholder="Confirm pasword"
        ></b-form-input>
    </b-form-group>

      <b-button type="submit" variant="primary">Enviar</b-button>
      <b-button type="reset" variant="danger">Limpiar campos</b-button>
    </b-form>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          mail: '',
          username: '',
          password:'',
          passwordconf: '', 
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
        this.form.mail= ''
        this.form.username = ''
        this.form.password = ''
        this.form.passwordconf = ''
        }
    }
  }
</script>

