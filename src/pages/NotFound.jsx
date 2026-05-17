import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#fffdf8] flex items-center justify-center px-6">
      <div className="max-w-xl w-full text-center bg-white border border-[#f2e7ef] rounded-[40px] p-10 shadow-sm">
        
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#f7eef7] text-[#9b7ebd] text-sm mb-6">
          Oops Page Not Found
        </div>

        {/* 404 */}
        <h1 className="text-8xl font-bold text-[#d8c4e8]">
          404
        </h1>

        {/* Title */}
        <h2 className="text-3xl font-bold text-[#5c5470] mt-4">
          This page doesn’t exist.
        </h2>

        {/* Description */}
        <p className="text-[#746c7c] mt-4 leading-relaxed">
          The page you are looking for might have been removed,
          renamed, or is temporarily unavailable.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Link
            to="/"
            className="px-6 py-3 rounded-2xl bg-[#d8c4e8] text-[#5c5470] shadow-sm hover:scale-105 transition"
          >
            Back to Home
          </Link>

          <a
            href="https://github.com/"
            className="px-6 py-3 rounded-2xl border border-[#eadfea] bg-white hover:scale-105 transition"
          >
            Visit GitHub
          </a>
        </div>

        {/* Decorative */}
        <div className="flex justify-center gap-3 mt-10">
          <div className="w-3 h-3 rounded-full bg-[#f4dff3]"></div>
          <div className="w-3 h-3 rounded-full bg-[#d8f3dc]"></div>
          <div className="w-3 h-3 rounded-full bg-[#fde2e4]"></div>
        </div>
      </div>
    </div>
  );
}