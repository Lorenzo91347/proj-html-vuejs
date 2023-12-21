<script>
export default{
    props:{
        value:"string"
    }
}
</script>
<template>
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