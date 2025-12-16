interface ReportProps {
  name: string;
  desc: string;
  status: string;
}

import { StatusBadge } from "./ui/StatusBadge";

export default function ReportCard({ r }: { r: ReportProps }) {
  return (
    <div className="glass-card mb-4 flex justify-between items-center group hover:bg-white/5 transition-colors">
      <div>
        <div className="font-semibold text-white group-hover:text-primary transition-colors">{r.name}</div>
        <div className="text-sm text-slate-400 mt-1">{r.desc}</div>
      </div>
      <StatusBadge status={r.status.toLowerCase()} />
    </div>
  );
}

