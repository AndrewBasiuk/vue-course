
<template>
  <div id="app">    
    <nav class="nav">
      <Hamburger
      />
      <ul class="nav__list">
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
    </nav>

    <router-view></router-view>

  </div>
</template>

<script>
  import Hamburger from "./components/common/Hamburger.vue";

  export default {
    components: {
        Hamburger
    },
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
      padding: 10px 0;
      background-color: transparent;
    }

    .nav__list {
      position: absolute;
      top: 0;
      width: calc(100% - 90px);
      right: 0;
      flex-direction: column;
      padding: 30px 0;
      background-color: rgba(52,73,94, 1);
      margin-top: 0;
      transition: all 0.3s;
      transform: translateX(100%);
    }
    .nav__list_mob {
      transform: translateX(0);
    }

    .nav__item {
      margin: 0 0 20px 0;
    }
    .nav__item:last-child {
      margin-bottom: 0;
    }

    /* .show-menu-enter-active, .show-menu-leave-active {
        transition: all 0.3s;
    }
    .show-menu-enter, .show-menu-leave-to  {
        opacity: 0;
        transform: translateX(100%);
    } */
  }

</style>