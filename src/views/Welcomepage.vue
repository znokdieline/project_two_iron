<template>

  <div class="container col-sm-6" style="@media (max-width: 575px)">

    <div>
      
      <img src="../assets/icon.png" class="iconwelcome">
      <br>
      <h1 class="card-title"> <strong> Bienvenido a Facturatron </strong></h1>
      <p class="card-text"><strong> La primera plataforma </strong>para facutrar todos tus servicios, en un solo lugar.</p>
      <p><strong>Ingresa o crea una nueva cuenta</strong></p>
    </div>
    
  <div class="justify-content-around">

    <router-link to="/myprofile">
      <a class="btn btn-primary disabled" tabindex="-1" role="button" aria-disabled="true">Ingresar</a>
    </router-link>

    <router-link to="/newaccunt">
      <a class="btn btn-secondary disabled" tabindex="-1" role="button" >Crear cuenta nueva </a>
    </router-link>

  </div>
    
  </div>
</template>

<script>

  export default {
    data() {
      return {
     
      }
    }
  }
</script>


