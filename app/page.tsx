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
        quantity={50}
      />

      <div className="h-500 align-center relative flex w-auto flex-row items-center gap-2 rounded border bg-white/20 p-4 px-12 drop-shadow-lg backdrop-blur-lg before:absolute before:-bottom-2 before:-right-2 before:h-4 before:w-4 before:border-b before:border-r before:transition-all before:duration-300 before:ease-in-out after:absolute after:-left-2 after:-top-2 after:h-4 after:w-4 after:border-l after:border-t after:transition-all after:duration-300 after:ease-in-out hover:before:h-[calc(100%+16px)] hover:before:w-[calc(100%+16px)] hover:after:h-[calc(100%+16px)] hover:after:w-[calc(100%+16px)] dark:bg-black">
        <section className="flex flex-col gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            Software Developer
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            <span className="font-bold italic">Front-end</span> dev by day,
            aspiring infra wizard by night. Always seeking new challenges and
            opportunities to learn.
          </p>
          <div className="max-w-[1000px] text-lg text-muted-foreground">
            <div className="flex flex-row gap-2">
              {" "}
              Currently works with{" "}
              <span className=" flex flex-row gap-2 font-bold text-blue-400">
                React <IconBrandReact />
              </span>
              ,{" "}
              <span className="it flex flex-row gap-2 font-bold text-black dark:text-white">
                Next <IconBrandNextjs />
              </span>
              ,{" "}
              <span className="it flex flex-row gap-2 font-bold text-blue-600">
                Typescript <IconBrandTypescript />
              </span>{" "}
              and{" "}
              <span className="it flex flex-row gap-2 font-bold text-pink-400">
                GraphQL <IconBrandGraphql />
              </span>
              .
            </div>
            The steward of software engineering best practices, processes, and
            metrics with strong analytical and strategic thinking to handle
            software crucial technical decisions.
          </div>
        </section>
        <section className="w-60 rounded-xl">
          <Image src={profileImage} alt="foto roni" className="rounded-xl" />
        </section>
      </div>
      <InfiniteClientLogo data={clientList} />

      <Work />
      <Education />
    </section>
  )
}
