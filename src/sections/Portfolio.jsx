import { Link } from "react-router-dom";
import projects from "../assets/projects";
export default function Portfolio() {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-24">
    <div className="flex items-center justify-between mb-14">
  <div>
    <h2 className="text-3xl font-bold text-[#7A9E35]">
      Featured Projects
    </h2>
  </div>

  <Link
    to="/projects"
    className="text-[#f48fb1] font-medium hover:text-[#7A9E35] transition"
  >
    View All Projects →
  </Link>
</div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.slice(0, 3).map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl border border-[#f2e7ef] overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#f48fb1] group"
          >
                      <div className="relative">
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-60 object-cover p-4 rounded-4xl transition-transform duration-300 group-hover:scale-[1.03]"
  />

  <div className="absolute top-7 right-7 bg-white backdrop-blur-sm text-[#f48fb1] text-sm font-semibold px-3 py-1 rounded-full shadow-sm">
    {project.year}
  </div>
</div>


            <div className="px-4 pb-4">
              <div className="mb-2 flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded-full px-3 py-1 text-sm font-medium bg-[#edffc8] text-[#7A9E35] border border-[#7A9E35]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h3 className="text-lg font-bold text-[#5c5470]">
                {project.title}
              </h3>

              <div className="mt-2 flex items-start justify-between gap-2">
                <p className="text-sm text-[#746c7c] leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}