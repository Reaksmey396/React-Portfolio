import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import img1 from '/public/images/my_image01.jpg'
import img2 from '/public/images/my_image02.png'
import img3 from '/public/images/my_image03.png'
import Mycv from '/public/images/CV_2026.jpg'
import down from '/public/images/down.png'
import CVpdf from '/public/PDF/CV_2026_new.pdf'
import {
  faArrowLeftLong,
  faArrowRightLong,
  faBookOpen,
  faBuildingColumns,
  faBullseye,
  faCalendarDays,
  faCakeCandles,
  faCode,
  faGraduationCap,
  faIdCard,
  faLanguage,
  faLayerGroup,
  faUser,
} from '@fortawesome/free-solid-svg-icons'

const education = [
  ['University', 'Royal University of Phnom Penh', faBuildingColumns],
  ['Major', 'Information Technology Engineering', faGraduationCap],
  ['Current Year', 'Year 3', faCalendarDays],
  ['Age', '20 years old', faCakeCandles],
]

const photos = [
  { src: img1, label: 'Portrait style' },
  { src: img2, label: 'Formal photo' },
  { src: img3, label: 'Personal photo' },
]

const languages = [
  ['English (Intermediate)', 70],
  ['Khmer', 100],
]

const qualities = [
  ['Responsive layout', 'Careful with spacing, mobile screens, and clean structure.', faLayerGroup],
  ['Clean UI code', 'Interested in readable code and simple user experience.', faCode],
  ['Real practice', 'Always practicing through real web projects and school work.', faBookOpen],
  ['Growth mindset', 'Motivated to grow as a frontend and future full-stack developer.', faBullseye],
]

const About = () => {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0)
  const activePhoto = photos[activePhotoIndex]

  const showPreviousPhoto = () => {
    setActivePhotoIndex((currentIndex) =>
      currentIndex === 0 ? photos.length - 1 : currentIndex - 1,
    )
  }

  const showNextPhoto = () => {
    setActivePhotoIndex((currentIndex) =>
      currentIndex === photos.length - 1 ? 0 : currentIndex + 1,
    )
  }

  return (
    <main className="min-h-[calc(100vh-4rem)]">
      <section className="bg-white py-10">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <h1 className="text-5xl relative bottom-5 font-bold leading-tight text-[#17211d]">
              My Background Profile
            </h1>
            <p className="mt-5 text-lg leading-8 text-[#5f6d68]">
              My name is Khim Reaksmey. I am 20 years old and student at RUPP. I am studying
              a major in Information Technology Engineering ( ITE ) in Year 3 at RUPP.
            </p>
            <p className="mt-5 text-lg leading-8 text-[#5f6d68]">
              I am interested in web development and I have learned on front end and back end of web development.
              I consider problem-solving one of my developing strengths. I may need more time to understand and solve difficult problems, but I am patient and willing to keep working until I find a solution. I also take time to learn new technologies step by step and prefer to understand how things work rather than simply use them.
              My current goal is to strengthen my frontend and backend skills, gain practical experience through projects and internships, and gradually grow into a professional Software Engineer.
            </p>
          </div>

          <div className="rounded-lg border border-black/10 bg-[#eef3ef] p-4 shadow-sm">
            <div className="relative grid min-h-[520px] place-items-center overflow-hidden rounded-md bg-white">
              <div className='py-5'>
                <img
                  className="max-h-[520px] w-full rounded-xl object-contain"
                  src={activePhoto.src}
                  alt={`Khim Reaksmey ${activePhoto.label}`}
                />
              </div>

              <button
                className="absolute left-4 top-1/2 grid min-w-12 -translate-y-1/2 place-items-center rounded-full bg-[#17211d]/90 px-3 py-2 text-sm font-bold text-white shadow-md transition hover:bg-[#0f8b6f]"
                onClick={showPreviousPhoto}
                type="button"
                aria-label="Show previous photo"
              >
                <FontAwesomeIcon icon={faArrowLeftLong} />
              </button>
              <button
                className="absolute right-4 top-1/2 grid min-w-12 -translate-y-1/2 place-items-center rounded-full bg-[#17211d]/90 px-3 py-2 text-sm font-bold text-white shadow-md transition hover:bg-[#0f8b6f]"
                onClick={showNextPhoto}
                type="button"
                aria-label="Show next photo"
              >
                <FontAwesomeIcon icon={faArrowRightLong} />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-[#17211d]/90 px-4 py-2 text-sm font-semibold text-white shadow-md">
                {activePhotoIndex + 1} / {photos.length}
              </div>
            </div>

            <div className="flex flex-col gap-2 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0f8b6f]">
                  Khim Reaksmey
                </p>
                <p className="mt-2 text-lg font-semibold text-[#17211d]">
                  Web Developer
                </p>
              </div>
              <p className="text-sm font-semibold text-[#66736e]">
                Photo {activePhotoIndex + 1} of {photos.length}
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-[#eef3ef] py-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <h2 className="mt-3 text-4xl font-bold text-[#17211d]">Other Information</h2>
              <p className="mt-5 leading-8 text-[#5f6d68]">
                These details summarize my study background, current level, and the personal
                habits I bring into each web project.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {education.map(([label, value, icon]) => (
                <div key={label} className="rounded-lg border border-black/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <div className="flex items-start gap-4">
                    <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#eef3ef] text-[#0f8b6f]">
                      <FontAwesomeIcon icon={icon} />
                    </span>
                    <div>
                      <p className="text-sm font-medium uppercase tracking-wide text-[#0f8b6f]">{label}</p>
                      <p className="mt-2 text-xl font-medium leading-7 text-[#17211d]">{value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      <section className="mx-auto max-w-7xl px-5 py-5 sm:px-8">
            <h1 className='mx-auto text-4xl font-bold  text-black'>My Curriculum Vitae</h1>
            <p className="mt-4 text-lg text-[#5f6d68]">
              Here is my detailed curriculum vitae. To show our educational  background, skills, andexperiences <br />
              in a clear and organized way. You can download it for your reference.
            </p>
      </section>
      <section className="mx-auto max-w-4xl py-5 px-5 sm:px-8">
        <div className="grid gap-5 grid-cols-1 p-5 bg-gray-300 rounded-lg">
          <img className='w-full h-auto border-black/10 rounded-lg' src={Mycv} alt="My CV" />
          <img className='w-10 h-9 mt-286 hover:bg-gray-400 rounded-sm p-1 absolute ml-177' src={down} alt="Icon Down Load" 
            onClick={() => {
              const link = document.createElement("a");
              link.href = CVpdf;
              link.download = "CV_2026_new.pdf";
              link.click();
            }}
          />
          <div className=' mx-auto w-4xl grid grid-cols-2'>
            <h1 className='text-2xl mt-5 font-bold uppercase text-gray-800'>See Detail on My CV</h1>
            <p className='text-sm mt-10 ml-63 font-medium text-[#17211d]'>Downlaod</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-200 py-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h1 className="text-3xl font-bold text-[#17211d]">Personal Qualities</h1>
          <p className="mt-4 text-lg text-[#5f6d68]">
            I possess several personal qualities that make me a valuable team member and individual.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {qualities.map(([title, text, icon]) => (
              <div key={title} className="rounded-lg border border-black/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <span className="grid size-11 place-items-center rounded-full bg-[#17211d] text-white">
                  <FontAwesomeIcon icon={icon} />
                </span>
                <h3 className="mt-4 font-bold text-[#17211d]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#5f6d68]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
