<template>
  <div class="p-3 bg-red-300 rounded w-2/3 h-auto text-white">
    <slot :clicked="flipCard"></slot>
  </div>
</template>

<script>
export default {
  name: "TheCardslot",
  methods: {
    flipCard() {
      this.$emit("flip");
    },
  },
};
</script>

<style>
</style>