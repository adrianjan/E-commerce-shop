<template>
  <div class="wishlistComponent">
    <h2 class="accountComponentName">WISHLIST</h2>
    <div class="wishlistContent">
      <img class="wishlistContent__img" src="../assets/wishlist.svg" alt="Create your account">
    </div>
    <h2 class="compomentName compomentName--wishlist">My wishlist</h2>
    <div class="wishlistItem">
      <img class="wishlistItem__img" src="../assets/heart.svg" alt="wishlist heart">
      <div class="wishlistItem__quantity">1</div>
    </div>
    <div class="wishlistItem">
      <img class="wishlistItem__img" src="../assets/heart.svg" alt="wishlist heart">
      <div class="wishlistItem__quantity">3</div>
    </div>
    <div class="wishlistItem">
      <img class="wishlistItem__img" src="../assets/heart.svg" alt="wishlist heart">
      <div class="wishlistItem__quantity">11</div>
    </div>
    <router-link :to="{ name: 'Shop'}">
      <button class="button  accountButton accountButton--wishlist">GO BACK</button>
    </router-link>
  </div>
</template>

<script>
export default {
    name: 'Wishlist'
}
</script>

<style>
.wishlistComponent{
  display: inline-flex;
  flex-direction: column;
  width: 90%;
}

.wishlistContent__img{
  width: 100%;
  margin: 30px auto;
}

.compomentName--wishlist{
  font-size: 3rem;
  padding: 30px 0;
}

.accountButton--wishlist{
  background: #FF5964;
  margin: 65px auto 90px auto;
}

.wishlistItem{
  background: #0E9594;
  position: relative;
  height: 100px;
  width: 80%;
  margin: auto;
  border-radius: 20px;
  transform: rotate(-6deg);
  margin: 30px auto;
}

.wishlistItem__img{
  width: 35%;
  position: absolute;
  top: -30px;
  left: -35px;
}

.wishlistItem__quantity{
  content: '';
  width: 65px;
  height: 65px;
  padding: 20px;
  background: #442B48;
  border-radius: 50%;
  position: absolute;
  bottom: -10px;
  right: -15px;
  font-size: 1.5rem;
}

</style>