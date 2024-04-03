import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { myFont } from "@/lib/fonts"
import { cn } from "@/lib/utils"

import "@/styles/main-nav.css"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const pathname = usePathname()

  return (
    <div className="flex w-full flex-row gap-6">
      <Link
        href="/"
        className="flex w-fit items-center justify-center space-x-2"
      >
        <p
          id="header-name"
          className={`inline-block text-xl font-bold md:text-2xl ${myFont.className} leading-tight tracking-tighter hover:font-extrabold`}
        >
          {siteConfig.name}
        </p>
      </Link>
      {items?.length ? (
        <nav className="hidden w-full flex-row items-center justify-center gap-6 self-center md:visible md:flex">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "hover:underline-2 flex items-center text-lg font-medium leading-tight tracking-tighter text-muted-foreground hover:font-extrabold",
                    item.disabled && "cursor-not-allowed opacity-80",
                    pathname === item.href && "font-extrabold text-orange-500"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
