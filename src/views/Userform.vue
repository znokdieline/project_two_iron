<template>
  <div class="container col-sm-4" style="@media (max-width: 550px)">
    <div>
        <img src="../assets/icon.png" class="icon" alt="">
        <h2 class="card-title">Muchas gracias</h2>
        <p class="card-text"><strong> Por favor </strong> ingresa tus datos de facturación </p>
      </div>
      <br>
   <div>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show" >
      <b-form-group
        id="input-group-1"
        label="Ingrese su RFC"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.rfc"
          type="rfc"
          required
          placeholder="Ingrese su RFC con homoclave"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Nombre(s)" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Nombre(S)"
        ></b-form-input>
      </b-form-group>

     <b-form-group id="input-group-2" label="Apellido paterno" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.firstLastName"
          required
          placeholder="Apellido paterno"
        ></b-form-input>
      </b-form-group>

     <b-form-group id="input-group-2" label="Apellido Materno" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.secondLastName"
          required
          placeholder="Apellido Materno"
        ></b-form-input>
    </b-form-group>
    <router-link to="/userformcont">
        <b-button type="submit" variant="primary">Guardar y continuar  </b-button >
    </router-link>  
   <b-button type="reset" variant="danger">Limpiar campos</b-button>
    </b-form>
   </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          rfc: '',
          name: '',
          firstLastName:'',
          secondLastName: '',
        },
        show: true
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
        this.form.name = ''
        this.form.firstLastName = ''
        this.form.secondLastName = ''
        
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>