"use client"

import Link from "next/link"
import {
  IconBrandGraphql,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandTypescript,
  IconBriefcase,
} from "@tabler/icons-react"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import Particles from "@/components/particles"

export default function Work() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <h1 className="text-center text-3xl font-extrabold">Work Experience</h1>

      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        <li className="mb-10 ml-6">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
            <IconBriefcase className="h-3 w-3 text-blue-800 dark:text-blue-300" />
          </span>
          <h3 className="mb-1 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
            <span className="font-extrabold">Frontend Developer</span> - PT.
            Optima Media Teknologi{" "}
            <span className="ml-3 mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
              Latest
            </span>
            <span className="ml-3 mr-2 rounded bg-teal-100 px-2.5 py-0.5 text-sm font-medium text-teal-800 dark:bg-teal-900 dark:text-teal-300">
              Contract
            </span>
          </h3>
          <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Oct 2022 - now
          </time>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            {" "}
            I specialize in building fast, robust, and optimized web
            applications using modern technologies such as Next.js, TypeScript,
            React, MapLibre, Mapbox, and Mantine UI. I work closely with clients
            to understand their unique needs and create custom solutions that
            address their specific business challenges, particularly in the
            realm of geospatial web applications.
          </p>
        </li>
        <li className="mb-10 ml-6">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
            <IconBriefcase className="h-3 w-3 text-blue-800 dark:text-blue-300" />
          </span>
          <h3 className="mb-1 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
            <span className="font-extrabold">Content Moderator</span> - DEV.to
            <span className="ml-3 mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
              Latest
            </span>
            <span className="ml-3 mr-2 rounded bg-orange-100 px-2.5 py-0.5 text-sm font-medium text-orange-800 dark:bg-orange-900 dark:text-orange-300">
              Part-time
            </span>
          </h3>
          <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            May 2023 - now
          </time>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            {" "}
            I have been honored to be selected as a &rsquo;Kind DEV
            Citizen&rsquo; and entrusted with the position of Content Moderator,
            responsible for curating dev.to posts and moderating content for
            fellow users. And moderating for content on tags : #frontend,
            #react, #typescript, #serverless, #indonesia , and #linux
          </p>
        </li>
        <li className="mb-10 ml-6">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
            <IconBriefcase className="h-3 w-3 text-blue-800 dark:text-blue-300" />
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            <span className="font-extrabold">Frontend Developer</span> - NAFAS
            Indonesia
            <span className="ml-3 mr-2 rounded bg-fuchsia-100 px-2.5 py-0.5 text-sm font-medium text-fuchsia-800 dark:bg-fuchsia-900 dark:text-fuchsia-300">
              Internship
            </span>
          </h3>
          <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            May 2022 - Aug 2022
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            At the core, nafas has a mission to educate Indonesians about the
            dangers of air quality on our health. This education will be done
            through data, by making trusted air quality data available to
            anybody at the click of a button.{" "}
          </p>
          <p className="text-base font-bold text-gray-800 dark:text-gray-400">
            Contributions :
          </p>
          <ol className="mt-2 list-decimal px-4">
            <li>
              {" "}
              Made billboard website to handling various data for core business
            </li>
            <li>Fully transform JS Code to TypeScript</li>
            <li>Using jest & RTL to testing app with up to 70% coverage</li>
            <li>Using Tailwind to styling and implement it with CSS Module</li>
            <li>
              Using REST API and Websocket to made web robust and dynamic for
              data fetching
            </li>
            <li>Designed Code Structure with KISS and Clean Code approach</li>
          </ol>
        </li>
        <li className="ml-6">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
            <IconBriefcase className="h-3 w-3 text-blue-800 dark:text-blue-300" />
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            <span className="font-extrabold">Frontend Developer</span> -
            Generasi GIGIH 2.0 By GoTo Impact
            <span className="ml-3 mr-2 rounded bg-fuchsia-100 px-2.5 py-0.5 text-sm font-medium text-fuchsia-800 dark:bg-fuchsia-900 dark:text-fuchsia-300">
              Internship
            </span>
          </h3>
          <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Feb 2022 - July 2022
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Program from GoTo Impact by Gojek & Tokopedia Explore and learn more
            about frontend developers using React.js Selected as awardee of
            GIGIH Interns at GoTo Impact Partner.
          </p>
          <p className="text-base font-bold text-gray-800 dark:text-gray-400">
            Contributions :
          </p>
          <ol className="mt-2 list-decimal px-4">
            <li>
              {" "}
              Learn and Implement best practice from Web Fundamentals to Modern
              Javascript
            </li>
            <li>
              Using React JS to Solve Real World problem and implement the
              solution in Web Apps
            </li>
            <li>
              Learn and practicing Unit Testing, Clean Code, Refactoring in
              React and TypeScript
            </li>
          </ol>
        </li>
      </ol>
    </section>
  )
}
