<template>
  <div class="hello ">
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <Button :text="msg" :type="'link'" :href="'/main'"></Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Button from './Button'
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'перейти на главную',
    };
  },
  components: {
    Button
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
