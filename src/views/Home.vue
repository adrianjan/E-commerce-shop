<template>
  <section class="sectionHome">
    <h1 class="h1">Home page</h1>
    <p class="sectionHome__p">Welcome to the ecommerce store, which is intended to be a user friendly, 
      fast and modern! Hope you enjoy shopping here and come back again!</p>
  </section>
</template>

<script>
export default {
    name: 'Home'
}
</script>
<style>

.sectionHome{
  background: url(../assets/Home.jpg) no-repeat center;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
  position: relative;
}

.sectionHome__p{
  font-size: 1.5em;
  color: #F5DFBB;
  margin: 0 auto;
  padding: 100px 20px;
  max-width: 650px;
  background: rgba(0,0,0, .7);
}

.h1{
    font-size: 3.5em;
    font-weight: bold;
    margin-top: 0;
    padding-top: 10%;
    color: #F5DFBB;
}

</style>
