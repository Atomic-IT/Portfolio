import type { ProgressBarModeType } from '.'

export interface ProgressBarInterface {
  value?: number
  mode?: ProgressBarModeType
  showValue?: boolean
  dt?: any // eslint-disable-line
  pt?: any // eslint-disable-line
  ptOptions?: any // eslint-disable-line
  unstyled?: boolean
  width?: string
  height?: string
}
