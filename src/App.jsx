

import './App.css'
import ApplicationProcess from './components/applicationProcess/ApplicationProcess'
import Banner from './components/banner/Banner'
import LatestBlog from './components/latestBlog/LatestBlog'
import WhyStudy from './components/whyStudy/WhyStudy'
import Footer from './shared/footer/Footer'
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


      <div className='bg-[#F6F2EE]'>
        <div className='md:w-[85%] w-full mx-auto mt-28 md:px-0 px-2'>
          <LatestBlog/>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default App
