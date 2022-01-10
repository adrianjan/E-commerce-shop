<template>
  <section class="login">
    <div class="login__cover"></div>
     <form action="#" class="login__form flex">
            <div class="input__container" data-text="Username">
                <input type="text" name="Username" id="username-2" class="form__input" placeholder="Username">
            </div>
            <div class="input__container" data-text="Password">
                <input type="password" name="Password" id="password-2" class="form__input" placeholder="Password">
            </div>
            <button type="submit" class="button button__transformed"><span class="button__span">Log in</span></button>
        </form>
  </section>
</template>

<script>
export default {
    name: 'LogIn'
}
</script>

<style>

</style>