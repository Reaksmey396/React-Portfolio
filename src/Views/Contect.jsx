import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faAddressBook, faLocationDot, faPaperPlane, faUserGraduate } from '@fortawesome/free-solid-svg-icons'

const telegramUsername = 'khimreaksmey'
const telegramLink = `https://t.me/${telegramUsername}`

const Contact = () => {
  const contactCards = [
    ['Location', 'Phnom Penh, Cambodia', faLocationDot],
    ['Education', 'RUPP ITE, Year 3', faUserGraduate],
  ]

  const messageIdeas = [
    'Job opportunity',
    'Portfolio feedback',
    'Other web project',
    'Another question'
  ]

  return (
    <main className="min-h-[calc(100vh-4rem)]">
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.2fr] lg:items-center">
          <div>
            <h1 className=" text-5xl font-bold leading-tight text-[#17211d]">
              Contact me
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#5f6d68]">
              I am open to frontend practice, internship opportunities, school projects, and
              beginner-friendly web development work. Telegram is the fastest way to reach me.
            </p>

            <div className="mt-8 grid gap-3">
              {contactCards.map(([label, value, icon]) => (
                <div key={label} className="flex items-center gap-4 rounded-lg border border-black/10 bg-white p-4 shadow-sm">
                  <span className="grid size-11 place-items-center rounded-full bg-[#eef3ef] text-[#0f8b6f]">
                    <FontAwesomeIcon icon={icon} />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-[#0f8b6f]">{label}</p>
                    <p className="mt-1 font-semibold text-[#17211d]">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <section className="rounded-lg border border-black/10 bg-white p-6 shadow-sm">
            <div className="rounded-lg bg-[#eef3ef] p-6">
              <h2 className="mt-6 flex items-center gap-3 text-3xl font-bold text-[#17211d]">
                <FontAwesomeIcon className="text-[#0f8b6f]" icon={faTelegram} />
                Message me on Telegram
              </h2>
              <p className="mt-4 leading-8 text-[#5f6d68]">
                Tap the button below to open Telegram and start a conversation with me.
                You can tell me your name, project idea, or opportunity details.
              </p>

              <a
                className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#0f8b6f] px-6 py-4 font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#0c735d] hover:shadow-md sm:w-auto"
                href={telegramLink}
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faPaperPlane} />
                Open Telegram
              </a>
            </div>

            <div className="mt-6">
              <div className="mt-4 flex flex-wrap gap-2">
                {messageIdeas.map((idea) => (
                  <span key={idea} className="rounded-full border border-black/10 bg-[#f7f8f5] px-4 py-2 text-sm font-semibold text-[#40504a]">
                    {idea}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}

export default Contact
