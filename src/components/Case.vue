<template>
    <div>
        People
    </div>
</template>

<script>
export default {
  name: "Case",
  methods: {
    ajax(method, url) {
      return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.send();
        xhr.onload = () => {
          if (xhr.status != 200) {
            reject("Error");
          } else {
            resolve(xhr.response);
          }
        };
      });
    },
  },
};
</script>

<style>
</style>