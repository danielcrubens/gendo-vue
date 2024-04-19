<template>
  <button @click="toggleDark()">
    <span v-if="isDark">
      <Sun/>
    </span>
    <span v-else>
     <Moon/>
    </span>
  </button>
</template>

<style lang="scss" scoped>
button {
  position: absolute;
  right: 3rem;
  background: transparent;
  border: none;
  cursor: pointer;
}

span {
  background: transparent;
}

svg {
  color: $white;
}
</style>


<script setup>
import { useDark, useToggle } from "@vueuse/core";
import Moon from '@/components/icons/Moon.vue';
import Sun from '@/components/icons/Sun.vue';

const isDark = useDark({
  selector: "body", 
  attribute: "theme", 
  valueDark: "dark", 
  valueLight: "light", 
  initial: false
});
const toggleDark = useToggle(isDark);
</script>