<template>
  <div class="container container-fluid col-md-12" style="@media (max-width: 575px)">
    
    <div class="row content">


        <div class="col-md-3">
        <img src="../assets/icon.png" class="icon" alt="">
        <br>
        <br>
        <h2 class="card-title">Arturo Rogel</h2>
        <p class="card-text"><strong> Perfil </strong> Diseñador, programador y artista visual </p>
        <br>
  
      </div>

      <div class="col-md-2">
        
        
        <h3>Tus Registros</h3>
        <br>
        <div class="custom-control custom-checkbox">

          <input type="" class="custom-control-input" checked="">
          <label class="custom-control-label" for="">RODA 820531 JWA</label>
       
        </div>

        <div class="custom-control custom-checkbox">

          <input type="" class="custom-control-input" checked="">
          <label class="custom-control-label" for="">GABE 372398 MD1</label>
       
        </div>

        <div class="custom-control custom-checkbox">

          <input type="" class="custom-control-input" checked="">
          <label class="custom-control-label" for="">SADE 232235 R24</label>
       
        </div>

      </div>

      <div class="col-md-4">
        <p><strong><h3>Facturar</h3></strong></p>
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
      </div>
      <strong></strong>

      <div class="col-md-3">
        <h3>Tus facturas</h3>
        <ul class="list-group">
          <li class="list-group-item bg-dark">Factura 200312 Hidrosina</li>
          <li class="list-group-item bg-dark">Factura 443252 Hidrosina</li>
          <li class="list-group-item bg-dark">Factura 723222 HOME DIPOT</li>
          <li class="list-group-item bg-dark">Factura 345200 SORIANA</li>
          <li class="list-group-item bg-dark">Factura 530486 G 500</li>
        </ul>
      </div>

      <!-- alta -->
        
  

    </div>
    
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


