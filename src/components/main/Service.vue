<script>
import Cards from './Cards.vue';
export default{
    data(){
        return{
            service:[
                {
                        "img":'../src/assets/images/avada-movers-serviceonephoto-final-200x128.jpg',
                        "title":'Two Man Teams',
                    },
                {
                        "img":'../src/assets/images/avada-movers-servicetwophoto-final-200x128.jpg',
                        "title":'We Do all the Lifting',
                    },
                {
                        "img":'../src/assets/images/avada-movers-servicethreephoto-final-200x128.jpg',
                        "title":'Coast to Coast',
                    }
            ],
        }
    },
    components:{
        Cards
    }
}
</script>
<template>
    <div class="titles-cnt">
        <div class="titles">
            <div class="grey">we are a professional</div>
            <h2>full service solution</h2>
        </div>
    </div>
<div class="cards">
    <Cards v-for="item in service"
    :thumb = "item.img"
    :text = "item.title"
     />
   

</div>
</template>
<style scoped lang="scss">
@use '../../assets/styles/colors.scss' as *;
@use '../../assets/styles/variables.scss' as *;
.titles-cnt{
    margin: auto;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.titles{
        text-align: center;
        width: 500px;
        display: flex;
        align-items: center;
        justify-content: center;
       
        
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
            width: 400px;
    }
  

    }
   
    



</style>