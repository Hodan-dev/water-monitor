"use client";
import StatCard from "@/components/StatCard";
import ReportTable from "@/components/ReportTable";
import BarChart from "@/components/charts/BarChart";
import PieChart from "@/components/charts/PieChart";
import { reports } from "@/lib/dummyData";
import { motion } from "framer-motion";

export default function AdminDashboard() {
  const totalReports = reports.length;
  const openReports = reports.filter((r) => r.status !== "FIXED").length;
  const fixedReports = reports.filter((r) => r.status === "FIXED").length;

  const barLabels = reports.map((r) => r.createdAt);
  const barData = barLabels.map((d) => reports.filter((r) => r.createdAt === d).length);

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-2xl font-semibold">Admin Dashboard</h2>
        <p className="text-gray-600">Overview of the Water Monitoring System</p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <StatCard title="Total Reports" value={totalReports} />
        <StatCard title="Open Reports" value={openReports} />
        <StatCard title="Fixed Reports" value={fixedReports} />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-4 border rounded-2xl shadow-sm h-72">
          <h3 className="font-medium mb-2">Reports Over Time</h3>
          <div className="h-[250px]">
            <BarChart labels={barLabels} data={barData} />
          </div>
        </div>

        <div className="bg-white p-4 border rounded-2xl shadow-sm">
          <h3 className="font-medium mb-2">Status Distribution</h3>
          <div className="h-[230px]">
            <PieChart labels={["OPEN/IN PROGRESS", "FIXED"]} data={[openReports, fixedReports]} />
          </div>
        </div>
      </div>

      {/* Table */}
      <div>
        <h3 className="font-medium mb-3">Latest Reports</h3>
        <ReportTable />
      </div>
    </div>
  );
}
