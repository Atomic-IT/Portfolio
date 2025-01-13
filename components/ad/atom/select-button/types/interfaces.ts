import type { ElementSizeType } from '~/components'

export interface SelectButtonInterface {
  modelValue?: number
  defaultValue?: any // eslint-disable-line
  name?: string
  options?: any[] // eslint-disable-line
  optionLabel?: string
  optionValue?: string
  optionDisabled?: string
  multiple?: boolean
  invalid?: boolean
  disabled?: boolean
  dataKey?: string
  allowEmpty?: boolean
  ariaLabelledby?: string
  size?: ElementSizeType
  formControl?: Record<string, any> // eslint-disable-line
  pt?: any // eslint-disable-line
  dt?: any // eslint-disable-line
  ptOptions?: any // eslint-disable-line
  unstyled?: boolean
}
