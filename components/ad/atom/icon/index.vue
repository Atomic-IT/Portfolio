<template>
  <i v-if="props.icon" :class="props.icon" />
</template>

<script setup lang="ts">
import type { IconInterface } from '.'

const props = defineProps<IconInterface>()
</script>
