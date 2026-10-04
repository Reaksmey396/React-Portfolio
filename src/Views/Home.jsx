import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBriefcase, faCode, faLaptopCode, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons'
import heroImage from '/public/images/portfolio-hero.png'

const stats = [
  ['20', 'Years old'],
  ['Year 3', 'RUPP ITE student'],
  ['10 weeks', 'Frontend internship'],
]

const highlights = [
  ['01', faLaptopCode, 'Frontend Focus', 'Building website with Responsive, Styling, and clean code for web application.'],
  ['02', faCode, 'Backend Learning', 'Building practical foundations with PHP, Laravel, databases, and web application logic. Moreover, I am starting to learn Java and Spring Boot for backend development.'],
  ['03', faBriefcase, 'Internship', 'Completed 10 weeks as a front-end intern at ETEC Center.'],
]

const stack = [
  'HTML',
  'CSS',
  'JavaScript',
  'React.js',
  'Tailwind CSS',
  'PHP',
  'Laravel',
]

const Home = ({ onNavigate }) => {
  return (
    <main className="min-h-[calc(100vh-4rem)]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src={heroImage}
            alt="Modern coding workspace with laptop and notebook"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f7f8f5] via-[#f7f8f5]/88 to-[#f7f8f5]/18" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#f7f8f5] to-transparent" />
        </div>

        <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl content-center px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-full border border-[#0f8b6f]/25 bg-white/75 px-4 py-2 text-sm font-semibold text-[#0f8b6f] shadow-sm">
              <FontAwesomeIcon className="mr-2" icon={faLaptopCode} />
              Web Developer
            </p>
            <h1 className="text-5xl font-bold leading-[1.02] text-[#17211d] sm:text-6xl lg:text-7xl">
              Smey's Coding
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4d5a55]">
              Hello! my name is Khim Reaksmey. I am 20 years old, a third-year ITE student at RUPP.
              I am interested in web development and I have learned on front end and back end of web development.
              I have completed a 10-week internship as a front-end developer at ETEC Center.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {stack.map((item) => (
                <span key={item} className="rounded-full border border-black/10 bg-white/70 px-3 py-1.5 text-sm font-semibold text-[#40504a] shadow-sm backdrop-blur">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                className="rounded-full bg-[#17211d] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#0f8b6f] hover:shadow-md"
                onClick={() => onNavigate('projects')}
                type="button"
              >
                View Projects
              </button>
              <button
                className="rounded-full border border-[#17211d]/20 bg-white/75 px-6 py-3 text-sm font-semibold text-[#17211d] shadow-sm transition hover:-translate-y-0.5 hover:border-[#0f8b6f] hover:text-[#0f8b6f] hover:shadow-md"
                onClick={() => onNavigate('contact')}
                type="button"
              >
                Contact Me
              </button>
            </div>

            <div className="mt-12 grid max-w-2xl grid-cols-3 gap-3">
              {stats.map(([value, label]) => (
                <div key={label} className="rounded-lg border border-black/10 border-l-4 border-l-[#0f8b6f] bg-white/70 px-4 py-4 shadow-sm backdrop-blur">
                  <p className="text-xl font-bold text-[#17211d]">{value}</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-[#66736e]">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em] text-[#0f8b6f]">
              <FontAwesomeIcon icon={faWandMagicSparkles} />
              What I do
            </p>
            <h2 className="mt-3 text-4xl font-bold text-[#17211d]">Simple, useful, responsive web work.</h2>
          </div>
          <button
            className="w-fit rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-[#17211d] transition hover:border-[#0f8b6f] hover:text-[#0f8b6f]"
            onClick={() => onNavigate('about')}
            type="button"
          >
            More About Me
            <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
          </button>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {highlights.map(([number, icon, title, text]) => (
            <article key={title} className="rounded-lg border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold text-[#0f8b6f]">{number}</p>
                <span className="grid size-10 place-items-center rounded-full bg-[#eef3ef] text-[#0f8b6f]">
                  <FontAwesomeIcon icon={icon} />
                </span>
              </div>
              <h2 className="mt-4 flex items-center gap-2 text-xl font-bold text-[#17211d]">{title}</h2>
              <p className="mt-3 leading-7 text-[#5f6d68]">{text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Home
