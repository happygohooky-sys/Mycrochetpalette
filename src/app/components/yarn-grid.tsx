import { YarnColor } from "../data/yarns";
import { YarnColorCard } from "./yarn-color-card";

interface YarnGridProps {
  yarns: YarnColor[];
  selectedYarns: YarnColor[];
  onToggle: (yarn: YarnColor) => void;
}

export function YarnGrid({ yarns, selectedYarns, onToggle }: YarnGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {yarns.map((yarn) => (
        <YarnColorCard
          key={yarn.id}
          yarn={yarn}
          isSelected={selectedYarns.some(y => y.id === yarn.id)}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}
