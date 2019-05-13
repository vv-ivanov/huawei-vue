<template>
  <footer class="footer container-fluid">
    <div class="row justify-content-between">
      <div class="col-lg-3 col-sm-3 footer__brand-wrap">
        <div class="footer__brand" v-html="logo"></div>
      </div>
      <div class="col-lg-3 col-sm-3 footer__share-wrap">
        <div class="footer__share">
          <Button class="footer__share-btn" :text="'поделись с друзьями'" :type="'slot'" :href="'/'">
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
    </div>
  </footer>
</template>
<script>
import Button from "./Button";
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
    btnText: {
      type: String,
      default: "подписаться"
    },
    btnType: {
      type: String,
      default: "link"
    },
    btnHref: {
      type: String,
      default: "/"
    }
  },
  components: {
    Button,
    Icon
  }
};
</script>
<style lang="scss">
@import "../scss/main.scss";

.footer {
  padding-top: 2.9rem;
  padding-bottom: 3rem;
  background: #424242;

  &__brand {
    @include fontStyle(1.2rem, 2.4rem, $color-white);
    @include oswald-r;
    font-weight: 400;
  }

  &__share-btn {
    width: 160px;
    padding: 3px;
  }
}

@media screen and (max-width: $sm) {
  .footer {
    padding-top: 4rem;
    padding-bottom: 3rem;
  }
  .footer__share-wrap {
    order: 1;
  }
  .footer__brand-wrap {
    order: 2;
  }
  .footer__share-btn {
    width: 74%;
    padding: 3px;
  }
  .footer__share{
    margin-bottom:1.6rem;
  }
}
</style>

