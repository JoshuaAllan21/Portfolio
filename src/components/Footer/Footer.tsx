import { footerLinks } from '@/appData'
import { GithubIcon, LinkedIn } from '@/utils/icons'
import Logo from '../Navbar/Logo'

const Footer = () => {
  return (
    <footer className="bg-secondary border-border relative overflow-hidden border-t px-4 py-10 md:px-14 md:py-14">
      <div className="relative z-20 mx-auto max-w-[1200px]">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Logo width={28} height={22} />
              <span className="text-neutral text-base font-medium">Joshua Allan</span>
            </div>
            <p className="text-tertiary-content text-xs leading-relaxed">
              Graduate RegTech Engineer<br />
              Software Developer<br />
              FinTech · RegTech · AI/ML · Full-Stack
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-1.5">
            <p className="text-primary-content mb-1 text-xs font-semibold uppercase tracking-wider">Navigation</p>
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-neutral hover:text-accent text-sm transition-colors duration-200">
                {link.title}
              </a>
            ))}
          </div>

          {/* Social + CTA */}
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-primary-content mb-2 text-xs font-semibold uppercase tracking-wider">Connect</p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/JoshuaAllan21"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="text-neutral hover:text-accent transition-colors duration-200">
                  <GithubIcon className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/joshua-allan-094238329/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="text-neutral hover:text-accent transition-colors duration-200">
                  <LinkedIn className="h-5 w-5" />
                </a>
              </div>
            </div>
            <a
              href="mailto:joshua.allan21@gmail.com"
              className="text-accent text-sm hover:underline">
              joshua.allan21@gmail.com
            </a>
          </div>
        </div>

        <div className="border-border mt-8 border-t pt-6">
          <p className="text-tertiary-content text-xs">
            © 2026 Joshua Allan. All rights reserved.
          </p>
        </div>
      </div>

      {/* Background decoration */}
      <div className="bg-neutral/4 absolute top-1/2 -right-[40%] z-0 h-[120dvw] w-[120dvw] -translate-y-1/2 rounded-full md:top-0 md:-right-[255px] md:-bottom-[450px] md:size-[1030px] md:-translate-y-0">
        <div className="bg-neutral/4 size-full rounded-full">
          <div className="bg-neutral/5 size-full rounded-full" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
