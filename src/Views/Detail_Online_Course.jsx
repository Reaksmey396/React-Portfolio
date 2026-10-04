import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProjectDetailSummary from './ProjectDetailSummary'
import {
  faArrowLeftLong,
  faArrowRight,
  faBookOpen,
  faCheck,
  faCircleInfo,
  faCode,
  faGraduationCap,
  faLayerGroup,
  faMobileScreen,
  faPlayCircle,
  faUserGraduate,
  faListCheck,
  faChalkboardUser,
} from '@fortawesome/free-solid-svg-icons'

const stack = [
  'React.js',
  'Tailwind CSS',
  'JavaScript',
]

const features = [
  [
    faBookOpen,
    'Course Browsing',
    'Users can explore available courses, categories, and learning content through a clean and organized interface.',
  ],
  [
    faPlayCircle,
    'Learning Interface',
    'A simple learning experience designed around course cards, lessons, and clear study navigation.',
  ],
  [
    faMobileScreen,
    'Responsive Design',
    'The website layout adapts to desktop, tablet, and mobile screens for a better learning experience.',
  ],
  [
    faLayerGroup,
    'Reusable Sections',
    'Reusable React components make it easier to expand the platform with new courses, categories, and pages.',
  ],
  [
    faListCheck,
    'Course Categories',
    'Courses can be organized into different categories to help students quickly find topics they want to learn.',
  ],
  [
    faChalkboardUser,
    'Student-Friendly UI',
    'The interface focuses on clear navigation, readable content, and simple interactions for students.',
  ],
]

const roles = [
  {
    title: 'Student',
    description:
      'Browse courses, explore lessons, and follow a simple learning flow.',
  },
  {
    title: 'Instructor',
    description:
      'A future role that can be expanded to manage courses and learning content.',
  },
  {
    title: 'Admin',
    description:
      'A future role for managing users, courses, categories, and platform content.',
  },
]

const DetailOnlineCourse = ({ onNavigate }) => {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-[#f7f8f6]">

      {/* ================= HERO ================= */}
      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">

          {/* Back */}
          <button
            className="mb-10 inline-flex items-center gap-2 text-sm font-bold text-[#0f8b6f] transition hover:gap-3"
            onClick={() => onNavigate('projects')}
            type="button"
          >
            <FontAwesomeIcon icon={faArrowLeftLong} />
            Back to Projects
          </button>
          {/* Title */}
          <h1 className="max-w-5xl text-4xl font-bold leading-tight text-[#17211d] sm:text-5xl lg:text-6xl">
            Online Course
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[#5f6d68] sm:text-lg">
            An online learning platform concept designed to help students
            discover courses, explore learning content, and enjoy a clean
            and simple digital learning experience.
          </p>

          {/* Technologies */}
          <div className="mt-8 flex flex-wrap gap-3">
            {stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-black/10 bg-[#f7f8f6] px-4 py-2 text-sm font-bold text-[#40504a]"
              >
                {item}
              </span>
            ))}
          </div>

        </div>
      </section>

      <ProjectDetailSummary
        technologies={stack}
        videoSrc="https://youtu.be/vMCnKPT3zCY?si=7BicEsVMp4UbPhOD"
        advantages={[
          'Clear, student-friendly learning flow.',
          'Responsive reusable React components.',
          'Easy to extend with lessons and progress tracking.',
        ]}
        management={roles}
      />

      {/* ================= OVERVIEW ================= */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">

        <div className="grid gap-8 grid-cols-1">

          {/* Overview */}
          <article className="rounded-2xl border border-black/10 bg-white p-7 shadow-sm sm:p-9">

            <div className="flex items-center gap-3">

              <span className="grid size-10 place-items-center rounded-full bg-[#eef3ef] text-[#0f8b6f]">
                <FontAwesomeIcon icon={faCircleInfo} />
              </span>

              <h2 className="text-2xl font-bold text-[#17211d]">
                Project Overview
              </h2>

            </div>

            <p className="mt-6 leading-8 text-[#5f6d68]">
              Online Course is a frontend education platform concept
              created with React.js, Tailwind CSS, and JavaScript.
              The main goal is to create a simple and comfortable
              environment where students can discover and explore
              different online courses.
            </p>

            <p className="mt-4 leading-8 text-[#5f6d68]">
              The interface focuses on clear course presentation,
              responsive layouts, reusable components, and easy
              navigation. The project can also be extended into a
              complete learning platform with authentication,
              course enrollment, video lessons, and progress tracking.
            </p>

          </article>
        </div>
      </section>

      {/* ================= GOALS ================= */}
      <section className="border-y border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0f8b6f]">
            Project Goals
          </p>

          <h2 className="mt-3 max-w-3xl text-3xl font-bold text-[#17211d]">
            Creating a simple and enjoyable online learning experience.
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">

            {[
              'Make courses easier to discover and explore.',
              'Create a clean and student-friendly interface.',
              'Build a scalable frontend structure using React.',
            ].map((item, index) => (
              <div
                key={item}
                className="rounded-xl border border-black/10 bg-[#f7f8f6] p-6"
              >

                <span className="text-sm font-bold text-[#0f8b6f]">
                  0{index + 1}
                </span>

                <p className="mt-4 font-semibold leading-7 text-[#17211d]">
                  {item}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0f8b6f]">
            Core Features
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#17211d]">
            What the platform can offer
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-[#5f6d68]">
            The project provides a foundation for an online learning
            platform with reusable and scalable frontend components.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">

          {features.map(([icon, title, text], index) => (
            <article
              key={title}
              className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >

              <div className="flex gap-5">

                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#eef3ef] text-[#0f8b6f] transition group-hover:bg-[#0f8b6f] group-hover:text-white">
                  <FontAwesomeIcon icon={icon} />
                </span>

                <div>

                  <p className="text-xs font-bold text-[#0f8b6f]">
                    0{index + 1}
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-[#17211d]">
                    {title}
                  </h3>

                  <p className="mt-2 leading-7 text-[#5f6d68]">
                    {text}
                  </p>

                </div>

              </div>

            </article>
          ))}

        </div>

      </section>

      {/* ================= USER ROLES ================= */}
      <section className="border-y border-black/10 bg-[#eef3ef]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">

          <div className="flex items-center gap-3">

            <span className="grid size-11 place-items-center rounded-full bg-white text-[#0f8b6f] shadow-sm">
              <FontAwesomeIcon icon={faUserGraduate} />
            </span>

            <div>

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0f8b6f]">
                User Roles
              </p>

              <h2 className="mt-1 text-3xl font-bold text-[#17211d]">
                Designed for an expandable learning platform
              </h2>

            </div>

          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">

            {roles.map((role, index) => (
              <article
                key={role.title}
                className="rounded-2xl border border-black/10 bg-white p-6"
              >

                <span className="text-sm font-bold text-[#0f8b6f]">
                  ROLE 0{index + 1}
                </span>

                <h3 className="mt-3 text-xl font-bold text-[#17211d]">
                  {role.title}
                </h3>

                <p className="mt-3 leading-7 text-[#5f6d68]">
                  {role.description}
                </p>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* ================= LEARNING FLOW ================= */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">

        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0f8b6f]">
          Learning Flow
        </p>

        <h2 className="mt-3 text-3xl font-bold text-[#17211d]">
          How students can use the platform
        </h2>

        <div className="mt-10 grid gap-4 md:grid-cols-4">

          {[
            [
              '01',
              'Explore Courses',
              'Students browse available courses and categories.',
            ],
            [
              '02',
              'View Course',
              'Students open a course to see its information and lessons.',
            ],
            [
              '03',
              'Start Learning',
              'Students begin learning through organized course content.',
            ],
            [
              '04',
              'Track Progress',
              'A future feature can allow students to track their learning progress.',
            ],
          ].map(([number, title, text]) => (
            <article
              key={number}
              className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
            >

              <span className="text-sm font-bold text-[#0f8b6f]">
                {number}
              </span>

              <h3 className="mt-3 text-lg font-bold text-[#17211d]">
                {title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#5f6d68]">
                {text}
              </p>

            </article>
          ))}

        </div>

      </section>

      {/* ================= WHAT I LEARNED ================= */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">

        <div className="rounded-2xl border border-black/10 bg-white p-7 shadow-sm sm:p-10">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0f8b6f]">
            What I Learned
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#17211d]">
            Experience gained from this project
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">

            {[
              'Building reusable components with React.js.',
              'Creating responsive layouts using Tailwind CSS.',
              'Organizing a frontend project into reusable sections.',
              'Designing a student-friendly learning interface.',
              'Working with course cards and dynamic UI structures.',
              'Improving responsive design for different screen sizes.',
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3"
              >

                <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-[#eef3ef] text-xs text-[#0f8b6f]">
                  <FontAwesomeIcon icon={faCheck} />
                </span>

                <p className="leading-7 text-[#5f6d68]">
                  {item}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}
      <section className="border-t border-black/10 bg-white">

        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">

          <div className="flex flex-col gap-6 rounded-2xl bg-[#eef3ef] p-7 sm:p-10 md:flex-row md:items-center md:justify-between">

            <div>

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0f8b6f]">
                More Projects
              </p>

              <h2 className="mt-2 text-2xl font-bold text-[#17211d]">
                Want to see more of my work?
              </h2>

            </div>

            <button
              onClick={() => onNavigate('projects')}
              type="button"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#17211d] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0f8b6f]"
            >
              View All Projects

              <FontAwesomeIcon icon={faArrowRight} />
            </button>

          </div>

        </div>

      </section>

    </main>
  )
}

export default DetailOnlineCourse
