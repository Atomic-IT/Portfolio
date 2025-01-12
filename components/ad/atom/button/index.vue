<template>
  <Button
    :label="props.label"
    :icon="props.icon"
    :icon-pos="props.iconPos"
    :icon-class="props.iconClass"
    :badge="props.badge"
    :badge-class="props.badgeClass"
    :badge-severity="props.badgeSeverity"
    :loading="props.loading"
    :loading-icon="props.loadingIcon"
    :as="props.as"
    :as-child="props.asChild"
    :link="props.link"
    :severity="props.severity"
    :raised="props.raised"
    :rounded="props.rounded"
    :text="props.text"
    :outlined="props.outlined"
    :size="props.size"
    :variant="props.variant"
    :fluid="props.fluid"
    :dt="props.dt"
    :disabled="props.disabled"
    :pt="props.pt"
    :pt-options="props.ptOptions"
    :type="props.type || 'button'"
    :style="{
      width: props.width,
      gap: props.gap,
      padding: props.padding,
    }"
    :aria-label="props.ariaLabel"
    @click="props.onclick"
  />
</template>

<script setup lang="ts">
import type { ButtonInterface } from '.'

const props = defineProps<ButtonInterface>()
</script>
