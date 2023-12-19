<script>
export default{
    props:{
        value:"string"
    }
}
</script>
<template>
    <li>{{ value }}</li>
</template>
<style scoped lang="scss">
@use '../../assets/styles/colors.scss' as *;
</style>