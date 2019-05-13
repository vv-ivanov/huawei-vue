import axios from 'axios';
import Vuex from 'vuex';
import Vue from 'vue';


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isDesktop: true,
    isTablet: false,
    sliderObj: null//https://api.myjson.com/bins/ao2j2 адрес мнимого api откуда приходит json с данными
  },
  getters: {
    
  },
  actions: {
    setIsDesktopAction(){
      if(window.innerWidth >= 800){
        this.commit('setIsDesktop', true);
      } else {
        this.commit('setIsDesktop', false);
      }
    },
    setIsTabletAction(){
      if(window.innerWidth <= 800 && window.innerWidth >= 640){
        this.commit('setIsTablet', true);
      } else {
        this.commit('setIsTablet', false);
      }
    },
    getSliderDataAction(){
      axios({
        method: 'get',
        url: 'https://api.myjson.com/bins/ao2j2',
      }).then((response) => {
        if (response.status === 200) {
          this.commit('setSliderObj', response.data);
        }
      });
    }
  },
  mutations: {
    setIsDesktop(state, payload) {
      state.isDesktop = payload;
    },
    setIsTablet(state, payload) {
      state.isTablet = payload;
    },
    setSliderObj(state, payload) {
      state.sliderObj = payload;
    },
  },
});
