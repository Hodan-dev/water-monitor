import { cn } from "@/lib/utils";

const styles = {
    active: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    inactive: "bg-slate-500/10 text-slate-400 border-slate-500/20",
    warning: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    error: "bg-rose-500/10 text-rose-400 border-rose-500/20",
};

export function StatusBadge({ status, className }: { status: string; className?: string }) {

    const map: Record<string, "active" | "inactive" | "warning" | "error"> = {
        // Legacy mappings
        "fixed": "active",
        "in_progress": "warning",
        "broken": "error",
        "good": "active",
        "issue": "warning",
        "working": "active",
        "assigned": "inactive",
        // Direct token mappings
        "active": "active",
        "inactive": "inactive",
        "warning": "warning",
        "error": "error"
    };

    const normalizedStatus = status.toLowerCase();
    const theme = map[normalizedStatus] || "inactive";
    return (
        <div className={cn(
            "px-2.5 py-0.5 rounded-full text-xs font-medium border backdrop-blur-sm flex items-center gap-1.5 w-fit",
            styles[theme],
            className
        )}>
            <span className="w-1.5 h-1.5 rounded-full bg-current shadow-[0_0_8px_currentColor]" />
            {status.charAt(0).toUpperCase() + status.slice(1).toLowerCase()}
        </div>
    );
}
