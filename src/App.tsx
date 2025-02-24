import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import Main from './Home'
import Learning from './Learning'
import MainStack from './MainStack'


function App() {

  return (
    <>
      <HeaderComponent />
      <Main />
      <Learning />
      <MainStack />
      <FooterComponent />
    </>
  )
}

export default App
