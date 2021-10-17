<template>
  <div class="form">
      <input class="input" placeholder="login" type="text" />
      <input class="input" placeholder="password" type="text" />
      <Button text="Sign In" />
  </div>
</template>

<script>
import Button from './Button.vue';
export default {
    name: "Form",
    components: {
        Button
    }
}
</script>

<style lang="scss" scoped>
.form {
    width: 300px;
    display: flex;
    gap: 10px;
    flex-direction: column;
}
    .input {
        height: 50px;
        border-radius: 50px;
        width: 100%;
        background-color: rgba(29, 45, 69, 1);
        box-shadow: 0 0 5px 1px rgba(11, 161, 213, 0.5);
        outline: none;
        border: none;
        color: #4a95ba;
        padding: 10px;
        box-sizing: border-box;
        font-size: 28px;
    }
    .input::placeholder {
        color: rgba(11, 161, 213, 0.5);
    }
</style>