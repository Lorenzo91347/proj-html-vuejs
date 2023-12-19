<script>
import HeadInfo from './HeadInfo.vue';
import Nav from './Nav.vue';
import HeadJumbo from './HeadJumbo.vue';

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
    components:{
        HeadInfo,
        Nav,
        HeadJumbo
    }
}
</script>
<template>
    
    <HeadInfo />
    <ul>
    <Nav v-for="item in menuItemHead"
    :value="item.text"/>
    </ul>
    <HeadJumbo/>

</template>
<style scoped lang="scss">
@use '../../assets/styles/colors.scss' as *;

ul{
    list-style: none;
}
</style>