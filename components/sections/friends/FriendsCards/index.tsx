import Image, { StaticImageData } from "next/image"
import ykanThumb from "@/public/projects/ykan/ykan-thumb.png"
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconWorld,
} from "@tabler/icons-react"

type Props = {
  name: string
  socials: {
    website: string
    github: string
    linkedin: string
  }
  image: StaticImageData
}

export default function FriendCards(props: Props) {
  return (
    <div className="align-center md:align-start relative flex h-fit w-full flex-col items-center justify-center gap-4 rounded border bg-white/20 p-6 drop-shadow-lg  backdrop-blur-lg  dark:border-white dark:bg-black">
      <div className="h-48 w-48">
        <Image
          src={props.image}
          alt="project"
          className="rounded"
          width={500}
          height={500}
          layout="filled"
        />
      </div>
      <div className="flex w-full flex-col gap-3">
        <p className="w-full text-center text-sm font-extrabold leading-tight tracking-tighter md:text-3xl">
          {props.name}
        </p>
        <p className="w-full text-center text-sm font-black leading-tight tracking-tighter text-gray-500 md:text-lg">
          Back-End Developer
        </p>
        <p className="w-full text-center text-xs font-medium leading-tight tracking-tighter text-gray-800 dark:text-white md:text-base">
          {`"keep improving", di dalam dunia pengembangan web/aplikasi kita perlu terus menerus mempelajari hal-hal baru yang relevan`}
        </p>
      </div>
      <div className="flex w-full flex-row items-center justify-center gap-3">
        <section className="rounded-md bg-orange-500 p-2  text-white hover:cursor-pointer hover:bg-orange-700">
          <IconWorld size={24} />
        </section>
        <section className="rounded-md bg-gray-800 p-2 text-white hover:cursor-pointer hover:bg-gray-600">
          <IconBrandGithub size={24} />
        </section>
        <section className="rounded-md bg-blue-500 p-2 text-white hover:cursor-pointer hover:bg-blue-600">
          <IconBrandLinkedin size={24} />
        </section>
      </div>
    </div>
  )
}
