import projects from "@/config/projects"
import ProjectCards from "@/components/sections/projects/ProjectCards"

export default function ProjectsPage() {
  return (
    <section className="container grid min-w-full items-center gap-6 pb-8 pt-6 md:py-10">
      <h1 className="text-xl font-extrabold leading-tight tracking-tighter md:text-3xl">
        Projects
      </h1>
      <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 md:gap-12">
        {projects.map((project, _) => (
          <ProjectCards {...project} key={`project-${Math.random()}`} />
        ))}
      </div>
    </section>
  )
}
