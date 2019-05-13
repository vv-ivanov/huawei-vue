<template>
  <div class="card-container">
    <swiper class="card-container__slider" :options="swiperOption" ref="slider" v-if="!isDesktop">
      <swiper-slide v-for="item in dataSlider" :key="item.id">
        <CardPreview
          v-if="isTablet"
          :img="item.imgTablet"
          :title="item.title"
          :descript="item.descript"
          :author="item.author"
        />
        <CardPreview
          v-else
          :img="item.img"
          :title="item.title"
          :descript="item.descript"
          :author="item.author"
        />
      </swiper-slide>
    </swiper>
    <div v-if="!isDesktop" class="card-container__slider-paginate"></div>
    <CardPreview
      v-else
      v-for="item in dataSlider"
      :key="item.id"
      :img="item.img"
      :title="item.title"
      :descript="item.descript"
      :author="item.author"
    />
  </div>
</template>
<script>
import Vue from "vue";
import { mapGetters, mapActions, mapState } from "vuex";

import CardPreview from "./CardPreview";

Vue.component("swiper", function(resolve) {
  require(["vue-awesome-swiper/src/swiper"], resolve);
});
Vue.component("swiperSlide", function(resolve) {
  require(["vue-awesome-swiper/src/slide"], resolve);
});
require("swiper/dist/css/swiper.min.css");

export default {
  props: {
    dataSlider: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        simulateTouch: true,
        loop: true,
        pagination: {
          el: ".card-container__slider-paginate",
          clickable: true
        },
        breakpoints: {
          800: {
            slidesPerView: 1
          }
        }
      },
    //   dataSlider: [
    //     {
    //       id: 1,
    //       img: "/static/img/card-img1.png",
    //       imgTablet: "/static/img/card-img1-tablet.png",
    //       title: "мой офис — это моя голова",
    //       descript:
    //         "основатель, организатор и координатор в ASTRA MUSIC event agency",
    //       author: "Лариса Онуфриенко"
    //     },
    //     {
    //       id: 2,
    //       img: "/static/img/card-img1.png",
    //       imgTablet: "/static/img/card-img1-tablet.png",
    //       title: "всем привет",
    //       descript: "основатель, организатор",
    //       author: "Катя Федина"
    //     },
    //     {
    //       id: 3,
    //       img: "/static/img/card-img1.png",
    //       imgTablet: "/static/img/card-img1-tablet.png",
    //       title: "всем привет",
    //       descript: "основатель, организатор",
    //       author: "Павел Занозин"
    //     },
    //     {
    //       id: 4,
    //       img: "/static/img/card-img1.png",
    //       imgTablet: "/static/img/card-img1-tablet.png",
    //       title: "всем привет",
    //       descript: "основатель, организатор",
    //       author: "Никита Забелин"
    //     }
    //   ]
    };
  },
  computed: {
    ...mapState(["isDesktop", "isTablet"])
  },
  methods: {
    ...mapActions(["setIsDesktopAction", "setIsTabletAction"])
  },
  components: {
    CardPreview
  },
  mounted() {
    (() => {
      this.setIsDesktopAction();
      this.setIsTabletAction();
      window.addEventListener("resize", () => {
        this.setIsDesktopAction();
        this.setIsTabletAction();
      });
    })();
  }
};
</script>

<style lang="scss">
.card-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;

  &__slider {
    width: 100%;
  }

  &__slider-paginate {
    position: absolute;
    bottom: 25px;
    width: 100%;
    z-index: 100;

    .swiper-pagination-bullet {
      width: 10px;
      height: 10px;
      border: 1px solid $color-pink;
      border-radius: 50%;
      background: $color-pink;
      margin-right: 15px;
      opacity: 1;
      transition: all 0.3s ease;

      &:hover {
        background: $color-white;
        border: 1px solid $color-white;
      }
    }
    .swiper-pagination-bullet-active {
      background: $color-white;
    }
  }
}
</style>
