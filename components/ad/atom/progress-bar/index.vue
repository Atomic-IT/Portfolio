<template>
  <ProgressBar
    :value="props.value"
    :mode="props.mode"
    :show-value="props.showValue"
    :dt="props.dt"
    :pt="props.pt"
    :pt-options="props.ptOptions"
    :unstyled="props.unstyled"
    :style="{ width: props.width, height: props.height }"
  />
</template>

<script setup lang="ts">
import type { ProgressBarInterface } from '.'

const props = defineProps<ProgressBarInterface>()
</script>

<style lang="scss">
@use 'index';
</style>
