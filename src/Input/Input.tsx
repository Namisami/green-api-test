import './Input.css'

interface InputProps {
  children: React.ReactNode
  value: string
  onInputChange: (value: string) => void;
}

const Input = ({
  children,
  value,
  onInputChange,
}: InputProps) => {
  const placeholder = children?.toString()

  return (
    <div className="input">
      <label 
        className="input__label" 
        htmlFor={ placeholder }
      >
        { children }
      </label>
      <input 
        className="input__field" 
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