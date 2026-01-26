"use client";

import React from "react";
import { getUser } from "@/lib/dummyAuth";

function RadarChart({ size = 640 }: { size?: number }) {
  const cx = size / 2;
  const cy = size / 2;
  const radius = Math.min(cx, cy) * 0.6;
  const axes = [
    "Fullstack",
    "Automation",
    "Finance dan Accounting",
    "Growth dan Digital Marketing",
    "Cloud Devops Engineer",
    "Product UI/UX Design",
    "IoT (Embedded System)",
  ];
  const values = [0.2, 0.1, 0.0, -0.1, -0.15, -0.05, 0.05];

  const points = axes.map((_, i) => {
    const angle = (i / axes.length) * Math.PI * 2 - Math.PI / 2;
    const r = radius * (0.5 + ((values[i] + 1) / 2) * 0.5); // normalized
    return [cx + r * Math.cos(angle), cy + r * Math.sin(angle)];
  });

  const grid = Array.from({ length: 5 }).map((_, level) => {
    const r = radius * ((level + 1) / 5);
    const d = axes.map((_, i) => {
      const angle = (i / axes.length) * Math.PI * 2 - Math.PI / 2;
      return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`;
    });
    return d.join(" ");
  });

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <g fill="none" stroke="#e6e6e9">
        {grid.map((d, i) => (
          <polygon key={i} points={d} strokeWidth={1} />
        ))}
      </g>

      <g
        fill="none"
        stroke="#7aa2ff"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon
          points={points.map((p) => p.join(",")).join(" ")}
          fill="rgba(122,162,255,0.08)"
        />
      </g>

      <g fontSize={11} fill="#6b7280">
        {axes.map((label, i) => {
          const angle = (i / axes.length) * Math.PI * 2 - Math.PI / 2;
          const lx = cx + (radius + 28) * Math.cos(angle);
          const ly = cy + (radius + 28) * Math.sin(angle);
          return (
            <text
              key={i}
              x={lx}
              y={ly}
              textAnchor={lx < cx ? "end" : lx > cx ? "start" : "middle"}
              dominantBaseline="middle"
            >
              {label}
            </text>
          );
        })}
      </g>
    </svg>
  );
}

export default function MyResumePage() {
  const user = getUser();

  return (
    <div className="min-h-screen p-2">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-start gap-6">
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-2xl font-semibold">My Resume</h1>
                  <div className="text-sm text-muted-foreground">
                    Last 7 days
                  </div>
                </div>
              </div>

              <div className="flex justify-center py-6">
                <RadarChart size={720} />
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="col-span-2">
                  <h2 className="text-lg font-semibold mb-2">
                    Recommendations
                  </h2>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground">
                    <li>
                      Focus on Fullstack path — take the Fullstack Web
                      Development course to increase competency.
                    </li>
                    <li>
                      Practice cloud fundamentals and DevOps basics to improve
                      Cloud/DevOps score.
                    </li>
                    <li>
                      Try a short Product/UI course to strengthen UI/UX skills.
                    </li>
                    <li>
                      Complete a mini project integrating backend and frontend
                      to boost measurable progress.
                    </li>
                  </ul>
                </div>

                <aside className="col-span-1 bg-slate-50 rounded-lg p-4">
                  <h3 className="text-sm font-medium mb-2">Profile</h3>
                  <div className="text-sm text-muted-foreground">
                    {user?.name || "Nama Pengguna"}
                  </div>
                  <div className="text-xs text-muted-foreground mt-2">
                    Goal: {user?.personalGoal || "-"}
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
