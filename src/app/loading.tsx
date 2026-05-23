export default function Loading() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center bg-black"
      role="status"
      aria-label="Loading portfolio"
    >
      <div className="relative h-16 w-16">
        <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-primary border-r-secondary" />
        <div
          className="absolute inset-2 animate-spin rounded-full border-2 border-transparent border-b-primary-container border-l-tertiary"
          style={{ animationDirection: "reverse", animationDuration: "1.2s" }}
        />
      </div>
      <p className="mt-8 font-display text-label-md text-on-surface-variant">
        Loading portfolio…
      </p>
    </div>
  );
}
