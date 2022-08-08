<template>
    <div class="slider">
        <div class="slider-top">
            <div class="slider-top_header">
                <h1>ХОЛОДНЫЕ ЗАКУСКИ</h1>
            </div>
        </div>  
        <div class="slider-wrapper">
                <router-link :to="{path: `/food-card/${data.id}`, params: {data}}" class="slider-wrapper_cards" v-for="(data, index) of products" :key="index">
                    <!-- <router-link :to="{path: '/products/' +item.id,params: {item}}" class="slider-wrapper_cards" v-for="(item, index) of getProducts" :key="index"> -->
                    <img :src="data.image">
                    <div class="slider-wrapper_cardsTitle">
                        <h1>{{ data.title }}</h1>
                        <p>{{ data.weight }}</p>
                    </div>
                    
                    <p>{{ data.description }}</p>
                    <div class="slider-wrapper_cardsContent">
                        <h2>{{ data.price }}$</h2>
                        <a href="#" @click="addBasket">В корзину <img src="../../../assets/img/basket.png" alt=""> </a>
                    </div>

                </router-link>
        </div>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            products: ''
        }
    },
    created() {
        fetch(`http://localhost:3000/products`)
        .then(res => res.json())
        .then(json => {
                this.products = json
            })
    }
}
</script>

<style lang="scss" scoped>
    .slider {
        padding-top: 50px;
        padding-bottom: 50px;
        background: #403C3B;
        &-top {
            padding-left: 89px;
            padding-bottom: 50px; 
            &_header h1 {
                font-family: "Gilroy Medium";
                font-style: normal;
                font-weight: 700;
                font-size: 32px;
                line-height: 39px;
                text-transform: uppercase;
                color: #FFFFFF;
                padding-left: 19px;
            }
            &_header::before {
                content: "";
                display: block;
                width: 33px;
                height: 4px;
                background: #618967;
                transform: rotate(90deg);
                position: relative;
                top: 18px;
                left: -10px;
            }
        }
        &-wrapper {
            display: flex;
            justify-content: space-around;
            margin-right: 20px;
            
            &_cards {
                display: block;
                width: 325px;
                height: 385px;
                background: linear-gradient(90deg, #494544 0%, #504B4A 100%);
                border-radius: 10px;
                overflow: hidden;
                h1 {
                    font-family: "Gilroy Medium";
                    font-style: normal;
                    font-weight: 700;
                    font-size: 22px;
                    line-height: 27px;
                    color: #FFFFFF;
                    padding-top: 14px;
                    padding-left: 20px;
                    padding-bottom: 5px;
                }
                p {
                    font-family: "Gilroy Light";
                    font-style: normal;
                    font-weight: 400;
                    font-size: 13px;
                    line-height: 17px;
                    color: #CFCFCF;
                    padding-left: 20px;
                }
            }
            &_cardsTitle {
                display: flex;
                justify-content: space-between;
                margin-right: 16px;
                
            }
            &_cardsContent {
                display: flex;
                justify-content: space-between;
                padding-top: 42px;
                padding-left: 12px;
                padding-right: 16px;
                align-items: center;
    
                h2 {
                    font-family: "Gilroy Medium";
                    font-style: normal;
                    font-weight: 600;
                    font-size: 20px;
                    line-height: 24px;
                    color: #FFFFFF;
                    padding-left: 14px;
                    
                }
                a {
                    width: 130px;
                    height: 44px;
                    display: inherit;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    backdrop-filter: blur(5px);
                    border-radius: 10px;
                    font-family: "Gilroy Medium";
                    font-style: normal;
                    font-weight: 700;
                    font-size: 13px;
                    line-height: 16px;
                    color: #FFFFFF;
                    text-align: center;
                    align-items: center;
                    align-content: center;
                    justify-content: center;
                    img {
                        padding-left: 14px;
                        vertical-align: middle;
                        
                    }
                    
                }
                a:hover {
                    background: linear-gradient(114.93deg, #618967 5.11%, #72A479 94%);
                }
            }
        }
    } 
</style>