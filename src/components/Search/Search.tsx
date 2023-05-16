import { useState } from 'react'
import Input from '../../Input/Input'
import { ReactComponent as SearchImg } from '../../assets/search.svg'
import './Search.css'

interface SearchProps {
  onSearch: (e: React.FormEvent, searchTerm: string) => void
}

const Search = ({
  onSearch,
}: SearchProps) => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <form 
      className='search'
      onSubmit={ (e) => onSearch(e, searchTerm) }
    >
      <Input
        value={ searchTerm }
        icon={ SearchImg }
        onInputChange={ setSearchTerm }
      >
        Поиск или новый чат
      </Input>
    </form>
  )
}

export default Search