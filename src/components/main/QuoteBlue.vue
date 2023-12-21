<script>
export default{
    data(){
        return{
            //values for toggling the quote box layover and store the input values
            showOver:false,
            miles:'',
            kgs:''
        }
    },
    methods:{

        // functions to toggle the box on and off

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

    <!-- on click the quote box will appear -->

<div class="quote" @click="isShown()">
    <font-awesome-icon icon="fa-regular fa-paper-plane" />
    get a free quote online now!!
</div>

<!-- template block for the quote box -->

<div class="test" v-if="showOver">
    <div class="cnt">
        <div class="close-cnt">
            <button class="close" @click="isNotShown">Close</button>
        </div>
        <div class="insert">
            <div>Insert you data to get a quote!</div>
            
            <!-- form for inserting the values which will go into the calculation -->
            <form action="">
                <input type="number" placeholder="Insert the miles" v-model="miles">
                <input type="number" placeholder="Insert the kgs" v-model="kgs">
            </form>
            <button class="submit">Calculate</button>
        </div>
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
    .cnt{
        height: 220px;
        width: 225px;
        display: flex;
        flex-direction: column;

    }
    
 
    .close{
        background-color: $color-lima-dark;
        color: white;
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
            .submit{
                border: 1px solid white;
                border-radius: 10px;
                background-color: $color-lima-dark ;
            }
    }
        .quote{
            cursor: pointer;
        }
    }
}
.close-cnt{
    height: 40px;
}

</style>