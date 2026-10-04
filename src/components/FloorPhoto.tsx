const photos = {
  conveyors: "/images/floor-conveyors.jpg",
  packing: "/images/floor-packing.jpg",
  workflow: "/images/floor-workflow.jpg",
} as const;

export function FloorPhoto({
  photo,
  position = "center",
  priority = false,
}: {
  photo: keyof typeof photos;
  position?: string;
  priority?: boolean;
}) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={photos[photo]}
        alt=""
        className="animate-drift h-full w-full object-cover"
        style={{ objectPosition: position }}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
      />
    </div>
  );
}
