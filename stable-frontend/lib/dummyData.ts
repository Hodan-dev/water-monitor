export const reports = [
  {
    id: "r1",
    name: "Kahda Well",
    type: "BROKEN",               // <-- ADD THIS
    desc: "Pipe broken near the main road",
    status: "IN_PROGRESS",
    assignedTo: "Team A",
    createdAt: "2025-01-11T14:30:00Z",
  },
  {
    id: "r2",
    name: "Ceelasha",
    type: "CONTAMINATION",       // <-- ADD THIS
    desc: "Water looks dirty",
    status: "FIXED",
    assignedTo: "Team B",
    createdAt: "2025-01-12T09:15:00Z",
  },
  {
    id: "r3",
    name: "Hodan Borehole",
    type: "NO_WATER",            // <-- ADD THIS
    desc: "Pump not working",
    status: "OPEN",
    assignedTo: "Team A",
    createdAt: "2025-01-15T10:20:00Z",
  },
];
export const waterPoints = [
  {
    id: "wp1",
    name: "Kahda Well",
    location: "Kahda, Mogadishu",
    status: "OPERATIONAL",
    lastInspected: "2025-01-10",
  },
  {
    id: "wp2",
    name: "Ceelasha Borehole",
    location: "Ceelasha, Mogadishu",
    status: "NEEDS_MAINTENANCE",
    lastInspected: "2024-12-20",    
  },
  {
    id: "wp3",
    name: "Hodan Borehole",
    location: "Hodan, Mogadishu",
    status: "OUT_OF_SERVICE",
    lastInspected: "2024-11-15",
  },
];
export const teams = [
  { id: "t1", name: "Team A", area: "Banadir" },
  { id: "t2", name: "Team B", area: "Hodan" },
  { id: "t3", name: "Team C", area: "Wadajir" },
];
export const users = [
  { id: "u1", name: "Alice", role: "ADMIN" },
  { id: "u2", name: "Bob", role: "TEAM_MEMBER" },
  { id: "u3", name: "Charlie", role: "TEAM_MEMBER" },
];