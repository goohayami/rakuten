<template>
  <header>this erea is header</header>
  <div class="main-container">
    <div id="nav">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/egg">たまご</router-link></li>
      <li><router-link to="/poteto">フライドポテト</router-link></li>
      <li><router-link to="/jobs">Jobs</router-link></li>
    </div>
    <div class="router-container">
      <router-view />
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header {
  height: 70px;
  background-color: #42b983;
}
#nav {
  padding: 30px;
  widows: 400px;
  font-size: 30px;

  /* background-color: wheat;vlera */
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
li {
  list-style: none;
  margin-bottom: 3rem;
  text-align: left;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.main-container {
  display: flex;
}

.router-container {
  text-align: center;
  justify-content: center;
  /* margin-left: 20%; */
  margin-right: auto;
  margin-left: auto;
}

@media screen and (max-width: 480px) {
  li {
    font-size: 15px;
  }
}
</style>
