<template>
  <header>
    <GitHub/>
    <span>GitHub</span> <span> profiles</span>
  </header>
</template>

<script setup lang="ts">
import GitHub from './icons/GitHub.vue';
</script>

<style lang="scss" scoped>
header{
background: $black;
padding: .9rem 2rem;
display: flex;
align-items: center;

svg{
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
}
span{
  color: $white;
  font-weight: bold;
  font-size: $font-24;
  &:nth-of-type(2) { 
      font-weight: normal; 
      margin-left: .3rem;
    }
}
}

</style>