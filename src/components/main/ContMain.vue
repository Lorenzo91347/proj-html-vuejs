<script>
import Award from './Award.vue';
import Service from './Service.vue';
import Move from './Move.vue';
import Testimonials from './Testimonials.vue';
import QuoteBlue from './QuoteBlue.vue';
import Quotebottom from './Quotebottom.vue';

export default{
   

    components:{
        Award,
        Service,
        Move,
        Testimonials,
        QuoteBlue,
        Quotebottom,
        

    }
}
</script>

<template>
    <QuoteBlue/>
    <Award/>
    <Service/>
    <Move/>
    <Testimonials/>
    <Quotebottom/>
    

</template>

<style scoped lang="scss">
@use '../../assets/styles/colors.scss' as *;
</style>