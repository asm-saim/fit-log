import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="text-center">
        <p className="font-oswald text-6xl font-bold text-[#CCFF00]">404</p>

        <h1 className="mt-3 text-2xl font-bold text-white">PAGE NOT FOUND</h1>

        <p className="mt-2 text-sm text-[#8A92A0]">The page you are looking for does not exist.</p>

        <Link
          href="/"
          className="mt-6 inline-block rounded-full bg-[#CCFF00] px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-lime-300"
        >
          Back to workouts
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
