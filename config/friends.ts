import { StaticImageData } from "next/image"
import irsyadImage from "@/public/friends/irsyad.jpeg"

type Props = {
  name: string
  socials: {
    website: string
    github: string
    linkedin: string
  }
  image: StaticImageData
}

const friends: Props[] = [
  {
    name: "Irsyad Abdul",
    socials: {
      website: "https://irsyadabdul.my.id",
      github: "abdul15irsyad",
      linkedin: "irsyad-abdul-hamid-d",
    },
    image: irsyadImage,
  },
]

export default friends
