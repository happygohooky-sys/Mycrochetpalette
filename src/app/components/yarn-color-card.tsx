import { YarnColor } from "../data/yarns";
import { Check } from "lucide-react";
import { useState, useEffect } from "react";

interface YarnColorCardProps {
  yarn: YarnColor;
  isSelected: boolean;
  onToggle: (yarn: YarnColor) => void;
}

export function YarnColorCard({ yarn, isSelected, onToggle }: YarnColorCardProps) {
  const [yarnImage, setYarnImage] = useState<string | null>(null);

  useEffect(() => {
    // Lazy load yarn images
    if (yarn.id === "sc1805") {
      import("../data/yarn-images")
        .then(module => {
          if (module.yarnImages[yarn.id]) {
            setYarnImage(module.yarnImages[yarn.id]);
          }
        })
        .catch(err => console.warn("Failed to load yarn image", err));
    }
  }, [yarn.id]);

  return (
    <button
      onClick={() => onToggle(yarn)}
      className={`relative h-[68px] w-full transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary rounded-lg`}
      style={{ boxShadow: '0px 1px 4px 0px rgba(12,12,13,0.1)' }}
      aria-label={`${isSelected ? 'Remove' : 'Add'} ${yarn.name} ${isSelected ? 'from' : 'to'} palette`}
    >
      {/* Rotated color display on the left */}
      <div className="absolute flex inset-y-0 left-0 w-[68px] items-center justify-center">
        <div className="-rotate-90 flex-none h-[68px] w-[68px]">
          <div 
            className="relative rounded-tl-[8px] rounded-tr-[8px] size-full overflow-hidden" 
            style={{ backgroundColor: yarn.hex }}
          >
            {yarnImage && (
              <img 
                src={yarnImage} 
                alt={yarn.name}
                className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full"
              />
            )}
          </div>
        </div>
      </div>

      {/* Color block overlay - matches Figma positioning */}
      <div 
        className="absolute inset-y-0 left-[68px] w-[48px]"
        style={{ backgroundColor: yarn.hex }}
      />
      
      {/* Text info section */}
      <div className="absolute bg-white inset-y-0 left-[68px] right-0 flex flex-col gap-[2px] items-start justify-center p-[12px] rounded-br-[8px] rounded-tr-[8px]">
        <p 
          className="font-bold leading-[20px] not-italic relative shrink-0 text-[#0c0a1c] text-[14px] w-full whitespace-nowrap overflow-hidden text-ellipsis text-left" 
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {yarn.name}
        </p>
        <p 
          className="font-medium leading-[12px] not-italic opacity-85 overflow-hidden relative shrink-0 text-[#5a5866] text-[12px] text-ellipsis tracking-[0.12px] w-full whitespace-nowrap text-left" 
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {yarn.brand}
        </p>
      </div>
      
      {/* Selected indicator - matches Figma design */}
      {isSelected && (
        <div className="absolute top-[5px] right-[5px] z-10 bg-black w-4 h-4 rounded-[4px] flex items-center justify-center">
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M5 8.33334L7.00001 10L11 6" 
              stroke="white" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </button>
  );
}