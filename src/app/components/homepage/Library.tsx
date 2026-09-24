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
  console.log(libraryData);
  return (
    <div className="mx-auto max-w-7xl py-12 lg:px-6">
      <div className="space-y-2">
        <h1 className="font-bold font-oswald text-3xl text-[#FFFFFF]">THE LIBRARY</h1>
        <p className="font-normal text-[#9CA3AF] text-sm">Twelve lifts covering every major muscle group.</p>
      </div>
      <div className=" grid grid-cols-3 gap-8 mt-8">
        {libraryData.map((lift) => (
          <Lift key={lift.id} lift={lift}></Lift>
        ))}
      </div>
    </div>
  );
};

export default Library;
