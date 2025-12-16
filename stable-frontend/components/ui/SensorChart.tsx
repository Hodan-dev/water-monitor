"use client";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
    ChartOptions,
    ScriptableContext
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { cn } from '@/lib/utils';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

interface SensorChartProps {
    data: number[];
    labels: string[];
    label: string;
    color?: string;
    className?: string;
}

export function SensorChart({ data, labels, label, color = "#38bdf8", className }: SensorChartProps) {
    const options: ChartOptions<'line'> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                backgroundColor: '#1e293b',
                titleColor: '#e2e8f0',
                bodyColor: '#e2e8f0',
                borderColor: 'rgba(255,255,255,0.1)',
                borderWidth: 1,
                padding: 12,
                cornerRadius: 8,
                displayColors: false,
            }
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    color: '#64748b',
                    font: {
                        size: 11
                    }
                },
                border: {
                    display: false
                }
            },
            y: {
                grid: {
                    color: 'rgba(255,255,255,0.05)',
                },
                ticks: {
                    color: '#64748b',
                    font: {
                        size: 11
                    }
                },
                border: {
                    display: false
                }
            }
        },
        interaction: {
            mode: 'index',
            intersect: false,
        },
    };

    const chartData = {
        labels,
        datasets: [
            {
                fill: true,
                label,
                data,
                borderColor: color,
                backgroundColor: (context: ScriptableContext<'line'>) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
                    gradient.addColorStop(0, color.replace(')', ', 0.5)').replace('rgb', 'rgba'));
                    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
                    return gradient;
                },
                borderWidth: 2,
                pointRadius: 0,
                pointHoverRadius: 4,
                tension: 0.4,
            },
        ],
    };

    return (
        <div className={cn("glass-card w-full h-[300px]", className)}>
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-slate-400 font-medium uppercase tracking-wider text-sm">{label} History</h3>
            </div>
            <div className="h-[230px] w-full">
                <Line options={options} data={chartData} />
            </div>
        </div>
    );
}
