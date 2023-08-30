/* eslint-disable @next/next/no-img-element */
import "./styles.css"
import Image from "next/image"

import { myFont } from "@/lib/fonts"

type Props = {
  data: {
    image: string
    alt: string
  }[]
}

export const InfiniteClientLogo = (props: Props) => {
  return (
    <section className="container grid items-center gap-6 py-4 md:py-6">
      <h1 className="text-center text-2xl font-extrabold leading-tight tracking-tighter md:text-3xl">
        My Contribution & Impact
      </h1>
      <div className="logos border-1 flex flex-row gap-32 rounded-lg border-white bg-white/20 drop-shadow-lg backdrop-blur-lg">
        <div className="logos-slide  flex flex-row gap-12 ">
          {props.data.map((item, index) => (
            <img src={item.image} className="h-16 md:h-20" alt={item.alt} />
          ))}
          {props.data.map((item, index) => (
            <img src={item.image} className="h-16 md:h-20" alt={item.alt} />
          ))}
        </div>
        x
      </div>
    </section>
  )
}
