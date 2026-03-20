const GridPattern = ({
  width = 20,
  height = 20,
  x = 0,
  y = 0,
  className = "",
}: {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  className?: string;
}) => {
  return (
    <svg
      className={`absolute inset-0 z-[-1] ${className}`}
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      suppressHydrationWarning
    >
      <defs>
        <pattern
          id="grid"
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
        >
          <path
            d={`M ${width} 0 L 0 0 0 ${height}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            suppressHydrationWarning
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" x={x} y={y} />
    </svg>
  );
};

export default GridPattern;
