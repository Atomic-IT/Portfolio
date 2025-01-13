<template>
  <ToggleSwitch
    :model-value="props.modelValue"
    :default-value="props.defaultValue || 'On'"
    :name="props.name"
    :true-value="props.trueValue"
    :false-value="props.falseValue"
    :invalid="props.invalid"
    :disabled="props.disabled"
    :readonly="props.readonly"
    :tabindex="props.tabindex"
    :input-id="props.inputId"
    :input-class="props.inputClass"
    :input-style="props.inputStyle"
    :aria-labelledby="props.ariaLabelledby"
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
