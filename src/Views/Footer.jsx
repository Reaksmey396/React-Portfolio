import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faCode, faDiagramProject, faHouse, faLayerGroup, faUser } from '@fortawesome/free-solid-svg-icons'

const Footer = ({ onNavigate }) => {
  const links = [
    ['home', 'Home', faHouse],
    ['about', 'About', faUser],
    ['skills', 'Skills', faLayerGroup],
    ['projects', 'Projects', faDiagramProject],
    ['contact', 'Contact', faAddressBook],
  ]

  return (
    <footer className="border-t border-black/10 bg-[#17211d] py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="flex items-center gap-2 font-semibold">
            <FontAwesomeIcon className="text-[#0f8b6f]" icon={faCode} />
            Khim Reaksmey
          </p>
          <p className="mt-1 text-sm text-white/65">Frontend Developer Student Portfolio</p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm text-white/75">
          {links.map(([id, label, icon]) => (
            <button key={id} className="transition hover:text-white" onClick={() => onNavigate(id)} type="button">
              <FontAwesomeIcon className="mr-2 text-xs" icon={icon} />
              {label}
            </button>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 px-5 pt-5 text-sm text-white/45 sm:px-8">
        Designed & developed with passion for modern web experiences.
      </div>
    </footer>
  )
}

export default Footer
