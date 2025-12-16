export default function DashboardCard({title, value}:{title:string; value:number}) {
  return (
    <div className="card">
      <div className="text-sm text-[#1A1A1A]/70">{title}</div>
      <div className="text-2xl font-semibold mt-2">{value}</div>
    </div>
  );
}
