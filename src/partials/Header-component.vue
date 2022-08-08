<template>
  <header>
    <div class="container">
      <div class="gam">
          <span></span>
          <span></span>
          <span></span>
        </div>
      <div class="logo">
        <router-link to="/">
        <h1>logos</h1>
        </router-link>
        <div class="contacts">
          <p>
            <img class="phone" src="../assets/img/phone.png" alt="">
          Контакты: <br>
          <b>+7 (917) 510-57-59 </b>
          </p>
        </div>
      </div>
      <div class="basket">
        <router-link to="/basket">
        <button>
          <img class="basket-img" src="../assets/img/basket.png" alt="">
          Корзина 
          <span class="line"></span>
            <span class="number">{{ getBasket }}</span>
        </button>
        </router-link>
      </div>
    </div>
    <div class="delivery">
        <form action="search">
          <input class="nosubmit" type="location">
          <input type="search" placeholder="Введите адрес доставки"> 
          <button type="submit"></button>
        </form>
      </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      state: false
    }
  },
  computed: {
    getBasket() {
      return this.$store.getters.getBasket.length
    }
  }
};
</script>

<style lang="scss" scoped>
  header {
    background: #403C3B;

  }
  .container {
    max-width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
  }
  .logo h1 {
    padding-top: 38px;
    font-family: "Gilroy Medium";
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 25px;
    letter-spacing: 0.15em;
    color: #FFFFFF;
    text-transform: uppercase;
    padding-bottom: 36px;
  }
  .logo {
    display: flex;
  }
  
  .phone {
    margin-left: 27px;
    padding-right: 10px;
    float: left;
  }
  .contacts p {
    margin-top: 29px;
    width: 220px;
    font-family: "Gilroy Medium";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #CFCFCF;
  }
  .basket button {
    position: relative;
    margin-top: 17px;
    width: 149px;
    height: 52px;
    background: linear-gradient(114.93deg, #618967 5.11%, #72A479 94%);
    border-radius: 10px;
    border: none;
    font-family: "Gilroy Medium";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;
    text-align: left;
    padding-left: 24px;
  }
  .basket-img {
    display: none;
  }
  .basket span {
    content: "";
    display: block;    
    border: 1px solid rgba(255, 255, 255, 0.3);
    left: 80px;
    width: 38px;
    float: right;
    position: absolute;
  }
  .line {
    top: 25px;
    transform: rotate(90deg);
  }
  .number {
    display: flex;
    line-height: 25px;
    text-align: center;
    max-width: 24px;
    height: 24px;
    background: #FFFFFF;
    border-radius: 20px;
    color: #403C3B;
    top: 14px;
    margin-left: 30px;
    
  }
  .gam {
    display: none;
  }
  .gam span {
    width: 25px;
    height: 3px;
    margin-bottom: 4px;
    display: block;
    background-color: #65906C;
  }
  .delivery {
    display: none;
  }
  @media (max-width: 375px) {
    .gam {
      display: block;
    }
    .contacts {
      display: none;
    }
    .logo h1 {
      display: flex;
      justify-content: center;
    }
    .basket {
      &-img {
        display: flex;
        margin: auto;
        
      }
      &-img::after {
        content: "";
        display: block;
        width: 48px;
        height: 2px;
        background-color: rgba(255, 255, 255, 0.3);
        margin: 2px auto;
      }
      button {
        width: 65px;
        height: 56px;
        text-transform: lowercase;
        margin-top: 0;
        font-size: 12px;
        font-family: "Gilroy Light";
      }
      span {
        display: none;
      }
    }
    .delivery {
      display: inline-block;
      padding-left: 15px;
      padding-bottom: 13px;
      form {
        background: #504B4A;
        border-radius: 8px;
        position: relative;
      }
      input, button {
        border: none;
        outline: none;
        background: transparent;
      }
      input {
        padding-left: 10px;
        width: 300px;
        height: 52px;
        
      }
      
      button {
        height: 42px;
        width: 42px;
        position: absolute;
        top: 5px;
        right: 10px;
        cursor: pointer;
      }
      button::before {
        content: url(../assets/img/Search.png);
      }
      .nosubmit {
        border: none;
        width: 30px;
        height: 25px;
        background: transparent url("../assets/img/Location2.png") no-repeat 13px center;
      }
    }
  }

</style>
