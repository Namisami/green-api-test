import './Input.css'

interface InputProps {
  children: React.ReactNode
  value: string
  icon?: React.FC
  onInputChange: (value: string) => void;
}

const Input = ({
  children,
  value,
  icon,
  onInputChange,
}: InputProps) => {
  const placeholder = children?.toString()

  return (
    <div className="input">
      { icon && 
        <span className='input__icon'>
          { icon({}) } 
        </span>
      }
      <label 
        className="input__label" 
        htmlFor={ placeholder }
      >
        { children }
      </label>
      <input 
        className={`input__field ${icon ? 'input__field--icon' : ''}`} 
        id={ placeholder } 
        value={ value } 
        onChange={ (e) => onInputChange(e.target.value) } 
        type="text" 
        placeholder={ placeholder }
      />
    </div>
  )
}

export default Input