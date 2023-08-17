"use client"

import Link from "next/link"
import {
  IconBrandGraphql,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandTypescript,
  IconLink,
} from "@tabler/icons-react"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import Particles from "@/components/particles"

export default function Education() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <h1 className="text-center text-2xl font-extrabold leading-tight tracking-tighter md:text-3xl">
        Education
      </h1>

      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        <li className="mb-3 ml-6">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
            <svg
              className="h-2.5 w-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="mb-1 flex-row items-center text-sm font-semibold text-gray-900 dark:text-white md:flex md:text-xl">
            <span className="font-extrabold leading-tight tracking-tighter">
              AWS Certified Cloud Practitioner (AWS ACP)
            </span>{" "}
            <span className="ml-3 mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300 md:text-sm">
              Certification
            </span>
            <a
              href="https://www.credly.com/badges/cf6ca22e-9e82-4cb1-9927-720de29be2f9/linked_in_profile"
              target="_blank"
              className="ml-3 mr-2 hidden items-center gap-1 rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 hover:bg-green-300 dark:bg-green-900 dark:text-green-300 md:visible md:inline-flex md:text-sm"
              rel="noopener noreferrer"
            >
              <IconLink className="h-5 w-5" />
              View
            </a>
          </h3>
          <span className="text-sm font-bold leading-tight tracking-tighter text-gray-500 dark:text-gray-200 md:text-lg">
            Amazon Web Service
          </span>
          <time className="mb-2 block text-xs font-normal leading-none text-gray-400 dark:text-gray-500 md:text-sm">
            Oct 2022 - now
          </time>
        </li>
        <li className="mb-3 ml-6">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
            <svg
              className="h-2.5 w-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="mb-1 flex-row items-center text-sm font-semibold text-gray-900 dark:text-white md:flex md:text-xl">
            <span className="font-extrabold leading-tight tracking-tighter">
              Problem Solving (Basic)
            </span>{" "}
            <span className="ml-3 mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300 md:text-sm">
              Certification
            </span>
            <a
              href="https://www.credly.com/badges/cf6ca22e-9e82-4cb1-9927-720de29be2f9/linked_in_profile"
              target="_blank"
              className="ml-3 mr-2 hidden items-center gap-1 rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 hover:bg-green-300 dark:bg-green-900 dark:text-green-300 md:visible md:inline-flex md:text-sm"
              rel="noopener noreferrer"
            >
              <IconLink className="h-5 w-5" />
              View
            </a>
          </h3>
          <span className="text-sm font-bold leading-tight tracking-tighter text-gray-500 dark:text-gray-200 md:text-lg">
            HackerRank
          </span>
          <time className="mb-2 block text-xs font-normal leading-none text-gray-400 dark:text-gray-500 md:text-sm">
            Oct 2022 - now
          </time>
        </li>
        <li className="mb-4 ml-6">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
            <svg
              className="h-2.5 w-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="mb-1 text-sm font-semibold text-gray-900 dark:text-white md:text-xl">
            <span className="font-extrabold leading-tight tracking-tighter">
              Junior Web Developer
            </span>
            <span className="ml-3 mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300 md:text-sm">
              Certification
            </span>
          </h3>
          <span className="text-sm font-bold leading-tight tracking-tighter text-gray-500 dark:text-gray-200 md:text-lg">
            BNSP Indonesia
          </span>
          <time className="mb-2 block text-xs font-normal leading-none text-gray-400 dark:text-gray-500 md:text-sm">
            2019
          </time>
        </li>
        <li className="mb-4 ml-6 ">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
            <svg
              className="h-2.5 w-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="mb-1 text-sm font-semibold text-gray-900 dark:text-white md:text-xl">
            <span className="font-extrabold leading-tight tracking-tighter">
              Junior Network Administrator
            </span>{" "}
            <span className="ml-3 mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300 md:text-sm">
              Certification
            </span>
          </h3>
          <span className="text-sm font-bold leading-tight tracking-tighter text-gray-500 dark:text-gray-200 md:text-lg">
            BNSP Indonesia
          </span>
          <time className="mb-2 block text-xs font-normal leading-none text-gray-400 dark:text-gray-500 md:text-sm">
            2019
          </time>
        </li>
        <li className="mb-4 ml-6 ">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
            <svg
              className="h-2.5 w-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="mb-1 text-sm font-semibold text-gray-900 dark:text-white md:text-xl">
            <span className="font-extrabold leading-tight tracking-tighter">
              Teknik Informatika
            </span>{" "}
            <span className="ml-3 mr-2 rounded bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 md:text-sm">
              Formal
            </span>
          </h3>
          <span className="text-sm font-bold leading-tight tracking-tighter text-gray-500 dark:text-gray-200 md:text-lg">
            Universitas Stikubank
          </span>
          <time className="mb-2 block text-xs font-normal leading-none text-gray-400 dark:text-gray-500 md:text-sm">
            Aug 2019 - December 2023
          </time>
        </li>
        <li className="mb-4 ml-6 ">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
            <svg
              className="h-2.5 w-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="mb-1 text-sm font-semibold text-gray-900 dark:text-white md:text-lg">
            <span className="font-extrabold">Teknik Komputer & Jaringan</span>{" "}
            <span className="ml-3 mr-2 rounded bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 md:text-sm">
              Formal
            </span>
          </h3>
          <span className="text-sm font-bold leading-tight tracking-tighter text-gray-500 dark:text-gray-200 md:text-lg">
            SMK N 8 Semarang
          </span>
          <time className="mb-2 block text-xs font-normal leading-none text-gray-400 dark:text-gray-500 md:text-sm">
            Aug 2016 - May 2019
          </time>
        </li>
      </ol>
    </section>
  )
}
