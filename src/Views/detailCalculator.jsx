import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowLeftLong,
  faCode,
  faExternalLink,
  faLightbulb,
  faMobileScreen,
  faBolt,
} from '@fortawesome/free-solid-svg-icons'

const programmingLanguages = [
  { name: 'HTML5', description: 'Builds the calculator structure and accessible controls.' },
  { name: 'CSS3', description: 'Creates the responsive layout, spacing, and visual states.' },
  { name: 'JavaScript', description: 'Handles input, calculations, clear, and delete actions.' },
]

const purposes = [
  [faBolt, 'Fast calculations', 'Perform common arithmetic operations without leaving the page.'],
  [faLightbulb, 'Practice core logic', 'Apply JavaScript events, conditions, and calculation logic in a focused project.'],
  [faMobileScreen, 'Easy on every screen', 'Keep the calculator clear and usable on desktop and mobile devices.'],
]

const DetailCalculator = ({ onNavigate }) => {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-[#f7f8f6]">
      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <button className="mb-10 inline-flex items-center gap-2 text-sm font-bold text-[#0f8b6f] transition hover:gap-3" onClick={() => onNavigate('projects')} type="button">
            <FontAwesomeIcon icon={faArrowLeftLong} /> Back to Projects
          </button>

          <div className="mt-7 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
                <h1 className="max-w-4xl text-4xl font-bold leading-tight text-[#17211d] sm:text-5xl lg:text-6xl">Calculator</h1>
                <p className="mt-6 max-w-3xl text-base leading-8 text-[#5f6d68] sm:text-lg">A straightforward web calculator for completing everyday arithmetic with a clean,
                    responsive interface. And you can click on this link to see the live project: 
                    <a href="https://reaksmey396.github.io/Calculator_lab/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Live Project</a>
                 .
                </p>
            </div>
            <a href="https://reaksmey396.github.io/Calculator_lab/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 rounded-full bg-[#17211d] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0f8b6f]">
              Open Live Project <FontAwesomeIcon icon={faExternalLink} />
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-5 grid-cols-1">
          <article className="rounded-2xl border border-black/10 bg-white p-7 shadow-sm sm:p-9">
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-xl bg-[#eef3ef] text-[#0f8b6f]"><FontAwesomeIcon icon={faLightbulb} /></span>
                <h2 className="mt-1 text-2xl font-bold text-[#17211d]">A small tool with practical value</h2>
            </div>
            <p className="mt-6 leading-8 text-[#5f6d68]">This project turns basic arithmetic into a quick, friendly browser experience. It was created to strengthen frontend fundamentals while making a useful tool people can open and use immediately.</p>
            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              {purposes.map(([icon, title, description], index) => (
                <div key={title} className="rounded-xl bg-[#eef3ef] p-5">
                  
                  <h3 className="text-xl font-bold text-[#17211d]"><FontAwesomeIcon className=" text-[#0f8b6f]" icon={icon} /> {title}</h3>
                  <p className="mt-4 ml-2 text-sm leading-6 text-[#5f6d68]">{description}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="border-y border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-xl bg-[#eef3ef] text-[#0f8b6f]"><FontAwesomeIcon icon={faCode} /></span>
            <h2 className="mt-1 text-3xl font-bold text-[#17211d]">Built with web fundamentals</h2>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {programmingLanguages.map((language, index) => (
              <article key={language.name} className="rounded-2xl border border-black/10 bg-[#f7f8f6] p-6">
                <p className="text-sm font-bold text-[#0f8b6f]">0{index + 1}</p><h3 className="mt-3 text-2xl font-bold text-[#17211d]">{language.name}</h3><p className="mt-3 leading-7 text-[#5f6d68]">{language.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default DetailCalculator
