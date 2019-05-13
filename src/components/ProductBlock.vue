<template>
  <section class="section-product">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-7 col-sm-12 section-product__img-wrap" v-if="img">
          <img class="section-product__img" :src="img" alt>
        </div>
        <div class="col-md-5 col-sm-12 section-product__container-description-outer">
          <div class="section-product__container-description">
            <div class="section-product__heading" v-if="title" v-html="title"></div>
            <div class="section-product__description" v-if="text" v-html="text"></div>
            <img class="section-product__descr-img" v-else :src="imgDescr" alt>
            <Button class="section-product__btn" :text="btnText" :type="btnLink" :href="btnHref"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Button from "./Button";

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    img: {
      type: String
    },
    imgDescr: {
      type: String
    },
    btnText: {
      type: String,
      required: true
    },
    btnLink: {
      type: String,
      required: true
    },
    btnHref: {
      type: String,
      required: true
    }
  },
  components: {
    Button
  }
};
</script>
<style lang="scss">
.section-product {
  padding: 11.2rem 0 8.1rem;
  background: linear-gradient(to right, #481d49 0%, #81246d 50%, #54316e 100%);

  &__heading {
    @include fontStyle(2.4rem, 3.6rem, $color-black);
    @include arial-b;
    margin-bottom: 1.3rem;
  }

  &__description {
    @include fontStyle(1.6rem, 1.8rem, $color-black);
    @include arial-r;
  }

  &__img {
    max-width: 613px;
    height: auto;
  }

  &__descr-img {
    max-width: 318px;
    height: auto;
    margin-bottom: 45px;
    font-size: 16px;
    line-height: 24px;
  }

  &__btn {
    width: 238px;
    padding: 12px;
    text-transform: uppercase;
    font-size: 1.8rem;
    line-height: 2.6rem;
  }

  &__container-description {
    display: flex;
    flex-direction: column;
    padding-top: 50px;
    padding-right: 6px;
  }

  &__img-wrap {
    text-align: right;
  }

  &__container-description-outer {
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
}

@media screen and (max-width: $tablet) {
  .section-product {
    padding: 11.2rem 0 7.1rem;
  }
  .section-product__img {
    max-width: 392.2px;
    transform: translateY(-14px);
    margin: 0 auto;
    display: block;
  }

  .section-product__container-description {
    padding-top: 15px;
    padding-right: 50px;
  }

  .section-product__descr-img {
    max-width: 214px;
    margin-bottom: 26px;
  }

  .section-product__btn {
    width: 211px;
    padding: 5px;
  }
}

@media screen and (max-width: $sm) {
  .section-product {
    padding: 7.2rem 0 7.1rem;
  }
  .section-product__img {
    max-width: 290px;
    transform: translateY(0);
        
  }

  .section-product__descr-img {
    max-width: 203px;
    margin-bottom: 26px;
  }

  .section-product__container-description {
    padding-top: 28px;
    padding-right: 0;
  }
}
</style>

