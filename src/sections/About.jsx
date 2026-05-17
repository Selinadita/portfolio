import { assets } from "../assets/assets";
import { FiInstagram, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

import { FaWhatsapp } from "react-icons/fa";
export default function About() {
  const currentDate = new Date();

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  return (
    <section
      id="about"
      className="w-full bg-cover bg-center py-24"
      style={{ backgroundImage: `url(${assets.background})` }}
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        {/* Left Side */}
        <div className="relative flex justify-center pt-10">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-[#f8e8f6] blur-3xl opacity-40 rounded-full"></div>

          {/* Calendar Card */}
          <div className="relative bg-white/70 backdrop-blur-xl border border-[#e9dff0] rounded-[40px] p-8 shadow-xl w-full max-w-md">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-[#9b7ebd] text-sm font-medium tracking-wide">
                  {new Date().toLocaleString("en-US", { month: "long" })}
                </p>

                <h2 className="text-4xl font-bold text-[#5c5470] relative inline-block">
                  {new Date().getFullYear()}

                  <span className="absolute left-0 -bottom-1 w-16 h-0.75 bg-[#7A9E35] rounded-full"></span>
                </h2>
              </div>

              {/* Today Badge */}
              <div className="bg-[#f48fb1] text-white px-5 py-3 rounded-3xl text-center shadow-lg">
                <p className="text-xs uppercase tracking-wide">Today</p>

                <h1 className="text-3xl font-bold leading-none mt-1">
                  {new Date().getDate()}
                </h1>
              </div>
            </div>

            {/* Days */}
            <div className="grid grid-cols-7 gap-3 text-center mb-5">
              {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
                <div
                  key={index}
                  className={`text-sm font-semibold ${
                    index === 0 || index === 6
                      ? "text-[#f48fb1]"
                      : "text-[#9b7ebd]"
                  }`}
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Dates */}
            <div className="grid grid-cols-7 gap-3">
              {/* Empty Spaces */}
              {Array.from({ length: firstDayOfMonth }).map((_, index) => (
                <div key={`empty-${index}`}></div>
              ))}

              {/* Real Dates */}
              {Array.from({ length: daysInMonth }, (_, i) => {
                const date = i + 1;

                const today = currentDate.getDate();

                // REAL weekday
                const dayIndex = (firstDayOfMonth + i) % 7;

                const isWeekend = dayIndex === 0 || dayIndex === 6;

                return (
                  <div
                    key={i}
                    className={`h-12 w-12 flex items-center justify-center rounded-full text-sm font-medium transition-all duration-300 cursor-pointer
        ${
          date === today
            ? "bg-[#f48fb1] text-white shadow-lg scale-110"
            : isWeekend
            ? "text-[#f48fb1] hover:bg-pink-100"
            : "text-[#5c5470] hover:bg-[#f8e8f6]"
        }`}
                  >
                    {date}
                  </div>
                );
              })}
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-5 left-8 bg-white px-5 py-3 rounded-2xl shadow-md border border-[#e9dff0]">
              <p className="text-sm text-[#7A9E35] font-semibold">
                Available for Projects
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div>
          {/* Title */}
          <div className="relative inline-block">
            <h1 className="text-3xl lg:text-6xl font-bold leading-tight text-[#7A9E35]">
              About Me
            </h1>

            <img
              src={assets.icon2}
              alt="icon"
              className="absolute -bottom-4 -right-10 h-10 w-auto object-contain"
            />
          </div>

          {/* Subtitle */}
          <p className="mt-6 text-[#7A9E35] font-medium tracking-wide uppercase">
            Front-End Developer & UI/UX Designer
          </p>

          {/* Description */}
          <p className="mt-6 text-lg text-[#746c7c] leading-relaxed max-w-2xl">
            Passionate about crafting modern, responsive, and visually engaging
            digital experiences with clean code and thoughtful design.
          </p>

          <p className="mt-5 text-lg text-[#746c7c] leading-relaxed max-w-2xl">
            I enjoy turning creative ideas into elegant interfaces that are not
            only aesthetically pleasing but also intuitive and user-friendly.
          </p>
          {/* Social Media */}
          <div className="flex flex-wrap gap-5 mt-10">
            <a
              href="https://instagram.com/selinadt_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-16 h-16 rounded-full bg-white/90 border border-[#7A9E35] text-[#5c5470] text-2xl shadow-md hover:scale-110 hover:bg-pink-50 hover:shadow-xl transition-all duration-300"
            >
              <FiInstagram />
            </a>

            <a
              href="https://wa.me/628816328453"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-16 h-16 rounded-full bg-white/90 border border-[#7A9E35] text-[#5c5470] text-2xl shadow-md hover:scale-110 hover:bg-green-50 hover:shadow-xl transition-all duration-300"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://linkedin.com/in/selinaditac"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-16 h-16 rounded-full bg-white/90 border border-[#7A9E35] text-[#5c5470] text-2xl shadow-md hover:scale-110 hover:bg-blue-50 hover:shadow-xl transition-all duration-300"
            >
              <FiLinkedin />
            </a>

            <a
              href="https://github.com/Selinadita"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-16 h-16 rounded-full bg-white/90 border border-[#7A9E35] text-[#5c5470] text-2xl shadow-md hover:scale-110 hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <FiGithub />
            </a>

            <a
              href="mailto:selinadita0@gmail.com"
              className="flex items-center justify-center w-16 h-16 rounded-full bg-white/90 border border-[#7A9E35] text-[#5c5470] text-2xl shadow-md hover:scale-110 hover:bg-red-50 hover:shadow-xl transition-all duration-300"
            >
              <FiMail />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
