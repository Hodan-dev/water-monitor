import WaterPointCard from "@/components/WaterPointCard";
import { waterPoints } from "@/lib/dummyData";

export default function StatusPage() {
  return (
    <main className="p-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold mb-2">Community Water Status</h1>
        <p className="text-sm text-gray-600">Live status of all water points.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {waterPoints.length > 0 ? (
            waterPoints.map((wp) => (
              <WaterPointCard key={wp.id} wp={wp} />
            ))
          ) : (
            <p className="text-gray-500">No water points available.</p>
          )}
        </div>
      </div>
    </main>
  );
}
