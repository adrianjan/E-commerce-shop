<template>
  <section class="login">
    <div class="login__cover"></div>
    <div class="login__Account">
            <h1 class="login__h1">Create your account</h1>
            <img class="loginAccount__img" src="../assets/log-in-to-account.svg" alt="Log in to your account">
        </div>
    <img src="../assets/profile.jpg" alt="" class="login__img">
     <form action="#" class="login__form flex">
            <div class="input__container" data-text="Username">
                <input type="text" name="Username" id="username-2" class="form__input" placeholder="Username">
            </div>
            <div class="input__container" data-text="Password">
                <input type="password" name="Password" id="password-2" class="form__input" placeholder="Password">
            </div>
            <button type="submit" class="button button__transformed button__login"><span class="button__span">Log in</span></button>
        </form>
  </section>
</template>

<script>
export default {
    name: 'LogIn'
}
</script>

<style>

.login__Account{
  display: none;
}

.login{
  align-items: center;
  justify-content: center;
}

.login__form{
  background-color: #F5DFBB;
  width: 90%;
  height: 70%;
  border-radius: 20px;
  position: relative;
  align-items: center;
  justify-content: center;
  row-gap: 15px;
}

.login__img{
  width: 55%;
  max-width: 350px;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
  z-index: 3;
  top: 20px;
  left: auto;
  right: auto;
}

.button__login{
  margin-bottom: -80px;
  margin-top: 80px;
}

@media (orientation: landscape) and (max-width: 768px){
    .login__img{
      width: 35%;
      top: -30px;
    }

    .login__form{
      height: 80vw;
    }
}

@media (min-width: 768px){
   .login__img{
     z-index: 7;
     max-width: 350px;
   }
}

@media (orientation: landscape) and (max-width: 1305px){
    .login{
      height: 100vw;
    }
    .login__img{
      max-width: 300px;
    }

    .login__form{
      height: 80vw;
    }
}

@media (min-width: 1305px){
  .login__Account{
    display: block;
  }

  .login__form{
    background: none;
  }

  .login__img{
    display: none;
  }

  .login__Account{
      display: block;
      z-index: 3;
      height: 100%;
        order: 2;
  }
}
</style>