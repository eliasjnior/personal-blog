import React from 'react'

import { CustomButton } from './styles'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return <CustomButton {...rest}>{children}</CustomButton>
}

export default Button
