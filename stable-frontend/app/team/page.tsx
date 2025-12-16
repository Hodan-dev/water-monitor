import { teams } from "@/lib/dummyData";

export default function TeamsPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Repair Teams</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {teams.map((team) => (
          <div
            key={team.id}
            className="bg-white p-5 rounded-xl border shadow-sm"
          >
            <p className="text-lg font-semibold">{team.name}</p>
            <p className="text-sm text-gray-600">
              Area: <span className="text-blue-600">{team.area}</span>
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}

