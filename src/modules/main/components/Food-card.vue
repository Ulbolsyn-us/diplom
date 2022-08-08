<template>
    <div class="content">
        <section class="nav">
            <div class="nav-menu">
                <a class="#" href="#">Холодные закуски</a>
                <a href="#">Горячие закуски</a>
                <a href="#">Мясные блюда</a>
                <a href="#">Супы</a>
                <a href="#">Рыбные блюда</a>
                <a href="#">Гриль меню</a>
                <a href="#">Фирменные блюда</a>
                <a href="#">Напитки</a>
            </div>
            <hr>
        </section> 
        <div class="card">
            <router-link to="/">
        <button>
            <img src="../../../assets/img/eclips.png" alt="">
            Вернуться назад
        </button>
            </router-link>
       <div class="card-wrap">
           <div class="card-wrap_img">
               <img :src="data.image" alt="">
            </div>
            <div class="card-wrap_content">
                <div class="card-wrap_contentTop">
                    <h1>{{ data.title }}</h1>
                    <p>{{ data.description }}</p>
                </div>
                <div class="card-wrap_contentBottom">
                    <p>{{ data.weight }}</p>
                    <div class="card-wrap_contentBottom__Button">
                        <button @click="addBasket" href="#">Корзина <span></span> <img src="../../../assets/img/bag.png" alt=""></button>
                        <h2>{{ data.price }}$</h2>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <hr>
        <div class="map">
             <div class="contact">
                 <h1>
                     Контакты
                 </h1>
                 <hr>
                 <div class="contact-address">
                     <img src="../../../assets/img/Location.png" alt="">
                     <div class="contact-address_content">
                          Наш адрес: <br> <b>МО, городской округ Красногорск, село Ильинкое, 
Экспериментальная улица, 10</b> 
                     </div>
                        
                     
                 </div>
                 <div class="contact-email">
                     <img src="../../../assets/img/Message.png" alt="">
                     <div class="contact-email_content">
                         
                         Наша почта: <br><b>auto.wash@gmail.com</b> 
                     </div> 
                </div>
                <hr>
                 <div class="contact-booking">
                         <a class="contact-booking_table" href="#">ЗАБРОНИРОВАТЬ СТОЛ</a>
                         <a class="contact-booking_wash" href="#">ЗАПИСАТЬСЯ НА МОЙКУ</a>
                         <a class="contact-booking_route" href="#">ПРОЛОЖИТЬ МАРШРУТ</a>
                         <div class="contact-booking_num">
                             <h1>+7 (917) 510-57-59</h1>
                             <h2>Звоните или оставляйте заявку</h2>
                         </div>
                 </div>
                 <div class="contact-social">
                     Мы в соц сетях: <img src="../../../assets/img/facebook.png" alt="">
                     <img src="../../../assets/img/vk.png" alt="">
                     <img src="../../../assets/img/youtube.png" alt="">
                     <img src="../../../assets/img/instagram.png" alt="">
                 </div>
             </div>
         </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: ''
        }
    },
    created() {
        fetch(`http://localhost:3000/products/${this.$route.params.id}`)
        .then(res => res.json())
        .then(json => {
                this.data = json
            })
            
    },
    methods: {
    addBasket() {
      const data = this.$store.state.basket 
      data.push(this.data)
      this.$store.dispatch('addToBasket', data)
    }
  }
}
</script>

<style lang="scss" scoped>
    .content {
        width: 100%;
        background: #2E2B2C;
    }
    hr {
        display: block;
        width: 100%;
        height: 1px;
        border: 0;
        background: rgba(255, 255, 255, 0.1);
    }
    .nav {
        width: 100%;
        &-menu {
            display: flex;
            justify-content: space-between;
            padding: 29px 80px;

            a {
                font-family: "Gilroy Light";
                font-style: normal;
                font-weight: 500;
                font-size: 18px;
                line-height: 26px;
                color: #CFCFCF;
                position: relative;
            }
            a:hover {
                color: white;
                transition: .5;
            }
            a:hover::after {
                content: "";
                display: block;
                background: #618967;
                box-shadow: 0px 5px 12px rgba(114, 164, 121, 0.3);
                width: 153px;
                height: 3px; 
                position: absolute;
                top: 54px;
                
                h1 {
                    font-family: "Zing Rust Demo Base";
                    text-transform: uppercase;
                }
            }
        }
        
        hr {
            display: block;
            width: 100%;
            height: 1px;
            border: 0;
            background: rgba(255, 255, 255, 0.1);
        }
        
    }
    .card {
        width: 80%;
        margin: auto;
        padding-top: 44px;
        padding-bottom: 50px;
        button {
            background: none;
            border-style: none;
            font-family: "Gilroy Light";
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 19px;
            color: #FFFFFF;
            margin-bottom: 25px;

            img {
                vertical-align: middle;
                padding-right: 10px;
            }
            
        }
        &-wrap {
            display: flex;
             background: #504B4A;
            &_img {
                img {
                    width: 599px;
                    height: 399px;
                }
            }
            &_content {
                padding-left: 50px;
                h1 {
                    padding-top: 38px;
                    font-family: "Gilroy Medium";
                    font-style: normal;
                    font-weight: 700;
                    font-size: 25px;
                    line-height: 30px;
                    color: #FFFFFF;
                }
                p {
                    font-family: "Gilroy Light";
                    font-style: normal;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 16px;
                    color: #CFCFCF;
                }
            }
            &_contentBottom {
                padding-top: 113px;
                &__Button {
                    display: flex;
                    padding-top: 22px;
                    button {
                        width: 145px;
                        height: 50px;
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
                        span {
                            content: "";
                            display: block;    
                            border: 1px solid rgba(255, 255, 255, 0.3);
                            transform: rotate(90deg);
                            margin-top: 2px;
                            right: 30px;
                            width: 32px;
                            float: right;
                        }
                        img {
                            padding-left: 8px;
                            vertical-align: middle;
                        }
                    }
                    button:hover {
                                background: linear-gradient(114.93deg, #618967 5.11%, #72A479 94%);
                            }
                    h2 {
                        display: inherit;
                        font-family: "Gilroy Medium";
                        font-style: normal;
                        font-weight: 600;
                        font-size: 14px;
                        line-height: 17px;
                        color: #FFFFFF;
                        padding-left: 25px;
                        align-items: center;
                    }
                }
            }
        }
    }
        .map {
        width: 100%;
        height: 500px;
        background-image: url(../../../assets/img/map.png);
        background-size: cover;
        position: relative;
        margin-top: 42px;
        .contact {
            width: 526px;
            height: 405px;
            background: #2E2B2C;
            box-shadow: 0px 0px 70px rgba(0, 0, 0, 0.15);
            border-radius: 15px;
            position: absolute;
            left: 109px;
            top: 65px;
            bottom: 40px;
            h1 {
                font-family: "Gilroy Medium";
                font-style: normal;
                font-weight: 700;
                font-size: 30px;
                line-height: 36px;
                text-transform: uppercase;
                color: #FFFFFF;
                padding: 25px 43px 26px;
            }
            hr {
                background-image: linear-gradient(to right,
                transparent 0%,
                rgba(255, 255, 255, 0.2) 50%,
                transparent 100%);
                border: 0;
                height: 1px;
            }
            &-address {
                padding-top: 17px;
                padding-left: 56px;
                img {
                    vertical-align: top;
                    float: left;
                    margin-right: 10px;
                }
                &_content {
                    margin-left: 28px;
                    font-family: "Gilroy Light";
                    font-style: normal;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 16px;
                    color: #CFCFCF;
                }
                
            }
            &-email {
               padding: 17px 54px 28px;
               
                img {
                    vertical-align: top;
                    float: left;
                    margin-right: 10px;
                }
                &_content {
                    margin-left: 28px;
                    font-family: "Gilroy Light";
                    font-style: normal;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 16px;
                    color: #CFCFCF;
                } 
            }
            &-booking {
                display: flex;
                &_table {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-left: 52px;
                    margin-top: 17px;
                    width: 211px;
                    height: 59px;
                    background: transparent;
                    border-radius: 10px;
                    font-family: "Gilroy Medium";
                    font-style: normal;
                    font-weight: 700;
                    font-size: 13px;
                    line-height: 16px;
                    color: #FFFFFF;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }
                &_table:hover {
                    background: linear-gradient(114.93deg, #618967 5.11%, #72A479 94%);
                }
                &_wash {
                    display: none;
                }
                &_route {
                    display: none;
                }
                &_num {
                    padding-top: 24px;
                    padding-left: 33px;
                    h1 {
                        font-family: "Gilroy Medium";
                        font-style: normal;
                        font-weight: 700;
                        font-size: 18px;
                        line-height: 28px;
                        color: #FFFFFF;
                        padding: 0;
                    }
                    h2 {

                        font-family: "Gilroy Light";
                        font-style: normal;
                        font-weight: 400;
                        font-size: 13px;
                        line-height: 15px;
                        color: #CFCFCF;
                    }

                }
            }
            &-social {
                display: flex;
                justify-content: center;
                padding-top: 30px;
                font-family: "Gilroy Medium";
                font-style: normal;
                font-weight: 600;
                font-size: 16px;
                line-height: 19px;
                color: #FFFFFF;
                img {
                    
                    padding-left: 10px;
                }
            }

        }
    }
</style>