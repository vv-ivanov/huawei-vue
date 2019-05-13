<template>
  <div class="card" :style="'background-image:url(' + img + ');'">
    <div class="card__text">
      <div class="card__overflow-hidden">
        <h2 class="card__title" v-html="title"></h2>
      </div>
      <div class="card__overflow-hidden">
        <p class="card__author" v-html="author"></p>
      </div>
      <div class="card__overflow-hidden">
        <p class="card__description" v-html="descript"></p>
      </div>
    </div>
    <div class="card__capture" v-html="author"></div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    descript: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    }
  }
};
</script>
<style lang="scss">
@import "../scss/main.scss";

.card {
  width: calc(100% / 4);
  height: 525px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 7% -3px;
  filter: grayscale(1);
  transition: filter 0.3s ease-in-out 0.3s, width 0.3s ease-in-out,
    background-size 0.3s ease-in-out;

  /**состояния наведении start */
  @media screen and (min-width: $tablet) {
    &:hover {
      filter: grayscale(0);
      width: 78%;

      .card__capture {
        visibility: hidden;
        opacity: 0;
      }

      .card__title {
        transform: translateY(0);
        transition: transform 0.5s ease-out 0.1s;
        text-align: left;
      }

      .card__author {
        transform: translateY(0);
        transition: transform 0.5s ease-out 0.2s;
        text-align: left;
      }

      .card__description {
        transform: translateY(0);
        transition: transform 0.5s ease-out 0.3s;
        text-align: left;
      }
    }
  }
  /**состояния наведении end */

  &__text {
    position: absolute;
    top: 85px;
    right: 50px;
    width: 262px;
    padding-right: 0;
  }

  &__capture {
    visibility: visible;
    position: absolute;
    bottom: 45px;
    width: 100%;
    text-align: center;
    @include fontStyle(1.6rem, 1.8rem, $color-white);
    @include arial-r;
    transition: all 0.3s ease-in-out;
  }

  &__title {
    @include fontStyle(3.6rem, 4.2rem, $color-white);
    @include oswald-r;
    transform: translateY(100px);
    margin: 0;
    text-transform: uppercase;
    text-align: left;
  }

  &__description {
    @include fontStyle(1.4rem, 1.6rem, $color-white);
    @include arial-r;
    transform: translateY(100px);
    margin: 0;
    text-align: left;
  }

  &__author {
    @include fontStyle(1.6rem, 1.8rem, $color-white);
    @include arial-b;
    transform: translateY(100px);
    text-align: left;
  }

  &__overflow-hidden {
    overflow: hidden;
  }
}

@media screen and (max-width: $tablet) {
  .card {
    width: 100%;
    height: 430px;
  }
  .card__title {
    transform: translateY(0);
  }
  .card__author {
    transform: translateY(0);
  }
  .card__description {
    transform: translateY(0);
  }
  .card__text {
    top: 90px;
    right: 35px;
  }
  .card__capture {
    display: none;
  }
}

@media screen and (max-width: $sm) {
  .card {
    height: 481px;
  }

  .card__text {
    top: unset;
    bottom: 81px;
    right: calc(50% - 262px/2);
  }

  .card-container__slider-paginate {
    bottom: 60px;
  }


}
</style>
