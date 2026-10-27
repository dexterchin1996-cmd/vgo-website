"use client";

/**
 * Global error boundary.
 * Rendered when the root layout crashes, so no LangProvider and no
 * global stylesheet are guaranteed. Uses bilingual static copy and
 * inline styles on purpose.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en-MY">
      <body
        style={{
          margin: 0,
          background: "#06111d",
          color: "#ffffff",
          fontFamily:
            'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
        }}
      >
        <main
          style={{
            minHeight: "70svh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 24px",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: "20px", fontWeight: 700, margin: "0 0 12px" }}>
            Page temporarily unavailable
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: "14px",
              margin: "0 0 28px",
            }}
          >
            Please refresh the page
          </p>
          <button
            onClick={() => reset()}
            style={{
              padding: "12px 32px",
              background: "#ff7900",
              color: "#ffffff",
              border: "none",
              borderRadius: "999px",
              fontWeight: 700,
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            Refresh
          </button>
        </main>
      </body>
    </html>
  );
}
