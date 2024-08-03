import Header from './Components/Header_and_Footer/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Header_and_Footer/Footer'


function App() {
  


  




  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
