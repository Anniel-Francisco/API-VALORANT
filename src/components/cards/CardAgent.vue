<template>
  <div
    class="flex animate__animated animate__flipInX flex-col rounded-2xl active:scale-90 cursor-pointer w-40 h-40 ml-auto items-center justify-center mr-auto text-center transition duration-300 ease-in-out hover:shadow-indigo-500/40 text-white hover:shadow-xl"
    :style="`background-color: #${bgColor}`"
  >
    <img :src="icon" alt="" class="w-20 ml-auto mr-auto" />
    <h2 class="font-bold agent-name">{{ name }}</h2>
  </div>
</template>
<script>
export default {
  name: "CardAgent",
  props: {
    bgColor: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
};
</script>
