import { ReactComponent as DefaultUserImg } from '../../assets/default-user.svg'
import { ReactComponent as GroupImg } from '../../assets/group.svg'
import { ReactComponent as StatusImg } from '../../assets/status.svg'
import { ReactComponent as ChatImg } from '../../assets/chat.svg'
import { ReactComponent as MenuImg } from '../../assets/menu.svg'

import IconButtonList from '../IconButtonList/IconButtonList'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <>
      <div className="sidebar__header header">
        <DefaultUserImg className='header__user'/>
        <IconButtonList icons={ [GroupImg, StatusImg, ChatImg, MenuImg] }/>
      </div>
    </>
  )
}

export default Sidebar