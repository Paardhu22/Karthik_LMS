import type { ReactNode } from 'react';
import HeroBackground from '@/components/hero-background';
import SiteHeader from '@/components/site-header';

const heroStats = [
  { value: '12k+', label: 'Active learners' },
  { value: '480', label: 'Courses published' },
  { value: '94%', label: 'Completion rate' },
  { value: '4.9', label: 'Average rating' }
];

const partners = ['NORTHWIND', 'HELIX LABS', 'ORBIT', 'CADENCE', 'VOLT ACADEMY', 'MERIDIAN'];

const features = [
  {
    icon: <IconLayers />,
    title: 'Course builder',
    body: 'Drag lessons, videos, readings and quizzes into a module tree. Publish a draft to a single cohort before it goes live for everyone.'
  },
  {
    icon: <IconVideo />,
    title: 'Live cohorts',
    body: 'Schedule sessions, take attendance automatically, and attach the recording to the lesson the moment the call ends.'
  },
  {
    icon: <IconClipboard />,
    title: 'Assessments',
    body: 'Question banks, randomised sets, timed exams and instant grading — with manual review queues for written answers.'
  },
  {
    icon: <IconChart />,
    title: 'Progress analytics',
    body: 'Per-learner mastery, cohort funnels and drop-off by lesson, so you know which module needs a rewrite.'
  },
  {
    icon: <IconAward />,
    title: 'Certificates',
    body: 'Issue verifiable completion certificates with a public check link, expiry dates and re-certification reminders.'
  },
  {
    icon: <IconChat />,
    title: 'Threaded discussions',
    body: 'Questions live next to the lesson that caused them. Instructors mark answers as resolved and reuse them as FAQs.'
  }
];

const courses = [
  {
    tag: 'Engineering',
    title: 'Full-Stack TypeScript',
    blurb: 'From type-safe APIs to production deploys.',
    lessons: 42,
    hours: 18,
    level: 'Intermediate',
    progress: 68,
    instructor: 'AR',
    tint: 'from-glow/40 to-[#4c1d95]/10'
  },
  {
    tag: 'Data',
    title: 'Applied Machine Learning',
    blurb: 'Build, evaluate and ship real models.',
    lessons: 36,
    hours: 22,
    level: 'Advanced',
    progress: 41,
    instructor: 'KP',
    tint: 'from-beam/30 to-[#0e7490]/10'
  },
  {
    tag: 'Design',
    title: 'Product Design Systems',
    blurb: 'Tokens, components and design ops.',
    lessons: 28,
    hours: 12,
    level: 'Beginner',
    progress: 87,
    instructor: 'MS',
    tint: 'from-[#f472b6]/30 to-[#7e22ce]/10'
  }
];

const instructorPoints = [
  'Author once, reuse across cohorts and semesters',
  'Auto-graded quizzes with manual review where it matters',
  'See exactly where learners stall, lesson by lesson',
  'Bulk enrolment via CSV, SSO or invite link'
];

const learnerPoints = [
  'Pick up where you left off on any device',
  'Deadlines and live sessions synced to your calendar',
  'Ask questions inline — answers stay with the lesson',
  'Shareable certificate the moment you finish'
];

const plans = [
  {
    name: 'Starter',
    price: '$0',
    cadence: 'forever',
    blurb: 'For a first course and a small group.',
    points: ['Up to 50 learners', '3 published courses', 'Quizzes & certificates', 'Community support'],
    cta: 'Start free',
    featured: false
  },
  {
    name: 'Studio',
    price: '$29',
    cadence: 'per instructor / month',
    blurb: 'For teams running cohorts on a schedule.',
    points: [
      'Unlimited learners & courses',
      'Live sessions with attendance',
      'Cohort analytics & exports',
      'Custom domain and branding'
    ],
    cta: 'Start 14-day trial',
    featured: true
  },
  {
    name: 'Institution',
    price: 'Custom',
    cadence: 'annual',
    blurb: 'For schools and enterprise L&D.',
    points: ['SSO / SAML & SCIM', 'Role-based permissions', 'Data residency options', 'Dedicated success manager'],
    cta: 'Talk to us',
    featured: false
  }
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="top" className="flex-1">
        {/* ---------------------------------------------------------------- hero */}
        <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20">
          <HeroBackground />

          <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <span className="inline-flex animate-rise items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-muted backdrop-blur-md">
                <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-glow" />
                Autumn cohort enrolling — 40 seats left
              </span>

              <h1 className="mt-6 animate-rise text-[clamp(2.5rem,7vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-white [animation-delay:80ms]">
                Teach anything.
                <br />
                <span className="bg-gradient-to-r from-glow-soft via-glow to-beam bg-clip-text text-transparent">
                  Track everything.
                </span>
              </h1>

              <p className="mt-6 max-w-xl animate-rise text-base leading-relaxed text-muted [animation-delay:160ms] sm:text-lg">
                Lumen is a modern learning platform for building courses, running live cohorts, grading automatically
                and seeing exactly who learned what — without stitching five tools together.
              </p>

              <div className="mt-9 flex animate-rise flex-col gap-3 [animation-delay:240ms] sm:flex-row sm:items-center">
                <a
                  href="#get-started"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-ink transition-transform hover:scale-[1.03] active:scale-95"
                >
                  Start teaching free
                  <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h13m0 0-5-5m5 5-5 5" />
                  </svg>
                </a>
                <a
                  href="#catalog"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-md transition-colors hover:border-white/40 hover:bg-white/10"
                >
                  Browse the catalog
                </a>
              </div>

              <p className="mt-4 animate-rise text-xs text-muted/80 [animation-delay:300ms]">
                No credit card required · Free for your first 50 learners
              </p>

              <dl className="mt-14 grid animate-rise grid-cols-2 gap-x-6 gap-y-6 border-t border-white/10 pt-8 [animation-delay:360ms] sm:grid-cols-4">
                {heroStats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="sr-only">{stat.label}</dt>
                    <dd className="font-mono text-2xl font-semibold text-white sm:text-3xl">{stat.value}</dd>
                    <p className="mt-1 text-xs tracking-wide text-muted uppercase">{stat.label}</p>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------- partners */}
        <section className="relative border-y border-white/[0.07] bg-ink-soft/60 py-8">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="text-center text-[11px] tracking-[0.25em] text-muted/70 uppercase">
              Powering training teams at
            </p>
            <div className="mt-6 flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
              <div className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-12">
                {[...partners, ...partners].map((name, index) => (
                  <span
                    key={`${name}-${index}`}
                    className="font-mono text-sm tracking-[0.18em] whitespace-nowrap text-white/35"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------- features */}
        <section id="features" className="relative scroll-mt-20 py-24 sm:py-32">
          <Glow className="left-1/2 top-0 -translate-x-1/2" />
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Everything in one place"
              title="The whole teaching loop, built in"
              body="Authoring, delivery, assessment and analytics share one data model — so a change to a lesson shows up in the gradebook, the dashboard and the certificate."
            />

            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <article
                  key={feature.title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-glow/40 hover:bg-white/[0.05]"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-glow/25 to-transparent text-glow-soft transition-colors group-hover:text-white">
                    {feature.icon}
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-white">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{feature.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------------- catalog */}
        <section id="catalog" className="relative scroll-mt-20 border-t border-white/[0.07] bg-ink-soft/40 py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeading
                align="left"
                eyebrow="Catalog"
                title="Courses your learners actually finish"
                body="Every course carries its own syllabus, prerequisites and certificate rules."
              />
              <a
                href="#get-started"
                className="inline-flex shrink-0 items-center gap-2 text-sm text-glow-soft transition-colors hover:text-white"
              >
                View all 480 courses
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h13m0 0-5-5m5 5-5 5" />
                </svg>
              </a>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {courses.map((course) => (
                <article
                  key={course.title}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] transition duration-300 hover:-translate-y-1 hover:border-glow/40"
                >
                  <div className={`relative h-32 bg-gradient-to-br ${course.tint}`}>
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:22px_22px]" />
                    <span className="absolute top-4 left-4 rounded-full border border-white/20 bg-ink/60 px-2.5 py-1 text-[11px] tracking-wide text-white/80 backdrop-blur-sm">
                      {course.tag}
                    </span>
                    <span className="absolute right-4 bottom-4 grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-ink/70 font-mono text-[11px] text-white backdrop-blur-sm">
                      {course.instructor}
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="text-base font-semibold text-white">{course.title}</h3>
                    <p className="mt-1.5 text-sm text-muted">{course.blurb}</p>

                    <div className="mt-4 flex items-center gap-3 font-mono text-[11px] text-muted/80">
                      <span>{course.lessons} lessons</span>
                      <span className="h-1 w-1 rounded-full bg-white/20" />
                      <span>{course.hours}h</span>
                      <span className="h-1 w-1 rounded-full bg-white/20" />
                      <span>{course.level}</span>
                    </div>

                    <div className="mt-5">
                      <div className="flex items-center justify-between text-[11px] text-muted">
                        <span>Cohort progress</span>
                        <span className="font-mono text-white/80">{course.progress}%</span>
                      </div>
                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-glow to-beam"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- roles */}
        <section id="roles" className="relative scroll-mt-20 py-24 sm:py-32">
          <Glow className="right-0 top-24" />
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid items-center gap-14 lg:grid-cols-2">
              <div>
                <SectionHeading
                  align="left"
                  eyebrow="One platform, two jobs"
                  title="Built for the person teaching and the person learning"
                  body="Instructors get authoring and evidence. Learners get a clear path and no busywork."
                />

                <div className="mt-10 grid gap-8 sm:grid-cols-2">
                  <PointList title="For instructors" points={instructorPoints} />
                  <PointList title="For learners" points={learnerPoints} accent />
                </div>
              </div>

              {/* Mock progress panel */}
              <div className="relative animate-drift">
                <div className="absolute -inset-6 rounded-[2rem] bg-glow/10 blur-3xl" />
                <div className="relative rounded-2xl border border-white/12 bg-ink-soft/90 p-5 shadow-2xl backdrop-blur-xl">
                  <div className="flex items-center gap-2 border-b border-white/10 pb-4">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="ml-2 font-mono text-[11px] text-muted">full-stack-typescript / module 4</span>
                  </div>

                  <div className="mt-5 flex items-baseline justify-between">
                    <div>
                      <p className="text-sm text-muted">Your progress</p>
                      <p className="mt-1 font-mono text-3xl font-semibold text-white">68%</p>
                    </div>
                    <span className="rounded-full border border-beam/30 bg-beam/10 px-3 py-1 text-[11px] text-beam">
                      On track
                    </span>
                  </div>

                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-glow to-beam" />
                  </div>

                  <ul className="mt-6 space-y-2.5">
                    {[
                      { label: 'Type-safe API routes', done: true },
                      { label: 'Auth & sessions', done: true },
                      { label: 'Quiz: data modelling', done: true },
                      { label: 'Caching strategies', done: false },
                      { label: 'Final project review', done: false }
                    ].map((item) => (
                      <li
                        key={item.label}
                        className="flex items-center gap-3 rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2.5"
                      >
                        <span
                          className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border ${
                            item.done ? 'border-glow bg-glow/20 text-glow-soft' : 'border-white/20 text-transparent'
                          }`}
                        >
                          <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="m5 13 4 4L19 7" />
                          </svg>
                        </span>
                        <span className={`text-sm ${item.done ? 'text-white/70' : 'text-muted'}`}>{item.label}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 grid grid-cols-3 gap-3 border-t border-white/10 pt-5 text-center">
                    {[
                      { value: '28', label: 'Lessons done' },
                      { value: '12h', label: 'Time spent' },
                      { value: '96%', label: 'Quiz average' }
                    ].map((stat) => (
                      <div key={stat.label}>
                        <p className="font-mono text-lg font-semibold text-white">{stat.value}</p>
                        <p className="mt-0.5 text-[11px] text-muted">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------------- pricing */}
        <section id="pricing" className="relative scroll-mt-20 border-t border-white/[0.07] bg-ink-soft/40 py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Pricing"
              title="Priced per instructor, not per learner"
              body="Grow your cohort without growing the invoice. Switch or cancel whenever."
            />

            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {plans.map((plan) => (
                <article
                  key={plan.name}
                  className={`relative flex flex-col rounded-2xl border p-6 backdrop-blur-sm transition duration-300 ${
                    plan.featured
                      ? 'border-glow/50 bg-gradient-to-b from-glow/12 to-white/[0.02] shadow-[0_0_60px_-25px] shadow-glow'
                      : 'border-white/10 bg-white/[0.025] hover:border-white/25'
                  }`}
                >
                  {plan.featured ? (
                    <span className="absolute -top-3 left-6 rounded-full bg-glow px-3 py-1 text-[11px] font-medium text-white">
                      Most popular
                    </span>
                  ) : null}

                  <h3 className="text-sm tracking-wide text-muted uppercase">{plan.name}</h3>
                  <p className="mt-3 flex items-baseline gap-1.5">
                    <span className="font-mono text-4xl font-semibold text-white">{plan.price}</span>
                    <span className="text-xs text-muted">{plan.cadence}</span>
                  </p>
                  <p className="mt-3 text-sm text-muted">{plan.blurb}</p>

                  <ul className="mt-6 flex-1 space-y-3">
                    {plan.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-white/75">
                        <svg
                          viewBox="0 0 24 24"
                          className="mt-0.5 h-4 w-4 shrink-0 text-glow-soft"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                        >
                          <path d="m5 13 4 4L19 7" />
                        </svg>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#get-started"
                    className={`mt-7 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-transform hover:scale-[1.02] active:scale-95 ${
                      plan.featured
                        ? 'bg-white text-ink'
                        : 'border border-white/20 bg-white/5 text-white hover:bg-white/10'
                    }`}
                  >
                    {plan.cta}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ cta */}
        <section id="get-started" className="relative scroll-mt-20 overflow-hidden py-24 sm:py-32">
          <Glow className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-70" />
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <blockquote className="mx-auto max-w-2xl">
              <p className="text-lg leading-relaxed text-white/85 sm:text-xl">
                “We moved six scattered course docs into Lumen in a weekend. Completion went from 41% to 88% in one
                cohort — mostly because learners could finally see where they were.”
              </p>
              <footer className="mt-5 text-sm text-muted">
                Priya N. — Head of Learning, <span className="font-mono tracking-wide">HELIX LABS</span>
              </footer>
            </blockquote>

            <div className="mt-16 rounded-3xl border border-white/12 bg-white/[0.03] p-10 backdrop-blur-md sm:p-14">
              <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-semibold tracking-tight text-white">
                Your first course is <span className="text-glow-soft">free</span>
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-sm text-muted sm:text-base">
                Spin up a workspace, import your material and invite a cohort — most teams publish their first module
                the same afternoon.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="#top"
                  className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-medium text-ink shadow-[0_0_40px_-10px] shadow-glow transition-transform hover:scale-[1.03] active:scale-95 sm:w-auto"
                >
                  Create your workspace
                </a>
                <a
                  href="#features"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/10 sm:w-auto"
                >
                  Book a walkthrough
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* --------------------------------------------------------------- footer */}
      <footer className="border-t border-white/[0.07] bg-ink-soft/60">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-glow to-[#5b21b6]">
                  <span className="font-mono text-sm font-bold text-white">L</span>
                </span>
                <span className="text-[15px] font-semibold tracking-tight text-white">
                  Lumen<span className="text-glow-soft">LMS</span>
                </span>
              </div>
              <p className="mt-4 max-w-xs text-sm text-muted">
                A learning platform for teams that care whether the course actually landed.
              </p>
            </div>

            {[
              { title: 'Product', links: ['Features', 'Courses', 'Pricing', 'Changelog'] },
              { title: 'Resources', links: ['Docs', 'Instructor guide', 'API reference', 'Status'] },
              { title: 'Company', links: ['About', 'Careers', 'Privacy', 'Terms'] }
            ].map((column) => (
              <div key={column.title}>
                <h3 className="text-xs tracking-[0.18em] text-white/70 uppercase">{column.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#top" className="text-sm text-muted transition-colors hover:text-white">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-white/[0.07] pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-xs text-muted/70">© {new Date().getFullYear()} Lumen LMS</p>
            <p className="font-mono text-xs text-muted/70">Built with Next.js</p>
          </div>
        </div>
      </footer>
    </>
  );
}

/* -------------------------------------------------------------- primitives */

function SectionHeading({
  eyebrow,
  title,
  body,
  align = 'center'
}: {
  eyebrow: string;
  title: string;
  body: string;
  align?: 'center' | 'left';
}) {
  const centered = align === 'center';
  return (
    <div className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-xl'}>
      <p className="text-xs tracking-[0.22em] text-glow-soft uppercase">{eyebrow}</p>
      <h2 className="mt-4 text-[clamp(1.75rem,4vw,2.75rem)] font-semibold tracking-[-0.02em] text-white">{title}</h2>
      <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">{body}</p>
    </div>
  );
}

function PointList({ title, points, accent = false }: { title: string; points: string[]; accent?: boolean }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <ul className="mt-4 space-y-3">
        {points.map((point) => (
          <li key={point} className="flex items-start gap-2.5 text-sm text-muted">
            <span
              className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${accent ? 'bg-beam' : 'bg-glow'}`}
              aria-hidden="true"
            />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Glow({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute h-[420px] w-[420px] rounded-full bg-glow/12 blur-[130px] ${className}`}
    />
  );
}

/* ------------------------------------------------------------------- icons */

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  );
}

function IconLayers() {
  return (
    <Icon>
      <path d="M12 3 3 7.5l9 4.5 9-4.5L12 3Z" />
      <path d="m3 12 9 4.5L21 12" />
      <path d="m3 16.5 9 4.5 9-4.5" />
    </Icon>
  );
}

function IconVideo() {
  return (
    <Icon>
      <rect x="2" y="5.5" width="14" height="13" rx="3" />
      <path d="m16 11 6-3.5v9L16 13" />
    </Icon>
  );
}

function IconClipboard() {
  return (
    <Icon>
      <rect x="4" y="4.5" width="16" height="16.5" rx="3" />
      <path d="M9 3h6v3H9z" />
      <path d="m9 13 2 2 4-4" />
    </Icon>
  );
}

function IconChart() {
  return (
    <Icon>
      <path d="M3 21h18" />
      <rect x="5" y="10" width="3" height="8" rx="1" />
      <rect x="10.5" y="5.5" width="3" height="12.5" rx="1" />
      <rect x="16" y="13" width="3" height="5" rx="1" />
    </Icon>
  );
}

function IconAward() {
  return (
    <Icon>
      <circle cx="12" cy="9" r="5" />
      <path d="m8.5 13.4-1.2 7.6 4.7-2.6 4.7 2.6-1.2-7.6" />
    </Icon>
  );
}

function IconChat() {
  return (
    <Icon>
      <path d="M21 12a8 8 0 0 1-11.6 7.1L3.5 20.5l1.4-5.9A8 8 0 1 1 21 12Z" />
      <path d="M9 11h6M9 14.5h3.5" />
    </Icon>
  );
}
