<template>
  <button @click="scrollToTop">
    <ArrowUp/>

  </button>
</template>

<script setup>
import ArrowUp from './icons/ArrowUp.vue';
import { ref } from 'vue';

const isScrolling = ref(false);

const scrollToTop = () => {
  isScrolling.value = true;
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const startTime = Date.now();

  const animateScroll = () => {
    const elapsedTime = Math.max(0, Date.now() - startTime);
    const progress = elapsedTime / 500; // Adjust duration as needed

    const newScrollTop = scrollTop * (1 - progress);
    window.scrollTo(0, newScrollTop);

    if (progress < 1) {
      window.requestAnimationFrame(animateScroll);
    } else {
      isScrolling.value = false;
    }
  };

  animateScroll();
};

</script>

<style lang="scss" scoped>
button {
  background: $black;
  position: fixed;
  bottom: 20px;
  right: 20px;
  border: none;
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
}

svg {
  color: white;
  width: 100%;
  height: 70%;
}
</style>