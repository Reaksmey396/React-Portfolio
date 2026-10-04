import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faDiagramProject, faHouse, faLayerGroup, faUser } from '@fortawesome/free-solid-svg-icons'

const links = [
  ['home', 'Home', faHouse],
  ['about', 'About', faUser],
  ['skills', 'Skills', faLayerGroup],
  ['projects', 'Projects', faDiagramProject],
  ['contact', 'Contact', faAddressBook],
]

const Navbar = ({ activePage, onNavigate }) => {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f7f8f5]/92 shadow-sm backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <button
          className="group flex items-center gap-3 text-left font-semibold tracking-wide"
          onClick={() => onNavigate('home')}
          type="button"
        >
            <span className="font-bold bg-[#17211d] text-white rounded-[100%] p-3 ">My Portfolio</span>
        </button>

        <ul className="hidden items-center gap-12 text-sm font-medium text-[#4d5a55] md:flex">
          {links.map(([id, label, icon]) => (
            <li key={id}>
              <button
                className={`relative py-2 transition hover:text-[#0f8b6f] ${
                  activePage === id
                    ? 'text-[#0f8b6f] after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:rounded-full after:bg-[#0f8b6f]'
                    : ''
                }`}
                onClick={() => onNavigate(id)}
                type="button"
              >
                <FontAwesomeIcon className="mr-2 text-xs" icon={icon} />
                {label}
              </button>
            </li>
          ))}
        </ul>

        <button
          className="rounded-xl font-bold bg-green-600 px-4 py-2 text-sm text-gray-50 hover:bg-green-700"
          onClick={() => onNavigate('contact')}
          type="button"
        >
          Contact Me
        </button>
      </nav>

      <div className="border-t border-black/5 px-5 py-3 md:hidden">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto">
          {links.map(([id, label, icon]) => (
            <button
              key={id}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold ${
                activePage === id ? 'bg-[#17211d] text-white' : 'bg-white text-[#4d5a55]'
              }`}
              onClick={() => onNavigate(id)}
              type="button"
            >
              <FontAwesomeIcon className="mr-2 text-xs" icon={icon} />
              {label}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Navbar
