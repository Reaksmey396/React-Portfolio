import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faBars, faDiagramProject, faHouse, faLayerGroup, faUser, faXmark } from '@fortawesome/free-solid-svg-icons'

const links = [
  ['home', 'Home', faHouse],
  ['about', 'About', faUser],
  ['skills', 'Skills', faLayerGroup],
  ['projects', 'Projects', faDiagramProject],
  ['contact', 'Contact', faAddressBook],
]

const Navbar = ({ activePage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigateTo = (page) => {
    onNavigate(page)
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f7f8f5]/92 shadow-sm backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <button
          className="group flex items-center gap-3 text-left font-semibold tracking-wide"
          onClick={() => navigateTo('home')}
          type="button"
        >
          <span className="rounded-full bg-[#17211d] p-2 text-sm text-white sm:px-3 sm:py-3">My Portfolio</span>
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
                onClick={() => navigateTo(id)}
                type="button"
              >
                <FontAwesomeIcon className="mr-2 text-xs" icon={icon} />
                {label}
              </button>
            </li>
          ))}
        </ul>

        <button
          className="hidden rounded-xl bg-green-600 px-4 py-2 text-sm font-bold text-gray-50 hover:bg-green-700 sm:inline-flex"
          onClick={() => navigateTo('contact')}
          type="button"
        >
          Contact Me
        </button>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="inline-flex size-10 items-center justify-center rounded-lg text-[#17211d] transition hover:bg-black/5 md:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          type="button"
        >
          <FontAwesomeIcon className="text-lg" icon={isMenuOpen ? faXmark : faBars} />
        </button>
      </nav>

      <div
        className={`${isMenuOpen ? 'block' : 'hidden'} border-t border-black/5 bg-[#f7f8f5] px-5 py-4 md:hidden`}
        id="mobile-navigation"
      >
        <div className="mx-auto grid max-w-7xl gap-2 sm:grid-cols-2">
          {links.map(([id, label, icon]) => (
            <button
              key={id}
              className={`rounded-lg px-4 py-3 text-left text-sm font-semibold transition ${
                activePage === id ? 'bg-[#17211d] text-white' : 'bg-white text-[#4d5a55]'
              }`}
              onClick={() => navigateTo(id)}
              type="button"
            >
              <FontAwesomeIcon className="mr-2 text-xs" icon={icon} />
              {label}
            </button>
          ))}
          <button
            className="rounded-lg bg-green-600 px-4 py-3 text-left text-sm font-bold text-white transition hover:bg-green-700 sm:hidden"
            onClick={() => navigateTo('contact')}
            type="button"
          >
            <FontAwesomeIcon className="mr-2 text-xs" icon={faAddressBook} />
            Contact Me
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
