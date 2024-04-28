<template>
  <div class="card cursor-pointer" @click="goToPage(route)">
    {{ name }}
  </div>
</template>

<script>
export default {
  name: "CardHome",
  props: {
    name: {
      type: String,
      required: true,
    },
    route: {
      type: String,
      required: true,
    },
  },
  methods: {
    goToPage(route) {
      this.$router.push({ path: route });
    },
  },
};
</script>
<style scoped>
.card {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  width: 600px;
  height: 250px;
  align-items: center;
  outline: none;
  color: white;
  text-transform: uppercase;
  font-weight: 500;
}

.card:hover {
  background-color: rgba(0, 0, 0, 0.3);
}

@media (max-width: 768px) {
  .card {
    width: 500px;
  }
}
</style>
