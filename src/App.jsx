

import './App.css'
import ApplicationProcess from './components/applicationProcess/ApplicationProcess'
import Banner from './components/banner/Banner'
import CareerAndIndustry from './components/careerAndIndestry/CareerAndIndestry'
import CostOfEducation from './components/costOfEducation/CostOfEducation'
import LatestBlog from './components/latestBlog/LatestBlog'
import OurStudent from './components/ourStudent/OurStudent'
import PopularUniversity from './components/popularUnivercity/PopularUnivercity'
import StudentSpeak from './components/studentSpeak/StudentSpeak'
import UsaAtGlance from './components/usaAtGlance/UsaAtGlance'
import WhyStudy from './components/whyStudy/WhyStudy'
import Footer from './shared/footer/Footer'
import Navbar from './shared/navbar/Navbar'

function App() {


  return (
    <div className='bg-[#F5F5F5] font-inter'>
      {/* specifies size */}
      <div className='md:w-[85%] w-full mx-auto'>
        <Navbar></Navbar>
      </div>

      <Banner></Banner>

      {/* specifies size */}
      <div className='md:w-[85%] w-full mx-auto md:space-y-28 space-y-12'>
        <ApplicationProcess></ApplicationProcess>
        <WhyStudy></WhyStudy>
        <CareerAndIndustry/>
      </div>

      {/* popular university and cost of education */}
      <PopularUniversity/>

      <div className='md:w-[85%] w-full mx-auto'>
        <CostOfEducation/>
        <UsaAtGlance/>
        <OurStudent/>
      </div>

      {/* student speak */}
      <StudentSpeak/>

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
