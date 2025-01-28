<template>
  <ProgressSpinner
    :stroke-width="props.strokeWidth"
    :fill="props.fill"
    :animation-duration="props.animationDuration"
    :dt="props.dt"
    :pt="props.pt"
    :pt-options="props.ptOptions"
    :unstyled="props.unstyled"
    :style="{ width: props.width, height: props.height }"
  />
</template>

<script setup lang="ts">
import type { ProgressSpinnerInterface } from '.'

const props = defineProps<ProgressSpinnerInterface>()
</script>

<style lang="scss">
@use 'styles';
</style>
