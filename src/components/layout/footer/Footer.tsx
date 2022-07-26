import './footer.scss'

type FooterProps = {
  text: string
}

const Footer = ({ text }: FooterProps): JSX.Element => (
  <div className='app-footer bg-primary p-4'>{text}</div>
)

export default Footer
