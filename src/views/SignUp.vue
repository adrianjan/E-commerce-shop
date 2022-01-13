<template>
    <section class="signup">
        <div class="signup__cover"></div>
        <div class="signup__rectangle">
        </div>
        <h1 class="signup__h1 signup__h1--none">Sign Up</h1>
        <div class="signup__createAccount">
            <h1 class="signup__h1">Create your account</h1>
            <img class="signup__img" src="../assets/create-your-account.svg" alt="Create your account">
        </div>
        <form action="#" class="signup__form flex">
            <div class="input__container" data-text="Username">
                <input type="text" name="Username" id="username" class="form__input" placeholder="Username">
            </div>
            <div class="input__container" data-text="E-mail">
                <input type="email" name="E-mail" id="email" class="form__input" placeholder="E-mail">
            </div>
            <div class="input__container" data-text="Password">
                <input type="password" name="Password" id="password" class="form__input" placeholder="Password">
            </div>
            <div class="input__container" data-text="Repeat password">
                <input type="password" name="Repeat password" id="repeatPassword" class="form__input" placeholder="Repeat password">
            </div>
            <div class="checkbox-box">
                <input type="checkbox" name="conditions" id="conditions" class="checkbox">
                <label for="conditions" class="conditions-text">I accept terms & conditions</label>
            </div>
            <button type="submit" class="button button__transformed"><span class="button__span">Sign Up</span></button>
        </form>
    </section>
</template>

<script>
export default {
    name: 'SignUp'
}
</script>

<style>

.signup__createAccount{
    display: none;
}

.signup__rectangle{
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 30vw;
    min-height: 300px;
    background-color: #FF5964;
    clip-path: polygon(0 0, 100% 0, 100% 36%, 0 60%);
}

.checkbox-box{
    width: 50%;
    display: flex;
    justify-content:space-between;
    min-width: 220px;
}

.checkbox{
    height: 40px;
    width: 40px;
    margin: 0;
    background-color: #F5DFBB;
    border: none;
    appearance: none;
    position: relative;
}

.checkbox:checked{
    border: 1px solid #0E9594;
}

.checkbox:checked::before {
    content: '\2713';
    display: block;
    text-align: center;
    color: #0E9594;
    position: absolute;
    font-size: 2.5em;
    left: 10px;
    top: -7px;
}

.conditions-text{
    display: inline-block;
    color: #0E9594;
    font-weight: bold;
    width: 60%;
    font-size: 1.1em;
    text-align: right;
}

@media (min-width: 768px){
    .conditions-text{
        font-size: 1.3em;
    }

    .checkbox{
        height: 50px;
        width: 50px;
    }

    .checkbox:checked::before {
        font-size: 3em;
    }
}

@media (min-width: 1305px){

    .signup__rectangle{
        display: none;
    }

    .signup__createAccount{
        display: block;
        z-index: 3;
        height: 100%;
        order: 2;
    }
}

</style>