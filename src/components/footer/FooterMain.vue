<script>
import FooterInfo from './FooterInfo.vue'
import Social from './Social.vue'

export default{
    data(){
        return{
            listLeft:[
                {info:'Home'},
                {info:'Rates'},
                {info:'Testimonials'},
                {info:'Blog'},
                {info:'Free Quote'}
        ],
            listRight:[
                {info:'Heading Out To College?'},
                {info:'Moving Your Business?'},
                {info:'Outstanding Quality'},
                {info:'Cost of Moving'},
                {info:'Best Moving Tips'}
        ]
        }
    },

    components:{
        FooterInfo,
        Social
    }
}
</script>
<template>
    <div class="border">
        <div class="info-cnt">
            <div class="info-left">
                <div class="info-about">
                    <h3>About</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel temporibus quasi magnam architecto, sit at inventore et accusantium veritatis voluptate cupiditate porro sed repellat! Ut dignissimos et cum libero voluptas.</p>
                    <img src="../../assets/images/avada-movers-retinalogo.png" alt="">
                </div> 
                <div class="list-left">
                    <h4>avada movers</h4>
                    <ul>
                        <FooterInfo v-for="item in listLeft" 
                        :value="item.info"/>
                    </ul>
                </div>
            </div>
            <div>
                <h4>recent posts</h4>
                <ul>
                    <FooterInfo v-for="item in listRight"
                    :value="item.info"/>
                </ul>
            </div>
        </div>
    </div>
  
    <Social/>

</template>
<style scoped lang="scss">
@use '../../assets/styles/colors.scss' as *;
.border{
    border-top: 10px solid $color-lima-light;
}
.info-cnt{
    width: 900px;
    margin: auto;
    height: 300px;
    display: flex;
    justify-content: space-between;
    .info-left{
        display: flex;
        .info-about{
            width: 300px;
            img{
                width: 160px;
            }
        }
        .list-left{
            width: 220px;
        }
    }
    
}
h4{
    text-transform: uppercase;
    text-align: center;
}

ul{
    list-style: none;
}
</style>