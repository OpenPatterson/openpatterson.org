import { ContactForm } from "@/components/contact-form";
import { BlogPreview } from "@/components/blog-preview";
import { Code } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getFeaturedPosts } from "@/lib/blog";
import { getFeaturedProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";
import { TeamMember } from "@/components/team-member";
import { MobileMenu } from "@/components/mobile-menu";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeToggle } from "@/components/theme-toggle";

export default async function Home() {
  const featuredPosts = await getFeaturedPosts(2);
  const featuredProjects = await getFeaturedProjects(2);



  return (
    <div className="min-h-screen font-mono flex flex-col">

      <main className="flex-1">
        <section id="hero" className="py-20 border-b">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Volunteer-Run Nonprofit Software Studio
            </h2>
            <p className="max-w-2xl mx-auto text-lg mb-8">
              Building open source technology to empower local governments and
              civic initiatives.
            </p>
            <Link
              href="https://github.com/openpatterson"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 border border-primary bg-primary text-white hover:bg-white hover:text-primary transition-colors"
            >
              <Code className="h-4 w-4" />
              <span>View Our GitHub</span>
            </Link>
          </div>
        </section>

        <section id="about" className="py-20 border-b">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <span className="text-3xl">🍑</span> What We Do
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="border border-primary/20 p-6 hover:border-primary transition-colors">
                <h3 className="text-xl font-bold mb-4">Civic Projects</h3>
                <p>
                  We develop open source solutions that address community needs
                  and improve civic engagement.
                </p>
              </div>
              <div className="border border-primary/20 p-6 hover:border-primary transition-colors">
                <h3 className="text-xl font-bold mb-4">Nonprofit Support</h3>
                <p>
                  We partner with nonprofits to build custom software that
                  amplifies their impact and reach.
                </p>
              </div>
              <div className="border border-primary/20 p-6 hover:border-primary transition-colors">
                <h3 className="text-xl font-bold mb-4">
                  Government Collaboration
                </h3>
                <p>
                  We work with local governments to modernize services and
                  improve accessibility for all citizens.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 border-b">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <span className="text-3xl">🍑</span> Recent Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </section>

        <section id="team" className="py-20 border-b">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <span className="text-3xl">🍑</span> Our Team
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <TeamMember
                name="Carlos Ortega"
                role="Founder"
                image="/images/team/carlos-ortega.jpeg"
                bio="Founder of Open Patterson, passionate about using technology to improve civic engagement and government services."
                links={[
                  {
                    label: "LinkedIn",
                    url: "https://www.linkedin.com/in/soycarlos/",
                  },
                  {
                    label: "Personal Website",
                    url: "https://www.carlos.soy/",
                  },
                ]}
              />
              <TeamMember
                name="Ryan Salmasi"
                role="Advisor"
                image="/images/team/ryan-salmasi.jpg"
                bio="Providing strategic guidance to help Open Patterson achieve its mission."
                links={[
                  {
                    label: "LinkedIn",
                    url: "https://www.linkedin.com/in/ryansalmasi/",
                  },
                ]}
              />

              <div className="border border-dashed border-primary p-6 flex flex-col items-center justify-center text-center h-full">
                <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-4xl">👋</span>
                </div>
                <h3 className="text-xl font-bold mb-2">This could be you</h3>
                <p className="text-gray-600 mb-4">
                  We're looking for passionate volunteers to join our team and
                  help build technology for public good.
                </p>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  Get Involved
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="blog" className="py-20 border-b">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <span className="text-3xl">🍑</span> From Our Blog
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <BlogPreview key={post.slug} post={post} />
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/blog"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
              >
                View All Posts
              </Link>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <span className="text-3xl">🍑</span> Get In Touch
            </h2>
            <div className="max-w-xl mx-auto">
              <p className="mb-8">
                Interested in volunteering, partnering, or learning more about
                our work? Send us a message and we'll get back to you soon.
              </p>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}
