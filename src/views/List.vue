<template>
<div class="container-fluid">
  
  <div class="row content">

<!-- dos -->
    <div class="col-md-3 sidenav">
      
     <img src="../assets/icon.png" class="icon" alt="">
        <br>
        <br>
        <h2 class="card-title">Arturo Rogel</h2>
        <p class="card-text"><strong> Perfil </strong> Diseñador, programador y artista visual </p>
        <br>
      
    </div>
<!-- dos -->

  <!-- tres -->
    <div class="col-md-9">

      <!--tres uno -->
    <div class=" row">
        
        <!-- tres dos -->
        <div class="green col-sm-3 text-center ">
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
            <!-- tres dos -->
            
            <!-- tres tres -->
            <div class="col-md-5">

                            <p><strong><h3>Facturar</h3></strong></p>
                            <b-form-group id="input-group-3" label="Gasolinerías:" label-for="input-3">
                                <b-form-select
                                id="input-3"
                                v-model="form.gas"
                                :options="gas">
                                </b-form-select>
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
        
        <div class="col-md-4">
              <h3>Tus facturas</h3>
            <ul class="list-group">
              <li class="list-group-item bg-dark">Factura 200312 Hidrosina</li>
              <li class="list-group-item bg-dark">Factura 443252 Hidrosina</li>
              <li class="list-group-item bg-dark">Factura 723222 HOME DIPOT</li>
              <li class="list-group-item bg-dark">Factura 345200 SORIANA</li>
              <li class="list-group-item bg-dark">Factura 530486 G 500</li>
            </ul>
      </div>

  </div>
        <!-- tres tres -->
        
        <!-- tres cuatro -->
        <div class="row text-center pad">

            <div class="col-sm-4 text-center">
              <div class="card-body">
                  <h5 class="card-title">Nuevos registros</h5>
                  <p class="card-text">Ingresa los datos para dar de alta un nuevo registros y poder facturar con el.</p>
              </div>
              <p>
  <a class="btn btn-primary" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Mostrar datos</a>
              </p>
            </div>
            <div class="col-sm-4 text-center">
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
              </b-form>
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

            </div>

            <div class="col-sm-4 text-center">
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
              <div class="justify-content-around">
                <router-link to="">
                  <b-button type="submit" variant="primary">Guardar</b-button >
                    </router-link>  
                  <b-button type="reset" variant="danger">Limpiar campos</b-button>
              </div>
                  
            </div>

        </div>
        <!-- tres cuatro -->

      </div>
      <!--tres uno -->
    
    </div>
  <!-- tres -->

  </div>
</template>

<style>




</style>


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

