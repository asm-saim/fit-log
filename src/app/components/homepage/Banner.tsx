import { ArrowRight } from "lucide-react";
// import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

import bannerImg from "@/assets/banner.png";

const Banner = () => {
  return (
    <section className="px-4 py-8 md:px-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center overflow-hidden rounded-xl border border-[#25282e] bg-[#15171c] md:flex-row py-5 md:py-10">
        {/* Left Content */}
        <div className="w-full px-6 py-10 md:w-2/3 md:px-10 lg:px-12">
          {/* Eyebrow */}
          <p className="mb-5  text-[11px] font-bold  text-[#C2F800]">WORKOUT LIBRARY</p>

          {/* Heading */}
          <h1 className="max-w-2xl text-4xl font-black font-oswald leading-[1.15] text-white md:text-5xl tracking-tight lg:text-6xl">
            TRAIN WITH INTENT. LOG <br />
            EVERY SET.
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-sm leading-6 text-[#9CA3AF] md:text-base">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch the
            week&apos;s work add up.
          </p>

          {/* CTA */}
          <a
            href="#library"
            className="mt-7 inline-flex items-center gap-2 rounded-md bg-[#ccff00] px-4 py-3 text-[11px] font-bold text-black transition-all duration-200 hover:bg-[#b8e600] hover:shadow-[0_0_20px_rgba(204,255,0,0.25)]"
          >
            BROWSE WORKOUTS
            <ArrowRight size={14} strokeWidth={2.5} />
            {/* <FaArrowRight size={12} /> */}
          </a>
        </div>

        {/* Right Image */}
        <div className="flex w-full items-end justify-center md:w-1/3 md:self-stretch">
          <Image
            src={bannerImg}
            alt="Person performing a workout"
            className="h-64 w-auto object-contain md:h-72 lg:h-96"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
