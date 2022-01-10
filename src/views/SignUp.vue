<template>
    <section class="signup">
        <div class="signup__rectangle">
            <h1 class="signup__h1">Sign Up</h1>
        </div>
        <form action="#" class="signup__form flex">
            <input type="text" name="username" id="username" class="form__input" placeholder="Username">
            <input type="email" name="email" id="email" class="form__input" placeholder="E-mail">
            <input type="password" name="password" id="password" class="form__input" placeholder="Password">
            <input type="repeatPassword" name="repeatPassword" id="repeatPassword" class="form__input" placeholder="Repeat password">
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

.signup{
    height: 100vh;
    width: 100%;
    background: url(../assets/bg-1.png) no-repeat;
    background-size: cover;
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: -2;
}

.signup__createAccount{
    display: none;
}

.signup::after{
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 30vw;
    min-height: 300px;
    background-color: #FF5964;
    clip-path: polygon(0 0, 100% 0, 100% 36%, 0 60%);
    z-index: -1;
}

.signup__h1{
    font-size: 3.5em;
    font-weight: bold;
    margin-top: 0;
    padding-top: 10%;
    color: #F5DFBB;
    z-index: 5;
}

.signup__form{
    flex-grow: 1;
    align-items: center;
    justify-content: space-evenly;
}

.form__input{
    width: 50%;
    min-width: 220px;
    background-color: #F5DFBB;
    border: 2px solid #0E9594;
    padding: 25px 0 8px 0;
}

.form__input::placeholder{
    color: #0E9594;
    text-align: center;
    font-size: 1.8em;
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


@media (orientation: landscape) and (max-width: 768px){
    .signup{
        height: 100vw;
    }
}

@media (min-width: 768px){
    .signup{
        background: url(../assets/bg-2.jpg) no-repeat;
        background-size: cover;
        z-index: -100;
    }
    .signup::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, .4);
        z-index: -200;
    }

    .signup::after{
        clip-path: polygon(0 0, 100% 0, 100% 65%, 0 80%);
    }

    .signup__h1{
        font-size: 4.5em;
    }

    .form__input{
        padding: 40px 0 20px 0;
    }

    .form__input::placeholder{
        font-size: 2.8em;
    }

    .conditions-text{
        font-size: 1.8em;
    }

    .checkbox{
        height: 60px;
        width: 60px;
    }

    .checkbox:checked::before {
        font-size: 3.5em;
    }
}

@media (min-width: 1305px){
    .signup{
        background: url(../assets/bg-3.jpg) no-repeat;
        background-size: cover;
        display: flex;
        flex-direction: row;
    }

    .signup::after{
        display: none;
    }

    .signup__createAccount{
        display: block;
    }

    .signup__rectangle{
        display: none;
    }

    .signup__createAccount{
        height: 100%;
        order: 2;
    }

    .signup__form{
        width: auto;
        height: 100%;
        order: 1;
    }
}

</style>