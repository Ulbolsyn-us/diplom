<template>
    <div class="condition">
        <div class="condition-inner">
            <div class="condition-inner_header">
                <h1>условия доставки</h1>
            </div>
            <div class="condition-inner_content">
                <div class="condition-inner_content__list">
                    <div class="slider">
                        <div class="slider-content">
                            <p>
                                У наших курьеров всегда должна быть сдача!
                            </p>
                            <button @click="isShow1 = !isShow1"><img class="slider-content_clicked" :class='{ "rotate": isShow1}' src="../../assets/img/Stroke.png" alt=""></button>
                        </div>
                            
                    </div>
                    <div v-show="isShow1" class="slider-hide">
                                <p>Мы очень внимательно следим за качеством нашей работы, поэтому, если у вас будут какие-либо замечания или предложения, то обязательно сообщайте их нам</p>
                    </div>
                    <div class="slider">
                        <div class="slider-content">
                            <p>
                                Вам что-то не довезли?
                            </p>
                        <button @click="isShow2 = !isShow2"><img class="slider-content_clicked" :class='{ "rotate": isShow2}' src="../../assets/img/Stroke.png" alt=""></button>
                        </div>
                    </div>
                    <div v-show="isShow2" class="slider-hide">
                                <p>Мы очень внимательно следим за качеством нашей работы, поэтому, если у вас будут какие-либо замечания или предложения, то обязательно сообщайте их нам</p>
                    </div>
                    <div class="slider">
                        <div class="slider-content">
                            <p>
                                Не понравился продукт?
                            </p>
                            <button @click="isShow3 = !isShow3"><img class="slider-content_clicked" :class='{ "rotate": isShow3}' src="../../assets/img/Stroke.png" alt=""></button>
                        </div>
                    </div>
                    <div v-show="isShow3" class="slider-hide">
                                <p>Мы очень внимательно следим за качеством нашей работы, поэтому, если у вас будут какие-либо замечания или предложения, то обязательно сообщайте их нам</p>
                    </div>
                    <div class="slider">
                        <div class="slider-content">
                            <p>
                                Если появились замечания
                            </p>
                            <button @click="isShow4 = !isShow4"><img class="slider-content_clicked" :class='{ "rotate": isShow4}' src="../../assets/img/Stroke.png" alt=""></button>
                        </div>
                    </div>
                    <div v-show="isShow4" class="slider-hide">
                                <p>Мы очень внимательно следим за качеством нашей работы, поэтому, если у вас будут какие-либо замечания или предложения, то обязательно сообщайте их нам</p>
                    </div>
                    <div class="slider">
                        <div class="slider-content">
                            <p>
                                Оплата Visa, MasterCard и МИР
                            </p>
                            <button @click="isShow5 = !isShow5"><img class="slider-content_clicked" :class='{ "rotate": isShow5}' src="../../assets/img/Stroke.png" alt=""></button>
                        </div>
                    </div>
                    <div v-show="isShow5" class="slider-hide">
                                <p>Мы очень внимательно следим за качеством нашей работы, поэтому, если у вас будут какие-либо замечания или предложения, то обязательно сообщайте их нам</p>
                    </div>
                    <div class="slider">
                        <div class="slider-content">
                            <p>
                                Реквизиты
                            </p>
                            <button @click="isShow6 = !isShow6"><img class="slider-content_clicked" :class='{ "rotate": isShow6}' src="../../assets/img/Stroke.png" alt=""></button>
                        </div>
                    </div>
                    
                    <div v-show="isShow6" class="slider-hide">
                        
                                <p>Мы очень внимательно следим за качеством нашей работы, поэтому, если у вас будут какие-либо замечания или предложения, то обязательно сообщайте их нам</p>
                    </div>
                </div>
                <div class="condition-inner_content__map">
                    <img src="../../assets/img/map.png" alt="">
                </div>
            </div>
            <div class="condition-inner_time">
                <div class="condition-inner_time__Delivery">
                    <h1>
                        График работы доставки:
                    </h1>
                    <p>
                        с 10:00-21:00
                    </p>
                    
                </div>
                <div class="condition-inner_time__Cafe">
                    <h1>
                        График работы кафе:

                    </h1>
                    <p>
                        с 08:00-21:00
                    </p>
                </div>
            </div>
            <div class="condition-inner_info">
                <h1>
                    Минимальный заказ:
                </h1>
                <p>
                    Бесплатная доставка пешим курьером при сумме заказа от 400 ₽
Доставка оператором такси от любой суммы заказа - по тарифам 
перевозчика.
                </p>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            isShow1: false,
            isShow2: false,
            isShow3: false,
            isShow4: false,
            isShow5: false,
            isShow6: false,

            
        }
    },
    methods: {
        
        
    }

}
</script>

<style lang="scss" scoped>
.condition {
    background: #2E2B2C;
    width: 100%;
    
    &-inner {
        padding-top: 50px;
        width: 90%;
        margin: auto;
        &_header {
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
        &_content {
            padding-top: 42px;
            display: flex;
            justify-content: space-around;
            &__list {
                .slider {
                    width: 618px;
                    height: 68px;
                    position: relative;
                    margin-bottom: 10px;
                    &-content {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        position: relative;
                        z-index: 1;
                        width: 618px;
                        height: 68px;
                        background: linear-gradient(114.93deg, #618967 5.11%, #72A479 94%);
                        border-radius: 10px;
                        p {
                        font-family: "Gilroy Light";
                        font-style: normal;
                        font-weight: 500;
                        font-size: 18px;
                        color: #FFFFFF;
                        padding-left: 20px;
                        }
                        button {
                            border-style: none;
                            background: transparent;
                            margin-right: 20px;
                        }
                        &_clicked {
                            transition: transform .3s ease-in-out;
                        }
                        &_clicked.rotate {
                            transform: rotate(180deg);
                        }

                    }
                    &-hide { 
                            display: block;
                            width: 618px;
                            height: 180px;
                            background: linear-gradient(90deg, #494544 0%, #504B4A 100%);
                            border-radius: 10px;
                            margin-top: -50px;
                            margin-bottom: 20px;
                            transition: .9s;
                        p {
                                font-family: "Gilroy Light";
                                font-style: normal;
                                font-weight: 400;
                                font-size: 16px;
                                line-height: 25px;
                                color: #FFFFFF;
                                padding: 80px 30px;
                        }
                    }
                }
                
            }
            &__map {
                width: 640.33px;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
        &_time {
            display: flex;
            width: 600px;
            padding-top: 30px;
            &__Delivery {
                h1 {
                    font-family: "Gilroy Medium";
                    font-style: normal;
                    font-weight: 700;
                    font-size: 22px;
                    line-height: 35px;
                    color: #FFFFFF;
                }
                p {
                    font-family: "Gilroy Light";
                    font-style: normal;
                    font-weight: 400;
                    font-size: 22px;
                    line-height: 35px;
                    color: #CFCFCF;
                }
            }
            &__Cafe {
                h1 {
                    font-family: "Gilroy Medium";
                    font-style: normal;
                    font-weight: 700;
                    font-size: 22px;
                    line-height: 35px;
                    color: #FFFFFF;
                }
                p {
                    font-family: "Gilroy Light";
                    font-style: normal;
                    font-weight: 400;
                    font-size: 22px;
                    line-height: 35px;
                    color: #CFCFCF;
                }
            }
        }
        &_info {
            padding-top: 40px;
            padding-bottom: 37px;
            width: 697px;
            h1 {
                font-family: "Gilroy Medium";
                    font-style: normal;
                    font-weight: 700;
                    font-size: 22px;
                    line-height: 35px;
                    color: #FFFFFF;
            }
            p {
                font-family: "Gilroy Light";
                    font-style: normal;
                    font-weight: 400;
                    font-size: 22px;
                    line-height: 35px;
                    color: #CFCFCF;
            }
        }
    }
}

</style>