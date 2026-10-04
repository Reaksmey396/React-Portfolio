import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faCubes, faLayerGroup, faServer, faTerminal } from '@fortawesome/free-solid-svg-icons'

const skills = [
  ['HTML', 100, 'Frontend'],
  ['CSS', 90, 'Frontend'],
  ['JavaScript', 80, 'Frontend'],
  ['Tailwind CSS', 100, 'Frontend'],
  ['Bootstrap', 100, 'Frontend'],
  ['React.js', 80, 'Framework'],
  ['Vue.js', 70, 'Framework'],
  ['PHP', 90, 'Backend Foundations'],
  ['Laravel', 85, 'Backend Foundations'],
  ['Java', 75, 'Programming'],
  ['C/C++', 95, 'Programming'],
]

const categoryIcons = {
  Frontend: faLayerGroup,
  Framework: faCubes,
  'Backend Foundations': faServer,
  Programming: faTerminal,
}

const Skills = () => {
  return (
    <main className="min-h-[calc(100vh-4rem)]">
      <section className="bg-[#eef3ef] py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <h1 className="mt-3 text-5xl font-bold leading-tight text-[#17211d]">Technical knowledge</h1>
            <p className="mt-5 text-lg leading-8 text-[#5f6d68]">
              A practical stack for frontend interfaces, responsive layouts, programming
              basics, and introductory backend foundations. My strongest area is frontend
              development, while I am continuing to improve with PHP, Laravel, and databases.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {['Frontend', 'Framework', 'Backend Foundations', 'Programming'].map((category) => (
            <div key={category} className="rounded-lg border border-black/10 bg-white p-5 shadow-sm">
              <span className="grid size-11 place-items-center rounded-full bg-[#eef3ef] text-[#0f8b6f]">
                <FontAwesomeIcon icon={categoryIcons[category]} />
              </span>
              <p className="mt-4 text-sm font-bold uppercase tracking-wide text-[#0f8b6f]">{category}</p>
              <p className="mt-2 text-sm leading-6 text-[#66736e]">
                {skills.filter((skill) => skill[2] === category).length} skills in this area
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {skills.map(([name, level, category]) => (
            <div key={name} className="rounded-lg border border-black/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-[#17211d]">{name}</h3>
                  <p className="mt-1 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-[#66736e]">
                    <FontAwesomeIcon icon={categoryIcons[category]} />
                    {category}
                  </p>
                </div>
                <span className="rounded-full bg-[#eef3ef] px-3 py-1 text-sm font-bold text-[#0f8b6f]">{level}%</span>
              </div>
              <div className="mt-4 h-3 overflow-hidden rounded-full bg-[#dce5df]">
                <div
                  className="h-full rounded-full bg-[#0f8b6f]"
                  style={{ width: `${level}%` }}
                  aria-label={`${name} ${level}%`}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Skills
