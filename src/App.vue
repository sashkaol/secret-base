<template>
  <div id="app">
    <div class="form">
      <Form />
    </div>
    <!-- <Button text="CLose" /> -->
    <div class="r">
      <Button text="settings" />
    </div>
    {{info}}
  </div>
</template>

<script>
import Button from "./components/Button.vue";
//import Case from "./components/Case.vue";
import Form from "./components/Form.vue";
import axios from 'axios';
export default {
  name: "App",
  components: {
    Button,
    Form,
    //Case
  },
  data() {
    return {
      info: null
    }
  },
  mounted() {
    axios
      .get('/people')
      .then(res => (this.info = res))
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  background: rgba(29, 45, 69, 1);
  .r {
    width: 100px;
    height: 100px;
  }
}
</style>
