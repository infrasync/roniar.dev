import friends from "@/config/friends"
import FriendCards from "@/components/sections/friends/FriendsCards"

import "@/styles/card.css"

export default function ProjectsPage() {
  return (
    <section className="container grid min-w-full items-center gap-6 pb-8 pt-6 md:py-10">
      <h1 className="text-xl font-extrabold leading-tight tracking-tighter md:text-3xl">
        Friends
      </h1>
      <p className="text-base font-medium md:text-lg">
        Lihat teman-teman saya yang lain
      </p>
      <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-4 md:gap-12">
        {friends.map((friend) => (
          <FriendCards key={friend.name} {...friend} />
        ))}
      </div>
    </section>
  )
}
