

import './App.css'
import ApplicationProcess from './components/applicationProcess/ApplicationProcess'
import Banner from './components/banner/Banner'
import Navbar from './shared/navbar/Navbar'

function App() {


  return (
    <div className='bg-[#F5F5F5]'>
    
      <Navbar></Navbar>
      <Banner></Banner>
      <ApplicationProcess></ApplicationProcess>
    </div>
  )
}

export default App
