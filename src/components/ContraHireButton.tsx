"use client";
import Script from "next/script";

interface ContraHireButtonProps {
  theme?: "light" | "dark";
  className?: string;
}

export default function ContraHireButton({
  theme = "light",
  className = "",
}: ContraHireButtonProps) {
  return (
    <div className={`inline-flex items-center min-h-[44px] ${className}`}>
      <div
        className="contra-hire-me-button"
        data-analyticsUserId="de854e58-4da8-4e1c-b669-2a01b0ce9d9e"
        data-theme={theme}
        data-username="jerrymelvinjm"
      />
      <Script
        src="https://contra.com/static/embed/sdk.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
