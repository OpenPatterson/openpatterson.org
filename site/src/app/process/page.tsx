import { type Metadata } from 'next'

import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Discover" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We conduct an{' '}
          <strong className="font-semibold text-neutral-950">
            initial consultation
          </strong>{' '}
          with the client to understand their goals, challenges, and
          requirements. Gather detailed information about their project scope,
          desired outcomes, and any specific needs or constraints.
        </p>
        <p>
          Collaborate with the client to{' '}
          <strong className="font-semibold text-neutral-950">
            analyze their needs
          </strong>{' '}
          and translate them into detailed software requirements. Create a
          project brief that outlines key features, functionalities, and
          expected deliverables.
        </p>
        <p>
          Develop a comprehensive{' '}
          <strong className="font-semibold text-neutral-950">
            project proposal
          </strong>{' '}
          that includes a timeline, milestones, budget estimates, and resource
          allocation. Present this proposal to the client for review and
          approval. Make necessary adjustments based on client feedback.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>In-depth questionnaires</TagListItem>
        <TagListItem>Feasibility studies</TagListItem>
        <TagListItem>Employee surveys</TagListItem>
        <TagListItem>Proofs-of-concept</TagListItem>
      </TagList>
    </Section>
  )
}

function Develop() {
  return (
    <Section title="Design & Develop" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Work with the client to{' '}
          <strong className="font-semibold text-neutral-950">
            create mockups and prototypes.
          </strong>{' '}
          Ensure the design aligns with the client’s vision and user experience
          requirements. Obtain client feedback and approval at each stage of the
          design process.
        </p>
        <p>
          Begin the{' '}
          <strong className="font-semibold text-neutral-950">
            software development
          </strong>{' '}
          process, adhering to the agreed-upon project plan. Utilize agile
          methodologies to ensure flexibility and regular client engagement.
          Conduct iterative development cycles, including coding, testing, and
          debugging.
        </p>
        <p>
          Schedule regular{' '}
          <strong className="font-semibold text-neutral-950">
            progress reviews
          </strong>{' '}
          with the client to demonstrate completed work and gather feedback.
          Make necessary adjustments based on client input to ensure the project
          stays on track and meets expectations.
        </p>
      </div>
    </Section>
  )
}

function Deploy() {
  return (
    <Section title="Deploy" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Conduct thorough{' '}
          <strong className="font-semibold text-neutral-950">testing</strong> of
          the software, including functionality, usability, and performance
          testing. Address any issues or bugs identified during this phase.
          Ensure the software meets all quality standards before deployment.
        </p>
        <p>
          Plan and execute the{' '}
          <strong className="font-semibold text-neutral-950">launch</strong> of
          the software to the client’s environment. Provide necessary training
          and documentation to the client’s team to ensure smooth adoption and
          use of the software.
        </p>
        <p>
          Offer{' '}
          <strong className="font-semibold text-neutral-950">
            post-deployment support
          </strong>{' '}
          to address any issues or questions the client may have. Provide
          regular maintenance and updates to keep the software running smoothly
          and securely. Establish a long-term support plan to ensure continued
          success and satisfaction.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Testing</TagListItem>
        <TagListItem>Alerts Setup</TagListItem>
        <TagListItem>Ongoing Support</TagListItem>
        <TagListItem>Project Deployment</TagListItem>
      </TagList>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Balancing reliability and innovation"
      >
        <p>
          We strive for a balance between tried-and-true methods and innovative
          ones. Our priority is to provide a modern solution that is both
          reliable and efficient.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Simple">
            Our solutions prioritize simplicity, ensuring they are easy to
            understand and use. We believe in cutting through complexity to
            deliver straightforward and effective results that minimize user
            effort and maximize productivity.
          </GridListItem>
          <GridListItem title="Maintainable">
            We design with long-term sustainability in mind, crafting solutions
            that are easy to maintain and update. Our approach emphasizes clean
            code, clear documentation, and scalable architectures to ensure
            ongoing reliability and ease of enhancement.
          </GridListItem>
          <GridListItem title="Modern">
            We incorporate modern tools and methodologies that have been proven
            to be effective. Our solutions leverage current technologies to
            offer superior performance, enhanced security, and an intuitive user
            experience.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Our Process',
  description:
    'Our priority is to provide a modern solution that is both reliable and efficient.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Our process" title="How we work">
        <p>
          We aren&apos;t here to reinvent the wheel, we&apos;re here to spin it.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Develop />
        <Deploy />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
