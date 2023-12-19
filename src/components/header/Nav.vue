<script>
export default{
    data(){
        return{
            onHover: false
        }
    },
    props:{
        value : "number"
    }
}
</script>
<template>
        <li>{{ value }}</li>
    
</template>
<style scoped lang="scss">
@use '../../assets/styles/colors.scss' as *;
li{
    &:hover{
color:$color-lima-light
}}



</style>

