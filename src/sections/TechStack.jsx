import {
  FaReact,
  FaVuejs,
  FaBootstrap,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaPhp,
  FaFigma,
} from "react-icons/fa";

import { SiTailwindcss, SiJavascript, SiLaravel, SiMysql } from "react-icons/si";

export default function TechStack() {
  const techs = [
    { name: "React", icon: <FaReact /> },
    { name: "Vue", icon: <FaVuejs /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "Python", icon: <FaPython /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "PHP", icon: <FaPhp /> },
    { name: "Laravel", icon: <SiLaravel /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Figma", icon: <FaFigma /> },
  ];

  return (
    <section className="max-w-5xl mx-auto px-8 overflow-hidden">
      
      {/* Track */}
      <div className="flex w-max animate-scroll gap-4">
        {techs.concat(techs).map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/70 border border-[#f48fb1] text-[#5c5470] shadow-sm whitespace-nowrap"
          >
            <span className="text-xl text-[#7A9E35]">
              {item.icon}
            </span>
            <span className="text-sm font-medium">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}