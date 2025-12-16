import Link from "next/link";


export default function Sidebar() {
  return (
    <aside className="w-64 border-r border-white/10 p-6 flex flex-col glass h-screen fixed left-0 top-0 z-50">
      <h2 className="text-xl font-semibold mb-8 text-primary tracking-tight">Water Monitor</h2>

      <nav className="flex flex-col gap-2">
        {[
          { href: "/admin", label: "Dashboard" },
          { href: "/admin/reports", label: "Reports" },
          { href: "/admin/water-points", label: "Water Points" },
          { href: "/admin/teams", label: "Teams" },
        ].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="px-4 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all text-sm font-medium"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="mt-auto pt-6 border-t border-white/10">
        <div className="text-xs text-slate-500">© 2025 Somerset</div>
      </div>
    </aside>
  );
}

