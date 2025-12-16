import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
    title: string;
    value: string | number;
    unit?: string;
    icon: LucideIcon;
    trend?: string;
    trendUp?: boolean;
    className?: string;
}

export function StatCard({ title, value, unit, icon: Icon, trend, trendUp, className }: StatCardProps) {
    return (
        <div className={cn("glass-card relative overflow-hidden group", className)}>
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Icon className="w-24 h-24" />
            </div>

            <div className="relative z-10">
                <div className="flex items-center gap-2 text-slate-400 mb-2">
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium uppercase tracking-wider">{title}</span>
                </div>

                <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-white tracking-tight">{value}</span>
                    {unit && <span className="text-slate-500 text-sm font-medium">{unit}</span>}
                </div>

                {trend && (
                    <div className={cn(
                        "mt-3 text-xs font-medium flex items-center gap-1",
                        trendUp ? "text-emerald-400" : "text-rose-400"
                    )}>
                        <span>{trendUp ? "↑" : "↓"}</span>
                        {trend}
                    </div>
                )}
            </div>
        </div>
    );
}
