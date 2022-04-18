<template>
  <div class="w-full h-screen">
    <div
      class="absolute p-3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3 h-auto shadow-2xl border rounded"
    >
      <Transition name="flip" mode="out-in">
        <div :key="1" v-if="visible" id="frontface" class="flex flex-col items-center">
          <div class="text-2xl p-3">
            <h1>This is a title</h1>
          </div>
          <div class="p-5 w-2/3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div class="text-xl">
            <button
              @click="flipCard"
              class="bg-green-400 text-white p-2 rounded"
            >
              Change
            </button>
          </div>
        </div>

        <div :key="2" v-else id="backface" class="flex flex-col items-center">
          <div class="text-2xl p-3">
            <h1>This is a title</h1>
          </div>
          <div class="p-5 w-2/3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor i
          </div>
          <button @click="flipCard" class="bg-green-400 text-white p-2 rounded">
            Change
          </button>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "SecondTry",
  data() {
    return {
      visible: true,
    };
  },
  methods: {
    flipCard() {
      this.visible = !this.visible;
    },
  },
};
</script>

<style>
/* .flip-enter-active,
.flip-leave-active {
    transition: 0.7s ease;
    
}

.flip-enter-from,
.flip-leave-to {
    transform-style: preserve-3d;
    backface-visibility: hidden;
    transform: rotateY(180deg);
    transition: .7s ease-in;
} */

.flip-enter-active {
    transition: all 1s ease;
  }
  
.flip-leave-active {
   display: none;
}
  
.flip-enter, .flip-leave {
   transform: rotateY(100deg);
   opacity: 0;  
}
</style>
