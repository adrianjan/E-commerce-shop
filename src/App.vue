<template>
  <div id="app">
    <div class="menuToggler" :class="{ active: isActive }" @click="isActive = !isActive">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
    </div>
    <div id="nav">
      <router-link class="router__link" :to="{ name: 'Shop'}" v-if="loggedIn">Shop</router-link>
      <router-link class="router__link" :to="{ name: 'Account'}" v-if="loggedIn">Account</router-link>
      <router-link class="router__link" :to="{ name: 'Home'}" v-if="loggedIn">Home</router-link>
      <router-link class="router__link" :to="{ name: 'Home' }" v-if="!loggedIn">Home</router-link> 
      <router-link class="router__link" :to="{ name: 'SignUp' }" v-if="!loggedIn">SignUp</router-link> 
      <router-link class="router__link" :to="{ name: 'LogIn'}" v-if="!loggedIn">Log in</router-link>
      <router-link class="router__link router__link--inline router__link--inline-1" :to="{ name: 'faq'}" v-if="loggedIn">FAQ</router-link>
      <router-link class="router__link router__link--inline router__link--inline-2" :to="{ name: 'Shop'}" v-if="loggedIn">CALL</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
   data() {
     return {
    isActive: false,
    loggedIn: true
  }},

  methods: {
    toggleActive(){
      this.isActive = !this.isActive;
      console.log(this.isActive)
    }
  },
  watch: {
    '$route' () {
      this.isActive = false
    }
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto:wght@300;700&display=swap');

html, body{
  margin: 0;
  padding: 0;
}

*{
  box-sizing: border-box;
}

#app{
  position: relative;
  overflow: hidden;
}

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}

/* Mobile MENU */

#nav{
  height: 100vh;
  position: fixed;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #FF5964;
  z-index: 6;
  transform: translate(100%, -100%) scale(0);
  transition: all  .3s ease-in-out;
  border-radius: 50%;
}

.menuToggler{
  position: fixed;
  right: 30px;
  top: 30px;
  z-index: 10;
  width: 60px;
  height: 40px;
  cursor: pointer;
}

.menuToggler::before{
  content: '';
  position: absolute;
  top: -50px;
  right: -50px;
  width: 220px;
  height: 200px;
  background-color: #FF5964;
  transition: all .2s ease-in-out;
  clip-path: circle(78.7% at 76% 0);
  opacity: 1;
  pointer-events: none;
}

.line{
  width: 60px;
  height: 5px;
  background-color: #F5DFBB;
  transition: transform .1s ease-in-out, opacity .2s ease-in;
}

.line:nth-child(1){
  transform: translateY(80%);
  opacity: 1;
}

.line:nth-child(2){
  transform: translateY(230%);
}

.line:nth-child(3){
  transform: translateY(380%);
}

.active .line:nth-child(1){
  transform: translateY(-680%);
  opacity: 0;
}

.active .line:nth-child(2){
  transform: translateY(230%) rotate(110deg);
}

.active .line:nth-child(3){
  transform: translateY(250%) rotate(30deg);
}

.active	~ #nav{
  transform: translate(0, 0) scale(1);
  border-radius: 0;
}

.active.menuToggler::before{
   transform: scale(2.3);
   opacity: 0;
}

#nav a.router-link-exact-active {
  color: #0E9594;
}

.router__link{
  font-size: 2.8rem;
  text-decoration: none;
  color: #F5DFBB;
  font-weight: bold;
  padding: 5px 0 5px 0;
  }

  .router__link--inline{
    width: 50%;
    padding: 30px 0;
    position: absolute;
    bottom: 0;
  }

  .router__link--inline-1{
    background: #0E9594;
    align-self: flex-start;
    left: 0;
  }

  .router__link--inline-2{
    background: #F5DFBB;
    color: #0E9594;
    align-self: flex-end;
    right: 0;
  }

.flex{
  display: flex;
  flex-direction: column;
}


/*  Global styles */
.signup, .login, .shopCover{
    min-height: 100vh;
    width: 100%;
    background: url(assets/bg-1.png) no-repeat;
    background-size: cover;
    position: relative;
    display: flex;
    flex-direction: column;
}

.signup__form{
    flex-grow: 1;
    align-items: center;
    justify-content: space-evenly;
}

.signup__h1, .login__h1{
    font-size: 3.5em;
    font-weight: bold;
    margin-top: 0;
    padding-top: 10%;
    color: #F5DFBB;
    z-index: 5;
}

.form__input{
    width: 100%;
    min-width: 220px;
    background-color: #F5DFBB;
    border: 2px solid #0E9594;
    padding: 25px 0 8px 0;
    text-align: center;
}

.input__container{
    min-width: 50%;
    position: relative;
}

.form__input::placeholder{
    color: #0E9594;
    text-align: center;
    font-size: 1.8em;
}

.button{
  background-color: #0E9594;
  text-transform: uppercase;
  font-size: 1.5em;
  border: none;
  padding: 20px 80px;
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
    background-color: #FF5964;
  }

   .signup, .login, .shopCover{
        background: url(assets/bg-2.jpg) no-repeat;
        background-size: cover;
    }
    .signup__cover, .login__cover{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, .4);
        z-index: 1;
    }
    
    .signup__form, .login__form{
        z-index: 3;
    }

    .signup__rectangle{
        clip-path: polygon(0 0, 100% 0, 100% 65%, 0 80%);
        z-index: 3;
    }

    .signup__h1, .login__h1{
        font-size: 4.5em;
    }

    .input__container::before{
        content: '';
        position: absolute;
        width: 80%;
        height: 1px;
        bottom: 25px;
        left: 10%;
        background-color: #442B48;
    }

    .form__input{
        width: 100%;
        border: none;
        border-radius: 15px;
        padding: 50px 0 30px 0;
    }

    .form__input::placeholder{
        font-size: 1.7em;
        color: rgba(68, 43, 72, .5);
    }

    .input__container::after{
        content: attr(data-text);
        color: #442B48;
        font-weight: bold;
        position: absolute;
        font-size: 1.2em;
        top: 5px;
        left: 10%;
    }
}

@media (orientation: landscape) and (max-width: 768px){
    .signup, .login{
        height: 100vw;
    }
}

@media (min-width: 1305px){

  .button{
    font-size: 2.5em;
    border-radius: 15px;
    transform: none;
    padding: 20px 100px;
    font-weight: bold;
    }

  .button__span{
    transform: none;
    }

    .signup, .login, .shopCover{
        background: url(assets/bg-3.jpg) no-repeat;
        background-size: cover;
        display: flex;
        flex-direction: row;
        height: 100%;
    }

     .signup__h1, .login__h1{
        color: #442B48;
        width: 70%;
        text-align: left;
    }

    .signup__h1--none, login__h1--none{
        display: none;
    }

    .signup__form, .login__form{
        width: auto;
        order: 1;
    }

    .form__input{
        width: 100%;
        max-width: 800px;
    }

    .form__input::placeholder{
        font-size: 1.8em;
    }

    .checkbox-box{
        width: 30%;
        max-width: 500px;
    }

    .signup__img, .login__img, .loginAccount__img{
        padding: 0;
    }
}

</style>
