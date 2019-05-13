<template>
  <section class="section-slider-product">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-lg-10 col-md-12 section-slider-product__main-wrap">
          <div class="section-slider-product__slider-outer">
            <swiper class="section-slider-product__slider" :options="swiperOption" ref="slider">
              <!-- slides -->
              <swiper-slide v-for="item in slides" :key="item.id">
                <div class="container-fluid">
                  <div class="row">
                    <div class="section-slider-product__img-container col-lg-2 col-md-2 col-sm-12">
                      <img class="section-slider-product__img" :src="item.image" :alt="item.alt">
                    </div>
                    <div class="section-slider-product__description col-lg-10 col-md-10 col-sm-12">
                      <div class="section-slider-product__description-text" v-html="item.text"></div>
                    </div>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
            <div class="section-slider-product__paginate"></div>
            <svg class="section-slider-product__nav prev" width="12" height="18">
              <use xlink:href="#slider-arrow-left"></use>
            </svg>
            <svg class="section-slider-product__nav next" width="12" height="18">
              <use xlink:href="#slider-arrow-right"></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Vue from "vue";
//слайдер
Vue.component("swiper", function(resolve) {
  require(["vue-awesome-swiper/src/swiper"], resolve);
});
Vue.component("swiperSlide", function(resolve) {
  require(["vue-awesome-swiper/src/slide"], resolve);
});
require("swiper/dist/css/swiper.min.css");

export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        simulateTouch: true,
        loop: true,
        pagination: {
          el: ".section-slider-product__paginate",
          clickable: true
        },
        navigation: {
          nextEl: ".section-slider-product__nav.next",
          prevEl: ".section-slider-product__nav.prev"
        }
      }
    };
  },
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
    slides: {
      type: Array
    }
  },
  components: {}
};
</script>
<style lang="scss">
@import "../scss/main.scss";

.section-slider-product {
  padding: 9.9rem 0 12.1rem;
  background: #111;

  &__heading {
    @include fontStyle(2.4rem, 3.6rem, $color-black);
    @include arial-b;
    margin-bottom: 1.3rem;
  }

  &__description {
    @include fontStyle(1.6rem, 1.8rem, $color-white);
    @include arial-r;
  }

  &__img {
    max-width: 61px;
    height: auto;
  }

  &__img-container {
    text-align: center;
  }

  &__paginate {
    width: 100%;
    position: absolute;
    bottom: -65px;
    left: 0;

    .swiper-pagination-bullet {
      width: 10px;
      height: 10px;
      border: 1px solid $color-pink;
      border-radius: 50%;
      background: transparent;
      margin-right: 15px;
      opacity: 1;
      transition: all 0.3s ease;

      &:hover {
        background: $color-white;
        border: 1px solid $color-white;
      }
    }
    .swiper-pagination-bullet-active {
      background: $color-pink;
    }
  }

  &__slider-outer {
    max-width: 77%;
    margin: 0 auto;
  }

  &__main-wrap {
    position: relative;
  }

  &__nav {
    position: absolute;
    top: calc(50% - 46px / 2);
    width: 26px;
    height: 46px;
    cursor: pointer;

    use {
      fill: $color-pink;
      transition: all 0.3s ease;
    }

    &:hover use {
      fill: $color-white;
    }

    &.prev {
      left: 0;
    }
    &.next {
      right: 0;
    }
  }

  &__description-text {
    max-width: 386px;
    margin: 0 auto;
    @include fontStyle(1.8rem, 2.6rem, $color-white);
    @include arial-r;
    text-align: left;
  }
}

@media screen and (max-width: $tablet) {
  .section-slider-product {
    padding: 7.9rem 0 10rem;
  }

  .section-slider-product__description-text {
    max-width: 422px;
    font-size: 1.6rem;
    line-height: 2.2rem;
    text-align: left;
    margin: 0 0 0 auto;
  }

  .section-slider-product__nav {
    top: calc(50% - 141px / 2);
    width: 26px;
    height: 40px;
    cursor: pointer;

    &.prev {
      left: 44px;
    }

    &.next {
      right: 44px;
    }
  }

  .section-slider-product__paginate {
    bottom: -57px;
  }
}

@media screen and (max-width: $sm) {
  .section-slider-product {
    padding: 4.9rem 0 10rem;
  }
  .section-slider-product__img-container {
    text-align: center;
    margin-bottom: 32px;
  }

  .section-slider-product__slider-outer {
    max-width: 99%;
    margin: 0 auto;
  }
  .section-slider-product__description-text {
    max-width: 422px;
    text-align: center;
  }
  .section-slider-product__nav {
    top: 27px;

    &.prev{
        left:24px;
    }

    &.next{
        right:24px;
    }
  }
}
</style>

