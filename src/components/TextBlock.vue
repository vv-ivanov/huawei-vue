<template>
  <section class="section-text">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="section-text__heading" v-html="title"></div>
          <div class="section-text__description" v-html="text"></div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
};
</script>
<style lang="scss">
.section-text {
  padding: 34px 0 39px;

  &__heading {
    @include fontStyle(2.4rem, 3.6rem, $color-black);
    @include arial-b;
    margin-bottom: 1.3rem;
    text-transform: uppercase;
  }

  &__description {
    @include fontStyle(1.8rem, 2.6rem, $color-black);
    @include arial-r;
    max-width: 494px;
    text-align: center;
    display: inline-block;
  }
}

@media screen and (max-width: $tablet) {
  .section-text__heading {
    margin-bottom: 0.5rem;
  }

  .section-text__description {
    font-size: 1.6rem;
    line-height: 2.6rem;
  }
}

@media screen and (max-width: $sm) {
  .section-text {
    padding: 20px 0 41px;
  }

  .section-text__heading {
    font-size: 1.8rem;
  }

  .section-text__description {
    font-size: 1.6rem;
    line-height: 2.1rem;
    max-width: 85%;
  }
}
</style>

