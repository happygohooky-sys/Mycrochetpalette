interface YarnBallProps {
  color: string;
  imageUrl?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function YarnBall({ color, imageUrl, size = "md", className = "" }: YarnBallProps) {
  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-20 h-20",
    lg: "w-32 h-32",
  };

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      {/* Colored background */}
      <div
        className="absolute inset-0 rounded-full"
        style={{ backgroundColor: color }}
      />
      
      {/* Yarn texture overlay - only if imageUrl is provided */}
      {imageUrl && (
        <div
          className="absolute inset-0 rounded-full opacity-90"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            mixBlendMode: "multiply",
          }}
        />
      )}
      
      {/* Yarn texture pattern (SVG-based) for when no image is provided */}
      {!imageUrl && (
        <div
          className="absolute inset-0 rounded-full opacity-30"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 2px,
              rgba(0, 0, 0, 0.1) 2px,
              rgba(0, 0, 0, 0.1) 4px
            )`,
          }}
        />
      )}
      
      {/* Highlight for dimension */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4) 0%, transparent 50%)",
        }}
      />
      {/* Shadow for depth */}
      <div
        className="absolute inset-0 rounded-full shadow-md"
        style={{
          boxShadow: "inset -2px -2px 8px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.1)",
        }}
      />
    </div>
  );
}