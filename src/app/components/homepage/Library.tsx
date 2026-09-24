import Lift from "../Lift";

const getLibrary = async () => {
  try {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = await res.json();

    if (!res.ok) {
      throw new Error("Failed to fetch Library");
    }

    return data;
  } catch (error) {
    console.error("Error fetching library data", error);
    return [];
  }
};

const Library = async () => {
  const libraryData = await getLibrary();

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-6 lg:py-12">
      <div className="space-y-2">
        <h1 className="font-oswald text-2xl font-bold text-[#FFFFFF] sm:text-3xl">THE LIBRARY</h1>

        <p className="text-sm font-normal text-[#9CA3AF]">Twelve lifts covering every major muscle group.</p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {libraryData.map((lift) => (
          <Lift key={lift.id} lift={lift} />
        ))}
      </div>
    </div>
  );
};

export default Library;
