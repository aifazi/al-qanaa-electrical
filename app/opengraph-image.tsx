import { ImageResponse } from "next/og";

export const alt =
  "Al Qanaa Electrical Repairing Workshop — Electrical & Appliance Repair Al Ain";
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
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0a1326 0%, #0f1b33 60%, #16264a 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "rgba(160,138,99,0.15)",
              border: "1px solid rgba(160,138,99,0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#a08a63",
              fontSize: 36,
            }}
          >
            ⚡
          </div>
          <div style={{ fontSize: 34, fontWeight: 700 }}>Al Qanaa</div>
        </div>

        <div
          style={{
            marginTop: 40,
            fontSize: 64,
            fontWeight: 800,
            lineHeight: 1.05,
            maxWidth: 900,
          }}
        >
          Free Diagnostic Check.
        </div>
        <div style={{ marginTop: 16, fontSize: 30, color: "#a08a63" }}>
          Electrical &amp; Appliance Repair · Al Ain &amp; Abu Dhabi
        </div>

        <div
          style={{
            marginTop: 48,
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
          }}
        >
          <span style={{ color: "#c9a24b" }}>4.9 / 5</span>
          <span style={{ color: "rgba(255,255,255,0.7)" }}>· 200+ Google reviews</span>
          <span style={{ color: "rgba(255,255,255,0.7)" }}>· +971 52 327 6374</span>
        </div>
      </div>
    ),
    size
  );
}
