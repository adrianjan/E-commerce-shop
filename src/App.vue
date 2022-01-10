<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link :to="{ name: 'Home' }">Home</router-link> |
      <router-link :to="{ name: 'SignUp' }">SignUp</router-link> |
      <router-link :to="{ name: 'LogIn'}">Log in</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto:wght@300;700&display=swap');

html, body{
  margin: 0;
  padding: 0;
}

*{
  box-sizing: border-box;
}

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}

#nav a.router-link-exact-active {
  color: #0E9594;
}

.flex{
  display: flex;
  flex-direction: column;
}

.button{
  background-color: #0E9594;
  text-transform: uppercase;
  font-size: 1.5em;
  border: none;
  padding: 20px 50px;
  color: #fff;
  transition: all .2s ease-in-out;
  cursor: pointer;
}

.button:active {
	transform: scale(1.1);
	transition: .1s;
  }

.button__transformed{
  transform: rotate(-5deg);
}

.button__span{
  display: inline-block;
  transform: rotate(5deg);
}

@media (min-width: 768px){
  .button{
    padding: 40px 105px;
    font-size: 2em;
  }
}

@media (min-width: 1305px){

  .button{
    font-size: 2.5em;
    border-radius: 15px;
    transform: none;
    padding: 20px 100px;
    font-weight: bold;
    background-color: #FF5964;
    }

  .button__span{
    transform: none;
    }

}

</style>
