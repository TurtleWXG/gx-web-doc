<template>
  <el-tag type="primary" round effect="plain">{{ text }}</el-tag>
</template>

<script setup lang="ts">
defineProps({
  text: {
    type: String,
    default: '-'
  }
})
</script>
