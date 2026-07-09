import { ImageResponse } from "next/og";
import { company } from "@/lib/data";

export const alt = `${company.shortName} — Security, Housekeeping & Manpower in Delhi NCR`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          background: "linear-gradient(135deg, #1c1917 0%, #292524 55%, #44403c 100%)",
          color: "#fafaf9",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "88px",
              height: "88px",
              borderRadius: "9999px",
              background: "#a67c52",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "42px",
              fontWeight: 700,
            }}
          >
            R
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "28px", letterSpacing: "0.12em", color: "#d4a574" }}>
              RUDRA MANPOWER
            </div>
            <div style={{ fontSize: "22px", color: "#d6d3d1", marginTop: "8px" }}>
              Services Pvt. Ltd.
            </div>
          </div>
        </div>
        <div
          style={{
            fontSize: "56px",
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: "900px",
          }}
        >
          Security, Housekeeping & Manpower in Delhi NCR
        </div>
        <div
          style={{
            marginTop: "28px",
            fontSize: "28px",
            lineHeight: 1.4,
            color: "#d6d3d1",
            maxWidth: "860px",
          }}
        >
          PASARA licensed · Police-verified teams · Army veteran-led operations
        </div>
        <div
          style={{
            marginTop: "40px",
            width: "120px",
            height: "4px",
            background: "#a67c52",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
