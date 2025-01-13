import type {
  ButtonBadgeSeverityType,
  ButtonOnClickType,
  ButtonSeverityType,
  ButtonType,
  ElementSizeType,
  PositionType,
} from '~/components'

export interface ButtonInterface {
  label?: string
  icon?: string
  iconPos?: PositionType
  iconClass?: string
  badge?: string
  badgeClass?: string
  badgeSeverity?: ButtonBadgeSeverityType
  loading?: boolean
  loadingIcon?: string
  as?: string | Component
  asChild?: boolean
  link?: boolean
  severity?: ButtonSeverityType
  raised?: boolean
  rounded?: boolean
  text?: boolean
  outlined?: boolean
  size?: ElementSizeType
  variant?: 'outlined' | 'text' | 'link'
  fluid?: boolean
  dt?: any // eslint-disable-line
  pt?: any // eslint-disable-line
  ptOptions?: any // eslint-disable-line
  unstyled?: boolean
  disabled?: boolean
  onclick?: ButtonOnClickType
  type?: ButtonType
  width?: string
  height?: string
  gap?: string
  padding?: string
  src?: string
  ariaLabel?: string
}
