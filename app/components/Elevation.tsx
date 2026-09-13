import type { ReactElement } from "react";

type ElevationVariant = "estate" | "glass" | "stone" | "cabin";

const paths: Record<ElevationVariant, ReactElement> = {
  // Hero mark — a long low modern volume with a cantilevered roof plane
  estate: (
    <>
      <line x1="4" y1="150" x2="316" y2="150" />
      <path d="M40 150V96h240v54" />
      <path d="M24 96 160 54l136 42" />
      <line x1="24" y1="96" x2="296" y2="96" />
      <line x1="70" y1="150" x2="70" y2="112" />
      <line x1="70" y1="112" x2="106" y2="112" />
      <line x1="106" y1="112" x2="106" y2="150" />
      <line x1="150" y1="150" x2="150" y2="112" />
      <line x1="150" y1="112" x2="182" y2="112" />
      <line x1="182" y1="112" x2="182" y2="150" />
      <line x1="222" y1="150" x2="222" y2="112" />
      <line x1="222" y1="112" x2="254" y2="112" />
      <line x1="254" y1="112" x2="254" y2="150" />
      <line x1="160" y1="54" x2="160" y2="30" />
      <circle cx="160" cy="22" r="6" />
    </>
  ),
  // A glass-walled pavilion with a flat roof and slender columns
  glass: (
    <>
      <line x1="8" y1="140" x2="232" y2="140" />
      <line x1="24" y1="140" x2="24" y2="72" />
      <line x1="216" y1="140" x2="216" y2="72" />
      <line x1="16" y1="72" x2="224" y2="72" />
      <line x1="16" y1="66" x2="224" y2="66" />
      <line x1="48" y1="140" x2="48" y2="72" />
      <line x1="84" y1="140" x2="84" y2="72" />
      <line x1="120" y1="140" x2="120" y2="72" />
      <line x1="156" y1="140" x2="156" y2="72" />
      <line x1="192" y1="140" x2="192" y2="72" />
      <line x1="24" y1="106" x2="216" y2="106" />
    </>
  ),
  // A pitched stone house with a chimney
  stone: (
    <>
      <line x1="4" y1="140" x2="220" y2="140" />
      <path d="M32 140V88h160v52" />
      <path d="M20 88 112 40l104 48" />
      <line x1="168" y1="60" x2="168" y2="40" />
      <line x1="160" y1="40" x2="176" y2="40" />
      <path d="M64 140V96h34v44" />
      <line x1="120" y1="140" x2="120" y2="104" />
      <line x1="120" y1="104" x2="150" y2="104" />
      <line x1="150" y1="104" x2="150" y2="140" />
      <circle cx="81" cy="118" r="2.4" />
    </>
  ),
  // An A-frame mountain cabin
  cabin: (
    <>
      <line x1="16" y1="140" x2="204" y2="140" />
      <path d="M110 30 40 140" />
      <path d="M110 30 180 140" />
      <line x1="58" y1="112" x2="162" y2="112" />
      <line x1="82" y1="140" x2="82" y2="96" />
      <line x1="82" y1="96" x2="138" y2="96" />
      <line x1="138" y1="96" x2="138" y2="140" />
      <line x1="82" y1="118" x2="138" y2="118" />
      <line x1="110" y1="96" x2="110" y2="140" />
    </>
  ),
};

const viewBoxes: Record<ElevationVariant, string> = {
  estate: "0 0 320 160",
  glass: "0 0 232 148",
  stone: "0 0 224 148",
  cabin: "0 0 220 148",
};

export function Elevation({
  variant,
  className,
}: {
  variant: ElevationVariant;
  className?: string;
}) {
  return (
    <svg
      viewBox={viewBoxes[variant]}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.1}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[variant]}
    </svg>
  );
}
