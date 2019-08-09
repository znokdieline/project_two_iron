<template>
     <b-navbar  toggleable="lg" type="dark">
      <router-link to="/">
        <b-navbar-brand>Facturatron</b-navbar-brand>
      </router-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          
            <b-nav-item  to="/">Home</b-nav-item>
            <b-nav-item to="/myprofile">Usuario</b-nav-item>
          
          <b-nav-item to="/userform">Datos de facturación</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          
          <b-nav-item-dropdown  text="Consultas" right>
            <b-dropdown-item variant="light" to="/listfact">Facturas emitidas</b-dropdown-item>
          </b-nav-item-dropdown>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
</template>

<script>
// export default {
//   name: 'navbar',
//   props: [nav-bar],
// }
</script>

