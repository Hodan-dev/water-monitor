import { StatusBadge } from "./ui/StatusBadge";

export default function WaterPointCard({ wp }: { wp: { id: string; name: string; status: string } }) {
  return (
    <div className="glass-card flex items-center justify-between group cursor-pointer border-l-4 border-l-transparent hover:border-l-primary hover:translate-x-1 transition-all">
      <div>
        <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors">{wp.name}</h3>
        <p className="text-sm text-slate-400 mt-1">ID: #{wp.id}</p>
      </div>
      <StatusBadge status={wp.status.toLowerCase()} />
    </div>

  );
}


