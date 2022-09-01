<template>
  <div class="accountBg">
    <h1 class="accountH1">My Account</h1>
    <h2 class="accountComponentName">CART</h2>
    <ul class="accountView">
      <li class="accountView__item" @click="component='cart'">My Cart</li>
      <li class="accountView__item" @click="component='wishlist'">My Wishlist</li>
    </ul>
    <component :is="component"></component>
    <div class="circle circle--one"></div>
    <div class="circle circle--two"></div>
    <div class="circle circle--three"></div>
    <div class="circle circle--four"></div>
    <div class="circle circle--five"></div>
  </div>
</template>

<script>
import Cart from '../components/Cart.vue'
import Wishlist from '../components/Wishlist.vue'

export default {
  components: {
    'cart': Cart,
    'wishlist': Wishlist
  },
    name: 'Account',
    data(){
      return{
        component: 'cart'
      }
    },
    methods: {
    increment() {
      // `this` will refer to the component instance
      console.log(this.$options.parent.$children)
    }
  }
}
</script>

<style>
.circle{
  display: none;
}

.accountBg{
  background: #F5DFBB;
  width: 100%;
  min-height: 100vh;
}

.accountH1, .accountComponentName{
  display: none;
}

.accountView{
  list-style: none;
  color: #FFF;
  margin: 0;
  padding: 0;
  position: fixed;
  bottom: 0;
  left: 0;
  text-align: center;
  width: 100%;
  background: #0E9594;
  z-index: 5;
}

.accountView__item{
  display: inline-block;
  padding: 20px 10px;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
}

.compomentName{
  color: #FF5964;
  margin: 0 auto;
}

@media (min-width: 1000px){

.accountComponentName{
  display: none;
}

  .circle{
    border-radius: 50%;
    position: absolute;
    display: block;
    z-index: 1;
  }

  .circle--one{
    width: 100px;
    height: 100px;
    background: #FF5964;
    bottom: 5%;
    left: 5%;
  }

  .circle--two{
    background: #FF5964;
    width: 20px;
    height: 20px;
    top: 40%;
    left: 25%;
  }

  .circle--three{
    width: 50px;
    height: 50px;
    top: 38%;
    left: 55%;
    background: #0E9594;
  }

  .circle--four{
    width: 150px;
    height: 150px;
    background: #F5DFBB;
    top: 35%;
    right: -5%;
  }

  .circle--five{
    width: 300px;
    height: 300px;
    background: #0E9594;
    bottom: -15%;
    right: -5%;
  }

  .accountBg{
    background: rgba(255, 255, 255, .3);
    position: relative;
  }

  .accountH1{
    display: block;
    color: #442B48;
    position: absolute;
    top: 15%;
    left: 10%;
    font-weight: 300;
    font-size: 2.7rem;
  }

  .accountBg::before{
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: url(../assets/accountBg.svg) no-repeat;
    z-index: -1;
  }

    .accountComponentName{
    display: block;
    color: #0E9594;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.8rem;
    position: absolute;
    top: 25%;
    left: 10%;
  }

}

</style>