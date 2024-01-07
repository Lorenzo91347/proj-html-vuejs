<script>
export default{
    data(){
        return{
            listShown: false,
            listHidden: false
        }
    },
    methods:{
        showList(){
            this.listShown = true,
            this.listHidden = false
        },
        hidList(){
            this.listShown = false,
            this.listHidden = true
        }
    },
    //props for HeaderMain component
    props:{
        value : "number"
    },
   
}
</script>
<template>
    <!--When rendered inside HeaderMain the prop will be cycled -->
        <div @mouseover="showList()">
            <li>{{ value }}</li>
            <ul v-if="listShown"  @mouseover="showList()" @mouseleave="hidList()" :class="{ active: listShown }">
                <li class="dropdown">Item 1</li>
                <li class="dropdown">Item 1</li>
                <li class="dropdown">Item 1</li>                
            </ul>
        </div>
    
</template>
<style scoped lang="scss">
@use '../../assets/styles/colors.scss' as *;
div{
display: flex;
flex-direction: column;
align-items: center;
position:relative;

li{
    text-align: left;
    width: 80px;
    &:hover{
color:$color-lima-light;
}}
ul{
    list-style: none;
    padding-left: 0;
    border: 1px solid $color-lima-light;
    background-color: rgb(197, 197, 197);
 .dropdown{
  width: 80px;
 }
.dropdown:nth-child(-n + 2){
    border-bottom: 1px solid $color-lima-light;

}
.active{
    z-index: 4;
    position: absolute;
    top: 20px;
    
}
}
}




</style>

