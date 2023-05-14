import { ReactNode } from "react"
import { ButtonColors } from "../../types/ButtonColors"
import { ButtonForms } from "../../types/ButtonForms"
import './Button.css'

interface ButtonProps {
  children: ReactNode
  color: ButtonColors
  form?: ButtonForms
  onButtonClick: () => void
}

const Button = ({
  children,
  color,
  form = ButtonForms.rectangle,
  onButtonClick
}: ButtonProps) => {
  return (
    <button 
      className={`button button--${color} button--${form}`}
      onClick={ onButtonClick }
    >
      { children }
    </button>
  )
}

export default Button