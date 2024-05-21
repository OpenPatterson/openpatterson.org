import { type Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import { loadArticles } from '@/lib/mdx'

export const metadata: Metadata = {
  title: 'Donate',
  description: 'Donate to support the pro-bono work we do.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="Donate" title="Support our pro-bono community work">
        <p>
          We believe technology is the greatest tool to empower the work members
          in our community do. Help us be able to support more pro-bono
          projects. We're a 501(c)(3) nonprofit, and your donation is
          tax-deductible.
        </p>
        <p>If you prefer to donate directly through HackClub (our fiscal sponsor), you can <a href="https://hcb.hackclub.com/donations/start/open-patterson?amount=10000" className="underline" target='_blank'>click here!</a></p>
        <iframe
          src="https://hcb.hackclub.com/donations/start/open-patterson"
          className="aspect-auto h-[890px] w-full"
          name="donateFrame"
        ></iframe>
      </PageIntro>
      {/* <Container className="mt-16">
        <StatList>
          <StatListItem value="35" label="Underpaid employees" />
          <StatListItem value="52" label="Placated clients" />
          <StatListItem value="$25M" label="Invoices billed" />
        </StatList>
      </Container> */}

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="Our team of experienced designers and developers has just one thing on their mind; working on your ideas to draw a smile on the face of your users worldwide. From conducting Brand Sprints to UX Design."
        pages={blogArticles}
      />

      <ContactSection />
    </>
  )
}
