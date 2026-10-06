import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProjectDetailSummary from './ProjectDetailSummary'
import {
  faArrowLeftLong,
  faArrowRight,
  faClockRotateLeft,
  faCreditCard,
  faDatabase,
  faFileInvoiceDollar,
  faReceipt,
  faShieldHalved,
  faUsers,
  faCheck,
  faCode,
  faCircleInfo,
} from '@fortawesome/free-solid-svg-icons'

const stack = [
  'HTML',
  'Tailwind CSS',
  'Bootstrap',
  'PHP',
  'phpMyAdmin',
  'XAMPP',
]

const roles = [
  {
    title: 'Admin',
    description:
      'Manage students, payment records, and system information.',
  },
  {
    title: 'Student',
    description:
      'View school fees, make payments, and check payment history.',
  },
  {
    title: 'Parent / Other',
    description:
      'Make payments and review payment information for students.',
  },
]

const features = [
  [
    faFileInvoiceDollar,
    'Bakong Payment',
    'Users can pay school fees through Bakong and complete the payment process online.',
  ],
  [
    faReceipt,
    'Payment Receipt',
    'After completing a payment, users can view their payment receipt and transaction information.',
  ],
  [
    faClockRotateLeft,
    'Payment History',
    'Users can review their previous payment records and track their payment activity.',
  ],
  [
    faShieldHalved,
    'Role-Based Access',
    'Different users have different access and functions based on their roles.',
  ],
  [
    faDatabase,
    'Database Management',
    'Student and payment information is stored and managed using MySQL through phpMyAdmin.',
  ],
]

const DetailPaySchoolFee = ({ onNavigate }) => {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-[#f7f8f6]">

      {/* ================= HERO ================= */}
      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">

          {/* Back Button */}
          <button
            onClick={() => onNavigate('projects')}
            type="button"
            className="mb-10 inline-flex items-center gap-2 text-sm font-bold text-[#0f8b6f] transition hover:gap-3"
          >
            <FontAwesomeIcon icon={faArrowLeftLong} />
            Back to Projects
          </button>
          {/* Title */}
          <h1 className="max-w-5xl text-4xl font-bold leading-tight text-[#17211d] sm:text-5xl lg:text-6xl">
            Payment School Fee System
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[#5f6d68] sm:text-lg">
            A school fee payment system designed to make school fee
            management easier by allowing students, parents, and
            administrators to manage payment information through a
            simple and user-friendly website. And this is link to visit the live project: <a href="https://rupppay.free.je/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Live Project</a>.
          </p>

          {/* Quick Info */}
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
        videoSrc="https://youtu.be/Zq2cC36A8J4?si=PChAKRv-Gi6uO041"
        advantages={[
          'Makes school-fee payments easier to track.',
          'Keeps payment information and receipts organized.',
          'Supports role-based access for each user type.',
        ]}
        management={roles}
      />

      {/* ================= OVERVIEW ================= */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">

        <div className="grid gap-8 grid-cols-1">

          {/* Main Overview */}
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
              The Payment School Fee System is a web-based system created
              to simplify the process of managing and paying school fees.
              Instead of depending completely on manual payment records,
              users can access payment information through the website. 
            </p>

            <p className="mt-4 leading-8 text-[#5f6d68]">
              The system also provides payment history, receipts,
              role-based access, and database management. It is designed
              to provide a cleaner and more convenient experience for
              students, parents, and school administrators.
            </p>

          </article>
        </div>
      </section>

      {/* ================= GOAL ================= */}
      <section className="border-y border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0f8b6f]">
            The Problem & Goal
          </p>

          <h2 className="mt-3 max-w-3xl text-3xl font-bold text-[#17211d]">
            Making school fee payment easier and more organized.
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">

            {[
              'Reduce manual payment management.',
              'Make payment information easier to access.',
              'Provide clear payment records and receipts.',
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
            The system includes several features that help users
            manage school fees and payment information more efficiently.
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
                Different access for different users
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
                   0{index + 1}
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

      {/* ================= PAYMENT FLOW ================= */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">

        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0f8b6f]">
          Payment Flow
        </p>

        <h2 className="mt-3 text-3xl font-bold text-[#17211d]">
          How the payment process works
        </h2>

        <div className="mt-10 grid gap-4 md:grid-cols-4">

          {[
            ['01', 'View Fee', 'User checks the required school fee.'],
            ['02', 'Choose Payment', 'User starts the online payment process.'],
            ['03', 'Pay with Bakong', 'User completes the payment using Bakong.'],
            ['04', 'Get Receipt', 'Payment information and receipt are displayed.'],
          ].map(([number, title, text]) => (
            <article
              key={number}
              className="relative rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
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

      {/* ================= LEARNING ================= */}
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
              'Building a school system while learning PHP and MySQL foundations.',
              'Practicing database operations and payment records.',
              'Creating role-based user experiences.',
              'Practicing how frontend interfaces connect with backend logic.',
              'Designing responsive interfaces with Tailwind CSS and Bootstrap.',
              'Understanding how an online payment workflow works.',
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

      {/* ================= BOTTOM CTA ================= */}
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

export default DetailPaySchoolFee
