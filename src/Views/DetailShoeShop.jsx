import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProjectDetailSummary from './ProjectDetailSummary'
import {
  faArrowLeftLong,
  faArrowRight,
  faBagShopping,
  faCheck,
  faCircleInfo,
  faCode,
  faDatabase,
  faFilter,
  faMobileScreen,
  faCartShopping,
  faMagnifyingGlass,
  faLayerGroup,
  faShoePrints,
} from '@fortawesome/free-solid-svg-icons'

const stack = [
  'React.js',
  'Tailwind CSS',
  'JavaScript',
  'Firebase',
]

const features = [
  [
    faShoePrints,
    'Product Browsing',
    'Users can explore available shoes through organized product cards with important product information.',
  ],
  [
    faMagnifyingGlass,
    'Product Search',
    'Users can search for shoes quickly and find products based on their interests.',
  ],
  [
    faFilter,
    'Product Filtering',
    'Products can be filtered and organized to make it easier for users to find the shoes they want.',
  ],
  [
    faCartShopping,
    'Shopping Cart',
    'Users can add selected shoes to the shopping cart and review their selected products.',
  ],
  [
    faDatabase,
    'Firebase Database',
    'Product information is stored and managed using Firebase as the project database.',
  ],
  [
    faMobileScreen,
    'Responsive Design',
    'The interface is designed to provide a consistent shopping experience across desktop, tablet, and mobile devices.',
  ],
]

const shopSections = [
  [
    '01',
    'Product Catalog',
    'A product section where users can browse different shoes and view product information.',
  ],
  [
    '02',
    'Product Details',
    'A dedicated area for displaying important information about a selected shoe.',
  ],
  [
    '03',
    'Shopping Cart',
    'A simple cart interface for reviewing products before continuing with the shopping process.',
  ],
  [
    '04',
    'Firebase Data',
    'Product data is connected to Firebase so the application can work with stored data.',
  ],
]

const DetailShoeShop = ({ onNavigate }) => {
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
            Shoe Shop
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[#5f6d68] sm:text-lg">
            A modern shoe shopping website built with React.js,
            Tailwind CSS, and JavaScript, with Firebase used to
            store and manage product data. And this is link to visit the live project: <a href="https://reaksmey396.github.io/Shoe-Shop/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Live Project</a>.
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
        videoSrc="https://youtu.be/sj6JAIYmc5Y"
        advantages={[
          'Fast product browsing with search and filtering.',
          'Responsive shopping experience on every device.',
          'Firebase keeps product data ready for the storefront.',
        ]}
        management={[
          { title: 'Shop admin', description: 'Can manage product information, prices, categories, and inventory data in Firebase.' },
          { title: 'Customer', description: 'Can discover products, filter the catalog, and review chosen items in the shopping cart.' },
        ]}
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
              Shoe Shop is an e-commerce website concept created to
              provide a simple and modern online shopping experience
              for shoe products. Users can browse products, search
              for shoes, filter products, and add selected items to
              a shopping cart.
            </p>

            <p className="mt-4 leading-8 text-[#5f6d68]">
              React.js is used to build the interactive frontend,
              Tailwind CSS is used for responsive styling, and
              JavaScript handles application functionality.
              Firebase is used as the database for storing product
              information.
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
            Creating a simple and modern online shoe shopping experience.
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">

            {[
              'Make shoe products easy to browse and discover.',
              'Create a clean and responsive shopping interface.',
              'Connect the frontend application with Firebase data.',
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
            What the shoe shop can do
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-[#5f6d68]">
            The project focuses on creating a smooth product browsing
            experience with reusable React components and Firebase
            data integration.
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

      {/* ================= SHOP SECTIONS ================= */}
      <section className="border-y border-black/10 bg-[#eef3ef]">

        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">

          <div className="flex items-center gap-3">

            <span className="grid size-11 place-items-center rounded-full bg-white text-[#0f8b6f] shadow-sm">
              <FontAwesomeIcon icon={faLayerGroup} />
            </span>

            <div>

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0f8b6f]">
                Website Sections
              </p>

              <h2 className="mt-1 text-3xl font-bold text-[#17211d]">
                Main parts of the shopping experience
              </h2>

            </div>

          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">

            {shopSections.map(([number, title, text]) => (
              <article
                key={number}
                className="rounded-2xl border border-black/10 bg-white p-6"
              >

                <span className="text-sm font-bold text-[#0f8b6f]">
                  {number}
                </span>

                <h3 className="mt-3 text-xl font-bold text-[#17211d]">
                  {title}
                </h3>

                <p className="mt-3 leading-7 text-[#5f6d68]">
                  {text}
                </p>

              </article>
            ))}

          </div>

        </div>

      </section>

      {/* ================= DATA FLOW ================= */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">

        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0f8b6f]">
          Data Flow
        </p>

        <h2 className="mt-3 text-3xl font-bold text-[#17211d]">
          React.js connected with Firebase
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-[#5f6d68]">
          The application uses Firebase to provide product data
          to the React frontend, allowing the website to work
          with stored product information.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">

          <article className="rounded-2xl border border-black/10 bg-white p-7 shadow-sm">

            <span className="text-sm font-bold text-[#0f8b6f]">
              01
            </span>

            <h3 className="mt-3 text-xl font-bold text-[#17211d]">
              Firebase Database
            </h3>

            <p className="mt-3 leading-7 text-[#5f6d68]">
              Product information is stored in Firebase.
            </p>

          </article>

          <article className="rounded-2xl border border-black/10 bg-white p-7 shadow-sm">

            <span className="text-sm font-bold text-[#0f8b6f]">
              02
            </span>

            <h3 className="mt-3 text-xl font-bold text-[#17211d]">
              React.js
            </h3>

            <p className="mt-3 leading-7 text-[#5f6d68]">
              React retrieves and uses the data to build the
              product interface.
            </p>

          </article>

          <article className="rounded-2xl border border-black/10 bg-white p-7 shadow-sm">

            <span className="text-sm font-bold text-[#0f8b6f]">
              03
            </span>

            <h3 className="mt-3 text-xl font-bold text-[#17211d]">
              User Interface
            </h3>

            <p className="mt-3 leading-7 text-[#5f6d68]">
              Users browse and interact with the available
              shoe products.
            </p>

          </article>

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
              'Managing interactive UI with JavaScript and React.',
              'Creating responsive layouts using Tailwind CSS.',
              'Connecting a React application with Firebase.',
              'Reading and displaying product data from Firebase.',
              'Building product cards and shopping interfaces.',
              'Implementing search and filtering interactions.',
              'Managing shopping cart data in the frontend.',
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

export default DetailShoeShop
