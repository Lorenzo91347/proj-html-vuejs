<script>
export default{
    data(){
        return{
            showOver:false,
            miles:'',
            kgs:''
        }
    },
    methods:{
        isShown(){
            this.showOver = true

        },
        isNotShown(){
            this.showOver = false
        }
    }
}
</script>
<template>
<div @click="isShown()">
    <font-awesome-icon icon="fa-regular fa-paper-plane" />
    get a free quote online now!!
</div>
<div class="test" v-if="showOver">
    <div class="insert">
        <button @click="isNotShown">Close</button>
        <div>Insert you data to get a quote!</div>
        <form action="">
            <input type="number" placeholder="Insert the miles" v-model="miles">
            <input type="number" placeholder="Insert the kgs" v-model="kgs">
        </form>
    </div>
</div>
</template>
<style scoped lang="scss">
@use '../../assets/styles/colors.scss' as *;

div{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 125px;
    background-color: $color-denim-dark;
    color: white;
    text-align: center;
    text-transform: uppercase;
}
.test{
    position: fixed;
    width: 100vw;
    height:100vh;
    background-color:rgba(0, 0, 0, 0.447);
    z-index: 100;
    top: 0;
    left: 0;
    
 
    button{
        position: absolute;
        background-color: $color-lima-dark;
        color: white;
        top: 28%;
        right: 44%;
        
    }
    .insert{
        width: 200px;
        height: 200px;
        background-color: $color-denim-dark;
        display:flex;
        flex-direction: column;
        form{
            display: flex;
            flex-direction: column;
        }
    }
    .quote{
        cursor: pointer;
    }
}
</style>