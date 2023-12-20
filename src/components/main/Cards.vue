<script>
export default{
    props:{
        thumb : "image",
        text : "title"
    }
}
</script>
<template>
    <div>
        <img :src="thumb" alt="">
        <h3>{{ text }}</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut hic quia incidunt reprehenderit exercitationem ex dignissimos adipisci, eveniet consequatur saepe dolore et iure vitae explicabo deserunt qui debitis nihil tempora!</p>
    <div class="blue-btn">read more</div>
    </div>

</template>
<style scoped lang="scss">
@use '../../assets/styles/colors.scss' as *;
@use '../../assets/styles/variables.scss' as *;
div{
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3{
        color: $color-denim-dark;
    }
    .blue-btn{
        padding: 10px 10px;
        width: 100px;
    }
    
}
</style>