import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name} — Engineering, Research & AI`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#f6f5f1",
          color: "#17160f",
          backgroundImage:
            "linear-gradient(to right, rgba(23,22,15,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(23,22,15,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 24, color: "#57554c" }}>
          <div style={{ width: 14, height: 14, borderRadius: 7, background: "#a4481a" }} />
          {profile.identity.slice(0, 2).join(" · ")}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, lineHeight: 1.02, letterSpacing: -2, fontWeight: 600 }}>{profile.name}</div>
          <div style={{ marginTop: 24, fontSize: 36, color: "#a4481a" }}>Engineering ideas into real-world impact.</div>
        </div>
        <div style={{ display: "flex", fontSize: 22, color: "#57554c" }}>
          BRAC University · LaSSET · Tornetec · GreenSync
        </div>
      </div>
    ),
    size,
  );
}
