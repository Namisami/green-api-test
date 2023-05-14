import Button from '../Button/Button'
import { ButtonColors } from '../../types/ButtonColors'
import { ButtonForms } from '../../types/ButtonForms'
import './IconButtonList.css'

interface IconButtonListProps {
  icons: React.FC[]
}

const IconButtonList = ({
  icons
}: IconButtonListProps) => {
  return (
    <ul className='icon-btn-list'>
      { icons.map((icon, index) => {
        return (
          <li key={ index } className='icon-btn-list__item'>
            <Button color={ ButtonColors.primary } form={ ButtonForms.circle } onButtonClick={ () => console.log(1) }>
              { icon({}) }
            </Button>
          </li>
        )
      })}
    </ul>
  )
}

export default IconButtonList