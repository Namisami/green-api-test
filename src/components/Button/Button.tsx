import { ReactNode } from "react"
import { ButtonColors } from "../../types/ButtonColors"
import './Button.css'

interface ButtonProps {
  children: ReactNode
  color: ButtonColors
}

const Button = ({
  children,
  color
}: ButtonProps) => {
  return (
    <button className={`button button--${color}`}>{ children }</button>
  )
}

export default Button