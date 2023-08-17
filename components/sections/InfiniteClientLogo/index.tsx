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
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-6">
      <h1 className="text-center text-3xl font-extrabold">
        My Contribution & Impact
      </h1>
      <div className="logos border-1 flex flex-row gap-32 rounded-lg border-white bg-white/30 drop-shadow-lg backdrop-blur-lg">
        <div className="logos-slide  flex flex-row gap-12 ">
          {props.data.map((item, index) => (
            <Image src={item.image} className="h-20" alt={item.alt} />
          ))}
          {props.data.map((item, index) => (
            <Image src={item.image} className="h-20" alt={item.alt} />
          ))}
        </div>
      </div>
    </section>
  )
}
