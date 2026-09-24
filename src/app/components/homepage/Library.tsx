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
  return <div></div>;
};

export default Library;
