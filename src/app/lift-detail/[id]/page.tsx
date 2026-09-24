import LiftDetail from "@/app/components/LiftDetail";
import { ILift } from "@/types";

const getDetailLibrary = async (): Promise<ILift[]> => {
  try {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

    if (!res.ok) {
      throw new Error("Failed to fetch Library");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Error fetching library data", error);
    return [];
  }
};

const LiftDetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const lifts = await getDetailLibrary();

  const lift = lifts.find((lift: ILift) => lift.id === parseInt(id));

  if (!lift) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <h1 className="text-xl font-bold text-white">Lift not found</h1>
      </div>
    );
  }

  return <LiftDetail lift={lift} />;
};

export default LiftDetailPage;
