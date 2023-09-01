"use client"

import Image from "next/image"
import Link from "next/link"
import profileImage from "@/public/foto.jpeg"
import {
  IconBrandGraphql,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandTypescript,
} from "@tabler/icons-react"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import Particles from "@/components/particles"
import LogoSlider from "@/components/sections/ClientSlider"
import Education from "@/components/sections/Education"
import { InfiniteClientLogo } from "@/components/sections/InfiniteClientLogo"
import Work from "@/components/sections/Work"
import { clientList } from "@/components/sections/client-list"

export default function IndexPage() {
  return (
    <section className="container grid min-w-full items-center justify-center gap-6 pb-8 pt-6 md:py-10">
      <Particles
        className="pointer-events-none absolute inset-0"
        quantity={75}
      />

      <div className="h-500 align-center md:align-start relative flex w-auto flex-col-reverse  items-center gap-4 rounded border bg-white/20 p-4 px-12 drop-shadow-lg backdrop-blur-lg before:absolute before:-bottom-2 before:-right-2 before:h-4 before:w-4 before:border-b before:border-r before:transition-all before:duration-300 before:ease-in-out after:absolute after:-left-2 after:-top-2 after:h-4 after:w-4 after:border-l after:border-t after:transition-all after:duration-300 after:ease-in-out hover:before:h-[calc(100%+16px)] hover:before:w-[calc(100%+16px)] hover:after:h-[calc(100%+16px)] hover:after:w-[calc(100%+16px)] dark:border-gray-100 dark:bg-black md:flex-row md:gap-2">
        <section className="flex flex-col items-center justify-center gap-2 md:items-start md:justify-start">
          <h1 className="text-center text-2xl font-extrabold leading-tight tracking-tighter md:text-left md:text-4xl">
            Software Developer
          </h1>
          <p className="max-w-[300px] text-center text-sm text-muted-foreground md:max-w-[700px] md:text-left md:text-lg">
            <span className="font-bold italic">Front-end</span> dev by day,
            aspiring infra wizard by night. Always seeking new challenges and
            opportunities to learn.
          </p>
          <div className="max-w-[300px] text-center text-sm text-muted-foreground md:max-w-[1000px] md:text-left md:text-lg">
            <div className="flex flex-col items-center justify-center gap-2 font-semibold md:flex-row md:justify-start">
              {" "}
              Currently works with{" "}
              <span className="flex flex-wrap items-center justify-center gap-3 text-center md:flex-row md:justify-start md:text-left">
                <span className=" flex flex-row gap-2 font-bold text-blue-400">
                  React <IconBrandReact />
                </span>
                <span className="it flex flex-row gap-2 font-bold text-black dark:text-white">
                  Next <IconBrandNextjs />
                </span>
                <span className="it flex flex-row gap-2 font-bold text-blue-600">
                  Typescript <IconBrandTypescript />
                </span>
                <span className="it flex flex-row gap-2 font-bold text-pink-400">
                  GraphQL <IconBrandGraphql />.
                </span>
              </span>
            </div>
            <p className="my-3 text-sm font-normal leading-tight tracking-tighter md:text-lg md:font-semibold">
              The steward of software engineering best practices, processes, and
              metrics with strong analytical and strategic thinking to handle
              software crucial technical decisions.
            </p>
          </div>
        </section>
        <section className="w-36 rounded-xl md:w-60">
          <Image
            src={profileImage}
            quality={65}
            loading="lazy"
            alt="foto roni"
            className="rounded-xl"
          />
        </section>
      </div>
      <InfiniteClientLogo data={clientList} />
      <Work />
      <Education />
    </section>
  )
}
