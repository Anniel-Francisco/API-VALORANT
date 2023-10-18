<template>
  <div class="container min-h-screen main">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {};
  },
};
</script>
<style scoped>
.main {
  max-width: 100%;
  background-position: center center;
  background-size: cover;
}
</style>
