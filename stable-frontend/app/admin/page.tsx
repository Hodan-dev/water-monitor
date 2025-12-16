"use client";

import StatCard from "@/components/StatCard";
import BarChart from "@/components/charts/BarChart";
import PieChart from "@/components/charts/PieChart";
import ReportTable from "@/components/ReportTable";
import { reports } from "@/lib/dummyData";

export default function AdminDashboard() {
  // Chart Data
  const issueLabels = ["Broken", "Contamination", "No Water"];
  const issueCounts = [
    reports.filter((r) => r.type === "BROKEN").length,
    reports.filter((r) => r.type === "CONTAMINATION").length,
    reports.filter((r) => r.type === "NO_WATER").length,
  ];

  const statusLabels = ["Fixed", "Open"];
  const statusCounts = [
    reports.filter((r) => r.status === "FIXED").length,
    reports.filter((r) => r.status !== "FIXED").length,
  ];

  return (
    <div className="max-w-6xl mx-auto">

      {/* Page Title */}
      <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
      <p className="text-sm text-gray-600 mb-6">System overview</p>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard title="Total Reports" value={reports.length} />
        <StatCard
          title="Open Issues"
          value={reports.filter((r) => r.status !== "FIXED").length}
        />
        <StatCard
          title="Fixed Issues"
          value={reports.filter((r) => r.status === "FIXED").length}
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        
        {/* Bar Chart */}
        <BarChart labels={issueLabels} data={issueCounts} />

        {/* Pie Chart */}
        <PieChart labels={statusLabels} data={statusCounts} />
      </div>

      {/* Reports Table */}
      <div className="mt-10">
        <ReportTable />
      </div>

    </div>
  );
}
