<template>
  <header class="header container-fluid">
    <SvgSprite/>
    <div class="row">
      <div class="col-lg-3 col-md-3 header__log">
        <a :href="l_link">
          <img :src="logo" alt>
        </a>
      </div>
      <div class="col-lg-6 col-md-6">
        <div class="header__brand">
          <a :href="b_link">
          <img :src="brand" alt>
          </a>
        </div>
      </div>
      <div class="col-lg-3 col-md-3 header__share">
        <Button class="header__btn" :text="'поделись с друзьями'" :type="'slot'" :href="'/'">
          <div class="button__ico-wrap">
            <a href>
              <Icon :href="'#fb'"/>
            </a>
            <a href>
              <Icon :href="'#tw'"/>
            </a>
            <a href>
              <Icon :href="'#vk'"/>
            </a>
          </div>
        </Button>
      </div>
    </div>
  </header>
</template>
<script>
import Button from "./Button";
import SvgSprite from "./SvgSprite";
import Icon from "./Icon";

export default {
  props: {
    brand: {
      type: String,
      default: "/static/img/brand.svg"
    },
    logo: {
      type: String,
      default: "/static/img/logo.svg"
    },
    l_link: {
      type: String,
      default: "#"
    },
    b_link: {
      type: String,
      default: "#"
    }
  },
  components: {
    SvgSprite,
    Button,
    Icon
  }
};
</script>
<style lang="scss">
@import "../scss/main.scss";

.header {
  padding-top: 1.8rem;
  padding-bottom: 1.6rem;
  background: linear-gradient(to right, #481d49 0%, #81246d 50%, #54316e 100%);

  &__btn {
    width: 160px;
    height: 35px;

    .button__text {
      @include fontStyle(1.4rem, 2.6rem, $color-white);
    }
  }
}

@media screen and (max-width: $tablet) {
  .header {
    padding-top: 0.2rem;
    padding-bottom: 0.7rem;
  }
  .header__share {
    display: none;
  }
  .header__log {
    display: none;
  }
}
</style>

