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
      
    <b-form-group id="input-group-2" label="Calle" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.calle"
          required
          placeholder="Introdusca Calle"
        ></b-form-input>
    </b-form-group>
    
    <b-form-group id="input-group-2" label="Colonia" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.col"
          required
          placeholder="Introdusca su colonia"
        ></b-form-input>
    </b-form-group>
   
    <b-form-group id="input-group-2" label="Número interior" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.noInt"
          required
          placeholder="Numero interior"
        ></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-2" label="Número exterior" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.numext"
          required
          placeholder="Numero exterior"
        ></b-form-input>
    </b-form-group>

      <router-link to="/userformthird">
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
          domFiscal: {
            calle: 'String',
            col: 'string',
            noInt: 'String',
            numext: 'String',
          }
          
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
        
       
        this.form.domFiscal.calle
        this.form.domFiscal.col
        this.form.domFiscal.noInt
        this.form.domFiscal.numext
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>