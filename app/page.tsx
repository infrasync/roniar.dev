import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import Particles from "@/components/particles"
import LogoSlider from "@/components/sections/ClientSlider"
import Education from "@/components/sections/Education"
import { InfiniteClientLogo } from "@/components/sections/InfiniteClientLogo"
import ProfileIntro from "@/components/sections/ProfileIntro"
import Work from "@/components/sections/Work"
import { clientList } from "@/components/sections/client-list"

export default function IndexPage() {
  return (
    <section className="container grid min-w-full items-center justify-center gap-6 pb-8 pt-6 md:py-10">
      <Particles
        className="pointer-events-none absolute inset-0"
        quantity={75}
      />
      <ProfileIntro />

      <InfiniteClientLogo data={clientList} />
      <Work />
      <Education />
    </section>
  )
}
