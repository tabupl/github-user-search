import { ChangeEvent } from 'react'
import { Form } from 'react-bootstrap'

type SearchBarProps = {
  value: string
  onValueChange: (value: string) => void
}

const SearchBar = ({ value, onValueChange }: SearchBarProps): JSX.Element => {
  const onInputChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement
    onValueChange(target.value)
  }

  return (
    <Form className='w-25'>
      <Form.Text>Search for github users</Form.Text>
      <Form.Control value={value} onChange={onInputChange} type='text' placeholder='user' />
    </Form>
  )
}

export default SearchBar
