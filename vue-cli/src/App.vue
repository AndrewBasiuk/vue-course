
<template>
  <div id="app">    
    <nav class="nav">
      <div class="burger" @click="menuToogle">
        select a project
      </div>
      <transition name="show-menu">
        <ul v-if="menu" class="nav__list">
          <li class="nav__item">
            <router-link to='/'>Home</router-link>
          </li>
          <li class="nav__item">
            <router-link to='/weather'>Weather app</router-link>
          </li>
          <li class="nav__item">
            <router-link to='/page'>Next app</router-link>
          </li>
        </ul>
      </transition>
    </nav>

    <router-view></router-view>

  </div>
</template>

<script>
  export default {
    metaInfo: {
      title: 'My Vue App',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
    },
    name: 'app',
    data() {
      return {
        weather: true,
        menu: true
      }
    },
    methods: {
      menuToogle() {
        this.menu = !this.menu;
        console.log(this.menu);
      }
    },
    mounted() {
      if (window.innerWidth <= 600) {
        this.menu = false;
      }
    }
  }
</script>


<style>
  body {
    padding: 0;
    margin: 0;
  }

  .nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: rgba(52,73,94 , 0.7);
    z-index: 100;
    padding: 30px 0;
  }

  .burger {
    display: none;
    font-size: 25px;
    font-family: Arial, Helvetica, sans-serif;
    color: #fff;
    text-align: center;
    text-transform: uppercase;
  }

  .nav__list {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0;
  }

  .nav__item {
    margin-right: 40px;
    list-style: none;
  }
  .nav__item:last-child {
    margin-right: 0;
  }
  
  .nav__item a {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    color: #fff;
  }
  .nav__item a:hover {
    color:#41B883;
    transition: all 0.2s;
    text-decoration: none;
  }

  @media screen and (max-width: 600px) {
    .nav {
      padding: 20px 0;
    }

    .burger {
      display: block;
    }

    .nav__list {
      position: absolute;
      top: 69px;
      left: 0;
      right: 0;
      flex-direction: column;
      padding: 30px 0;
      background-color: rgba(52,73,94, 1);
      margin-top: 0;
    }

    .nav__item {
      margin: 0 0 20px 0;
    }
    .nav__item:last-child {
      margin-bottom: 0;
    }

    .show-menu-enter-active, .show-menu-leave-active {
        transition: all 0.3s;
    }
    .show-menu-enter, .show-menu-leave-to  {
        opacity: 0;
        transform: translateX(-100%);
    }
  }

</style>