"use client";

import { useState, useEffect } from "react";

const COLORS = {
  bg: "#0a0c10",
  surface: "#111318",
  card: "#161b24",
  border: "#1e2535",
  accent: "#f5a623",
  accentDim: "#f5a62320",
  red: "#e8445a",
  redDim: "#e8445a20",
  green: "#2dd4a0",
  greenDim: "#2dd4a020",
  blue: "#4d9ef7",
  blueDim: "#4d9ef720",
  purple: "#8b6cf7",
  purpleDim: "#8b6cf720",
  text: "#e8eaf0",
  textMuted: "#6b7899",
  textDim: "#3a4160",
};

const mockCases = [
  { id: "FD-2847", msisdn: "+233541234567", type: "Mobile Money Fraud", risk: 97, status: "Active", analyst: "K. Mensah", flagged: "2 min ago", transactions: 48, location: "Accra Central", imei: "352099001761481" },
  { id: "FD-2846", msisdn: "+233201987654", type: "Bypass Fraud", risk: 89, status: "Screening", analyst: "A. Boateng", flagged: "14 min ago", transactions: 312, location: "Kumasi", imei: "864221030123456" },
  { id: "FD-2845", msisdn: "+233277456123", type: "SIM Swap", risk: 76, status: "Monitoring", analyst: "E. Darko", flagged: "1 hr ago", transactions: 7, location: "Takoradi", imei: "356938035643809" },
  { id: "FD-2844", msisdn: "+233591023847", type: "Account Takeover", risk: 91, status: "Active", analyst: "K. Mensah", flagged: "2 hr ago", transactions: 23, location: "Tema", imei: "012345678901234" },
  { id: "FD-2843", msisdn: "+233241567890", type: "Dealer Fraud", risk: 62, status: "Decision", analyst: "P. Osei", flagged: "3 hr ago", transactions: 156, location: "Accra North", imei: "490154203237518" },
  { id: "FD-2842", msisdn: "+233302876543", type: "Mobile Money Fraud", risk: 83, status: "Resolved", analyst: "A. Boateng", flagged: "5 hr ago", transactions: 91, location: "Cape Coast", imei: "359821093474369" },
  { id: "FD-2841", msisdn: "+233558231049", type: "IMEI Cloning", risk: 88, status: "Active", analyst: "E. Darko", flagged: "6 hr ago", transactions: 4, location: "Ho", imei: "868625021891234" },
  { id: "FD-2840", msisdn: "+233249876543", type: "Bypass Fraud", risk: 71, status: "Screening", analyst: "P. Osei", flagged: "8 hr ago", transactions: 204, location: "Sunyani", imei: "352099001847293" },
];

const networkNodes = [
  { id: 1, x: 340, y: 180, label: "+233541234567", type: "primary", risk: 97 },
  { id: 2, x: 180, y: 100, label: "+233201987654", type: "linked", risk: 89 },
  { id: 3, x: 500, y: 100, label: "MoMo Agent #A2241", type: "entity", risk: 45 },
  { id: 4, x: 160, y: 270, label: "+233277456123", type: "linked", risk: 76 },
  { id: 5, x: 520, y: 260, label: "+233591023847", type: "linked", risk: 91 },
  { id: 6, x: 340, y: 330, label: "Dealer ID: GH-D4421", type: "entity", risk: 58 },
  { id: 7, x: 90, y: 185, label: "+233302876543", type: "secondary", risk: 30 },
  { id: 8, x: 590, y: 185, label: "+233241567890", type: "secondary", risk: 62 },
];

const networkEdges = [
  { from: 1, to: 2 }, { from: 1, to: 3 }, { from: 1, to: 4 },
  { from: 1, to: 5 }, { from: 1, to: 6 }, { from: 2, to: 7 },
  { from: 3, to: 8 }, { from: 4, to: 6 }, { from: 5, to: 3 },
];

const heatData = [
  { region: "Accra Central", count: 142, x: 310, y: 240 },
  { region: "Accra North", count: 98, x: 290, y: 195 },
  { region: "Tema", count: 87, x: 370, y: 250 },
  { region: "Kumasi", count: 113, x: 175, y: 145 },
  { region: "Takoradi", count: 56, x: 115, y: 285 },
  { region: "Cape Coast", count: 67, x: 140, y: 255 },
  { region: "Ho", count: 34, x: 380, y: 195 },
  { region: "Sunyani", count: 29, x: 155, y: 115 },
];

const hourlyData = [12, 18, 8, 24, 31, 42, 38, 51, 47, 39, 53, 61, 58, 44, 67, 72, 89, 95, 87, 76, 63, 54, 41, 28];
const fraudTypes = [
  { label: "Mobile Money", value: 38, color: "#f5a623" },
  { label: "Bypass", value: 27, color: "#e8445a" },
  { label: "SIM Swap", value: 18, color: "#8b6cf7" },
  { label: "Account Takeover", value: 11, color: "#4d9ef7" },
  { label: "Other", value: 6, color: "#2dd4a0" },
];

const RiskBadge = ({ score }: { score: number }) => {
  const color = score >= 85 ? COLORS.red : score >= 65 ? COLORS.accent : COLORS.green;
  const label = score >= 85 ? "Critical" : score >= 65 ? "High" : "Medium";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      <div style={{ width: 6, height: 6, borderRadius: "50%", background: color, boxShadow: `0 0 6px ${color}` }} />
      <span style={{ color, fontSize: 12, fontWeight: 600 }}>{score} {label}</span>
    </div>
  );
};

const StatusPill = ({ status }: { status: string }) => {
  const map: Record<string, string> = { Active: COLORS.red, Screening: COLORS.accent, Monitoring: COLORS.blue, Decision: COLORS.purple, Resolved: COLORS.green };
  const c = map[status] || COLORS.textMuted;
  return (
    <span style={{ background: c + "22", color: c, border: `1px solid ${c}44`, borderRadius: 20, padding: "2px 10px", fontSize: 11, fontWeight: 600, letterSpacing: "0.03em" }}>
      {status}
    </span>
  );
};

const MetricCard = ({ label, value, sub, color, trend }: { label: string, value: string | number, sub?: string, color?: string, trend?: number }) => (
  <div style={{ background: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: 12, padding: "18px 20px", position: "relative", overflow: "hidden" }}>
    <div style={{ position: "absolute", top: 0, right: 0, width: 80, height: 80, background: (color || COLORS.accent) + "08", borderRadius: "0 12px 0 80px" }} />
    <div style={{ fontSize: 11, color: COLORS.textMuted, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>{label}</div>
    <div style={{ fontSize: 28, fontWeight: 700, color: color || COLORS.text, fontFamily: "'JetBrains Mono', monospace", lineHeight: 1 }}>{value}</div>
    {sub && <div style={{ fontSize: 12, color: COLORS.textMuted, marginTop: 6 }}>{sub}</div>}
    {trend !== undefined && <div style={{ fontSize: 11, color: trend > 0 ? COLORS.red : COLORS.green, marginTop: 4 }}>{trend > 0 ? "▲" : "▼"} {Math.abs(trend)}% vs yesterday</div>}
  </div>
);

const SparkLine = ({ data, color }: { data: number[], color: string }) => {
  const max = Math.max(...data), min = Math.min(...data);
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * 280;
    const y = 40 - ((v - min) / (max - min)) * 36;
    return `${x},${y}`;
  }).join(" ");
  return (
    <svg width="100%" viewBox="0 0 280 44" style={{ display: "block" }}>
      <polyline points={pts} fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round" />
      <polygon points={`0,44 ${pts} 280,44`} fill={color} opacity="0.08" />
    </svg>
  );
};

const DonutChart = ({ data }: { data: { label: string, value: number, color: string }[] }) => {
  let cum = 0;
  const total = data.reduce((s, d) => s + d.value, 0);
  const slices = data.map(d => {
    const start = (cum / total) * 360;
    cum += d.value;
    const end = (cum / total) * 360;
    const r = 70, cx = 90, cy = 90;
    const toRad = (deg: number) => (deg - 90) * Math.PI / 180;
    const x1 = cx + r * Math.cos(toRad(start));
    const y1 = cy + r * Math.sin(toRad(start));
    const x2 = cx + r * Math.cos(toRad(end));
    const y2 = cy + r * Math.sin(toRad(end));
    const large = end - start > 180 ? 1 : 0;
    return { ...d, path: `M${cx},${cy} L${x1},${y1} A${r},${r} 0 ${large},1 ${x2},${y2} Z` };
  });
  return (
    <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
      <svg width="180" height="180" viewBox="0 0 180 180">
        <circle cx="90" cy="90" r="50" fill={COLORS.card} />
        {slices.map((s, i) => <path key={i} d={s.path} fill={s.color} opacity="0.9" />)}
        <text x="90" y="86" textAnchor="middle" fill={COLORS.text} fontSize="20" fontWeight="700" fontFamily="monospace">{total}</text>
        <text x="90" y="102" textAnchor="middle" fill={COLORS.textMuted} fontSize="10">TOTAL</text>
      </svg>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
        {data.map((d, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 8, height: 8, borderRadius: 2, background: d.color, flexShrink: 0 }} />
            <span style={{ fontSize: 12, color: COLORS.textMuted, flex: 1 }}>{d.label}</span>
            <span style={{ fontSize: 12, color: COLORS.text, fontFamily: "monospace" }}>{d.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const NetworkGraph = ({ onSelectNode }: { onSelectNode: (node: any) => void }) => {
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);
  const getNodeColor = (type: string, risk: number) => {
    if (type === "primary") return COLORS.red;
    if (type === "entity") return COLORS.accent;
    if (risk > 80) return COLORS.red;
    if (risk > 60) return COLORS.accent;
    return COLORS.blue;
  };
  return (
    <svg width="100%" viewBox="0 0 680 420" style={{ background: COLORS.surface, borderRadius: 12, border: `1px solid ${COLORS.border}` }}>
      <defs>
        <marker id="arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={COLORS.textDim} />
        </marker>
      </defs>
      {networkEdges.map((e, i) => {
        const from = networkNodes.find(n => n.id === e.from);
        const to = networkNodes.find(n => n.id === e.to);
        if (!from || !to) return null;
        return <line key={i} x1={from.x} y1={from.y} x2={to.x} y2={to.y} stroke={COLORS.border} strokeWidth="1.5" markerEnd="url(#arr)" />;
      })}
      {networkNodes.map(n => {
        const col = getNodeColor(n.type, n.risk);
        const r = n.type === "primary" ? 24 : n.type === "entity" ? 20 : 16;
        const isHov = hoveredNode === n.id;
        return (
          <g key={n.id} style={{ cursor: "pointer" }} onClick={() => onSelectNode(n)}
            onMouseEnter={() => setHoveredNode(n.id)} onMouseLeave={() => setHoveredNode(null)}>
            <circle cx={n.x} cy={n.y} r={r + 8} fill={col} opacity={isHov ? 0.15 : 0.06} />
            <circle cx={n.x} cy={n.y} r={r} fill={COLORS.card} stroke={col} strokeWidth={n.type === "primary" ? 2.5 : 1.5} />
            {n.type === "primary" && <circle cx={n.x} cy={n.y} r={r - 6} fill={col} opacity="0.25" />}
            <text x={n.x} y={n.y + 1} textAnchor="middle" dominantBaseline="middle" fill={col} fontSize="9" fontFamily="monospace" fontWeight="700">
              {n.risk}
            </text>
            <text x={n.x} y={n.y + r + 13} textAnchor="middle" fill={isHov ? COLORS.text : COLORS.textMuted} fontSize="9.5" fontFamily="monospace">
              {n.label.length > 18 ? n.label.slice(0, 16) + "…" : n.label}
            </text>
          </g>
        );
      })}
      <text x="12" y="22" fill={COLORS.textMuted} fontSize="11" fontFamily="monospace">FRAUD NETWORK · {networkNodes.length} nodes · {networkEdges.length} connections</text>
    </svg>
  );
};

const HeatmapView = () => {
  const max = Math.max(...heatData.map(d => d.count));
  return (
    <div>
      <svg width="100%" viewBox="0 0 500 360" style={{ background: COLORS.surface, borderRadius: 12, border: `1px solid ${COLORS.border}` }}>
        <text x="12" y="22" fill={COLORS.textMuted} fontSize="11" fontFamily="monospace">GEOGRAPHIC FRAUD DENSITY · GHANA</text>
        {heatData.map((d, i) => {
          const intensity = d.count / max;
          const r = 20 + intensity * 40;
          return (
            <g key={i}>
              <circle cx={d.x} cy={d.y} r={r} fill={COLORS.red} opacity={0.08 + intensity * 0.22} />
              <circle cx={d.x} cy={d.y} r={r * 0.5} fill={COLORS.red} opacity={0.15 + intensity * 0.3} />
              <circle cx={d.x} cy={d.y} r={6} fill={COLORS.red} opacity={0.7 + intensity * 0.3} />
              <text x={d.x} y={d.y - r - 6} textAnchor="middle" fill={COLORS.textMuted} fontSize="9.5" fontFamily="monospace">{d.region}</text>
              <text x={d.x} y={d.y - r + 6} textAnchor="middle" fill={COLORS.accent} fontSize="9" fontFamily="monospace" fontWeight="700">{d.count}</text>
            </g>
          );
        })}
      </svg>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, marginTop: 12 }}>
        {heatData.sort((a, b) => b.count - a.count).map((d, i) => (
          <div key={i} style={{ background: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: 8, padding: "8px 12px" }}>
            <div style={{ fontSize: 10, color: COLORS.textMuted }}>{d.region}</div>
            <div style={{ fontSize: 18, fontFamily: "monospace", fontWeight: 700, color: COLORS.red }}>{d.count}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CaseDetail = ({ caseData, onClose, onAction }: { caseData: any, onClose: () => void, onAction: (action: string, data: any) => void }) => {
  const [tab, setTab] = useState("overview");
  const tabs = ["overview", "timeline", "network", "actions"];
  const timeline = [
    { time: "09:14:22", event: "Initial flag triggered — velocity anomaly", type: "flag" as const },
    { time: "09:14:58", event: "CDR pulled — 48 calls in 6hr window", type: "data" as const },
    { time: "09:15:10", event: "CRM KYC match — account age 3 days", type: "data" as const },
    { time: "09:15:45", event: "Mobile money transactions retrieved", type: "data" as const },
    { time: "09:16:02", event: "ML model score: 97/100 — HIGH CONFIDENCE", type: "alert" as const },
    { time: "09:16:30", event: "Case assigned to K. Mensah", type: "assign" as const },
    { time: "09:17:00", event: "Cell site analysis — 3 locations in 20min", type: "flag" as const },
  ];
  const typeColors = { flag: COLORS.red, data: COLORS.blue, alert: COLORS.accent, assign: COLORS.purple };

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.75)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 50 }}>
      <div style={{ background: COLORS.surface, border: `1px solid ${COLORS.border}`, borderRadius: 16, width: "min(800px, 95vw)", maxHeight: "90vh", overflow: "auto" }}>
        <div style={{ padding: "20px 24px", borderBottom: `1px solid ${COLORS.border}`, display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontFamily: "monospace", fontSize: 13, color: COLORS.textMuted }}>{caseData.id}</span>
              <StatusPill status={caseData.status} />
            </div>
            <div style={{ fontSize: 22, fontWeight: 700, color: COLORS.text, marginTop: 4, fontFamily: "monospace" }}>{caseData.msisdn}</div>
            <div style={{ fontSize: 13, color: COLORS.textMuted, marginTop: 2 }}>{caseData.type} · {caseData.location}</div>
          </div>
          <button onClick={onClose} style={{ background: "none", border: `1px solid ${COLORS.border}`, color: COLORS.textMuted, borderRadius: 8, padding: "6px 12px", cursor: "pointer", fontSize: 13 }}>✕ Close</button>
        </div>

        <div style={{ display: "flex", borderBottom: `1px solid ${COLORS.border}` }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ background: "none", border: "none", color: tab === t ? COLORS.accent : COLORS.textMuted, padding: "12px 20px", cursor: "pointer", fontSize: 13, fontWeight: tab === t ? 600 : 400, borderBottom: tab === t ? `2px solid ${COLORS.accent}` : "2px solid transparent", textTransform: "capitalize" }}>
              {t}
            </button>
          ))}
        </div>

        <div style={{ padding: "20px 24px" }}>
          {tab === "overview" && (
            <div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 20 }}>
                <MetricCard label="Risk Score" value={caseData.risk} color={COLORS.red} />
                <MetricCard label="Transactions" value={caseData.transactions} color={COLORS.accent} />
                <MetricCard label="Flagged" value={caseData.flagged} color={COLORS.blue} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {[
                  ["MSISDN", caseData.msisdn], ["IMEI", caseData.imei],
                  ["Location", caseData.location], ["Analyst", caseData.analyst],
                  ["Fraud Type", caseData.type], ["Status", caseData.status],
                ].map(([k, v]) => (
                  <div key={k} style={{ borderBottom: `1px solid ${COLORS.border}`, paddingBottom: 12 }}>
                    <div style={{ fontSize: 11, color: COLORS.textMuted, marginBottom: 4 }}>{k}</div>
                    <div style={{ fontSize: 14, color: COLORS.text, fontFamily: "monospace" }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === "timeline" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {timeline.map((e, i) => (
                <div key={i} style={{ display: "flex", gap: 16, paddingBottom: 20, position: "relative" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: typeColors[e.type], flexShrink: 0, marginTop: 3 }} />
                    {i < timeline.length - 1 && <div style={{ width: 1, flex: 1, background: COLORS.border, marginTop: 4 }} />}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 11, fontFamily: "monospace", color: COLORS.textMuted, marginBottom: 4 }}>{e.time}</div>
                    <div style={{ fontSize: 13, color: COLORS.text }}>{e.event}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {tab === "network" && (
            <div style={{ fontSize: 13, color: COLORS.textMuted, textAlign: "center", padding: "20px 0" }}>
              <NetworkGraph onSelectNode={() => {}} />
              <p style={{ marginTop: 12 }}>Network graph for {caseData.msisdn} — 8 connected entities detected</p>
            </div>
          )}

          {tab === "actions" && (
            <div>
              <div style={{ fontSize: 13, color: COLORS.textMuted, marginBottom: 16, padding: 12, background: COLORS.card, borderRadius: 8, border: `1px solid ${COLORS.accent}44` }}>
                ⚠ Actions require supervisor approval. All actions are logged for audit.
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {[
                  { label: "Block Number", desc: "Immediately suspend outgoing calls/data", color: COLORS.red, action: "block" },
                  { label: "Deactivate SIM", desc: "Full deactivation pending investigation", color: COLORS.red, action: "deactivate" },
                  { label: "Flag for Monitoring", desc: "Add to enhanced monitoring queue", color: COLORS.accent, action: "monitor" },
                  { label: "Mark Resolved", desc: "Close case as resolved — no action needed", color: COLORS.green, action: "resolve" },
                  { label: "Escalate to Supervisor", desc: "Request supervisor review and sign-off", color: COLORS.purple, action: "escalate" },
                  { label: "Generate Report", desc: "Export full case report as PDF", color: COLORS.blue, action: "report" },
                ].map(a => (
                  <button key={a.action} onClick={() => onAction(a.action, caseData)} style={{ background: a.color + "12", border: `1px solid ${a.color}44`, borderRadius: 10, padding: "14px 16px", cursor: "pointer", textAlign: "left" }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: a.color, marginBottom: 4 }}>{a.label}</div>
                    <div style={{ fontSize: 11, color: COLORS.textMuted }}>{a.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const SearchBar = ({ onSearch }: { onSearch: (val: string) => void }) => {
  const [val, setVal] = useState("");
  return (
    <div style={{ position: "relative", maxWidth: 400 }}>
      <input value={val} onChange={e => { setVal(e.target.value); onSearch(e.target.value); }}
        placeholder="Search MSISDN, IMEI, IMSI..."
        style={{ width: "100%", background: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: 8, padding: "9px 12px 9px 36px", color: COLORS.text, fontSize: 13, outline: "none", fontFamily: "monospace", boxSizing: "border-box" }} />
      <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: COLORS.textMuted, fontSize: 14 }}>⌕</span>
    </div>
  );
};

const Toast = ({ msg, onClose }: { msg: string, onClose: () => void }) => (
  <div style={{ position: "fixed", bottom: 24, right: 24, background: COLORS.card, border: `1px solid ${COLORS.accent}55`, borderRadius: 10, padding: "12px 20px", color: COLORS.text, fontSize: 13, zIndex: 100, display: "flex", alignItems: "center", gap: 12 }}>
    <span style={{ color: COLORS.accent }}>✓</span> {msg}
    <button onClick={onClose} style={{ background: "none", border: "none", color: COLORS.textMuted, cursor: "pointer" }}>✕</button>
  </div>
);

export default function FraudPlatformPage() {
  const [view, setView] = useState("dashboard");
  const [selectedCase, setSelectedCase] = useState<any>(null);
  const [cases, setCases] = useState(mockCases);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [toast, setToast] = useState<string | null>(null);
  const [liveCount, setLiveCount] = useState(2847);
  const [alertPulse, setAlertPulse] = useState(false);
  const [selectedNode, setSelectedNode] = useState<any>(null);

  useEffect(() => {
    const iv = setInterval(() => {
      setLiveCount(c => c + Math.floor(Math.random() * 3));
      if (Math.random() > 0.7) setAlertPulse(true);
    }, 4000);
    return () => clearInterval(iv);
  }, []);

  useEffect(() => {
    if (alertPulse) setTimeout(() => setAlertPulse(false), 2000);
  }, [alertPulse]);

  const showToast = (msg: string) => { setToast(msg); setTimeout(() => setToast(null), 3500); };

  const handleAction = (action: string, c: any) => {
    const msgs: Record<string, string> = { block: `Number ${c.msisdn} blocked — pending supervisor approval`, deactivate: `SIM deactivation request sent for ${c.msisdn}`, monitor: `${c.msisdn} added to enhanced monitoring`, resolve: `Case ${c.id} marked as resolved`, escalate: `Case ${c.id} escalated to supervisor`, report: `Case report generated for ${c.id}` };
    setSelectedCase(null);
    showToast(msgs[action]);
    if (action === "resolve") setCases(prev => prev.map(p => p.id === c.id ? { ...p, status: "Resolved" } : p));
    if (action === "monitor") setCases(prev => prev.map(p => p.id === c.id ? { ...p, status: "Monitoring" } : p));
  };

  const filtered = cases.filter(c => {
    const q = search.toLowerCase();
    const matchSearch = !q || c.msisdn.includes(q) || c.imei.includes(q) || c.type.toLowerCase().includes(q) || c.id.toLowerCase().includes(q);
    const matchStatus = filterStatus === "All" || c.status === filterStatus;
    return matchSearch && matchStatus;
  });

  const navItems = [
    { id: "dashboard", icon: "⊞", label: "Dashboard" },
    { id: "cases", icon: "◈", label: "Case Queue" },
    { id: "network", icon: "◎", label: "Network Graph" },
    { id: "heatmap", icon: "◉", label: "Heatmap" },
    { id: "analytics", icon: "▦", label: "Analytics" },
  ];

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: COLORS.bg, color: COLORS.text, fontFamily: "'JetBrains Mono', 'Courier New', monospace" }}>
      {/* Sidebar */}
      <div style={{ width: 220, background: COLORS.surface, borderRight: `1px solid ${COLORS.border}`, display: "flex", flexDirection: "column", flexShrink: 0 }}>
        <div style={{ padding: "20px 20px 16px" }}>
          <div style={{ fontSize: 11, color: COLORS.accent, letterSpacing: "0.15em", fontWeight: 700, marginBottom: 2 }}>TELCO FRAUD</div>
          <div style={{ fontSize: 18, fontWeight: 700, color: COLORS.text }}>FraudNet</div>
          <div style={{ fontSize: 10, color: COLORS.textMuted, marginTop: 4 }}>Detection Platform v2.1</div>
        </div>

        <div style={{ padding: "0 12px", marginBottom: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 8px", background: COLORS.greenDim, borderRadius: 6, border: `1px solid ${COLORS.green}33` }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: COLORS.green, animation: "pulse 2s infinite" }} />
            <span style={{ fontSize: 10, color: COLORS.green }}>SYSTEM LIVE</span>
          </div>
        </div>

        <nav style={{ flex: 1, padding: "8px 12px" }}>
          {navItems.map(n => (
            <button key={n.id} onClick={() => setView(n.id)} style={{ width: "100%", display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", borderRadius: 8, border: "none", background: view === n.id ? COLORS.accentDim : "transparent", color: view === n.id ? COLORS.accent : COLORS.textMuted, cursor: "pointer", fontSize: 13, fontFamily: "inherit", marginBottom: 2, transition: "all 0.15s" }}>
              <span style={{ fontSize: 16 }}>{n.icon}</span>
              {n.label}
              {n.id === "cases" && <span style={{ marginLeft: "auto", background: COLORS.red, color: "#fff", borderRadius: 10, padding: "1px 7px", fontSize: 10 }}>{cases.filter(c => c.status === "Active").length}</span>}
            </button>
          ))}
        </nav>

        <div style={{ padding: "12px 20px", borderTop: `1px solid ${COLORS.border}` }}>
          <div style={{ fontSize: 10, color: COLORS.textMuted, marginBottom: 4 }}>ANALYST</div>
          <div style={{ fontSize: 13, color: COLORS.text }}>K. Mensah</div>
          <div style={{ fontSize: 11, color: COLORS.textMuted }}>Fraud Analyst</div>
        </div>
      </div>

      {/* Main content */}
      <div style={{ flex: 1, overflow: "auto" }}>
        {/* Topbar */}
        <div style={{ background: COLORS.surface, borderBottom: `1px solid ${COLORS.border}`, padding: "12px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 20 }}>
          <div>
            <div style={{ fontSize: 16, fontWeight: 700, textTransform: "capitalize" }}>{view}</div>
            <div style={{ fontSize: 11, color: COLORS.textMuted }}>{new Date().toLocaleDateString("en-GH", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ fontSize: 11, color: COLORS.textMuted, fontFamily: "monospace" }}>Cases today: <span style={{ color: COLORS.accent, fontWeight: 700 }}>{liveCount.toLocaleString()}</span></div>
            <div style={{ position: "relative" }}>
              <button style={{ background: alertPulse ? COLORS.redDim : COLORS.card, border: `1px solid ${alertPulse ? COLORS.red : COLORS.border}`, borderRadius: 8, padding: "8px 14px", color: alertPulse ? COLORS.red : COLORS.textMuted, cursor: "pointer", fontSize: 12, transition: "all 0.3s" }}>
                ⚠ {alertPulse ? "New Alert!" : "Alerts"} <span style={{ background: COLORS.red, color: "#fff", borderRadius: 10, padding: "1px 6px", fontSize: 10, marginLeft: 4 }}>3</span>
              </button>
            </div>
          </div>
        </div>

        <div style={{ padding: 24 }}>
          {/* DASHBOARD */}
          {view === "dashboard" && (
            <div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 24 }}>
                <MetricCard label="Active Cases" value="47" sub="↑ 8 new this hour" color={COLORS.red} trend={12} />
                <MetricCard label="Blocked Numbers" value="1,284" sub="Since 00:00 today" color={COLORS.accent} trend={-4} />
                <MetricCard label="MoMo Intercepted" value="GH₵ 2.4M" sub="Fraud value saved" color={COLORS.green} trend={-7} />
                <MetricCard label="Avg Detection" value="4.2s" sub="Below 10s target" color={COLORS.blue} trend={-18} />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 16, marginBottom: 16 }}>
                <div style={{ background: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: 12, padding: "16px 20px" }}>
                  <div style={{ fontSize: 11, color: COLORS.textMuted, letterSpacing: "0.08em", marginBottom: 12 }}>FRAUD DETECTION · 24H VOLUME</div>
                  <SparkLine data={hourlyData} color={COLORS.red} />
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
                    {["00:00", "06:00", "12:00", "18:00", "23:00"].map(t => <span key={t} style={{ fontSize: 9, color: COLORS.textDim }}>{t}</span>)}
                  </div>
                </div>
                <div style={{ background: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: 12, padding: "16px 20px" }}>
                  <div style={{ fontSize: 11, color: COLORS.textMuted, letterSpacing: "0.08em", marginBottom: 12 }}>FRAUD TYPE BREAKDOWN</div>
                  <DonutChart data={fraudTypes} />
                </div>
              </div>

              <div style={{ background: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: 12, padding: "16px 20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                  <div style={{ fontSize: 11, color: COLORS.textMuted, letterSpacing: "0.08em" }}>RECENT FLAGGED CASES</div>
                  <button onClick={() => setView("cases")} style={{ background: "none", border: `1px solid ${COLORS.border}`, borderRadius: 6, padding: "4px 12px", color: COLORS.textMuted, cursor: "pointer", fontSize: 11 }}>View All →</button>
                </div>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr style={{ borderBottom: `1px solid ${COLORS.border}` }}>
                      {["Case ID", "MSISDN", "Type", "Risk", "Status", "Flagged"].map(h => (
                        <th key={h} style={{ textAlign: "left", padding: "8px 0", fontSize: 10, color: COLORS.textMuted, letterSpacing: "0.06em", fontWeight: 500 }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {cases.slice(0, 5).map(c => (
                      <tr key={c.id} onClick={() => setSelectedCase(c)} style={{ borderBottom: `1px solid ${COLORS.border}22`, cursor: "pointer" }}
                        onMouseEnter={e => e.currentTarget.style.background = COLORS.surface}
                        onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                        <td style={{ padding: "10px 0", fontSize: 12, color: COLORS.accent }}>{c.id}</td>
                        <td style={{ padding: "10px 0", fontSize: 12, fontFamily: "monospace", color: COLORS.text }}>{c.msisdn}</td>
                        <td style={{ padding: "10px 0", fontSize: 12, color: COLORS.textMuted }}>{c.type}</td>
                        <td style={{ padding: "10px 0" }}><RiskBadge score={c.risk} /></td>
                        <td style={{ padding: "10px 0" }}><StatusPill status={c.status} /></td>
                        <td style={{ padding: "10px 0", fontSize: 11, color: COLORS.textMuted }}>{c.flagged}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* CASE QUEUE */}
          {view === "cases" && (
            <div>
              <div style={{ display: "flex", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
                <SearchBar onSearch={setSearch} />
                <div style={{ display: "flex", gap: 6 }}>
                  {["All", "Active", "Screening", "Monitoring", "Decision", "Resolved"].map(s => (
                    <button key={s} onClick={() => setFilterStatus(s)} style={{ background: filterStatus === s ? COLORS.accentDim : COLORS.card, border: `1px solid ${filterStatus === s ? COLORS.accent : COLORS.border}`, borderRadius: 6, padding: "6px 12px", color: filterStatus === s ? COLORS.accent : COLORS.textMuted, cursor: "pointer", fontSize: 11, fontFamily: "inherit" }}>{s}</button>
                  ))}
                </div>
              </div>

              <div style={{ background: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: 12, overflow: "hidden" }}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr style={{ background: COLORS.surface, borderBottom: `1px solid ${COLORS.border}` }}>
                      {["Case ID", "MSISDN", "Type", "IMEI", "Location", "Risk", "Transactions", "Status", "Analyst", "Flagged"].map(h => (
                        <th key={h} style={{ textAlign: "left", padding: "12px 16px", fontSize: 10, color: COLORS.textMuted, letterSpacing: "0.06em", fontWeight: 500, whiteSpace: "nowrap" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((c) => (
                      <tr key={c.id} onClick={() => setSelectedCase(c)}
                        style={{ borderBottom: `1px solid ${COLORS.border}22`, cursor: "pointer", transition: "background 0.1s" }}
                        onMouseEnter={e => e.currentTarget.style.background = COLORS.surface}
                        onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                        <td style={{ padding: "12px 16px", fontSize: 12, color: COLORS.accent }}>{c.id}</td>
                        <td style={{ padding: "12px 16px", fontSize: 12, fontFamily: "monospace" }}>{c.msisdn}</td>
                        <td style={{ padding: "12px 16px", fontSize: 11, color: COLORS.textMuted }}>{c.type}</td>
                        <td style={{ padding: "12px 16px", fontSize: 10, color: COLORS.textDim, fontFamily: "monospace" }}>{c.imei}</td>
                        <td style={{ padding: "12px 16px", fontSize: 11, color: COLORS.textMuted }}>{c.location}</td>
                        <td style={{ padding: "12px 16px" }}><RiskBadge score={c.risk} /></td>
                        <td style={{ padding: "12px 16px", fontSize: 12, color: COLORS.text, textAlign: "right" }}>{c.transactions}</td>
                        <td style={{ padding: "12px 16px" }}><StatusPill status={c.status} /></td>
                        <td style={{ padding: "12px 16px", fontSize: 11, color: COLORS.textMuted }}>{c.analyst}</td>
                        <td style={{ padding: "12px 16px", fontSize: 11, color: COLORS.textMuted }}>{c.flagged}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {filtered.length === 0 && (
                  <div style={{ padding: 40, textAlign: "center", color: COLORS.textMuted, fontSize: 13 }}>No cases match current filters</div>
                )}
              </div>
              <div style={{ marginTop: 10, fontSize: 11, color: COLORS.textMuted }}>Showing {filtered.length} of {cases.length} cases</div>
            </div>
          )}

          {/* NETWORK GRAPH */}
          {view === "network" && (
            <div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: 16 }}>
                <div>
                  <NetworkGraph onSelectNode={setSelectedNode} />
                  <div style={{ display: "flex", gap: 16, marginTop: 12 }}>
                    {[{ col: COLORS.red, label: "Primary suspect" }, { col: COLORS.accent, label: "Entity (agent/dealer)" }, { col: COLORS.blue, label: "Secondary node" }].map(l => (
                      <div key={l.label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        <div style={{ width: 10, height: 10, borderRadius: "50%", background: l.col }} />
                        <span style={{ fontSize: 11, color: COLORS.textMuted }}>{l.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  {selectedNode ? (
                    <div style={{ background: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: 12, padding: 16 }}>
                      <div style={{ fontSize: 11, color: COLORS.textMuted, marginBottom: 12, letterSpacing: "0.08em" }}>NODE DETAIL</div>
                      <div style={{ fontFamily: "monospace", fontSize: 13, color: COLORS.text, marginBottom: 8 }}>{selectedNode.label}</div>
                      <RiskBadge score={selectedNode.risk} />
                      <div style={{ marginTop: 12, borderTop: `1px solid ${COLORS.border}`, paddingTop: 12 }}>
                        {[["Type", selectedNode.type], ["Connections", networkEdges.filter(e => e.from === selectedNode.id || e.to === selectedNode.id).length], ["Risk Score", selectedNode.risk + "/100"]].map(([k, v]) => (
                          <div key={k} style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                            <span style={{ fontSize: 11, color: COLORS.textMuted }}>{k}</span>
                            <span style={{ fontSize: 11, color: COLORS.text, fontFamily: "monospace" }}>{v}</span>
                          </div>
                        ))}
                      </div>
                      <button onClick={() => { setSelectedCase(cases[0]); setSelectedNode(null); }} style={{ width: "100%", marginTop: 8, background: COLORS.accentDim, border: `1px solid ${COLORS.accent}44`, borderRadius: 8, padding: "8px 0", color: COLORS.accent, cursor: "pointer", fontSize: 12, fontFamily: "inherit" }}>Open Case →</button>
                    </div>
                  ) : (
                    <div style={{ background: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: 12, padding: 16 }}>
                      <div style={{ fontSize: 11, color: COLORS.textMuted, marginBottom: 8 }}>NETWORK SUMMARY</div>
                      {[["Total Nodes", 8], ["Connections", 9], ["High-risk Nodes", 4], ["Entity Nodes", 2]].map(([k, v]) => (
                        <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: `1px solid ${COLORS.border}` }}>
                          <span style={{ fontSize: 12, color: COLORS.textMuted }}>{k}</span>
                          <span style={{ fontSize: 14, color: COLORS.text, fontFamily: "monospace", fontWeight: 700 }}>{v}</span>
                        </div>
                      ))}
                      <div style={{ marginTop: 12, fontSize: 11, color: COLORS.textMuted }}>Click a node to inspect details</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* HEATMAP */}
          {view === "heatmap" && <HeatmapView />}

          {/* ANALYTICS */}
          {view === "analytics" && (
            <div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 24 }}>
                <MetricCard label="ML Accuracy" value="94.7%" color={COLORS.green} />
                <MetricCard label="False Positives" value="3.2%" color={COLORS.accent} />
                <MetricCard label="Avg Resolution" value="2.4 hrs" color={COLORS.blue} />
                <MetricCard label="CDRs Processed" value="4.8M" color={COLORS.purple} />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                <div style={{ background: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: 12, padding: "16px 20px" }}>
                  <div style={{ fontSize: 11, color: COLORS.textMuted, letterSpacing: "0.08em", marginBottom: 16 }}>FRAUD BY TYPE · THIS WEEK</div>
                  {fraudTypes.map((f, i) => (
                    <div key={i} style={{ marginBottom: 12 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                        <span style={{ fontSize: 12, color: COLORS.textMuted }}>{f.label}</span>
                        <span style={{ fontSize: 12, color: COLORS.text, fontFamily: "monospace" }}>{f.value}%</span>
                      </div>
                      <div style={{ height: 6, background: COLORS.border, borderRadius: 3 }}>
                        <div style={{ height: "100%", width: `${f.value}%`, background: f.color, borderRadius: 3, transition: "width 0.5s" }} />
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ background: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: 12, padding: "16px 20px" }}>
                  <div style={{ fontSize: 11, color: COLORS.textMuted, letterSpacing: "0.08em", marginBottom: 16 }}>ANALYST PERFORMANCE</div>
                  {[
                    { name: "K. Mensah", cases: 34, resolved: 28, accuracy: 97 },
                    { name: "A. Boateng", cases: 28, resolved: 21, accuracy: 93 },
                    { name: "E. Darko", cases: 19, resolved: 17, accuracy: 91 },
                    { name: "P. Osei", cases: 22, resolved: 18, accuracy: 89 },
                  ].map((a, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12, paddingBottom: 12, borderBottom: `1px solid ${COLORS.border}` }}>
                      <div style={{ width: 32, height: 32, borderRadius: "50%", background: COLORS.accentDim, border: `1px solid ${COLORS.accent}44`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: COLORS.accent, fontWeight: 700, flexShrink: 0 }}>
                        {a.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 12, color: COLORS.text }}>{a.name}</div>
                        <div style={{ fontSize: 10, color: COLORS.textMuted }}>{a.cases} cases · {a.resolved} resolved</div>
                      </div>
                      <div style={{ fontSize: 14, fontFamily: "monospace", fontWeight: 700, color: COLORS.green }}>{a.accuracy}%</div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ background: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: 12, padding: "16px 20px" }}>
                <div style={{ fontSize: 11, color: COLORS.textMuted, letterSpacing: "0.08em", marginBottom: 16 }}>DETECTION WORKFLOW EFFICIENCY</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: COLORS.border }}>
                  {[
                    { stage: "Prospecting", count: 2847, pct: 100, color: COLORS.blue },
                    { stage: "Screening", count: 847, pct: 30, color: COLORS.accent },
                    { stage: "Decision", count: 312, pct: 11, color: COLORS.purple },
                    { stage: "Actioned", count: 198, pct: 7, color: COLORS.red },
                  ].map((s, i) => (
                    <div key={i} style={{ background: COLORS.card, padding: "20px 16px", textAlign: "center" }}>
                      <div style={{ fontSize: 10, color: COLORS.textMuted, letterSpacing: "0.06em", marginBottom: 8 }}>{s.stage.toUpperCase()}</div>
                      <div style={{ fontSize: 28, fontWeight: 700, color: s.color, fontFamily: "monospace" }}>{s.count.toLocaleString()}</div>
                      <div style={{ fontSize: 11, color: COLORS.textMuted, marginTop: 4 }}>{s.pct}% of total</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {selectedCase && <CaseDetail caseData={selectedCase} onClose={() => setSelectedCase(null)} onAction={handleAction} />}
      {toast && <Toast msg={toast} onClose={() => setToast(null)} />}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 6px; height: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #1e2535; border-radius: 3px; }
        @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.4; } }
      `}</style>
    </div>
  );
}
