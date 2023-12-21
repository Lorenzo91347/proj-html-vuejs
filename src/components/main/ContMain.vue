<script>

//Imports of all the child components for the Main section

import Award from './Award.vue';
import Service from './Service.vue';
import Move from './Move.vue';
import Testimonials from './Testimonials.vue';
import QuoteBlue from './QuoteBlue.vue';


export default{
   
    //Components registration

    components:{
        Award,
        Service,
        Move,
        Testimonials,
        QuoteBlue,
       
        

    }
}
</script>

<template>
    <QuoteBlue/>
    <Award/>
    <Service/>
    <Move/>
    <Testimonials/>
    

</template>

<style scoped lang="scss">
@use '../../assets/styles/colors.scss' as *;
</style>