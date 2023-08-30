import Image, { StaticImageData } from "next/image"
import ykanThumb from "@/public/projects/ykan/ykan-thumb.png"

type Props = {
  name: string
  description: string
  tech: string[]
  thumbnail: StaticImageData
}

export default function ProjectCards(props: Props) {
  return (
    <div className="align-center md:align-start relative flex h-fit w-full flex-row items-center justify-center gap-4 rounded border bg-white/20 p-4 drop-shadow-lg  backdrop-blur-lg before:absolute before:-bottom-2 before:-right-2 before:h-4 before:w-4 before:border-b before:border-r before:transition-all before:duration-300 before:ease-in-out after:absolute after:-left-2 after:-top-2 after:h-4 after:w-4 after:border-l after:border-t after:transition-all after:duration-300 after:ease-in-out hover:before:h-[calc(100%+16px)] hover:before:w-[calc(100%+16px)] hover:after:h-[calc(100%+16px)] hover:after:w-[calc(100%+16px)] dark:border-white dark:bg-black md:h-56">
      <div className="space-between flex min-w-full flex-col items-start gap-6 md:flex-row">
        <section className="h-full w-full md:w-3/4">
          <Image
            src={props.thumbnail}
            alt="YKAN"
            className="rounded"
            width={1000}
            height={1000}
            layout="filled"
          />
        </section>
        <div className="flex w-full flex-col gap-3">
          <p className="w-full text-sm font-bold leading-tight tracking-tighter md:text-xl">
            {props.name}
          </p>
          <section className="flex flex-row flex-wrap gap-1 text-sm text-white md:gap-4">
            {props.tech.map((tech, _) => (
              <div
                className="rounded-sm bg-red-500 px-2 py-1 text-xs font-semibold md:text-base"
                key={`data=${Math.random()}`}
              >
                {tech}
              </div>
            ))}
          </section>
          <p className="text-xs md:text-sm">{props.description}</p>
        </div>
      </div>
    </div>
  )
}
