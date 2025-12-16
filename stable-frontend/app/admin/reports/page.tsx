import { reports } from "@/lib/dummyData";
import ReportCard from "@/components/ReportCard";
import Topbar from "@/components/Topbar";

export default function ReportsPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <Topbar title="Water Issue Reports" />

      <div className="mt-6">
        {reports.map((r) => (
          <ReportCard key={r.id} r={r} />
        ))}
      </div>
    </div>
  );
}
