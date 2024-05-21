import { type Metadata } from 'next'
import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageLeslieAlexander from '@/images/team/leslie-alexander.jpg'
import { loadArticles } from '@/lib/mdx'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our Values"
        title="Balancing our passion for tech with our love for community."
        invert
      ></SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Community" invert>
            <p>
              The tech community in Stanislaus County and the Central Valley is
              still young and scattered. We hope to do our part in nurturing
              this community by creating community projects and remaining
              remote-first.
            </p>
            <p className="pt-5">
              Community projects will include volunteer-made civic tech projects
              produced internally for public use and collaborations with
              nonprofits.
            </p>
          </GridListItem>
          <GridListItem title="Mentorship" invert>
            <p>
              Despite how near the Central Valley is to Silicon Valley, the
              global epicenter of tech, there are very few opportunities for
              students interested in tech. As a result, students struggle to
              gain any relevant experience while in college and are later forced
              to move away after graduating.
            </p>
            <p className="pt-5">
              We strive to create opportunities for students by pairing them
              with civic tech and non-profit volunteer projects. In doing so, we
              set them up for success. And in the long run, we hope to prove
              there is enough tech talent here to convince folks to create their
              companies here rather than having to move away.
            </p>
          </GridListItem>
          <GridListItem title="Simple & Solid Solutions" invert>
            <p>
              We are not trying to reinvent the wheel or disguise every solution
              as the new AI trend. We strive to balance time-tested, solid,
              simple solutions and the latest tech innovations.
            </p>
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  {
    title: 'Leadership',
    people: [
      {
        name: 'Carlos E. Ortega',
        role: 'Founder / CEO',
        image: { src: imageLeslieAlexander },
      },
    ],
  },
  {
    title: 'Advisors',
    people: [
      {
        name: 'Ryan Salmasi',
        role: 'Marketing Genius',
        image: { src: imageLeslieAlexander },
      },
      {
        name: 'Advisor 2',
        role: 'Senior Designer',
        image: { src: imageLeslieAlexander },
      },
      {
        name: 'Advisor 3',
        role: 'VP, User Experience',
        image: { src: imageLeslieAlexander },
      },
      {
        name: 'Advisor 4',
        role: 'Junior Copywriter',
        image: { src: imageLeslieAlexander },
      },
      {
        name: 'Advisor 5',
        role: 'VP, Human Resources',
        image: { src: imageLeslieAlexander },
      },
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="About us" title="Tech as a Tool for Good">
        <p>
          While many have begun to see technology as an end in itself, we remain
          rooted in our belief that technology is a tool to empower the work
          already being done.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            We want to create technical opportunities for young people in Stanislaus
            County by crafting software solutions that empower businesses, civic
            tech initiatives, and nonprofits to thrive. Our nonprofit software
            studio combines technical expertise with a deep-rooted commitment to
            community well-being and mentorship, ensuring our work has a lasting
            positive impact.
          </p>
        </div>
      </PageIntro>
      {/* <Container className="mt-16">
        <StatList>
          <StatListItem value="35" label="Underpaid employees" />
          <StatListItem value="52" label="Placated clients" />
          <StatListItem value="$25M" label="Invoices billed" />
        </StatList>
      </Container> */}

      <Culture />

      <Team />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="Stay up-to-date with the work our team is doing and what we are learning."
        pages={blogArticles}
      />

      <ContactSection />
    </>
  )
}
