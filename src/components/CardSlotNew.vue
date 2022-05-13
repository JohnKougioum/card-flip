<template>
  <div class="card p-3 w-full relative shadow-2xl border rounded bg-red-200">
    <div
      :class="[flipped ? 'card__face--back' : '']"
      class="card__face absolute w-full h-auto flex flex-col items-center"
      id="card1"
    >
      asdadsds
    </div>
    <div
      :class="[!flipped ? 'card__face--back' : '']"
      class="card__face table absolute w-full h-full bg-indigo-300"
      id="card2"
    >
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
        recusandae error itaque nihil odit consequatur vero ea laudantium rerum!
        Aliquid suscipit tempora vero repellendus asperiores ipsa laudantium a
        nisi repellat.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardSlot",
  props: {
    flipped: Boolean,
  },
  mounted() {
    const cardContainer = document.querySelector(".card");
    const card1 = document.querySelector("#card1");
    const card2 = document.querySelector("#card2");

    if (card1.classList.contains("card__face--back")) {
      let cardHeight = parseInt(window.getComputedStyle(card2).height);
      cardContainer.style.height = cardHeight + 20 + "px";
    } else {
      let cardHeight = parseInt(window.getComputedStyle(card1).height);
      cardContainer.style.height = cardHeight + 20 + "px";
    }
  },
};
</script>

<style>
.card {
  /* transform: rotateY(180deg); */
  transform-style: preserve-3d;
}
.card__face {
  backface-visibility: hidden;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.card__face--back {
  transform: rotateY(180deg);
}
</style>
