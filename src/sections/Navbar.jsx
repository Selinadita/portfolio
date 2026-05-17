import { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { FiMenu, FiArrowRight } from "react-icons/fi";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState("#home");

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      // Kalau di paling atas
      if (window.scrollY < 100) {
        setActiveMenu("#home");
        return;
      }

      let current = "#home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = `#${section.id}`;
        }
      });

      setActiveMenu(current);
    };

    window.addEventListener("scroll", handleScroll);

    // trigger once saat pertama load
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={assets.logo}
            alt="Logo"
            className="h-10 w-auto object-contain"
          />
        </div>

        {/* Right Side */}
        <div className="ml-auto flex items-center">
          {/* Menu */}
          <ul className="hidden md:flex gap-8 text-gray-700 font-medium mr-10">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => setActiveMenu(item.href)}
                  className={`pb-1 transition-all duration-200 ${
                    activeMenu === item.href
                      ? "text-[#f48fb1] border-b-2 border-[#f48fb1]"
                      : "hover:text-pink-500"
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Button */}
          <a
            href="https://wa.me/628816328453"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-[#f48fb1] text-white px-6 py-2 rounded-full hover:bg-pink-600 transition"
          >
            Let's Talk
            <FiArrowRight />
          </a>

          {/* Mobile Menu */}
          <button className="md:hidden text-gray-700 text-3xl">
            <FiMenu />
          </button>
        </div>
      </div>
    </nav>
  );
}
