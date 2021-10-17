<template>
  <div>
    <div class="bord r" v-if="text == 'settings'">
      <button class="secret-but round">
        <img src="../assets/settings.svg" alt="settings" />
      </button>
    </div>
    <div v-else class="bord">
      <button class="secret-but" :text="text">{{ text }}</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["text"],
};
</script>

<style lang="scss" scoped>
.bord {
  border: solid rgba(15, 94, 134, 0.7) 2px;
  width: 100%;
  height: 100%;
  padding: 5px;
  box-sizing: border-box;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  box-shadow: 0 4px 5px 1px rgba(15, 94, 134, 0.7);
  align-items: center;
}
.bord.r {
  border-radius: 50%;
}
.secret-but {
  background: linear-gradient(
    rgba(15, 94, 134, 0.7),
    rgba(33, 40, 68, 1) 36px,
    rgba(15, 94, 134, 0.7) 110px
  );
  height: 100%;
  width: 100%;
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 5px 1px rgba(11, 161, 213, 0.5);
  color: #4a95ba;
  font-size: 34px;
}
.secret-but.round {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.secret-but:hover {
  cursor: pointer;
  background: linear-gradient(
    rgba(13, 120, 175, 1),
    rgba(6, 53, 85, 1) 36px,
    rgba(13, 120, 175, 1) 110px
  );
  box-shadow: 0 0 5px 2px rgba(13, 120, 175, 1);
}
</style>