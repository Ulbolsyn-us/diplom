<template>
    <footer>
        <div class="inner">
            <img src="../assets/img/cyrcle.png" alt="" class="logo">
            <div class="inner_policy">
                <h1>LOGOS</h1>
                <p>© ООО СК «АПШЕРОН» 
                   <br> Все права защищены. 2010-2020</p>
                   <ul>
                       <li><a href="#">Пользовательское соглашение</a></li>
                       <li><a href="#">Карта сайта</a></li>
                       <li><a href="#">Политика конфиденциальности</a></li>
                   </ul>
                
                
                
            </div>
            <div class="inner_nav">
                <a href="#">О ресторане</a>
                <router-link to="/condition"> <a href="#">Условия доставки</a> </router-link>
                <a href="#">Возврат товара</a>
                <a href="#">Акции</a>
            </div>

        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    footer {
        background-image: url(../assets/img/footer-fon.png);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        width: 100%;
        
    }
    .inner {
        display: flex;
        margin-left: 40px;
        img {
            padding-top: 51px;
            padding-bottom: 80px;
            padding-right: 55px;
            width: 54px;
            height: 54px;
        }
        &_policy {
            h1 {
                padding-top: 26px;
                font-family: "Gilroy Medium";
                font-style: normal;
                font-weight: 700;
                font-size: 25px;
                line-height: 25px;
                letter-spacing: 0.15em;
                color: #FFFFFF;
                text-transform: uppercase;
                padding-bottom: 15px;
            }
            p {
                font-family: "Gilroy Light";
                font-style: normal;
                font-weight: 500;
                font-size: 12px;
                line-height: 14px;
                color: #CFCFCF;

            }
            li {
                list-style: none;
                padding-top: 7px;
            }
            a {
                font-family: "Gilroy Light";
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 16px;
                color: #FFFFFF;

            }
        }
        &_nav {
            display: flex;
            justify-content: space-between;
            width: 620px;
            align-items: center;
            margin-left: 86px;
            a {
                font-family: "Gilroy Light";
                font-style: normal;
                font-weight: 500;
                font-size: 20px;
                line-height: 24px;
                color: #FFFFFF;

            }
        }
    }
    @media (max-width: 375px) {
        .inner {
            text-align: center;
            margin-right: 70px;
            margin-left: 0;
            padding-bottom: 47px;
            img {
                margin: 30px 15px;
                padding: 0;
            }
            &_policy h1, p {
                display: flex;
                justify-content: center;
            }
            &_nav {
                display: none;
            }
        }
    }
    

</style>