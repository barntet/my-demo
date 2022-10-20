<script setup>
import Child from './components/child.vue';

const introduction = 1;
</script>

<template>
  <div>
    <Child class="external-child" :a="introduction" />
  </div>
</template>

<style>
.external-child {
  color: red;
}
</style>
