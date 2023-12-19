<script>
import FooterInfo from './FooterInfo.vue'
import Social from './Social.vue'

export default{

    components:{
        FooterInfo,
        Social
    }
}
</script>
<template>
    I am FooterMain
    <FooterInfo/>
    <Social/>

</template>
<style scoped lang="scss">
@use '../../assets/styles/colors.scss' as *;
</style>