import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProjectDetailSummary from './ProjectDetailSummary'
import {
  faArrowLeftLong,
  faArrowRight,
  faBoxesStacked,
  faCheck,
  faCircleInfo,
  faCode,
  faChartLine,
  faClipboardList,
  faDatabase,
  faLayerGroup,
  faUsers,
  faWarehouse,
  faArrowsRotate,
} from '@fortawesome/free-solid-svg-icons'

const stack = [
  'Vue.js',
  'Laravel',
  'PHP',
  'MySQL',
  'Tailwind CSS',
]

const features = [
  [
    faBoxesStacked,
    'Product Management',
    'Users can create, update, view, and manage product information through a structured inventory interface.',
  ],
  [
    faWarehouse,
    'Stock Management',
    'The system helps track available stock and keeps inventory information organized.',
  ],
  [
    faLayerGroup,
    'Category Management',
    'Products can be organized into categories to make inventory management easier and more efficient.',
  ],
  [
    faChartLine,
    'Dashboard',
    'A dashboard provides a quick overview of important inventory information and system data.',
  ],
  [
    faUsers,
    'User Management',
    'The system can support different users and access levels for managing inventory operations.',
  ],
]

const roles = [
  {
    title: 'Admin',
    description:
      'Manage products, categories, inventory records, users, and other system information.',
  },
  {
    title: 'Staff',
    description:
      'Manage inventory information and update stock records based on daily operations.',
  },
  {
    title: 'Manager',
    description:
      'can view inventory information and reports, but cannot manage products or users.',
  },
]

const workflow = [
  [
    '01',
    'Manage Products',
    'Create and organize product information in the system.',
  ],
  [
    '02',
    'Update Inventory',
    'Add or update stock information when inventory changes.',
  ],
  [
    '03',
    'Track Stock',
    'Monitor current inventory information through the system.',
  ],
  [
    '04',
    'View Dashboard',
    'Review important inventory information from one place.',
  ],
]

const DetailIMS = ({ onNavigate }) => {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-[#f7f8f6]">

      {/* ================= HERO ================= */}
      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">

          {/* Back Button */}
          <button
            className="mb-10 inline-flex items-center gap-2 text-sm font-bold text-[#0f8b6f] transition hover:gap-3"
            onClick={() => onNavigate('projects')}
            type="button"
          >
            <FontAwesomeIcon icon={faArrowLeftLong} />
            Back to Projects
          </button>
          {/* Title */}
          <h1 className=" max-w-5xl text-4xl font-bold leading-tight text-[#17211d] sm:text-5xl lg:text-6xl">
            Inventory Management System
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[#5f6d68] sm:text-lg">
            An inventory management project built with Vue.js and
            Laravel to practice managing products, categories, stock
            information, and inventory records through a modern web
            application. It reflects my growing backend experience,
            while frontend development remains my strongest area.
          </p>

          {/* Technology Tags */}
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
        videoSrc="https://youtu.be/0nKbHgj6qxc?si=VVP0bMcE2RVaAsmC"
        advantages={[
          'Keeps products, categories, and stock organized.',
          'Provides a single dashboard for inventory visibility.',
          'Supports structured roles for daily operations.',
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
              The Inventory Management System is a web application
              project designed to practice inventory management and
              organized and efficient. The system provides a centralized
              place for managing products, categories, stock information,
              and inventory records.
            </p>

            <p className="mt-4 leading-8 text-[#5f6d68]">
              Vue.js is used to build the interactive frontend interface.
              Laravel and MySQL give me practical experience with
              backend concepts, API structure, and data storage, while
              I continue developing deeper backend skills.
            </p>

          </article>
        </div>

      </section>

      {/* ================= PROJECT GOALS ================= */}
      <section className="border-y border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0f8b6f]">
            Project Goals
          </p>

          <h2 className="mt-3 max-w-3xl text-3xl font-bold text-[#17211d]">
            Making inventory management more organized and efficient.
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">

            {[
              'Centralize product and inventory information.',
              'Make stock management easier and more organized.',
              'Practice building a web application with frontend and backend parts.',
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
            What the system can do
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-[#5f6d68]">
            The system provides the essential tools needed to manage
            products and inventory through a centralized web interface.
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
              <FontAwesomeIcon icon={faUsers} />
            </span>

            <div>

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0f8b6f]">
                User Roles
              </p>

              <h2 className="mt-1 text-3xl font-bold text-[#17211d]">
                Role-based inventory management
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

      {/* ================= SYSTEM WORKFLOW ================= */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">

        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0f8b6f]">
          System Workflow
        </p>

        <h2 className="mt-3 text-3xl font-bold text-[#17211d]">
          How the inventory system works
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-[#5f6d68]">
          The system follows a simple workflow to help users manage
          products and keep inventory information updated.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-4">

          {workflow.map(([number, title, text]) => (
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

      {/* ================= ARCHITECTURE ================= */}
      <section className="border-y border-black/10 bg-white">

        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0f8b6f]">
            Application Architecture
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#17211d]">
            Vue.js + Laravel + MySQL
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">

            {/* Frontend */}
            <article className="rounded-2xl border border-black/10 bg-[#f7f8f6] p-7">

              <span className="grid size-12 place-items-center rounded-full bg-white text-[#0f8b6f] shadow-sm">
                <FontAwesomeIcon icon={faCode} />
              </span>

              <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-[#0f8b6f]">
                Frontend
              </p>

              <h3 className="mt-2 text-xl font-bold text-[#17211d]">
                Vue.js
              </h3>

              <p className="mt-3 leading-7 text-[#5f6d68]">
                Handles the user interface, reusable components,
                page interactions, and frontend application flow.
              </p>

            </article>

            {/* Backend */}
            <article className="rounded-2xl border border-black/10 bg-[#f7f8f6] p-7">

              <span className="grid size-12 place-items-center rounded-full bg-white text-[#0f8b6f] shadow-sm">
                <FontAwesomeIcon icon={faArrowsRotate} />
              </span>

              <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-[#0f8b6f]">
                Backend
              </p>

              <h3 className="mt-2 text-xl font-bold text-[#17211d]">
                Laravel
              </h3>

              <p className="mt-3 leading-7 text-[#5f6d68]">
                Used to practice application logic, API requests, and
                database operations while I continue learning backend
                development.
              </p>

            </article>

            {/* Database */}
            <article className="rounded-2xl border border-black/10 bg-[#f7f8f6] p-7">

              <span className="grid size-12 place-items-center rounded-full bg-white text-[#0f8b6f] shadow-sm">
                <FontAwesomeIcon icon={faDatabase} />
              </span>

              <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-[#0f8b6f]">
                Database
              </p>

              <h3 className="mt-2 text-xl font-bold text-[#17211d]">
                MySQL
              </h3>

              <p className="mt-3 leading-7 text-[#5f6d68]">
                Stores products, categories, users, inventory records,
                and other application data.
              </p>

            </article>

          </div>

        </div>

      </section>

      {/* ================= WHAT I LEARNED ================= */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">

        <div className="rounded-2xl border border-black/10 bg-white p-7 shadow-sm sm:p-10">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0f8b6f]">
            What I Learned
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#17211d]">
            Experience and backend foundations gained from this project
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">

            {[
              'Building interactive interfaces with Vue.js.',
              'Creating reusable Vue components.',
              'Practicing backend API structure with Laravel.',
              'Connecting Vue.js frontend with Laravel backend.',
              'Working with MySQL database relationships and CRUD operations.',
              'Understanding how frontend, backend, and database parts work together.',
              'Managing data between frontend, API, and database.',
              'Creating responsive interfaces with Tailwind CSS.',
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

export default DetailIMS
