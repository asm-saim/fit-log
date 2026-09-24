import { ArrowRight } from "lucide-react";
import Image from "next/image";

import bannerImg from "@/assets/banner.png";

const Banner = () => {
  return (
    <section className="pb-8 py-8 lg:flex lg:min-h-[calc(100vh-70px)] lg:items-center">
      <div className="mx-auto w-full max-w-7xl px-4 lg:px-6">
        <div className="flex w-full flex-col items-center overflow-hidden rounded-xl border border-[#25282e] bg-[#15171c] md:flex-row pb-6  md:py-10">
          {/* Left Content */}
          <div className="w-full px-6 py-10 md:w-2/3 md:px-10 lg:px-12">
            <p className="mb-5 text-[11px] font-bold text-[#C2F800]">
              WORKOUT LIBRARY
            </p>

            <h1 className="max-w-2xl font-oswald text-4xl font-black leading-[1.15] tracking-tight text-white md:text-5xl lg:text-6xl">
              TRAIN WITH INTENT. LOG <br />
              EVERY SET.
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-6 text-[#9CA3AF] md:text-base">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>

            <a
              href="#library"
              className="mt-7 inline-flex items-center gap-2 rounded-md bg-[#C2F800] px-4 py-3 text-xs font-bold text-black transition-all duration-200 hover:bg-[#b8e600] hover:shadow-[0_0_20px_rgba(204,255,0,0.25)]"
            >
              BROWSE WORKOUTS
              <ArrowRight size={14} strokeWidth={2.5} />
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
      </div>
    </section>
  );
};

export default Banner;
