import Link from "next/link"
import { IconBrandLinkedin } from "@tabler/icons-react"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky  top-0 z-40 w-full border-b bg-background/75 backdrop-blur-lg">
      <div className="flex w-full flex-row justify-between px-8  py-2 md:py-4">
        <MainNav items={siteConfig.mainNav} />
        <div className="hidden w-full flex-1 items-center justify-end space-x-4 md:visible md:flex">
          <nav className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.twitter className="h-5 w-5 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <IconBrandLinkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </div>
            </Link>
            <ThemeToggle />
          </nav>
        </div>
        <div className="visible md:hidden">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
