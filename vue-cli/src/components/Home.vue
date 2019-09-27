<template>
    <div class="home">
        <img src="../assets/logo-vue.svg" alt="logo" class="home__logo">
        <h1 class="home__heading">
            Several projects made using <span>vue.js</span>
        </h1>
        <a href="#" class="home__link">back to my portfolio page</a>
    </div>
</template>

<script>

/* global require */
export default {
    name: "Home",
    data() {
        return {
            city: ""
        }
    }
}
</script>

<style scoped>
    .home {
        position: relative;
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .home__logo {
        width: 300px;
        margin-bottom: 40px;
    }

    .home__heading {
        text-align: center;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 30px;
        color: #34495E;
    }
    .home__heading span {
        color:#41B883;
        text-transform: uppercase;
    }

    .home__link {
        position: absolute;
        left: 50%;
        bottom: 75px;
        transform: translateX(-50%);
        font-size: 18px;
    }
</style>


