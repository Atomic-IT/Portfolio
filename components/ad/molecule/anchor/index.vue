<template>
  <a
    :href="props.href"
    :rel="props.rel"
    :target="props.target"
    :style="props.style"
  >
    <slot />
    <NuxtImg v-if="props.src" :src="props.src" :preload="props.preload" />
    <ad-atom-icon v-if="props.icon" :icon="props.icon" />
    {{ props.label }}
  </a>
</template>

<script setup lang="ts">
import type { AnchorInterface } from '.'

const props = defineProps<AnchorInterface>()
</script>
