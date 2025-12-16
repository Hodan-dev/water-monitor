"use client";

import { Activity, Droplets, Thermometer, Waves } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import ReportTable from "@/components/ReportTable";
import { StatCard } from "@/components/ui/StatCard";
import { SensorChart } from "@/components/ui/SensorChart";

// Mock data (replace with API calls later)
const phData = [7.1, 7.2, 7.1, 7.3, 7.0, 7.2, 7.4];
const turbidityData = [2.1, 2.3, 1.9, 2.5, 2.2, 2.0, 1.8];
const timeLabels = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"];

export default function Home() {
  return (
    <div className="flex min-h-screen bg-[url('/grid.svg')] bg-fixed">
      {/* Restored Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 ml-64 p-8">
        <Topbar title="Dashboard" />

        <div className="space-y-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard title="pH Level" value="7.2" unit="pH" icon={Droplets} trend="+0.1" trendUp={true} />
            <StatCard title="Turbidity" value="2.1" unit="NTU" icon={Waves} trend="-0.3" trendUp={true} />
            <StatCard title="Temperature" value="24.5" unit="°C" icon={Thermometer} />
            <StatCard title="Active Sensors" value="12" unit="/ 15" icon={Activity} className="from-primary/10 to-transparent bg-gradient-to-br" />
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <SensorChart label="pH Trends" data={phData} labels={timeLabels} color="rgb(56, 189, 248)" />
            <SensorChart label="Turbidity Analysis" data={turbidityData} labels={timeLabels} color="rgb(244, 114, 182)" />
          </div>

          {/* Reports Section (Restored) */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">Recent Reports</h3>
              <button className="text-sm text-primary hover:text-primary/80 transition-colors">View All</button>
            </div>
            <ReportTable />
          </div>
        </div>
      </main>
    </div>
  );
}
