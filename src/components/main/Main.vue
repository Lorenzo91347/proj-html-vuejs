<script>
import Award from './Award.vue';
import Service from './Service.vue';
import Move from './Move.vue';
import Testimonials from './Testimonials.vue';
import Quote from './Quote.vue';
export default{

    components:{
        Award,
        Service,
        Move,
        Testimonials,
        Quote

    }
}
</script>
<template>
    I am Main
    <Award/>
    <Service/>
    <Move/>
    <Testimonials/>
    <Quote/>

</template>
<style scoped lang="scss">
@use '../../assets/styles/colors.scss' as *;
</style>