import { useState } from 'react'
import Navbar from './Views/Navbar'
import Home from './Views/Home'
import About from './Views/About'
import Skills from './Views/Skills'
import Projects from './Views/Projects'
import Contact from './Views/Contect'
import Footer from './Views/Footer'
import DetailOnlineCourse from './Views/Detail_Online_Course'
import DetailPaySchoolFee from './Views/Detail_Pay_School_Fee'
import DetailTourism from './Views/Detail_Tourism'
import DetailIMS from './Views/DetailIMS'
import DetailShoeShop from './Views/DetailShoeShop'
import DetailCalculator from './Views/detailCalculator'
import DetailLogin from './Views/detailLogin'

const App = () => {
  const [page, setPage] = useState('home')

  const pages = {
    home: <Home onNavigate={setPage} />,
    about: <About />,
    skills: <Skills />,
    projects: <Projects onNavigate={setPage} />,
    contact: <Contact />,
    detailPaySchoolFee: <DetailPaySchoolFee onNavigate={setPage} />,
    detailOnlineCourse: <DetailOnlineCourse onNavigate={setPage} />,
    detailTourism: <DetailTourism onNavigate={setPage} />,
    detailIMS: <DetailIMS onNavigate={setPage} />,
    detailShoeShop: <DetailShoeShop onNavigate={setPage} />,
    detailCalculator: <DetailCalculator onNavigate={setPage} />,
    detailLogin: <DetailLogin onNavigate={setPage} />,
  }

  const handleNavigate = (nextPage) => {
    setPage(nextPage)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-[#f7f8f5] text-[#17211d]">
      <Navbar activePage={page} onNavigate={handleNavigate} />
      {pages[page]}
      <Footer onNavigate={handleNavigate} />
    </div>
  )
}

export default App
