<template>
  <section class="shopCover">
    <div class="item__box flex">
      <div class="item">
        <img class="item__img" src="https://picsum.photos/id/111/150" alt="Alt for item Img">
        <div class="item__quantity flex">1</div>
        <input type="button" class="item__addButton button" value="ADD">
      </div>
      <div class="item">
        <img class="item__img" src="https://picsum.photos/id/15/150" alt="Alt for item Img">
        <div class="item__quantity flex">3</div>
        <input type="button" class="item__addButton button" value="ADD">
      </div>
      <div class="item">
        <img class="item__img" src="https://picsum.photos/id/11/150" alt="Alt for item Img">
        <div class="item__quantity flex">4</div>
        <input type="button" class="item__addButton button" value="ADD">
      </div>
      <button class="button shopButton">BUY</button>
    </div>
  </section>
</template>

<script>
export default {
    name: 'Shop'
}
</script>

<style>

.shopCover{
  justify-content: center;
}

.item__box{
  background: #F5DFBB;
  width: 95%;
  height: 90%;
  border-radius: 15px;
  align-self: center;
  padding: 30px;
  justify-content: center;
}

.item{
  width: 85%;
  height: 100px;
  border: 4px solid #442B48;
  margin: 0 auto;
  position: relative;
  margin-bottom: 45px;
}

.item::before{
  content: '';
  position: absolute;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: #F5DFBB;
  top: -20px;
  right: -20px;
  z-index: 1;
}

.item__quantity{
  position: absolute;
  top: -20px;
  right: -20px;
  background: #FF5964;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  z-index: 3;
  padding: 10px;
  justify-content: center;
  align-content: center;
}

.item__img{
   width: 40%;
   max-width: 100px;
   position: absolute;
   left: -30px;
   bottom: -20px;
}

.item__addButton{
  padding: 10px 30px;
  position: absolute;
  top: 25px;
  right: 10px;
  z-index: 3;
}

@media (min-width: 768px){
  .item{
    width: 60%;
    max-width: 600px;
  }

  .item::before{
    border-radius: 0;
    width: 240px;
    height: 80px;
  }

  .item__quantity{
    width: 60px;
    height: 60px;
    padding: 20px;
    top: -30px;
    right: -15px;
    font-size: 2rem;
    background: #0E9594;
  }

  .item__img{
    max-width: 130px;
    bottom: -20px; 
  }

  .item__addButton{
    right: 65px;
    top: 20px;
  }

  .shopButton{
    width: 65%;
    margin: auto;
  }
}

@media (min-width: 1305px){

    .item__box{
      height: 95vh;
    }

    .item__addButton{
      right: 85px;
      top: 10px;
    }

}

</style>