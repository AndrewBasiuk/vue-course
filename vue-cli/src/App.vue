
<template>
  <div id="app">    
    <nav class="nav">
      <Hamburger
      />
      <ul class="nav__list">
        <li class="nav__item" @click="mobMenuToggle">
          <router-link to='/'>Home</router-link>
        </li>
        <li class="nav__item" @click="mobMenuToggle">
          <router-link to='/weather'>Weather app</router-link>
        </li>
        <li class="nav__item" @click="mobMenuToggle">
          <router-link to='/chatSignIn'>Live chat</router-link>
        </li>
      </ul>
      <a class="my-logo" href="http://andrewbasiuk.000webhostapp.com/">
        <svg version="1.1" class="header__logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 159.551 79.775" style="enable-background:new 0 0 159.551 79.775;" xml:space="preserve">
          <g>
            <path d="M33.956,37.363l2.332-5.76v-6.583h2.812L47.67,4.174h5.76l8.229,20.846h2.605v6.583l2.4,6.103l-6.446,2.537l-3.292-8.229
              H43.762l-3.497,8.366L33.956,37.363z M50.414,15.694l-3.84,9.326h7.543L50.414,15.694z"></path>
          </g>
          <g>
            <path d="M83.394,30.455l1.988-0.068c3.84-0.137,7.886-0.137,11.864-0.137c5.211,0,8.64,0,9.531,0.068h0.479
              c2.743,0.48,5.006,1.852,6.378,3.909c1.097,1.714,1.646,3.771,1.646,6.309c0,1.303,0,3.154-0.686,5.143
              c-0.138,0.48-0.343,1.029-0.617,1.44c0.411,0.274,0.754,0.548,1.028,0.96c0.823,0.891,1.44,1.988,1.92,3.292
              c0.549,1.988,0.549,3.909,0.549,5.486c0,2.605-0.549,4.731-1.646,6.583c-1.44,2.194-3.703,3.634-6.651,4.114h-0.48
              c-1.783,0.068-5.28,0.068-9.737,0.068c-3.84,0-8.572,0-13.578-0.068l-1.92-0.069l0.274-7.611h1.852h0.548v-7.68h-1.783v-7.68h1.783
              v-6.446h-0.48l-1.92,0.068L83.394,30.455z M107.326,40.536c0-2.194-0.617-2.469-1.166-2.538c-1.92-0.068-5.28-0.137-9.395-0.137
              h-3.223v6.652h2.537h0.206c8.365-0.206,10.08-0.549,10.354-0.617C106.914,43.69,107.326,43.484,107.326,40.536z M93.543,59.667
              c1.988,0,3.908,0.137,5.76,0.137c4.731,0,7.681-0.137,8.641-0.137c0.617-0.206,1.028-0.412,1.165-0.617
              c0.138-0.343,0.48-1.097,0.48-2.469c0-1.097,0-2.263-0.343-3.154c-0.138-0.617-0.343-0.686-0.686-0.823
              c-0.206,0-2.264-0.548-12.274-0.754H95.12c-0.48,0.137-1.029,0.137-1.577,0.137V59.667z"></path>
          </g>
          <line class="st0" x1="87.514" y1="6.247" x2="61.925" y2="74.652"></line>
          <g>
            <path class="st1" d="M124.459,71.542c-0.428,0.438-0.962,0.657-1.55,0.657s-1.123-0.219-1.55-0.657
              c-0.855-0.876-0.855-2.299,0-3.175l27.267-27.918l-27.267-27.918c-0.855-0.876-0.855-2.299,0-3.175
              c0.855-0.876,2.246-0.876,3.101,0l28.817,29.505c0.855,0.876,0.855,2.299,0,3.175L124.459,71.542z"></path>
          </g>
          <g>
            <path class="st1" d="M34.515,9.356c0.428-0.438,0.962-0.657,1.55-0.657c0.588,0,1.123,0.219,1.55,0.657
              c0.855,0.876,0.855,2.299,0,3.175L10.348,40.449l27.267,27.918c0.855,0.876,0.855,2.299,0,3.175c-0.855,0.876-2.246,0.876-3.101,0
              L5.697,42.037c-0.855-0.876-0.855-2.299,0-3.175L34.515,9.356z"></path>
          </g>
        </svg>
      </a>
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
        show: true,
        hide: false
      }
    },
    methods: {
      mobMenuToggle() {
        let nav = document.querySelectorAll(".nav__list")[0];
            nav.classList.toggle("nav__list_mob");
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
    height: 50px;
  }

  .nav__list {
    padding-left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0;
    z-index: 3;
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
    text-decoration: none;
  }
  .nav__item a:hover {
    color:#41B883;
    transition: all 0.2s;
    text-decoration: underline;
  }

  .my-logo {
    display: none;
    position: absolute;
    top: -2px;
    right: 20px;
  }
  .my-logo svg {
    opacity: 0.7;
    width: 80px;
    height: 80px;
    /* fill: gray; */
    fill: #34495E;
  }

  @media screen and (max-width: 600px) {
    .nav {
      padding: 10px 0;
      /* background-color: transparent; */
      background-color: rgba(255,255,255 , 0.7);
    }

    .my-logo {
      display: block;
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
  }

</style>