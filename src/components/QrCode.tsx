"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";

type Props = {
  value: string;
  size?: number;
  className?: string;
  label?: string;
};

/** Renders a QR code as an SVG that opens `value` when scanned. */
export function QrCode({ value, size = 160, className = "", label }: Props) {
  const [svg, setSvg] = useState<string>("");

  useEffect(() => {
    let cancelled = false;
    QRCode.toString(value, {
      type: "svg",
      margin: 1,
      width: size,
      color: { dark: "#0a1a3a", light: "#ffffff" },
      errorCorrectionLevel: "M",
    }).then((out) => {
      if (!cancelled) setSvg(out);
    });
    return () => {
      cancelled = true;
    };
  }, [value, size]);

  return (
    <figure className={`inline-flex flex-col items-center gap-2 ${className}`}>
      <div
        className="rounded-lg bg-white p-2 shadow-[0_0_0_1px_rgba(10,26,58,0.08)]"
        style={{ width: size + 16, height: size + 16 }}
        dangerouslySetInnerHTML={svg ? { __html: svg } : undefined}
        aria-label={label ?? `QR code for ${value}`}
      />
      {label ? <figcaption className="text-xs tracking-wide text-[var(--card-muted)]">{label}</figcaption> : null}
    </figure>
  );
}
