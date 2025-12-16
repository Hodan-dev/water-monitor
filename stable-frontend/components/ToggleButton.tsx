import clsx from "clsx";
import { ReactNode } from "react";

export default function ToggleButton({icon, label, selected, onClick}:{icon?:ReactNode; label:string; selected?:boolean; onClick?:()=>void}) {
  return (
    <button onClick={onClick} className={clsx("flex-1 flex flex-col items-center justify-center py-4 rounded-lg border transition", selected ? "bg-[#E8F6FF] border-primary" : "bg-white border-softBorder", "hover:scale-105")}>
      <div className="mb-2 text-2xl">{icon}</div>
      <div className="text-sm">{label}</div>
    </button>
  );
}
