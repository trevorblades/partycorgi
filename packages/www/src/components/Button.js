/** @jsx jsx */
import { jsx } from 'theme-ui'

export const buttonStyles = {
  fontSize: '18px',
  borderRadius: '8px',
  height: '55px',
  padding: '0 35px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'all 300ms ease',
  backgroundColor: 'purple20',
  color: 'text',
  textDecoration: 'none',
  fontWeight: 'heading',

  '&:hover, &:focus': {
    backgroundColor: 'background',
  },
  '&:focus': {
    outline: '0',
    boxShadow: '0 0 0 3pt #9668cc',
  },
}

export default ({ children }) => <button sx={buttonStyles}>{children}</button>
