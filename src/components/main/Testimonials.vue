<script>
export default{
    data(){
        return{

            //Object array required to populate the v-for below

            testimonials:[
                {
                    "img":"../src/assets/images/avada-movers-johndoe-final-200x200.jpg",
                    "name":"John Doe"
                },
                {
                    "img":"../src/assets/images/avada-movers-janedoe-final-200x200.jpg",
                    "name":"Jane Doe"
                },
                {
                    "img":"../src/assets/images/avada-movers-johnsmith-final-200x200.jpg",
                    "name":"John Smith"
                },
            ]
        }
    }
}
</script>
<template>
<div class="test-bg" id="cards">
    <div class="test-title">
        <div class="title">
            <div class="grey">happy customers</div>
            <h2 >testimonials</h2>
        </div>
    </div>
    <div class="cards-cnt">
        
        <!-- v-for to populate the section using props from Cards -->

        <div class="cards" v-for="item in testimonials">
            <div>
                <img :src="item.img" alt="">
                <h3>{{ item.name }}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eveniet dignissimos veniam, eligendi facere, voluptatem harum dicta minima officiis ad, optio architecto? Laboriosam minus sed enim sint iste, debitis quam.</p>
            </div>
        </div>
    </div>
    <div class="blue-btn">read more testimonials</div>

</div>
</template>
<style scoped lang="scss">
@use '../../assets/styles/colors.scss' as *;
@use '../../assets/styles/variables.scss' as *;
.test-bg{
    background-image: url(../../assets/images/avada-movers-testimonial-background.jpg);
    height: 800px;
    .test-title{
        margin: auto;
        height: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
        .title{
            text-align: center;
              
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
    }

    .cards-cnt{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 100px;

    
        .cards{
            div{
                width: 200px;
                display: flex;
                flex-direction: column;
                align-items: center;
                img{
                    width: 100px;
                    border-radius: 50px;
                }
                h3{
                color: $color-denim-dark;
                }
            }
        }
    }
    .blue-btn{
        text-align: center;
        width: 260px;
        margin: auto;
        padding: 5px;
    }
    
}
    
</style>