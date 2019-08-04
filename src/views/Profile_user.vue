<template>
  <div class="container col-sm-4" style="@media (max-width: 575px)">
      <div>
        <img src="../assets/icon.png" class="icon" alt="">
        <h2 class="card-title">Arturo Rogel</h2>
        <p class="card-text"><strong> Perfil </strong> Diseñador, programador y artista visual </p>
      </div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">

<br>
<br>
<p><strong><h3 class="card-title">Facturar</h3></strong></p>
      <b-form-group id="input-group-3" label="Gasolinerías:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.gas"
          :options="gas"
          
        ></b-form-select>
      </b-form-group>
    
    <b-form-group id="input-group-3" label="Autoservicios:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.autoserv"
          :options="autoserv"
          
        ></b-form-select>
    </b-form-group>

    <b-form-group id="input-group-3" label="Papelierías:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.depots"
          :options="depots"
          
        ></b-form-select>
    </b-form-group>


      <b-button type="submit" variant="primary" to="/capture">Facturar</b-button>
      <b-button type="reset" variant="danger">Limpiar</b-button>
    </b-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          gas: null, 
          autoserv: null,
          depots: null,
        },
        gas: [{ text: 'Seleccione uno', value: null }, 'Gass 500', 'Bp gass', 'Hidrosina', 'Pemex'],
        show: true,
        autoserv: [{ text: 'Seleccione uno', value: null }, 'Soriana', 'Wallmart', 'Aurrera', 'Superama'],
        show: true,
        depots: [{ text: 'Seleccione uno', value: null }, 'Dabo', 'Office depot', 'Office Max', 'Lumen'],
        show: true,
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
        this.form.gas = null
        this.form.autoserv = null
        this.form.depots
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>