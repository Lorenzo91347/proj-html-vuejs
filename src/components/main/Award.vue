<script>
export default{}
</script>
<template>
    <div class="award">
        <div class="award-cnt">
            <div class="grey">headache free</div>
            <h2>award winning moving company</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus commodi cumque ad quia nesciunt fugiat, quibusdam, porro maiores dolores, itaque rem pariatur! Omnis ipsam eos aliquam repudiandae quibusdam excepturi officiis.</p>
            <div class="blue-btn">read our testimonials</div>
        </div>
    </div>
</template>
<style scoped lang="scss">
@use '../../assets/styles/colors.scss' as *;
@use '../../assets/styles/variables.scss' as *;
.award{
    margin: auto;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.award-cnt{
    text-align: center;
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
    div,
    h2{
        text-transform: uppercase;
    }
    .grey{
        color: #aaaaaa;
    }
    h2{
        color: $color-lima-light;
        font-weight: 900;
        font-size: 30px;
        width: 300px;
    }
}
</style>