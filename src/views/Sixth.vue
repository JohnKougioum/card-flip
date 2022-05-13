<template>
  <div class="w-full h-screen">
    <div
      class="
        absolute
        w-1/3
        h-auto
        top-1/2
        left-1/2
        transform
        -translate-x-1/2 -translate-y-1/2
      "
    >
      <h1 class="mb-4">
        This version is created using Vue transition with Javascript Hooks
      </h1>
      <transition
        @before-enter="beforeEnter"
        @after-enter="enter"
        @before-leave="beforeLeave"
        mode="out-in"
      >
        <TheCardslot #default="{ clicked }" @flip="flipCard" :key="flipped">
          <div v-show="!flipped">
            <h1 class="pb-2">The card is not flipped</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
              vel
            </p>
            <button @click="clicked">Flip</button>
          </div>
          <div v-show="flipped">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum non
              tempora quo nobis ipsa harum quaerat maxime excepturi quam aliquam
              sunt vero cupiditate minima, fuga, nihil repellat laboriosam!
              Porro, quaerat?
            </p>
            <button @click="clicked">Flip</button>
          </div>
        </TheCardslot>
      </transition>
    </div>
  </div>
</template>

<script>
import TheCardslot from "../components/TheCardslot.vue";
export default {
  name: "Sixth",
  components: {
    TheCardslot,
  },
  data() {
    return {
      flipped: false,
      rotateDirection: "right",
    };
  },
  methods: {
    flipCard() {
      this.flipped = !this.flipped;
    },
    changeDirections() {
      if (this.rotateDirection == "right") {
        this.rotateDirection = "left";
      } else {
        this.rotateDirection = "right";
      }
    },
    enter(el) {
      el.style.transition = ".5s linear";
      el.style.transform = "perspective(500px) rotate3d(0, 1, 0, 0deg)";
      this.changeDirections();
    },
    beforeEnter(el) {
      if (this.rotateDirection == "right") {
        el.style.transform = "perspective(500px) rotate3d(0, 1, 0, -90deg)";
      } else {
        el.style.transform = "perspective(500px) rotate3d(0, 1, 0, 90deg)";
      }
    },
    beforeLeave(el) {
      el.style.transition = ".5s linear";

      if (this.rotateDirection == "right") {
        el.style.transform = "perspective(500px) rotate3d(0, 1, 0, 90deg)";
      } else {
        el.style.transform = "perspective(500px) rotate3d(0, 1, 0, -90deg)";
      }
    },
  },
};
</script>

<style>
</style>