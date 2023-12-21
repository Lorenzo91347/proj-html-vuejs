<script>
export default{
    methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      console.log('click')
    },
  },
   
}


</script>
<template>
    <div class="social-bg">
        <div class="social-cnt">
            <ul>
                <li><a href=""><font-awesome-icon icon="fa-regular fa-copyright" /> Copyright 2012-2020</a></li>
                <li><a href="">Avada Theme by ThemeFusion</a></li>
                <li><a href="">All Rights Reserved</a></li>
                <li><a href="">Powered by WordPress</a></li>
            </ul>
        </div>
        <div class="social-icons">
            <font-awesome-icon icon="fa-brands fa-facebook-f" />
            <font-awesome-icon icon="fa-brands fa-twitter" />
            <font-awesome-icon icon="fa-brands fa-instagram" />
            <font-awesome-icon icon="fa-brands fa-youtube" />
        </div>
        <div class="pageup" @click="scrollToTop"><font-awesome-icon icon="fa-solid fa-chevron-up" /></div>
    </div>
</template>
<style scoped lang="scss">
@use '../../assets/styles/colors.scss' as *;
.social-bg{
    background-color: $color-lima-dark;
    position: relative;
    
    .social-cnt{
        padding: 40px 0;
        display: flex;
        flex-direction: column;
        
        ul{
            list-style: none;
            margin: auto;
        }   li{
            float: left;
            padding: 0 10px;
            text-align: center;
            li:nth-child(-n+3){
            border-right: 1px solid white;
            }
            a{
                text-decoration: none;
                color: white;
                &:hover{
                    text-decoration: underline;
                }
            }
        }

    }
    .social-icons{
        justify-content: center;
        display:flex;
        gap: 15px;
        color: white;
        padding-bottom: 40px;
    }
    .pageup{
        background-color: $color-pageup;
        color: white;
        border-top-right-radius: 10%;
        border-top-left-radius: 10%;
        width: 25px;
        text-align: center;
        position: fixed;
        z-index: 99;
        bottom: 0;
        right: 5%;
        font-size: 10px;
        padding-top: 5px;
        cursor:pointer;

    }
    
}

</style>