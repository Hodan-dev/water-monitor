import Sidebar from "@/components/Sidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-background bg-[url('/grid.svg')] bg-fixed">
      {/* Sidebar is fixed, so we don't need it in flow, but we need left margin for content */}
      <Sidebar />

      <main className="flex-1 ml-64 p-8">
        {children}
      </main>
    </div>
  );
}


