export interface ToggleSwitchInterface {
  modelValue?: string | boolean
  defaultValue?: string | boolean
  name?: string
  trueValue?: any // eslint-disable-line
  falseValue?: any // eslint-disable-line
  invalid?: boolean
  disabled?: boolean
  readonly?: boolean
  tabindex?: number
  inputId?: string
  inputClass?: string | object
  inputStyle?: object
  ariaLabelledby?: string
  ariaLabel?: string
  formControl?: Record<string, any> // eslint-disable-line
  pt?: any // eslint-disable-line
  dt?: any // eslint-disable-line
  ptOptions?: any // eslint-disable-line
  unstyled?: boolean
}
