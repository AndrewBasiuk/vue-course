
<template>
  <div id="app">    
    <nav class="nav">
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
  export default {
    name: 'app',
    
    data() {
      return {
        weather: true,
        allworks: [
          {Weather: true},
          {newPage: false}
        ]
      }
    }
  }
</script>


<style>
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: rgba(#34495E , 0.7);
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

</style>