<template>
  <div>
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
        <h1 class="mb-4">This version is Vue transtion with css</h1>
        <transition :name="rotateDirection" mode="out-in">
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
                non tempora quo nobis ipsa harum quaerat maxime excepturi quam
                aliquam sunt vero cupiditate minima, fuga, nihil repellat
                laboriosam! Porro, quaerat?
              </p>
              <button @click="clicked">Flip</button>
            </div>
          </TheCardslot>
        </transition>

        <div class="mt-2">
          <!-- Old Card Component (non-slot) -->
          <CardSlotNew
            @click.native="flipCard"
            :key="flipped"
            :flipped="flipped"
          >
          </CardSlotNew>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardSlotNew from "../components/CardSlotNew.vue";
import TheCardslot from "../components/TheCardslot.vue";

export default {
  name: "Fifth",
  components: {
    CardSlotNew,
    TheCardslot,
  },
  data() {
    return {
      flipped: false,
      rotateDirection: "flip-left",
    };
  },
  methods: {
    flipCard() {
      this.flipped = !this.flipped;

      setTimeout(() => {
        if (this.flipped) {
          this.rotateDirection = "flip-right";
        } else {
          this.rotateDirection = "flip-left";
        }
      }, 500);
    },
  },
};
</script>

<style scoped>
.flip-left-leave-active,
.flip-left-enter-active,
.flip-right-enter-active,
.flip-right-leave-active {
  transition: 0.5s linear;
}

.flip-left-enter {
  transform: perspective(500px) rotate3d(0, 1, 0, 90deg);
  /* transform: rotateY(-90deg); */
}
.flip-left-leave-to {
  transform: perspective(500px) rotate3d(0, 1, 0, 90deg);
  /* transform: rotateY(90deg); */
}

.flip-right-enter {
  transform: perspective(500px) rotate3d(0, 1, 0, -90deg);
  /* transform: rotateY(-90deg); */
}

.flip-right-leave-to {
  transform: perspective(500px) rotate3d(0, 1, 0, -90deg);
  /* transform: rotateY(90deg); */
}
</style>