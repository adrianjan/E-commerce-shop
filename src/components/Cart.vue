<template>
 <div v-if="empty" class="cartComponent">
  <h2 class="compomentName">{{cartTitle}}</h2>
  <h2 class="accountComponentName">CART</h2>
  <div class="cartContent">
    <img class="cartContent__img" src="../assets/cart.svg" alt="Create your account">
  </div>
   <router-link :to="{ name: 'Shop'}">
     <button class="button accountButton">GO BACK</button>
   </router-link>
 </div>
</template>

<script>
export default {
    name: 'Cart',
    data(){
      return{
        cartTitle: 'Your cart is empty',
        empty: true
      }
    }
}
</script>

<style>
.cartComponent{
  display: inline-flex;
  flex-direction: column;
  height: 80vh;
  justify-content: space-evenly;
  align-content: center;
}

.cartContent__img{
  width: 100%;
}

.accountButton{
  border-radius: 10px;
  box-shadow: 0px 25px 10px -10px rgba(0, 0, 0, .3);
}

@media (min-width: 1000px){

  .cartContent__img{
    position: absolute;
    bottom: -15%;
    left: -15%;
    width: 60%;
    z-index: 3;
  }

  .compomentName{
    display: none;
  }

}

</style>