import { type Metadata } from 'next'
import Image from 'next/image'
import { StaticImageData } from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoCHSWhite from '@/images/clients/chs/chs-logo-white.png'
import logoCHSBlack from '@/images/clients/chs/chs-logo-black.png'
import imageLaptop from '@/images/laptop.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'

const clients: [string, StaticImageData][] = [
  ['CHS', logoCHSWhite],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-orange-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We’ve worked with many amazing people
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro
        title="Harnessing technology for a brighter future"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We believe technology is a tool, not the solution. We are here to
          empower the work you already do.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you identify, explore and respond to new opportunities."
        className="mt-24 sm:mt-32 lg:mt-40"
      ></SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Web development">
              We specialize in creating high-quality, visually appealing, and
              responsive websites that effectively communicate your brand
              message. Our web development services are tailored to ensure your
              website is not only aesthetically pleasing but also functionally
              efficient and SEO-friendly.
            </ListItem>
            <ListItem title="Application development">
              Our team of skilled developers leverage the latest technologies
              and frameworks to build robust, scalable, and user-friendly
              applications. We focus on delivering solutions that meet your
              unique business needs and provide an exceptional user experience.
            </ListItem>
            <ListItem title="Data Analytics & Warehousing">
              Our data analytics and warehousing services help you make
              data-driven decisions by providing actionable insights. We design
              and implement efficient data warehousing solutions that ensure
              your data is reliable, secure, and accessible for analysis.
            </ListItem>
            <ListItem title="Custom content management">
              We understand the importance of effective content management, and
              offer customized CMS solutions that are robust and easy to manage.
              Our CMS solutions are designed to streamline your content
              management process, making it easier for you to update and
              maintain your website content.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'Our nonprofit software studio combines technical expertise with a deep-rooted commitment to community well-being, ensuring that our work leaves a lasting positive impact.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Nonprofit software studio based in California&apos;s Central Valley.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Crafting software solutions that empower businesses, civic tech
            initiatives, and nonprofits to thrive. Our nonprofit software studio
            combines technical expertise with a deep-rooted commitment to
            community well-being, ensuring that our work leaves a lasting
            positive impact.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      {/* <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'CHS', logo: logoCHSBlack }}
      >
        CHS pls say something nice about me.
      </Testimonial> */} 
      {/* TODO: Uncomment this code to display the testimonial after getting the testimonial from CHS  */}

      <Services />

      <ContactSection />
    </>
  )
}
