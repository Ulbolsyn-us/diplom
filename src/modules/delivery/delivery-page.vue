<template>
    <div class="delivery-page">
        <div class="wrap">
            <div class="wrap-header">
                <router-link to="/basket">
                <a href="#"><img src="../../assets/img/Arrow.png" alt=""> к выбору блюда</a>
                </router-link>
                <h1>оформление заказа</h1>
            </div>
            <div class="wrap-contacts">
                <h1>1.Контакная информация</h1>
                <form @submit.prevent="submitHandler" action="contacts" >
                    <div class="wrap-contacts_name">
                        <input type="text" id="name" v-model="$v.name.$model" :class="{invalid: ($v.name.$dirty && !$v.name.required)}" required="required"/>
                        <label class="name">Имя</label>
                        <span class="error" v-if="$v.name.$dirty && !$v.name.required">Name is required</span>
                    </div>
                    
                    <div class="wrap-contacts_phone">
                        <input type="tel" id="phone" v-model="$v.phone.$model" :class="{invalid: ($v.phone.$dirty && !$v.phone.required)}" required="required"/>
                        <label class="tel">Телефон</label>
                        <span class="error" v-if="$v.phone.$dirty && !$v.phone.required">Name is required</span>
                    </div>
                    
                    
                </form>
            </div>
            <div class="wrap-delivery">
                <h1>2. Доставка</h1>
                <div class="wrap-delivery_contacts">
                    <h1>Адрес доставки</h1>
                    <form @submit.prevent="submitHandler" action="adress" method="post">
                        <div class="wrap-delivery_contacts__required">
                            <div class="wrap-delivery_contacts__requiredStreet">
                                <input type="text" id="street" name="street" v-model="$v.street.$model"  :class="{invalid: ($v.street.$dirty && !$v.street.required)}" required="required"/>
                            <label class="street">Укажите улицу</label>
                            <span class="error" v-if="$v.street.$dirty && !$v.street.required">Name is required</span>
                            </div>
                             
                            <div class="wrap-delivery_contacts__requiredHome">
                                <input type="text" name="home" v-model="$v.home.$model" :class="{invalid: ($v.home.$dirty && !$v.home.required)}" required="required"/>
                            <label class="home">Номер дома</label>
                            <span class="error" v-if="$v.home.$dirty && !$v.home.required">Name is required</span>
                            </div>
                            
                        </div>
                        
                        <input type="text" id="office" name="office" placeholder="№ квартиры/офиса">
                        <input type="text" id="door" name="door" placeholder="Подъезд">
                        <input type="text" id="floor" name="floor" placeholder="Этаж">
                        <input type="text" id="comment" name="comment" placeholder="Комментарий">
                    </form>
                </div>
            </div>
            <div class="wrap-agreement">
                <div class="wrap-agreement_content">
                    <form @submit.prevent="submitHandler" >
                        <input type="checkbox" class="checkbox" v-model="$v.agreement.$model" :class="{invalid: ($v.agreement.$dirty && !$v.agreement.required)}">
                    
                    </form>
                    
                    <p>Я согласен на обработку моих перс. данных в соответствии с  <a href="#">Условиями</a></p>
                <button @click="submitHandler()"  type="submit">Оформить заказ</button>
                </div>
                
            </div>
        </div>    
    </div>
</template>
<script>
import { required } from 'vuelidate/lib/validators/'


export default {
    data() {
        return {
            name: '',
            phone: '',
            street: '',
            home: '',
            office: '',
            door: '',
            floor: '',
            comment: '',
            agreement: '',
            
        }
    },
    validations: {
        name: { required },
        phone: {required},
        street: {required},
        home: {required},
        agreement: { required }

    },
    
        
    methods: {
        
        submitHandler() {
            const data = {
                name: this.name,
                phone: this.phone,
                street: this.street,
                home: this.home,
                office: this.office,
                door: this.door,
                floor: this.floor,
                comment: this.comment,
                agreement: this.agreement,
                products: this.products
            }
            
            this.$v.$touch()
            if (this.$v.$invalid) {
                this.error

            } else {
                fetch("http://localhost:3000/post",
            {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((response) => response.json())
            .then((data) => console.log(data));
             alert('Заказ оформлен!')
            this.$router.push('/') 
            }
            
            
        },
            
    }
  
}
</script>
<style lang="scss" scoped>
    .wrap {
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
        &-contacts {
            margin: auto;
            width: 800px;
            height: 200px;
            background: #504B4A;
            border-radius: 10px;
            h1 {
                font-family: "Gilroy Medium";
                font-style: normal;
                font-weight: 700;
                font-size: 18px;
                line-height: 22px;
                color: #FFFFFF;
                padding-left: 30px;
                padding-top: 32px;
            }
            form {
                display: flex;
                position: relative;
                padding-left: 30px;
                padding-top: 30px;
                padding-bottom: 55px;
                
            }
            input {
                position: relative;
                width: 350px;
                height: 60px;
                background: transparent;
                border-style: none;
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 10px;
                font-family: "Gilroy Light";
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 19px;
                margin-right: 15px;
                color: white;
                padding-left: 20px;
            }
            .name{
                position: absolute;
                color: white;
                font-family: "Gilroy Light";
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 19px;
                top: 54px;
                left: 50px;   
            }
            .tel {
                position: absolute;
                color: white;
                font-family: "Gilroy Light";
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 19px;
                top: 54px;
                left: 437px;
            }
            input[required] + label::after {
                content: '*';
                color: rgba(114, 164, 121, 1);
            }
            input[required]:valid + label{
                display: none;
            }          
        }
        &-delivery {
            margin: auto;
            width: 800px;
            height: 486px;
            background: #504B4A;
            border-radius: 10px;
            margin-top: 22px;
            h1 {
               font-family: "Gilroy Medium";
                font-style: normal;
                font-weight: 700;
                font-size: 18px;
                line-height: 22px;
                color: #FFFFFF;
                padding-left: 30px;
                padding-top: 32px; 
            }
            &_contacts {
                padding-left: 30px;
                padding-top: 90px;
                padding-bottom: 32px;
                &__required {
                    display: flex;
                    position: relative;
                    width: 605px;
                    height: 60px;
                }
                h1 {
                    padding-left: 0;
                    padding-bottom: 22px;
                }
                form {
                    position: relative;
                }
                input[type=text] {
                position: relative;
                padding-left: 20px;
                font-family: "Gilroy Light";
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 19px;
                color: #FFFFFF;
                background: transparent;
                border-style: none;
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 10px;
                height: 60px;
                margin-right: 15px;
                }
                input[name="street"] {
                    width: 413px;
                }
                input[name="home"],[name="door"], [name="floor"] {
                    width: 173px;
                }
                input[name="office"] {
                    margin-top: 30px;
                    width: 200px;
                }
                input[name="comment"] {
                    margin-top: 30px;
                    width: 617px;
                }
                .street {
                    position: absolute;
                    color: white;
                    font-family: "Gilroy Light";
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 19px;
                    top: 24px;
                    left: 20px;  
                }
                .home {
                    position: absolute;
                    color: white;
                    font-family: "Gilroy Light";
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 19px;
                    top: 24px;
                    left: 470px;
                }
                input[required] + label::after {
                content: '*';
                color: rgba(114, 164, 121, 1);
                }
                input[required]:valid + label{
                    display: none;
                }   
                ::placeholder {
                    color: white;
                }       
            }
            
        }
        &-agreement {
            padding-top: 22px;
            padding-bottom: 700px;
            &_content {
                width: 760px;
                height: 85px;
                background: #504B4A;
                margin: auto;
                border-radius: 10px;
                display: flex;
                justify-content: space-between;
                padding-right: 20px;
                padding-left: 20px;
                align-items: center;
                p {
                    font-family: "Gilroy Light";
                    font-style: normal;
                    font-weight: 500;
                    font-size: 13px;
                    line-height: 15px;
                    color: #FFFFFF;
                }
                a {
                    font-family: "Gilroy Light";
                    font-style: normal;
                    font-weight: 500;
                    font-size: 13px;
                    line-height: 15px;
                    text-decoration: underline;
                    color: rgba(114, 164, 121, 1)
                }
                button {
                    display: block;
                    width: 209px;
                    height: 51px;
                    text-align: center;
                    font-family: "Gilroy Light";
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
                form {
                    margin-left: 20px;
                    margin-right: 0;
                    .checkbox {
                        box-sizing: border-box;
                        width: 22px;
                        height: 22px;
                        background: #72A479;
                        border: 1px solid rgba(255, 255, 255, 0.1);
                        border-radius: 3px;
                    }
                    .checkbox:checked {
                        color: #72A479;
                        border: #FFFFFF;
                        background: #FFFFFF;
                    }
                    .checkbox::before {
                        color: #72A479;
                        border: #FFFFFF;
                        background: #FFFFFF;
                    }
                    
                }
            }
        }
        .error {
            display: block;
            color: #618967;
            padding-top: 5px;
        }
    }
</style>