import Content from './components/layout/content/Content'
import Header from './components/layout/header/Header'
import Footer from './components/layout/footer/Footer'
import UserSearch from './components/userSearch/UserSearch'

function App(): JSX.Element {
  return (
    <div className='d-flex flex-column vh-100'>
      <Header title='Github search' />
      <Content>
        <UserSearch />
      </Content>
      <Footer text='By Adam Waśniewski 2022' />
    </div>
  )
}

export default App
