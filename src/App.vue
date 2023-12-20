<script>
import HeaderMain from './components/header/HeaderMain.vue';
import ContMain from './components/main/ContMain.vue';
import FooterMain from './components/footer/FooterMain.vue';
export default{
    components:{
        HeaderMain,
        ContMain,
        FooterMain
    }
}
</script>
<template>
  <header>
    <HeaderMain/>
</header>
    <main>
        <ContMain/>
    </main>
    
    <FooterMain/>

</template>
<style scoped lang="scss">
@use '../src/assets/styles/reset.scss' as *;
@use '../src/assets/styles/colors.scss' as *;
@use '../src/assets/styles/variables.scss' as *;
@import url('https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,700;0,800;1,700&display=swap');
body{
    font-family: 'Mulish', sans-serif;
}




</style>