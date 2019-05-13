<template>
  <div id="app" :data-io-article-url="getLocation()">
    <Header :logo="'/static/img/logo.svg'" :brand="'/static/img/brand.svg'"  />
    <router-view/>
    <Footer :logo="'Лайфхакер | Huawei © 2018'" :brand="'/static/img/brand.svg'"  />
  </div>
</template>

<script>


import Header from '@/components/Header'
import Footer from '@/components/Footer'

    export default {
        name: 'App',
        methods: {
            getLocation() {
                return window.location.href.split('?')[0];
            }
        },
        components: {
          Header,
          Footer
        },
        
    };
</script>

<style lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
}
</style>
