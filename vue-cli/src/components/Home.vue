<template>
    <div class="home">
        <img src="../assets/logo-vue.svg" alt="logo" class="home__logo">
        <h1 class="home__heading">
            Several projects made using <span>vue.js</span>
        </h1>
        <a href="http://andrewbasiuk.000webhostapp.com/" class="home__link">back to my portfolio page</a>
    </div>
</template>

<script>

export default {
    name: "Home",
    data() {
        return {
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
        bottom: 30px;
        transform: translateX(-50%);
        font-size: 20px;
    }

    @media screen and (max-width: 500px) {
        .home {
            padding: 0 20px;
            box-sizing: border-box;
        }

        .home__logo {
            width: 150px;
        }

        .home__heading {
            font-size: 25px;
        }

        .home__link {
            display: inline-block;
            width: 100%;
            text-align: center;   
        }
    }
</style>


