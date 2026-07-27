import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { company } from "@/lib/content";

// Node runtime (not edge) so the logo can be read off disk.
export const alt = "Elite Processing Team — Third-Party Loan Processing";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Satori doesn't apply CSS classes from an SVG <style> block, so the logo's
// fills are inlined and its white backing rect dropped before embedding. The
// viewBox is also cropped to the artwork — the source file pads it to a
// 5760x2880 canvas, which would render the lockup tiny.
async function logoDataUri() {
  const raw = await readFile(join(process.cwd(), "public", "logo.svg"), "utf8");
  const inlined = raw
    .replace(/<rect\s+class="st0"[^>]*\/>/, "")
    .replace(/class="st0"/g, 'fill="#ffffff"')
    .replace(/class="st1"/g, 'fill="#444444"')
    .replace(/class="st2"/g, 'fill="#dd4292"')
    .replace('viewBox="0 0 5760 2880"', 'viewBox="380 600 5000 1700"');
  return `data:image/svg+xml;base64,${Buffer.from(inlined).toString("base64")}`;
}

export default async function OgImage() {
  const logo = await logoDataUri();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "72px",
          background:
            "linear-gradient(135deg, #ffffff 0%, #f7f6f7 62%, #fbdcec 100%)",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo} width={760} height={258} alt={company.name} />

        <div
          style={{
            display: "flex",
            fontSize: 30,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#c01573",
            fontWeight: 700,
            marginTop: 8,
          }}
        >
          Third-Party Loan Processing
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 40,
            lineHeight: 1.25,
            color: "#2a262d",
            marginTop: 32,
            textAlign: "center",
            maxWidth: 940,
          }}
        >
          An easy solution for mortgage brokers to expand their business.
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#625f68",
            marginTop: 36,
          }}
        >
          {company.legalName} · NMLS #{company.nmls}
        </div>
      </div>
    ),
    { ...size }
  );
}
