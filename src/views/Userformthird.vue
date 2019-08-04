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

    <b-form-group id="input-group-2" label="Código postal" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.cp"
          required
          placeholder="Codigo postal"
        ></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-2" label="Estado" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.state"
          required
          placeholder="Estado"
        ></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-2" label="Teléfono" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.tel"
          required
          placeholder="Telefono con lada"
        ></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-3" label="Seleccione su régimen" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.regimen"
          :options="regimenes"
          required
        ></b-form-select>
      </b-form-group>

      <router-link to="/myprofile">
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
        
          regimen: null,
          domFiscal: {
            cp: 'String',
            state: 'String',
            tel: 'String'
          }
          
        },
        regimenes: [{ text: 'Seleccione uno', value: null }, 'Persona física', 'Persona Moral'],
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
        
        this.form.regimen = null
        this.form.domFiscal.cp
        this.form.domFiscal.state
        this.form.domFiscal.tel
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>