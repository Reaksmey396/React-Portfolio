import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCode,
  faPlay,
  faUserShield,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'

const ProjectDetailSummary = ({
  technologies = [],
  demoNote,
  videoSrc,
  management = [],
}) => {

  // Convert different YouTube URL formats
  // into a YouTube Embed URL.
  const getYouTubeEmbedUrl = (url) => {
    if (!url) return ''

    try {
      const parsedUrl = new URL(url)

      // Already an embed URL
      if (parsedUrl.pathname.startsWith('/embed/')) {
        return url
      }

      // youtu.be/VIDEO_ID
      if (parsedUrl.hostname === 'youtu.be') {
        const videoId = parsedUrl.pathname.substring(1)

        if (videoId) {
          return `https://www.youtube.com/embed/${videoId}?rel=0`
        }
      }

      // youtube.com/watch?v=VIDEO_ID
      if (parsedUrl.hostname.includes('youtube.com')) {
        const videoId = parsedUrl.searchParams.get('v')

        if (videoId) {
          return `https://www.youtube.com/embed/${videoId}?rel=0`
        }
      }

      return url
    } catch {
      return url
    }
  }

  const hasVideo = Boolean(videoSrc)

  const resolvedVideoSrc = videoSrc?.startsWith('/')
    ? `${import.meta.env.BASE_URL}${videoSrc.slice(1)}`
    : getYouTubeEmbedUrl(videoSrc)

  return (
    <section className="border-b border-black/10 bg-[#eef3ef] py-12 sm:py-16">

      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        {/* ================================
            HEADER
        ================================= */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0f8b6f]">
              Project snapshot
            </p>

            <h2 className="mt-2 text-3xl font-bold text-[#17211d]">
              Everything important in one place.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-[#5f6d68]">
            Technology, demo status, and access levels for this project.
          </p>

        </div>

        <div className="mt-8 grid gap-5grid-cols-1">
          {/* ================================
              YOUTUBE VIDEO
          ================================= */}
          <article className="overflow-hidden rounded-2xl bg-gray-400 text-white uppercase shadow-lg lg:col-span-2">

            {/* Video Header */}
            <div className="px-6 pt-6">
              <div className="flex items-center gap-3">
                  <h1 className="mt-1 text-xl font-bold">
                    Project Demo
                  </h1>
                <div>

                </div>

              </div>

            </div>

            {/* =================================
                YOUTUBE PLAYER
            ================================== */}
            {hasVideo ? (

              <div className="mt-5 w-full bg-black">

                <div className="relative aspect-video w-full">

                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={resolvedVideoSrc}
                    title="Project walkthrough"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />

                </div>

              </div>

            ) : (

              <div className="mx-6 mb-6 mt-5 flex min-h-24 items-center justify-center rounded-xl border border-dashed border-white/20 bg-white/5 p-5 text-center text-sm leading-6 text-white/70">

                {demoNote || 'Video demo is not available yet.'}

              </div>

            )}


            {/* =================================
                YOUTUBE STYLE BOTTOM INFORMATION
            ================================== */}
            {hasVideo && (

              <div className="px-6 py-5">

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                  <div>

                    <p className="text-sm font-semibold text-white">
                      Project Demo
                    </p>

                    <p className="mt-1 text-xs text-white/50">
                      Watch the complete project walkthrough
                    </p>

                  </div>

                  <a
                    href={videoSrc}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#17211d] transition hover:bg-[#86d6bf]"
                  >
                    <FontAwesomeIcon icon={faPlay} />
                    Watch on YouTube
                  </a>

                </div>

              </div>

            )}

          </article>

        </div>


        {/* ================================
            MANAGEMENT & ACCESS
        ================================= */}
        <article className="mt-5 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">

          {/* Header */}
          <div className="flex items-center gap-3 border-b border-black/10 bg-[#f7f8f6] px-6 py-5">

            <span className="grid size-10 place-items-center rounded-full bg-white text-[#0f8b6f] shadow-sm">
              <FontAwesomeIcon icon={faUserShield} />
            </span>

            <div>

              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0f8b6f]">
                Management & access
              </p>

              <h3 className="mt-1 text-xl font-bold text-[#17211d]">
                Who can manage and use the system
              </h3>

            </div>

          </div>


          {/* Roles */}
          <div className="grid divide-y divide-black/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0">

            {management.map((role, index) => (

              <div
                key={role.title}
                className="p-6"
              >

                <div className="flex items-center gap-3">

                  <span className="grid size-9 place-items-center rounded-full bg-[#eef3ef] text-[#0f8b6f]">

                    <FontAwesomeIcon
                      icon={
                        index === 0
                          ? faUserShield
                          : faUsers
                      }
                    />

                  </span>

                  <h4 className="font-bold text-[#17211d]">
                    {role.title}
                  </h4>

                </div>

                <p className="mt-3 text-sm leading-6 text-[#5f6d68]">
                  {role.description}
                </p>

              </div>

            ))}

          </div>

        </article>

      </div>

    </section>
  )
}

export default ProjectDetailSummary