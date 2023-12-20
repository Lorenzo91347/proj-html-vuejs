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
   <ul>
        <FooterInfo v-for="item in listLeft" 
        :value="item.info"
        />
    </ul>
    <ul>
        <FooterInfo v-for="item in listRight"
        :value="item.info"/>
    </ul>
    <Social/>

</template>
<style scoped lang="scss">
@use '../../assets/styles/colors.scss' as *;

ul{
    list-style: none;
}
</style>