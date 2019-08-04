<template>
  <div id="app">
    
   <b-navbar toggleable="lg" type="dark">
    <router-link to="/">
      <b-navbar-brand>Facturatron</b-navbar-brand>
    </router-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/myprofile">Usuario</b-nav-item>
        
        <b-nav-item to="/userform">Datos de facturación</b-nav-item>
      </b-navbar-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
        
        </b-nav-form>

        <b-nav-item-dropdown  text="Consultas" right>
          <b-dropdown-item variant="light" to="/listfact">Facturas emitidas</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
