<template>
<div id="app">
    <section class="lamb">  
           <div class="lamb-content">
               <h1 class="lamb-content_title">Доставка ВКУСНЕЙШИХ 
БЛЮд за 60 минут</h1>
                <h1 class="lamb-content_titleShadow">
                  Доставка ВКУСНЕЙШИХ 
БЛЮд за 60 минут  
                </h1>
                <div class="lamb-content_sup">
                    <h2 class="lamb-content_suptitle">Ещё не пробовал?</h2>
                    <span class="lamb-content_supBox"></span>
                    <span class="lamb-content_supShadow"></span>
                </div>
           </div>
    </section> 
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
     <main-food></main-food>
     <hr>
     <section class="info">
         <div class="cafe">
             <div class="cafe-wrap">
                 <div class="cafe-wrap_info">
                    <div class="cafe-wrap_infoContent">
                        <h1>
                             Наше кафе
                        </h1>
                        <p>
                            Мы расположены в одном из самых живописных мест города — на берегу реки, это ваш оазис в черте города, куда можно сбежать от шумного и пыльного мегаполиса. Мы, действительно уникальные, ведь все продумано до мелочей: проект построен из дикого закарпатского сруба, камин в основном зале ресторана и панорамные окна с видом на реку, уютные беседки на берегу реки и лучшая видовая террасса, шатер с посадкой на 200 человек, сказочный детский домик и бассейн.
                        </p>
                        <button>
                            ПОСМОТРЕТЬ МЕНЮ
                        </button>
                    </div>
                    <div class="cafe-wrap_infoBox">
                        <a href="#">
                            <img src="../../assets/img/onion.png" alt="">
                            Свежайшие продукты
                        </a>
                        <a href="#">
                            <img src="../../assets/img/Thunder.png" alt="">
                            Быстрая доставка
                        </a>
                        <a href="#">
                            <img src="../../assets/img/Head.png" alt="">
                            Лучшие повора
                        </a>
                        <a href="#">
                            <img src="../../assets/img/onion.png" alt="">
                            Свежайшие продукты
                        </a>
                    </div>
                </div>
             </div>
             
         </div>
         <div class="map">
             <div class="contact">
                 <h1>
                     Контакты
                 </h1>
                 <hr>
                 <div class="contact-address">
                     <img src="../../assets/img/Location.png" alt="">
                     <div class="contact-address_content">
                          Наш адрес: <br> <b>МО, городской округ Красногорск, село Ильинкое, 
Экспериментальная улица, 10</b> 
                     </div>
                        
                     
                 </div>
                 <div class="contact-email">
                     <img src="../../assets/img/Message.png" alt="">
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
                     Мы в соц сетях: <img src="../../assets/img/facebook.png" alt="">
                     <img src="../../assets/img/vk.png" alt="">
                     <img src="../../assets/img/youtube.png" alt="">
                     <img src="../../assets/img/instagram.png" alt="">
                 </div>
             </div>
         </div>
        
     </section>
</div>
  
</template>

<script>
import MainFood from './components/Main-food.vue'
export default {
    name: 'App',
  components: {
    MainFood
  }
}
</script>

<style lang="scss" scoped>
    .lamb {
        width: 100%;
        height: 100vh;
        background: url(../../assets/img/lamb.png);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: right;
        position: relative;
        &-content {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100vh;
            background-image: linear-gradient(to right, 
            rgba(33, 31, 32, 1) 20%, 
            rgba(33, 31, 32, .9) 40%, 
            rgba(68, 64, 63, .8) 60%,
            rgba(68, 64, 63, .4) 80%,
            rgba(68, 64, 63,0));

            &_title {
                margin-top: 72px;
                position: absolute;
                left: 6.44%;
                right: 50.99%;
                top: 6.95%;
                bottom: 89.15%;
                font-family: "Zing Rust Demo Base";
                font-style: italic;
                font-weight: 400;
                font-size: 67px;
                line-height: 109.2%;
                text-align: center;
                color: #FFFFFF;
                transform: rotate(-8.37deg);
            }
                &_titleShadow {
                margin-top: 72px;
                position: absolute;
                left: 6.03%;
                right: 51.4%;
                top: 7.40%;
                bottom: 89.02%;
                font-family: "Zing Rust Demo Base";
                font-style: italic;
                font-weight: 400;
                font-size: 67px;
                line-height: 109.2%;
                text-align: center;
                color: transparent;
                -webkit-text-stroke: 1px white;
                transform: rotate(-8.37deg);
            }
            &_sup {
                margin-top: 296px;
                position: relative;
                transform: rotate(-8.02deg);
            }
            &_suptitle {
                width: 177px;
                position: absolute;
                left: 22.08%;
                right: 65.63%;
                top: 10.98%;
                bottom: 80.3%;
                font-family: "Zing Rust Demo Base";
                font-style: italic;
                font-weight: 400;
                font-size: 25px;
                line-height: 140.2%;
                text-align: center;
                color: #FFFFFF;
                z-index: 2;
            }
            &_supBox {
                width: 229.31px;
                height: 35.85px;
                position: absolute;
                left: 20.13%;
                right: 63.94%;
                top: 10.96%;
                bottom: 88.09%;
                background: #72A479;
                transform: skew(-20deg);
                z-index: 1;
            }
            &_supShadow {
                box-sizing: border-box;
                position: absolute;
                left: 19.40%;
                right: 63.57%;
                top: 15px;
                bottom: 87.71%;
                border: 1px solid;
                border-image: linear-gradient(200deg, 
      white, 
      rgba(0, 0, 0, 0),
      white, 
      rgba(0, 0, 0, 0)
    ) 1 1%;
                height: 36px;
                width: 245px;
                transform: skew(-20deg);
            }
        }
    }

    .nav {
        width: 100%;
        background:#403C3B;
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
    .info {
        background-color: #403C3B;
        width: 100%;
        position: relative;
    }
    .cafe {
        width: 100%;
        height: 470px;
        position: relative;
        padding-top: 58px;
        z-index: 1;
        &-wrap {
            margin: auto;
            width: 95%;
            height: 610px;
            background: url(../../assets/img/duck.png);
            background-repeat: no-repeat;
            background-size: cover;
            background-position: right;
            
            &_info {
                background-image: linear-gradient(to right, 
                rgba(33, 31, 32, 1) 20%, 
                
                rgba(68, 64, 63, .9) 60%,
                rgba(68, 64, 63, .4) 80%,
                rgba(68, 64, 63,0));
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: space-between;
            }
            &_infoContent {
                padding-left: 70px;
                padding-top: 100px;
                h1  {
                    font-family: "Gilroy Medium";
                    font-style: normal;
                    font-weight: 700;
                    font-size: 32px;
                    line-height: 39px;
                    text-transform: uppercase;
                    color: #FFFFFF;
                }
                p {
                    width: 563px;
                    padding-top: 26px;
                    padding-bottom: 60px;
                    font-family: "Gilroy Light";
                    font-style: normal;
                    font-weight: 400;
                    font-size: 20px;
                    line-height: 25px;
                    color: #CFCFCF;
                }
                button {
                    width: 223px;
                    height: 59px;
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
                    padding-left: 64px;
                }
            }
            &_infoBox {
                display: flex;
                flex-wrap: wrap;
                width: 500px;
                height: 500px;
                padding-right: 100px;
                padding-top: 71px;
                justify-content: space-around;
                

                a {
                    width: 228px;
                    height: 227px;
                    background: rgba(80, 75, 74, 0.9);
                    backdrop-filter: blur(4px);
                    font-family: "Gilroy Medium";
                    font-style: normal;
                    font-weight: 400;
                    font-size: 18px;
                    line-height: 25px;
                    color: #FFFFFF;
                    text-align: center;
                }
                a:hover {
                    color: #79B282;
                    box-shadow: 0px 40px 50px rgba(0, 0, 0, 0.4);
                    background-image: #79B282;
                }
                a > img {
                    display: block;
                    align-items: center;
                    margin: 71px auto 31px;
                }
            }
        }
    }
    .map {
        width: 100%;
        height: 100vh;
        background-image: url(../../assets/img/map.png);
        background-size: cover;
        position: relative;
        .contact {
            width: 526px;
            height: 405px;
            background: #2E2B2C;
            box-shadow: 0px 0px 70px rgba(0, 0, 0, 0.15);
            border-radius: 15px;
            position: absolute;
            left: 109px;
            top: 210px;
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
    @media (max-width: 375px) {
        .lamb {
            height: 296px;
            background-size: auto;
            background-position: center;
            &-content {
                height: 296px;
                background-image: linear-gradient(to right, 
            rgba(33, 31, 32, 1) 20%, 
            rgba(33, 31, 32, .9) 40%, 
            rgba(68, 64, 63, .8) 80%,
            rgba(68, 64, 63, .4) 100%,
            rgba(68, 64, 63,0));
                &_title {
                    font-size: 35px;
                    line-height: 109.2%;
                    width: 100%;
                    left: 2%;
                }
                &_titleShadow {
                    font-size: 35px;
                    line-height: 109.2%;
                    width: 100%;
                    left: 1%;
                }
                &_sup {
                    margin-top: 200px;
                }
                &_supBox {
                    left: 23%;
                }
                &_suptitle {
                    left: 25%;
                }

            }
        }
        .nav {
            &-menu {
                width: 100%;
                padding: 29px 15px;
                overflow: auto;
                white-space: nowrap;
                
                a {
                    padding-right: 30px;
                    z-index: 1;
                }
                
            }
            &-menu::-webkit-scrollbar {
                    display: none; 
                }
            
        }
        .cafe {
        display: none;
    }
    .map {
            .contact {
            width: 342px;
            height: 572px;
            left: 15px;
            top: 15px;
            h1 {
                text-align: center;
            }
            &-address, &-email  {
                padding-left: 22px;
            }
            &-booking {
                display: inherit;
                &_table {
                    display: none;
                }
                &_wash {
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
                &_wash:hover {
                    background: linear-gradient(114.93deg, #618967 5.11%, #72A479 94%);
                }
                &_route {
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
                &_route:hover {
                    background: linear-gradient(114.93deg, #618967 5.11%, #72A479 94%);
                }
                &_num {
                    text-align: center;
                    padding-left: 0;
                }
            }
        }
    }
    }
    

</style>
