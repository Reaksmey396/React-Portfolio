import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCreditCard,
  faDiagramProject,
  faGraduationCap,
  faMapLocationDot,
  faReceipt,
} from '@fortawesome/free-solid-svg-icons'

import school from '/images/School_Payment.png';
import inventory from '/images/Inventory.png';
import online from '/images/Online_Course.png';
import shoe from '/images/Shoe_Shop.png';
import tourism from '/images/Tourism.png';
import calculator from '/images/calculator.png';
import login from '/images/login.png';

const projects = [
  {
    title: 'Payment School Fee System',
    page: 'detailPaySchoolFee',
    type: 'Web System',
    icon: faCreditCard,
    image: school,
    imagePosition: '70% center',
    description:
      'A school fee payment system for students, parents, and administrators.',

    videoSrc:
      'https://youtu.be/ULJbBNWJjOs?si=T9Bg279g5TRNqjL_',
  },

  {
    title: 'Online Course',
    page: 'detailOnlineCourse',
    type: 'Education Platform',
    icon: faGraduationCap,
    image: online,
    imagePosition: '58% center',
    description:
      'An online learning platform with simple course discovery and study navigation.',

    videoSrc:
      'https://youtu.be/vMCnKPT3zCY?si=7BicEsVMp4UbPhOD',
  },

  {
    title: 'Tourism In Cambodia',
    page: 'detailTourism',
    type: 'Travel Website',
    icon: faMapLocationDot,
    image: tourism,
    imagePosition: '45% center',
    description:
      'A responsive guide for discovering destinations and travel experiences in Cambodia.',

    videoSrc:
      'https://youtu.be/vkYl0e9yBsA?si=oCF7mL28a73emUUF',
  },

  {
    title: 'Inventory Management',
    page: 'detailIMS',
    type: 'Business Application',
    icon: faReceipt,
    image: inventory,
    imagePosition: '75% center',
    description:
      'A business system for organizing products, stock records, and daily inventory work.',

    videoSrc:
      'https://youtu.be/1RzfyuUDDug?si=evS956Ip88CPf9xf',
  },

  {
    title: 'Shoe Shop E-commerce',
    page: 'detailShoeShop',
    type: 'Business Application',
    icon: faReceipt,
    image: shoe,
    imagePosition: '64% center',
    description:
      'A modern e-commerce experience for discovering and shopping shoe products.',

    videoSrc:
      'https://youtu.be/sj6JAIYmc5Y',
  },
]
const small_project = [
  {
    title: 'Calculator',
    page: 'detailCalculator',
    type: 'Web System',
    icon: faCreditCard,
    image: school,
    imagePosition: '70% center',
    description:
      'A simple calculator for basic arithmetic operations.',

    imageSrc: calculator,
  },
  {
    title: 'Login Form',
    page: 'detailLogin',
    type: 'Web System',
    icon: faCreditCard,
    image: school,
    imagePosition: '70% center',
    description:
      'Use for check data to use in each account but this is just an UI only.',

    imageSrc: login,
  },
]

const Projects = ({ onNavigate }) => {
  return (
    <main className="min-h-[calc(100vh-4rem)]">
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em] text-[#0f8b6f]">
              <FontAwesomeIcon icon={faDiagramProject} />
              Projects
            </p>
            <h1 className="mt-3 text-5xl font-bold leading-tight text-[#17211d]">
              Work I can build, improve, and explain.
            </h1>
            <p className="mt-5 text-lg leading-8 text-[#5f6d68]">
              These projects show my frontend strengths and my growing backend practice through
              school systems, education platforms, business applications, and responsive websites.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-5 sm:px-8">
        <h1 className='text-4xl text-green-900 font-bold mb-5'>Visiting Big Projects</h1>
        <p className='text-lg relative bottom-3'>Explore my biggest projects, built to solve real-world problems with modern web technologies.</p>
        <div className="grid gap-5 py-5 md:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="group overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="relative h-52 overflow-hidden bg-[#17211d]">
                <img
                  src={project.image}
                  alt=""
                  className="size-full object-cover opacity-85 transition duration-500 group-hover:scale-105"
                  style={{ objectPosition: project.imagePosition }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#17211d]/90 via-[#17211d]/20 to-transparent" />
                <div className="absolute inset-x-5 bottom-4 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-[#0f8b6f]">
                    {project.type}
                  </span>
                  <span className="grid size-10 place-items-center rounded-full bg-[#0f8b6f] text-white shadow-md">
                    <FontAwesomeIcon icon={project.icon} />
                  </span>
                </div>
              </div>
              <div className="flex h-[210px] flex-col p-6">
                <h2 className="text-2xl font-bold text-[#17211d]">{project.title}</h2>
                <p className="mt-3 leading-7 text-[#5f6d68]">{project.description}</p>
                <button
                  className="mt-auto inline-flex w-fit items-center rounded-full bg-[#17211d] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0f8b6f]"
                  onClick={() => onNavigate(project.page)}
                  type="button"
                >
                  See More
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-5 sm:px-8">
        <h1 className='text-4xl text-green-900 font-bold mb-5'>Visiting Small Projects</h1>
        <p className='text-lg relative bottom-3'>Explore my small projects, built to solve real-world problems with web technologies.</p>
        <div className="grid gap-5 py-5 md:grid-cols-3">
          {small_project.map((s) => (
            <article key={s.title} className="group overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="relative h-52 overflow-hidden bg-[#17211d]">
                <img
                  src={s.imageSrc}
                  alt=""
                  className="size-full object-cover opacity-85 transition duration-500 group-hover:scale-105"
                  style={{ objectPosition: s.imagePosition }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#17211d]/90 via-[#17211d]/20 to-transparent" />
                <div className="absolute inset-x-5 bottom-4 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-[#0f8b6f]">
                    {s.type}
                  </span>
                  <span className="grid size-10 place-items-center rounded-full bg-[#0f8b6f] text-white shadow-md">
                    <FontAwesomeIcon icon={s.icon} />
                  </span>
                </div>
              </div>
              <div className="flex h-[210px] flex-col p-6">
                <h2 className="text-2xl font-bold text-[#17211d]">{s.title}</h2>
                <p className="mt-3 leading-7 text-[#5f6d68]">{s.description}</p>
                <button
                  className="mt-auto inline-flex w-fit items-center rounded-full bg-[#17211d] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0f8b6f]"
                  onClick={() => onNavigate(s.page)}
                  type="button"
                >
                  See More
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Projects
