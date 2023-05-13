import { ReactNode } from "react"
import { ButtonColors } from "../../types/ButtonColors"
import './Button.css'

interface ButtonProps {
  children: ReactNode
  color: ButtonColors
  onButtonClick: () => void
}

const Button = ({
  children,
  color,
  onButtonClick
}: ButtonProps) => {
  return (
    <button 
      className={`button button--${color}`}
      onClick={ onButtonClick }
    >
      { children }
    </button>
  )
}

export default Button