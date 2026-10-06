import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faDatabase, faSeedling } from '@fortawesome/free-solid-svg-icons'
import {
  faBootstrap,
  faCss3Alt,
  faFlutter,
  faGitAlt,
  faHtml5,
  faJava,
  faJs,
  faLaravel,
  faPhp,
  faReact,
  faVuejs,
} from '@fortawesome/free-brands-svg-icons'

const skills = [
  { name: 'HTML', level: 100, icon: faHtml5, color: 'from-orange-500 to-red-600', description: 'Semantic, accessible page structure and forms.' },
  { name: 'CSS', level: 90, icon: faCss3Alt, color: 'from-blue-500 to-blue-700', description: 'Responsive layouts, animations, and modern styling.' },
  { name: 'JavaScript', level: 80, icon: faJs, color: 'from-amber-400 to-yellow-600', description: 'Interactive interfaces and browser-based logic.' },
  { name: 'Tailwind CSS', level: 100, icon: faCode, color: 'from-cyan-400 to-sky-600', description: 'Fast, responsive interfaces with utility classes.' },
  { name: 'Bootstrap', level: 100, icon: faBootstrap, color: 'from-violet-500 to-purple-700', description: 'Mobile-first layouts using reusable UI components.' },
  { name: 'React.js', level: 80, icon: faReact, color: 'from-sky-400 to-cyan-600', description: 'Component-based interfaces with hooks and state.' },
  { name: 'Vue.js', level: 70, icon: faVuejs, color: 'from-emerald-400 to-green-700', description: 'Building reactive user interfaces and components.' },
  { name: 'PHP', level: 90, icon: faPhp, color: 'from-indigo-400 to-indigo-700', description: 'Server-side logic, forms, and database integration.' },
  { name: 'Laravel', level: 85, icon: faLaravel, color: 'from-red-500 to-rose-700', description: 'MVC web applications with clean routing and APIs.' },
  { name: 'Java', level: 75, icon: faJava, color: 'from-red-500 to-orange-600', description: 'Object-oriented programming and application logic.' },
  { name: 'C/C++', level: 95, icon: faCode, color: 'from-slate-600 to-slate-900', description: 'Core programming concepts and problem solving.' },
  { name: 'MySQL', level: 100, icon: faDatabase, color: 'from-sky-600 to-blue-900', description: 'Designing databases, writing queries, and managing data.' },
  { name: 'Git / GitHub', level: 100, icon: faGitAlt, color: 'from-orange-500 to-red-700', description: 'Version control, collaboration, and project repositories.' },
  { name: 'Flutter', level: 50, icon: faFlutter, color: 'from-sky-400 to-blue-600', description: 'Learning cross-platform mobile interface development.' },
  { name: 'Dart', level: 70, icon: faCode, color: 'from-cyan-500 to-blue-700', description: 'Writing application logic for Flutter projects.' },
  { name: 'Spring Boot', level: 40, icon: faSeedling, color: 'from-lime-500 to-green-700', description: 'Learning Java backend applications and REST APIs.' },
]

const Skills = () => {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-[#f7f8f5]">
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em] text-[#0f8b6f]">
              <FontAwesomeIcon icon={faCode} />
              Skills
            </p>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-[#17211d]">
              Technologies I understand and use.
            </h1>
            <p className="mt-5 text-lg leading-8 text-[#5f6d68]">
              My current knowledge across frontend development, programming languages, databases,
              version control, and backend technologies.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skills.map(({ name, level, icon, color, description }) => (
            <article
              key={name}
              className="group overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className={`relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br ${color}`}>
                <FontAwesomeIcon icon={icon} className="text-8xl text-white/90 transition duration-500 group-hover:scale-110" />
                <span className="absolute right-5 top-5 rounded-full bg-white/90 px-3 py-1.5 text-sm font-bold text-[#0f8b6f]">
                  {level}%
                </span>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-[#17211d]">{name}</h2>
                <p className="mt-3 min-h-14 leading-7 text-[#5f6d68]">{description}</p>
                <div className="mt-5">
                  <div className="flex items-center justify-between text-sm font-semibold text-[#36534a]">
                    <span>Knowledge level</span>
                    <span>{level}%</span>
                  </div>
                  <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-[#dce5df]">
                    <div
                      className="h-full rounded-full bg-[#0f8b6f]"
                      style={{ width: `${level}%` }}
                      aria-label={`${name} knowledge level: ${level}%`}
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Skills
