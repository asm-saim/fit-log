import Banner from "./components/homepage/Banner";
import Library from "./components/homepage/Library";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fit Log - Workout",
};

const page = () => {
  return (
    <div>
      <Banner></Banner>
      <Library></Library>
    </div>
  );
};

export default page;
