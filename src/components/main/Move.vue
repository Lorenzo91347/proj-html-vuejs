<script>
export default{}
</script>
<template>
    <div class="move">
        <div class="move-box">
            <div>we remove the headache from moving</div>
            <h2>move with ease</h2>
            <p>With our super simple service we can take you from
                getting a quote,right through to being in your new home with
                all of your belongings securely packed and 
                safely delivered,even in the rooms of your choice.
            </p>
            <div class="blue-btn">get a free quote now</div>
        </div>
    </div>

</template>
<style scoped lang="scss">
@use '../../assets/styles/colors.scss' as *;
@use '../../assets/styles/variables.scss'as *;

.move{
    height: 610px;
    background-image: url(../../assets/images/avada-movers-movewithease-background-new.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    .move-box{
        position: absolute;
        background-color: $color-lima-light;
        border: 10px solid $color-lima-dark;
        top:30%;
        right: 20%;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
        width: 310px;
        padding: 25px;
        text-align: center;
        
        div,
        h2{
            text-transform: uppercase;
        }
        
        h2{
            font-size: 30px;
            border-bottom: 1px solid $color-lima-bdr-btm;
            height: 60px;
        }
        p{
            font-size: 14px;
        }
        div:first-child{
            font-size: 12px;
            font-weight: 900;
        }
        .blue-btn{
            padding: 10px 20px;
        }

    }
}
</style>