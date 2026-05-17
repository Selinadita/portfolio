import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { assets } from "../assets/assets";

export default function Contact() {
  return (
    <section  id="contact" className="max-w-7xl mx-auto px-6 py-20">
      <div className="relative overflow-hidden rounded-[40px] border border-[#f5dfe7] bg-[#ffeef4] p-10 shadow-sm">
        <div className="grid lg:grid-cols-3 gap-10 items-center relative z-10">
          {/* Left Image */}
          <div className="relative flex justify-center">
            <div className="bg-white p-3 rounded-[30px] shadow-md rotate-[-4deg]">
              <img
                src={assets.icon5}
                alt="contact"
                className="rounded-3xl bject-cover h-100 w-full"
              />
            </div>
            {/* Decorative Sticker */}
            <div className="absolute -top-4 -left-4 bg-pink-300 w-20 h-8 rotate-[-20deg] rounded-md opacity-80"></div>
            <div className="absolute -bottom-2 -right-6 bg-pink-300 w-20 h-8 rotate-[-20deg] rounded-md opacity-80"></div>
          </div>
          {/* Middle Content */}
          <div>
            <p className="text-[#f48fb1] font-semibold mb-3">Contact</p>
            <h2 className="text-3xl font-bold leading-tight text-[#3f3d56]">
              Let’s Create
              <br />
              <span className="text-[#f48fb1]">Something</span>
              <br />
              Amazing Together.
            </h2>
            <div className="w-40 h-1 bg-[#f48fb1] rounded-full mt-5"></div>
            <p className="text-[#746c7c] mt-6 leading-9 text-lg">
              I’m available for freelance projects, collaborations, and creative
              ideas. Let’s work together to build beautiful and meaningful
              digital experiences.
            </p>
          </div>

          {/* Right Side */}
          <div className="space-y-6">
            {/* Contact Card */}
            <div className="space-y-5">
              <div className="flex items-start gap-4 border-b border-pink-100 pb-5">
                <div className="bg-white shadow-sm p-4 rounded-2xl">
                  <FiMail className="text-[#f48fb1] text-2xl" />
                </div>
                <div>
                  <p className="text-[#f48fb1] text-sm font-medium">Email</p>
                  <h4 className="text-[#3f3d56] font-semibold text-lg">
                    selinadita0@gmail.com
                  </h4>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white shadow-sm p-4 rounded-2xl">
                  <FiMapPin className="text-[#f48fb1] text-2xl" />
                </div>
                <div>
                  <p className="text-[#f48fb1] text-sm font-medium">Location</p>
                  <h4 className="text-[#3f3d56] font-semibold text-lg">
                    Surabaya, Indonesia
                  </h4>
                </div>
              </div>
            </div>
            {/* Right Image */}
            <div className="relative mt-8 flex justify-end">
              {/* Flower Decoration */}
              <div className="absolute  top-8 right-6 text-7xl">
                <img src={assets.icon4} alt="contact" className=" w-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Cute Card */}
        <div className="mt-10 bg-white rounded-[30px] shadow-sm px-8 py-6 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
          <div className="flex items-center gap-5">
            <div>
              <p className="text-[#746c7c] text-lg">
                Have a project in mind or just want to say hi?
              </p>
              <h3 className="text-2xl font-bold text-[#f48fb1]">
                I’d love to hear from you!
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
