import { assets } from "../assets/assets";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 min-h-screen grid lg:grid-cols-2 gap-10 items-start pt-20">
      {/* Left Content */}
      <div className="pt-14">
        <div className="inline-flex px-4 py-2 rounded-full bg-[#edffc8] text-[#7A9E35] border border-[#7A9E35] text-sm mb-6">
          FRONT END DEVELOPER
        </div>

        <div className="flex items-center gap-10">
          <h1 className="text-5xl lg:text-5xl font-bold leading-tight text-black">
            Hi, I'm Selina
          </h1>

          <img
            src={assets.icon}
            alt="icon"
            className="h-10 w-auto object-contain"
          />
        </div>

        <h1 className="text-6xl lg:text-6xl font-semibold leading-tight text-[#f48fb1]">
          I Build Beautiful Web Experiences
        </h1>
        <p className=" text-lg text-[#746c7c] leading-relaxed max-w-xl">
          I create responsive and user-friendly websites with clean code, modern
          design, and intuitive experiences that help brands stand out in the
          digital world.
        </p>

        <div className="flex gap-4 mt-8">
          <Link
            to="/projects"
            className="hidden md:flex items-center gap-2 bg-[#7A9E35] text-white px-5 py-2 rounded-full hover:bg-[#6b8c2f] hover:scale-105 transition-all duration-300"
          >
            View Projects
            <FiArrowRight />
          </Link>

          <a
            href="/cv-selina.pdf"
            download
            className="hidden md:flex items-center gap-2 border border-[#f48fb1] text-[#f48fb1] px-5 py-2 rounded-full hover:bg-pink-50 hover:border-pink-400 hover:scale-105 transition-all duration-300"
          >
            Download CV
            <FiDownload />
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex justify-center lg:justify-end pt-1">
        <img
          src={assets.hero}
          alt="Hero"
          className="w-full max-w-2xl lg:max-w-4xl object-contain"
        />
      </div>
    </section>
  );
}
