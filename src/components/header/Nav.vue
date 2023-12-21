<script>
export default{
    //props for HeaderMain component
    props:{
        value : "number"
    }
}
</script>
<template>
    <!--When rendered inside HeaderMain the prop will be cycled -->
        <li>{{ value }}</li>
    
</template>
<style scoped lang="scss">
@use '../../assets/styles/colors.scss' as *;
li{
    &:hover{
color:$color-lima-light
}}



</style>

