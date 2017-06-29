
import Color from 'color'

export const COLORS = {
  black: '#000'
}

export const SCALE = [8, 20, 40, 60, 100]

export const BREAKPOINTS = {
  extraSmall: 500,
  small: 700,
  medium: 1000,
  large: 1280,
  extraLarge: 1400
}

export const BOX_SHADOW = `0px 1px 4px -1px ${Color(COLORS.black).fade(0.5).rgb().string()}`
