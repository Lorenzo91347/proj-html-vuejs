<script>
export default{

    //props list

    props:{
        value:"string"
    }
}
</script>
<template>
    <!-- this block will be iterated in the parent component -->
    
    <li id="list"><a href=""><font-awesome-icon icon="fa-solid fa-chevron-right" /> {{ value }}</a></li>
</template>
<style scoped lang="scss">
@use '../../assets/styles/colors.scss' as *;
 li{
    margin: 15px 0;
    a{
        text-decoration: none;
        color: black;
    }
 }
svg{
    font-size: 10px;
}

</style>