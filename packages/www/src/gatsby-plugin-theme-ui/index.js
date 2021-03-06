export default {
  breakpoints: [
    '45em', '56em',
  ],
  colors: {
    text: '#fff',
    background: '#34323F',
    primary: '#ECE8FF',
    secondary: '#fff',
    accent: '#fff',
    highlight: '#fff',
    muted: '#A8A0D1',
    pink: '#EA6AFF',
    green: '#00E893',
    orange: '#FFAE01',
    blue: '#6ACFFF',
    purple30: '#CBC4EF',
    purple20: '#484558',
    purple10: '#2D2B37',
    blackTransparent: 'rgba(0, 0, 0, 0.28)',
    // TODO: Use this. Might need to move it to a different top level key and import the theme
    heroGradient: 'linear-gradient(164.92deg, #9B6BD3 12.72%, #00E992 84.21%)'
  },
  fonts: {
    body: 'Titillium Web, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'Titillium Web, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontWeights: {
    body: 400,
    semiBold: 500,
    heading: 700,
    bold: 700
  },
  fontSizes: {
    heading: 54,
    headingMobile: 34,
    capsTitle: 20,
    navItem: 16,
    navItemMobile: 18,
    p: 18,
    wordmark: 30
  },
  styles: {
    root: {
      // uses the theme values provided above
      fontFamily: 'body',
      fontWeight: 'body',
      position: 'relative',
      a: {
        color: 'text',
        textDecorationColor: '#EA6AFF',
        transition: 'color 175ms ease-out',

        '&:hover, &:focus': {
          color: 'blue'
        }
      },
      h1: {
        fontSize: ['headingMobile', 'heading'],
        fontFamily: 'heading',
        fontWeight: 'heading',
        lineHeight: '130%',
        color: 'primary',
        mt: 4,
        mb: 2,
      },
      h2: {
        marginTop: '64px'
      },
      h3: {
        marginTop: '44px'
      },
      p: {
        fontSize: [16, 'p'],
        lineHeight: '180%',
      },
      li: {
        fontSize: [16, 'p'],
        lineHeight: '180%',
        marginBottom: '1rem'
      }
    }
  }
}
