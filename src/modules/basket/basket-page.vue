<template>
    <div class="basket-page">
        <div class="box">
            <div class="box-header">
                <router-link to="/">
                <a href="#"><img src="../../assets/img/Arrow.png" alt=""> к выбору блюда</a>
                </router-link>
                <h1>КОРЗИНА</h1>

            </div>
            <div class="box-product">
                    <div class="box-product_inner" v-for="(item, index) of getBasket" :key="index">
                        <img :src="item.image" alt="">
                        <div class="box-product_innerContent">
                            <h1>{{ item.title }}</h1>
                            <p>{{ item.description }}</p>
                            
                        </div>
                        <p class="box-product_price">{{ item.price }}</p>
                        <button @click="deleteBasket"> <img src="../../assets/img/delete.png" alt=""></button>
                    </div>
            </div>
            <div class="box-total">
                <div class="box-total_inner">
                    <div class="box-total_inner__content">
                        <h1>Итого: {{ totalPrice }}$</h1>
                        <p>Бесплатная доставка свыше 5000$:</p>
                        <p>Минимальная сумма заказа 1500$</p>
                    </div>
                    <div class="box-total_inner__button">
                        <router-link to="/delivery">
                            <button>Оформить заказ</button>
                        </router-link>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
       
</template>

<script>
export default {
    computed: {
    getBasket() {
        return this.$store.getters.getBasket 
    }, 
    totalPrice(){
         
        return this.$store.getters.getBasket.reduce((sum, item) => {
          return sum+item.price
        }, 0)
        }
    }, 

  methods: {
      deleteBasket() {
        const data = this.$store.state.basket 
      data.pop(this.data)
      this.$store.splice('addToBasket', data)
      },
      
  },

}
</script>

<style lang="scss" scoped>
    .box {
        background: #2E2B2C;
        &-header {
            padding-top: 34px;
            padding-left: 318px;
            padding-bottom: 74px;
            a {
                font-family: "Gilroy Medium";
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                line-height: 19px;
                color: #FFFFFF;
                img {
                    vertical-align: middle;
                }
            }
            h1 {
                padding-top: 20px;
                padding-left: 22px;
                font-family: "Gilroy Medium";
                font-style: normal;
                font-weight: 700;
                font-size: 32px;
                line-height: 39px;
                text-transform: uppercase;
                position: relative;
                color: #FFFFFF;
                
            }
            h1::before {
                content: "";
                display: block;
                background: #618967;
                width: 33px;
                height: 4px; 
                position: absolute;
                transform: rotate(90deg);
                left: -15px;
                top: 35px;
            }
        }
        &-product {
            margin-left: 172px;
            margin-right: 172px;
            background: #504B4A;
            border-radius: 10px;
            
            &_inner {
                padding-left: 19px;
                padding-top: 20px;
                padding-bottom: 20px;
                display: flex;
                align-items: center;
                img {
                width: 117px;
                height: 86px;
                }
                button {
                    margin-left: 100px;
                    background: none;
                    display: block;
                    border-style: none;
                    img {
                        width: 30px;
                        height: 30px;
                    }
                }
            }
            
            &_innerContent {
                padding-left: 39px;
                h1 {
                    font-family: "Gilroy Medium";
                    font-style: normal;
                    font-weight: 700;
                    font-size: 18px;
                    line-height: 22px;
                    color: #FFFFFF;
                }
                p {
                    font-family: "Gilroy Light";
                    font-style: normal;
                    font-weight: 400;
                    font-size: 12px;
                    line-height: 14px;
                    color: #A6A7AB;
                }
            }
            &_price {
                padding-left: 550px;
                font-family: "Gilroy Medium";
                font-style: normal;
                font-weight: 700;
                font-size: 20px;
                line-height: 24px;
                color: #FFFFFF;
            }
        }
        &-total {
            padding-top: 86px;
             padding-bottom: 89px;
            &_inner {
                margin: auto;
                display: flex;
                align-items: center;
                padding: 20px 39px;
                width: 763px;
                height: 105px;
                background: #504B4A;
                border-radius: 10px;
                justify-content: space-between;
                &__content {
                    h1 {
                        font-family: "Gilroy Light";
                        font-style: normal;
                        font-weight: 500;
                        font-size: 18px;
                        line-height: 21px;
                        color: #A6A7AB;
                    }
                    p {
                        font-family: "Gilroy Light";
                        font-style: normal;
                        font-weight: 500;
                        font-size: 12px;
                        line-height: 14px;
                        color: #FFFFFF;
                        padding-top: 10px;
                    }
                }
                &__button {
                    
                    button {
                        display: block;
                        width: 209px;
                        height: 51px;
                        text-align: center;
                        font-family: "Gilroy Medium";
                        font-style: normal;
                        font-weight: 700;
                        font-size: 14px;
                        line-height: 17px;
                        color: #FFFFFF;
                        border-radius: 10px;
                        background: transparent;
                        border-style: none;
                        border: 1px solid rgba(255, 255, 255, 0.2);
                    }
                    button:hover {
                        background: linear-gradient(114.93deg, #618967 5.11%, #72A479 94%);
                        border: none;
                    }
                }
            }
        }
    }
    
</style>