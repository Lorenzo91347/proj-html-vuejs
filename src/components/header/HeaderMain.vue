<script>
import HeadInfo from './HeadInfo.vue';
import Nav from './Nav.vue';
import HeadJumbo from './HeadJumbo.vue';

export default{
    components:{
        HeadInfo,
        Nav,
        HeadJumbo
    }
}
</script>
<template>
    <div>I am HeaderMain</div>
    <HeadInfo/>
    <Nav/>
    <HeadJumbo/>

</template>
<style scoped lang="scss">
@use '../../assets/styles/colors.scss' as *;
</style>