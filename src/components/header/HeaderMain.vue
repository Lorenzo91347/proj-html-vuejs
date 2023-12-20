<script>

// imports from the child header components

import HeadInfo from './HeadInfo.vue';
import Nav from './Nav.vue';
import HeadJumbo from './HeadJumbo.vue';

//export with the content for the menu items

export default{
    data(){
        return{
            menuItemHead:[
              {text:'Home'},
              {text:'Rates'},
              {text:'Testimonials'},
              {text:'FAQ'},
              {text:'Blog'},
              {text:'Contact'},
             

            ]
        }
    },

    //Head components registration

    components:{
        HeadInfo,
        Nav,
        HeadJumbo
    }
}
</script>
<template>
    
    <HeadInfo />
    <div class="head-bg">
        <div class="nav-cnt">
            <img src="../../assets/images/avada-movers-logo.png" alt="">

            <!--Nav v-for using props from the child component-->
            <ul>
                <Nav v-for="item in menuItemHead"
                :value="item.text"/>
                <div class="blue-btn">Free Quote</div>
            </ul>
        </div>
        <div class="jumbo-cnt">
            <HeadJumbo/>
        </div>
    </div>

</template>
<style scoped lang="scss">
@use '../../assets/styles/colors.scss' as *;
@use '../../assets/styles/variables.scss' as *;

.head-bg{

    background-image: url(../../assets/images/avada-movers-homeherobackground-final.jpg);
    background-size: cover;
    background-repeat: no-repeat;


    .nav-cnt{
        display: flex;
        justify-content: space-around;
        align-items: center;
        height:200px;
        background-color: transparent;
        
        ul{
            list-style: none;
            display: flex;
            align-items: center;
            font-weight: bold;
            gap: 50px;
        }
    }
    .jumbo-cnt{
        height: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>