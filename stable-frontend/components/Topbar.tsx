export default function Topbar({ title }: { title?: string }) {
  return (
    <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
      <div>
        <h2 className="text-2xl font-bold text-white tracking-tight">{title}</h2>
        <div className="text-sm text-slate-400 mt-1">Somalia Water Monitor System</div>
      </div>
      <div className="flex items-center gap-3">
        <div className="text-right">
          <div className="text-sm font-medium text-white">Admin User</div>
          <div className="text-xs text-slate-500">Online</div>
        </div>
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white font-bold">
          A
        </div>
      </div>
    </div>
  );
}

