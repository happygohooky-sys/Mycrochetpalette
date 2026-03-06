import svgPaths from "./svg-ha8ndxmosk";
import imgColorDisplay from "figma:asset/8fdc1c9827760e1743c71c608d1c64196838abaf.png";

function Frame() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[2px] inset-[0_-0.2%_0_29.38%] items-start justify-center p-[12px] rounded-br-[8px] rounded-tr-[8px]">
      <div aria-hidden="true" className="absolute border-[#cdcdcd] border-b border-r border-solid border-t inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#0c0a1c] text-[14px] w-full whitespace-pre-wrap">Aster</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[12px] not-italic opacity-85 overflow-hidden relative shrink-0 text-[#5a5866] text-[12px] text-ellipsis tracking-[0.12px] w-full whitespace-nowrap">Stylecraft Special DK dsadsadsadsad</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[#5485c7] inset-[0_70.62%_0_23.34%]">
      <div className="flex flex-col justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-[#e3e2eb] content-stretch flex flex-col inset-[7.35%_1.91%_69.12%_91.65%] items-start px-[5px] py-[6px] rounded-[4px]">
      <div className="h-[4px] relative shrink-0 w-[6px]" data-name="Vector">
        <div className="absolute inset-[-25%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00004 6.00001">
            <path d={svgPaths.p2d958900} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[7.35%_1.91%_69.12%_91.65%]">
      <Frame2 />
    </div>
  );
}

export default function YarnCard() {
  return (
    <div className="relative size-full" data-name="Yarn card">
      <div className="absolute flex inset-[0_76.44%_0_0] items-center justify-center">
        <div className="-rotate-90 flex-none h-[58.559px] w-[68px]">
          <div className="relative rounded-tl-[8px] rounded-tr-[8px] size-full" data-name="Color Display">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full" src={imgColorDisplay} />
          </div>
        </div>
      </div>
      <Frame />
      <Frame1 />
      <Group />
    </div>
  );
}