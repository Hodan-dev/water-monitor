export default function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {

    WORKING: "bg-green-100 text-green-700",
    BROKEN: "bg-red-100 text-red-700",
    ASSIGNED: "bg-yellow-100 text-yellow-700"
  };
  const cls = map[status] ?? "bg-gray-100 text-gray-700";
  return <span className={`px-3 py-1 rounded-full text-xs font-medium ${cls}`}>{status}</span>;
}

