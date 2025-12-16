"use client";
import { reports } from "@/lib/dummyData";
import { StatusBadge } from "./ui/StatusBadge";


export default function ReportTable() {
  return (
    <div className="glass-card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-white/10">
              <th className="p-4 text-xs font-semibold uppercase tracking-wider text-slate-400">#</th>
              <th className="p-4 text-xs font-semibold uppercase tracking-wider text-slate-400">Title</th>
              <th className="p-4 text-xs font-semibold uppercase tracking-wider text-slate-400">Type</th>
              <th className="p-4 text-xs font-semibold uppercase tracking-wider text-slate-400">Status</th>
              <th className="p-4 text-xs font-semibold uppercase tracking-wider text-slate-400">Assigned</th>
              <th className="p-4 text-xs font-semibold uppercase tracking-wider text-slate-400">Date</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-white/5">
            {reports.slice(0, 6).map((r, i) => (
              <tr key={r.id} className="hover:bg-white/5 transition-colors">
                <td className="p-4 text-sm text-slate-500">{i + 1}</td>
                <td className="p-4 text-sm font-medium text-white">{r.name}</td>
                <td className="p-4 text-sm text-slate-400">{r.desc}</td>

                <td className="p-4 text-sm">
                  {/* Mapping old status to new Badge types if needed, or just passing string if Badge handles it */}
                  <StatusBadge status={r.status.toLowerCase()} />

                </td>

                <td className="p-4 text-sm text-slate-300">{r.assignedTo ?? "-"}</td>
                <td className="p-4 text-sm text-slate-500">{r.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

