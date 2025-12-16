import { waterPoints } from "@/lib/dummyData";
import WaterPointCard from "@/components/WaterPointCard";
import Topbar from "@/components/Topbar";

export default function WaterPointsPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <Topbar title="Manage Water Points" />

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {waterPoints.map((wp) => (
          <WaterPointCard key={wp.id} wp={wp} />
        ))}
      </div>
    </div>
  );
}
