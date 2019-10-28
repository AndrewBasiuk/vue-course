<template>
    <div class="burger" @click="menuToogle">
        <transition name="menu-show">
            <svg v-if="menuShow" class="burger__show-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 459 459" width="50px" height="50px" style="enable-background:new 0 0 459 459;" xml:space="preserve">
                <g>
                    <g id="menu">
                    <path d="M0,382.5h459v-51H0V382.5z M0,255h459v-51H0V255z M0,76.5v51h459v-51H0z"/>
                    </g>
                </g>
            </svg>
        </transition>
        <transition name="menu-hide">
            <svg v-if="menuHide" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 47.971 47.971" style="enable-background:new 0 0 47.971 47.971;" xml:space="preserve">
                <g>
                <path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88
                    c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242
                    C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879
                    s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z"/>
                </g>
            </svg>
        </transition>
    </div>
</template>

<script>

/* global require */
export default {
    name: "Hamburger",
    props: {
        
    },
    data() {
        return {
            menuShow: true,
            menuHide: false
        }
    },
    methods: {
        menuToogle() {
            let nav = document.querySelectorAll(".nav__list")[0];
            nav.classList.toggle("nav__list_mob");

            this.menuShow = !this.menuShow;
            this.menuHide = !this.menuHide;
        }
    }
}
</script>

<style scoped>
    .burger {
        display: none;
        font-size: 25px;
        font-family: Arial, Helvetica, sans-serif;
        color: #fff;
        text-transform: uppercase;
        position: absolute;
        top: 0px;
        left: 0px;
    }

    .burger svg {
        position: absolute;
        top: 15px;
        left: 20px;
        fill: #34495E;
    }

    @media screen and (max-width: 600px) {
        .burger {
            display: block;
        }

        .burger__show-icon {
            transform: translateX(0);
        }

        /* transition animation */
        .menu-show-enter-active, .menu-show-leave-active {
            transition: all 0.2s;
        }
        .menu-show-enter, .menu-show-leave-to  {
            opacity: 0;
            transform: translateY(-25px);
        }

        .menu-hide-enter-active, .menu-hide-leave-active {
            transition: all 0.2s ;
        }
        .menu-hide-enter, .menu-hide-leave-to  {
            opacity: 0;
            transform: translateY(25px);
        }
        /* end__transition animation */
    }
</style>


