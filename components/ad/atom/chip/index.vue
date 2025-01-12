<template>
  <Chip
    :label="props.label"
    :icon="props.icon"
    :image="props.image"
    :removable="props.removable"
    :remove-icon="props.removeIcon"
    :dt="props.dt"
    :pt="props.pt"
    :pt-options="props.ptOptions"
    :unstyled="props.unstyled"
  />
</template>

<script setup lang="ts">
import type { ChipInterface } from '.'

const props = defineProps<ChipInterface>()
</script>

<style lang="scss">
@use 'index';
</style>
