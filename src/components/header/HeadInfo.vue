<script>
export default{}
</script>

<template>

    <!-- info containers with the required icons from the FontAwesome module -->

    <div class="info">
        <div class="info-content">
            <font-awesome-icon icon="fa-solid fa-phone" />
            <div>Call Us For a free quote:1800.555.6789</div>
    </div>
        <div class="info-content">
            <font-awesome-icon icon="fa-brands fa-facebook-f" />
            <font-awesome-icon icon="fa-brands fa-twitter" />
            <font-awesome-icon icon="fa-brands fa-instagram" />
            <font-awesome-icon icon="fa-brands fa-youtube" />
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../../assets/styles/colors.scss' as *;
.info{
    height: 95px;
    background-color: $color-lima-light;
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 500px;
    
    .info-content{
        display:flex;
        gap: 15px;
    }
}
</style>