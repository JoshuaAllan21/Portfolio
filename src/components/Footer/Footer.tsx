import { socials } from '@/appData/personal'
import Logo from '../Navbar/Logo'

const Footer = () => {
  return (
      <footer className="bg-secondary relative flex flex-col justify-between gap-10 overflow-hidden px-4 py-10 md:p-14">
        <div className="relative z-20 flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <Logo width={30} height={24} />
            <span className="text-neutral text-lg font-medium">Josh Allan</span>
          </div>
          <div className="flex gap-4">
            {socials.map((item, index) => (
                <a
                    key={index}
                    href={item.href}
                    className="text-neutral transition-colors hover:text-accent duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  {item.icon}
                </a>
            ))}
          </div>
        </div>
        <div className="relative z-20 mt-6 text-tertiary-content text-sm md:text-base">
          <p>
            If you have any questions or want to know more about my work, feel free to get in touch.<br />
            © 2025 — Josh Allan. All rights reserved.
          </p>
        </div>
        <div className="bg-neutral/4 absolute top-1/2 -right-[40%] z-0 h-[120dvw] w-[120dvw] -translate-y-1/2 rounded-full p-14 md:top-0 md:-right-[255px] md:-bottom-[450px] md:size-[1030px] md:-translate-y-0 md:p-20">
          <div className="bg-neutral/4 size-full rounded-full p-14 md:p-20">
            <div className="bg-neutral/5 size-full rounded-full" />
          </div>
        </div>
      </footer>
  )
}

export default Footer

