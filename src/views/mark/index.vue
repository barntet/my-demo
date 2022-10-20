<script setup lang="ts">
import { marked } from 'marked';
import { debounce } from 'lodash';
import { ref, computed } from 'vue';

const input = ref('# hello');
const output = computed(() => marked(input.value));
// const update = debounce((e) => {
//   console.log(e);
//   input.value = e.target.value;
// }, 100);
const update = debounce(e => {
  console.log(e);
  input.value = e.target.value;
}, 2000);

const elUpdate = debounce(e => {
  console.log(e);
  input.value = e;
}, 200);

const value = ref<string>('');
</script>
<template>
  <div class="editor">
    <!-- <a-textarea class="input" :value="input" @change="update" /> -->
    <textarea class="input" :value="input" @input="update"></textarea>

    <div class="output" v-html="output"></div>

    <!-- <a-textarea
      :value="input"
      @input="update"
      placeholder="Basic usage"
      :rows="4"
    /> -->
    <el-input
      :value="input"
      :rows="2"
      type="textarea"
      placeholder="Please input"
      @input="elUpdate"
    /><el-input />
  </div>
</template>

<style scoped>
.editor {
  height: 100vh;
  display: flex;
}

.input,
.output {
  overflow: auto;
  width: 50%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 20px;
}

.input {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6ff;
  font-size: 14px;
  font-family: 'Monaco', courier, monospace;
  padding: 20px;
}

code {
  color: #f66;
}
</style>
