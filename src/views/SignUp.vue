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

.signup{
    height: 100vh;
    width: 100%;
    background: url(../assets/bg-1.png) no-repeat;
    background-size: cover;
    position: relative;
    display: flex;
    flex-direction: column;
}

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
    width: 100%;
    background-color: #F5DFBB;
    border: 2px solid #0E9594;
    padding: 25px 0 8px 0;
    text-align: center;
}

.input__container{
    width: 50%;
    position: relative;
    min-width: 220px;
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
    }
    .signup__cover{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, .4);
        z-index: 1;
    }
    
    .signup__form{
        z-index: 3;
    }

    .signup__rectangle{
        clip-path: polygon(0 0, 100% 0, 100% 65%, 0 80%);
        z-index: 3;
    }

    .signup__h1{
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
    .signup{
        background: url(../assets/bg-3.jpg) no-repeat;
        background-size: cover;
        display: flex;
        flex-direction: row;
        height: 100%;
    }

    .signup__rectangle{
        display: none;
    }

    .signup__createAccount{
        display: block;
        z-index: 3;
    }

    .signup__rectangle{
        display: none;
    }

    .signup__createAccount{
        height: 100%;
        order: 2;
    }

    .signup__h1{
        color: #442B48;
        width: 70%;
        text-align: left;
    }

    .signup__h1--none{
        display: none;
    }

    .signup__form{
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

    .form__label{
        position: absolute;
        color: red;
        top: 0;
        left: 0;
    }

    .checkbox-box{
        width: 30%;
        max-width: 500px;
    }

    .signup__img{
        padding: 0;
    }
}

</style>