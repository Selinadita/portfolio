import React from "react";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import projects from "../assets/projects";

function Projects() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-18">
      <div className="mb-14 text-center">
        <Link
          to="/"
          className="inline-flex items-center gap-2 border border-[#f48fb1] text-[#f48fb1] px-5 py-2 rounded-full hover:bg-[#f48fb1] hover:text-white transition-all duration-300"
        >
          <FiArrowLeft />
          Back to Home
        </Link>

        <h2 className="text-4xl font-bold text-[#2e2a3b] mt-4">
          All <span className="text-[#f57baa]">Projects</span>
        </h2>

        <p className="text-[#6e6a75] mt-4 max-w-2xl mx-auto">
          Explore the projects I have worked on in web development and UI/UX
          design, focusing on responsive layouts, modern interfaces, and user
          experience.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
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

              <h3 className="text-lg font-bold text-[#2e2a3b]">
                {project.title}
              </h3>

              <div className="mt-2 flex items-start justify-between gap-2">
                <p className="text-sm text-[#6e6a75] leading-relaxed">
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

export default Projects;
