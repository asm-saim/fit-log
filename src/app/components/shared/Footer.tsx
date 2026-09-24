import Image from "next/image";
import Logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/5 bg-[#0a0a0f]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:py-6 sm:px-6">
        <div className="flex shrink-0 items-center gap-2">
          <Image src={Logo} alt="logo" width={28} height={28} />
          <span className="text-sm font-semibold tracking-wide text-white">FITLOG</span>
        </div>

        <p className="text-right text-[10px] leading-relaxed text-[#6B7280] sm:text-xs">
          © {new Date().getFullYear()} FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
