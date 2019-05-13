<template>
  <div class="page-content">
    <CardPreviewContainer :data-slider="sliderObj" />
    <TextBlock
      :title="'Повелители времени'"
      :text="'Как управлять своим временем и что им в этом помогает рассказывают люди четырех профессий'"
    />
    <ProductBlock
      :img="'/static/img/product.png'"
      :img-descr="'/static/img/product-descript.png'"
      :btn-href="'/'"
      :btn-link="'link'"
      :btn-text="'купить'"
    />
    <SliderProduct
      :slides="[
                {id:1,image:'/static/img/slide-img.png', text: 'Защищённый изогнутым стеклом 2К-дисплей с диагональю 8,4 или 10,8 дюйма  поражает детализацией картинки. Технология ClariVu 5.0 расширяет динамический диапазон, увеличивая контрастность и насыщенность, а режим Eye Comfort снижает усталость глаз при использовании планшета вечером и ночью.', alt:'картинка'},
                {id:2,image:'/static/img/slide-img.png', text: 'описание2', alt:'картинка2'},
                {id:3,image:'/static/img/slide-img.png', text: 'описание3', alt:'картинка3'}]"
    />
  </div>
</template>
<script>
import { mapGetters, mapActions, mapState } from "vuex";

import CardPreview from "./CardPreview";
import TextBlock from "./TextBlock";
import ProductBlock from "./ProductBlock";
import SliderProduct from "./SliderProduct";
import CardPreviewContainer from "./CardPreviewContainer";

export default {
  methods:{
      /**getSliderDataAction вызывает vuex actions 'getSliderDataAction' */
      ...mapActions(['getSliderDataAction'])
  },
  computed:{
      ...mapState(['sliderObj'])
  },
  mounted(){
      /** вызываем getSliderDataAction */
      this.getSliderDataAction();
  },
  components: {
    CardPreview,
    TextBlock,
    ProductBlock,
    SliderProduct,
    CardPreviewContainer
  }
};
</script>
<style lang="scss">

</style>
