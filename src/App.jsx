

import './App.css'
import ApplicationProcess from './components/applicationProcess/ApplicationProcess'
import Banner from './components/banner/Banner'
import WhyStudy from './components/whyStudy/WhyStudy'
import Navbar from './shared/navbar/Navbar'

function App() {


  return (
    <div className='bg-[#F5F5F5]'>
      {/* specifies size */}
      <div className='md:w-[85%] w-full mx-auto'>
        <Navbar></Navbar>
      </div>

      <Banner></Banner>

      {/* specifies size */}
      <div className='md:w-[85%] w-full mx-auto'>
        <ApplicationProcess></ApplicationProcess>
        <WhyStudy></WhyStudy>
      </div>
    </div>
  )
}

export default App
