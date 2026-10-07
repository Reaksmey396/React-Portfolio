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
    <>
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f7f8f5]/92 shadow-sm backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <span className="rounded-3xl cursor-pointer bg-[#15c981] px-5 py-2 text-lg font-semibold tracking-wide text-white">
          Portfolio
        </span>

        <ul className="hidden items-center gap-12 text-sm font-medium text-[#4d5a55] lg:flex">
          {links.map(([id, label, icon]) => (
            <li key={id}>
              <button
                className={`relative py-2 transition hover:text-[#0f8b6f] ${activePage === id
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
          className="hidden rounded-xl bg-green-600 px-4 py-2 text-sm font-bold text-gray-50 hover:bg-green-700 lg:inline-flex"
          onClick={() => navigateTo('contact')}
          type="button"
        >
          Contact Me
        </button>

        <button
          aria-controls="sidebar-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="inline-flex size-10 items-center justify-center rounded-lg text-[#17211d] transition hover:bg-black/5 lg:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          type="button"
        >
          <FontAwesomeIcon className="text-lg" icon={isMenuOpen ? faXmark : faBars} />
        </button>
      </nav>
      </header>

      <div className={`${isMenuOpen ? 'fixed inset-0 z-50' : 'hidden'} lg:hidden`}>
        <button
          aria-label="Close navigation menu"
          className="absolute inset-0 bg-black/35"
          onClick={() => setIsMenuOpen(false)}
          type="button"
        />
        <aside
          aria-label="Sidebar navigation"
          className="absolute inset-y-0 right-0 flex w-72 max-w-[88vw] flex-col overflow-hidden border-l border-black/10 bg-white shadow-2xl sm:w-80"
          id="sidebar-navigation"
        >
          <div className="flex items-center justify-between border-b border-black/10 px-5 py-5">
            <div className="flex items-center">
              <span className="inline-flex size-7 items-center justify-center rounded-lg bg-[#e1f2ec] text-sm text-[#0f8b6f]">
                <FontAwesomeIcon icon={faLayerGroup} />
              </span>
              <span className="ml-2 text-base font-bold text-[#17211d]">Menu</span>
            </div>
            <button
              aria-label="Close navigation menu"
              className="inline-flex size-9 items-center justify-center rounded-lg text-[#71807a] transition hover:bg-[#f1f4f2] hover:text-[#17211d]"
              onClick={() => setIsMenuOpen(false)}
              type="button"
            >
              <FontAwesomeIcon className="text-base" icon={faXmark} />
            </button>
          </div>
          <div className="flex-1 px-4 py-5">
            <div className="grid gap-1">
              {links.map(([id, label, icon]) => (
                <button
                  key={id}
                  className={`group flex items-center gap-3 rounded-lg px-3 py-3 text-left text-sm font-medium transition ${activePage === id
                    ? 'bg-[#e8f0ed] text-[#17211d]'
                    : 'text-[#4d5a55] hover:bg-[#f1f4f2] hover:text-[#17211d]'
                    }`}
                  onClick={() => navigateTo(id)}
                  type="button"
                >
                  <span className={`inline-flex size-7 items-center justify-center rounded-md ${activePage === id ? 'bg-white text-[#0f8b6f]' : 'text-[#71807a] group-hover:text-[#0f8b6f]'}`}>
                    <FontAwesomeIcon className="text-sm" icon={icon} />
                  </span>
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div className="border-t border-black/10 px-5 py-4">
            <p className="text-xs text-[#71807a]">Select a page to explore my portfolio.</p>
          </div>
        </aside>
      </div>
    </>
  )
}

export default Navbar
