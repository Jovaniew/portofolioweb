import { ProfileHeader } from "@/components/portfolio/profile-header"
import { AboutSection } from "@/components/portfolio/about-section"
import { EducationSection } from "@/components/portfolio/education-section"
import { SkillsSection } from "@/components/portfolio/skills-section"
import { ContactSection } from "@/components/portfolio/contact-section"

export default function PortfolioPage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:bg-primary focus:text-primary-foreground focus:px-3 focus:py-2 focus:rounded-md"
      >
        Skip to content
      </a>

      <header className="border-b border-border bg-card">
        <div className="mx-auto max-w-3xl px-6">
          <ProfileHeader />
        </div>
      </header>

      <main id="main" className="mx-auto max-w-3xl px-6 py-10 md:py-14">
        <section id="about" aria-labelledby="about-heading" className="mb-10 md:mb-14">
          <h2 id="about-heading" className="text-balance text-2xl font-semibold text-primary mb-4">
            About Me
          </h2>
          <AboutSection />
        </section>

        <section id="education" aria-labelledby="education-heading" className="mb-10 md:mb-14">
          <h2 id="education-heading" className="text-balance text-2xl font-semibold text-primary mb-4">
            Education
          </h2>
          <EducationSection />
        </section>

        <section id="skills" aria-labelledby="skills-heading" className="mb-10 md:mb-14">
          <h2 id="skills-heading" className="text-balance text-2xl font-semibold text-primary mb-4">
            Skills
          </h2>
          <SkillsSection />
        </section>

        <section id="contact" aria-labelledby="contact-heading" className="mb-10 md:mb-2">
          <h2 id="contact-heading" className="text-balance text-2xl font-semibold text-primary mb-4">
            Contact
          </h2>
          <ContactSection />
        </section>
      </main>

      <footer className="border-t border-border bg-card">
        <div className="mx-auto max-w-3xl px-6 py-6 text-sm text-muted-foreground flex items-center justify-between">
          <p>&copy; {new Date().getFullYear()} Your Name</p>
          <a href="#" className="hover:text-primary">
            Back to top
          </a>
        </div>
      </footer>
    </>
  )
}
