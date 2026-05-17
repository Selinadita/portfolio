import { FiCode, FiLayout, FiSmartphone, FiArrowUpRight } from "react-icons/fi";
export default function Services() {
  const services = [
    {
      title: "Front-End Development",
      description:
        "Building modern and interactive websites using clean, scalable, and efficient code.",
      icon: <FiCode />,
    },
    {
      title: "UI/UX Design",
      description:
        "Designing aesthetic and user-friendly interfaces with thoughtful user experiences.",
      icon: <FiLayout />,
    },
    {
      title: "Responsive Design",
      description:
        "Creating websites that look perfect across desktop, tablet, and mobile devices.",
      icon: <FiSmartphone />,
    },
  ];

  return (
    <section id="skills" className="w-full py-24 px-6 ">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-16 flex flex-col items-center relative">
          <div className="relative inline-block">
            <div className="text-center">
              <h2 className="text-3xl lg:text-6xl font-bold leading-tight text-[#f48fb1]">
                What <span className="text-[#7A9E35]">I Can Do</span>
              </h2>

              <div className="w-20 h-1 bg-[#f48fb1] mx-auto mt-2 rounded-full"></div>
            </div>
          </div>

          <p className="mt-4 text-lg text-[#746c7c] leading-relaxed max-w-2xl text-center">
            I help brands and businesses build elegant digital experiences
            through modern development and thoughtful design solutions.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center items-center gap-4">
          {" "}
          {services.map((service, index) => (
            <div
              key={index}
              className="w-70 group relative bg-white backdrop-blur-xl border border-[#eadfea] rounded-3xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden"
            >
              {/* Glow */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-pink-100 rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-all duration-500"></div>

              {/* Icon */}
              <div className="relative w-12 h-12 rounded-xl bg-[#fdf4f8] text-[#f48fb1] flex items-center justify-center text-xl shadow-sm transition-all duration-300 group-hover:bg-[#f48fb1] group-hover:text-white group-hover:scale-110">
                {service.icon}
              </div>

              {/* Content */}
              <div className="relative mt-5">
                <h3 className="text-lg font-bold text-gray-700">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm text-[#746c7c] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
