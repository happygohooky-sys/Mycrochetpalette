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
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+111.5px)] size-[16px] top-[calc(50%-21px)]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame 30">
          <rect fill="var(--fill-0, black)" height="16" rx="4" width="16" />
          <path d="M5 8.33334L7.00001 10L11 6" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%+111.5px)] top-[calc(50%-21px)]">
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