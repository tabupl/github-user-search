import { Navbar, NavbarBrand } from 'react-bootstrap'

type HeaderProps = {
  title: string
}

const Header = ({ title }: HeaderProps): JSX.Element => {
  return (
    <Navbar bg='primary' variant='dark' className='mb-0'>
      <NavbarBrand>{title}</NavbarBrand>
    </Navbar>
  )
}

export default Header
