<template>
  <ToggleSwitch
    :model-value="props.modelValue"
    :default-value="props.defaultValue || 'On'"
    :name="props.name"
    :options="props.options"
    :option-label="props.optionLabel"
    :option-value="props.optionValue"
    :option-disabled="props.optionDisabled"
    :multiple="props.multiple"
    :invalid="props.invalid"
    :disabled="props.disabled"
    :data-key="props.dataKey"
    :allow-empty="props.allowEmpty"
    :aria-labelledby="props.ariaLabelledby"
    :size="props.size"
    :form-control="props.formControl"
    :pt="props.pt"
    :dt="props.dt"
    :pt-options="props.ptOptions"
    :unstyled="props.unstyled"
  />
</template>

<script setup lang="ts">
import type { ToggleSwitchInterface } from '.'

const props = defineProps<ToggleSwitchInterface>()
</script>

<style lang="scss">
@use 'index';
</style>
