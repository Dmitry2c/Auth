import {Button as CButton, createTheme,ThemeProvider} from '@mui/material'
export const Button = ({
  type,
  text,
  children,
  width,
  color,
  backgroundColor,
  margin,
  onClick,
  variant,
  ...props
}) => {
  const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            width: width,
            color: color,
            backgroundColor:backgroundColor,
            margin:margin
          }
        }
      }
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <CButton
      onClick={onClick}
      type={type}
      variant={variant}
      {...props}
      >
        {text}
      </CButton>
    </ThemeProvider>
  )
}