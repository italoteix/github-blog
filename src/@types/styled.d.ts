import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      bluishGray: {
        50: '#E7EDF4'
        100: '#C4D4E3'
        200: '#AFC2D4'
        300: '#7B96B2'
        400: '#3A536B'
        500: '#1C2F41'
        600: '#112131'
        700: '#0B1B2B'
        800: '#071422'
        900: '#040F1A'
      }
    }

    fontSizes: {
      xs: '0.75rem'
      sm: '0.875rem'
      base: '1rem'
      lg: '1.125rem'
      xl: '1.25rem'
      '2xl': '1.5rem'
    }
  }
}
