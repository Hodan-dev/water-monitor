import { teams } from "@/lib/dummyData";
import Topbar from "@/components/Topbar";

export default function TeamsPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <Topbar title="Repair Teams" />

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {teams.map((team) => (
          <div key={team.id} className="card">
            <p className="font-semibold">{team.name}</p>
            <p className="text-sm text-[#6B7280]">Area: {team.area}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
