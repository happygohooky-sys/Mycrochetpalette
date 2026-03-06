import svgPaths from "./svg-ynf3how0j4";
import imgColorDisplay from "figma:asset/8fdc1c9827760e1743c71c608d1c64196838abaf.png";
import imgColorDisplay1 from "figma:asset/f674283bee407a5722ac837b010d45df8c4bb0f3.png";

function InputContent1() {
  return <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-between min-h-px min-w-px" data-name="Input Content" />;
}

function InputContent() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Input Content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] relative size-full">
          <p className="font-['Yaro_Rg:Black',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6d57fc] text-[28px]">yarnette</p>
          <InputContent1 />
        </div>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[8px] relative">
      <InputContent />
    </div>
  );
}

function InputContent4() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0" data-name="Input Content">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] w-full whitespace-pre-wrap">Tools</p>
    </div>
  );
}

function FiChevronDown() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="fi:chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="fi:chevron-down">
          <path d="M6 9L12 15L18 9" id="Vector" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function InputContent3() {
  return (
    <div className="col-1 content-stretch flex gap-[4px] h-[28px] items-center ml-0 mt-0 relative row-1" data-name="Input Content">
      <InputContent4 />
      <FiChevronDown />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <InputContent3 />
    </div>
  );
}

function InputContent6() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0" data-name="Input Content">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] w-full whitespace-pre-wrap">My Palettes</p>
    </div>
  );
}

function InputContent5() {
  return (
    <div className="col-1 content-stretch flex h-[28px] items-center ml-0 mt-0 relative row-1" data-name="Input Content">
      <InputContent6 />
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <InputContent5 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="col-1 content-stretch flex gap-[24px] items-center justify-end ml-0 mt-0 relative row-1 w-[254px]">
      <Group />
      <Group2 />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame3 />
    </div>
  );
}

function InputContent2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Input Content">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative size-full">
          <Group1 />
        </div>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start py-[8px] relative shrink-0">
      <InputContent2 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="col-1 content-stretch flex h-[55px] items-center ml-0 mt-0 relative row-1 w-[1438px]">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-b border-solid inset-0 pointer-events-none" />
      <Frame30 />
      <Frame33 />
    </div>
  );
}

function Group9() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Frame32 />
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Search">
          <path d={svgPaths.p3fc98740} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function InputContent8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-between min-h-px min-w-px relative" data-name="Input Content">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6c7280] text-[16px] w-full whitespace-pre-wrap">Search yarn colours...</p>
    </div>
  );
}

function InputContent7() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Input Content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] relative size-full">
          <Search />
          <InputContent8 />
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[8px] relative">
      <InputContent7 />
    </div>
  );
}

function InputContent10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-between min-h-px min-w-px relative" data-name="Input Content">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] w-full whitespace-pre-wrap">All Brands</p>
    </div>
  );
}

function FiChevronDown1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="fi:chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="fi:chevron-down">
          <path d="M6 9L12 15L18 9" id="Vector" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function InputContent9() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Input Content">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] relative size-full">
          <InputContent10 />
          <FiChevronDown1 />
        </div>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start py-[8px] relative shrink-0 w-[249px]">
      <InputContent9 />
    </div>
  );
}

function InputContent12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-between min-h-px min-w-px relative" data-name="Input Content">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] w-full whitespace-pre-wrap">All Weights</p>
    </div>
  );
}

function FiChevronDown2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="fi:chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="fi:chevron-down">
          <path d="M6 9L12 15L18 9" id="Vector" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function InputContent11() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Input Content">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] relative size-full">
          <InputContent12 />
          <FiChevronDown2 />
        </div>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start py-[8px] relative shrink-0 w-[248px]">
      <InputContent11 />
    </div>
  );
}

function InputContent14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-between min-h-px min-w-px relative" data-name="Input Content">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] w-full whitespace-pre-wrap">Sort by</p>
    </div>
  );
}

function FiChevronDown3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="fi:chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="fi:chevron-down">
          <path d="M6 9L12 15L18 9" id="Vector" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function InputContent13() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Input Content">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] relative size-full">
          <InputContent14 />
          <FiChevronDown3 />
        </div>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start py-[8px] relative shrink-0 w-[162.75px]">
      <InputContent13 />
    </div>
  );
}

function FiChevronDown4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="fi:chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="fi:chevron-down">
          <path d="M6 9L12 15L18 9" id="Vector" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function InputContent15() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Input Content">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative size-full">
          <FiChevronDown4 />
        </div>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start py-[8px] relative shrink-0">
      <InputContent15 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="col-1 content-stretch flex h-[53px] items-center ml-0 mt-0 relative row-1 w-[1438px]">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-b border-solid inset-[0_0_-1px_0] pointer-events-none" />
      <Frame31 />
      <Frame35 />
      <Frame37 />
      <Frame38 />
      <Frame39 />
    </div>
  );
}

function Group10() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Frame34 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic relative shrink-0 w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#353535] text-[20px] w-[504px] whitespace-pre-wrap">Create a palette</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[14px] text-black">{`Drag the colours to reorder them `}</p>
    </div>
  );
}

function Frame42() {
  return (
    <div className="bg-white flex-[1_0_0] h-[41px] min-h-px min-w-px relative rounded-bl-[6px] rounded-tl-[6px]">
      <div className="flex flex-col justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#9747ff] flex-[1_0_0] h-[41px] min-h-px min-w-px relative">
      <div className="flex flex-col justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="bg-[#b43795] flex-[1_0_0] h-[41px] min-h-px min-w-px relative">
      <div className="flex flex-col justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="bg-[#6c6b2a] flex-[1_0_0] h-[41px] min-h-px min-w-px relative">
      <div className="flex flex-col justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="bg-[#58502e] flex-[1_0_0] h-[41px] min-h-px min-w-px relative rounded-br-[6px] rounded-tr-[6px]">
      <div className="flex flex-col justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex items-center relative rounded-[6px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
      <Frame42 />
      <Frame4 />
      <Frame43 />
      <Frame44 />
      <Frame45 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame28 />
      <Frame41 />
    </div>
  );
}

function OutlineGeneralPalette() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Outline/General/Palette">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Outline/General/Palette">
          <g id="Icon">
            <path d={svgPaths.p20566800} fill="var(--fill-0, #312144)" />
            <path d={svgPaths.p3d928980} fill="var(--fill-0, #312144)" />
            <path d={svgPaths.p28e1daf0} fill="var(--fill-0, #312144)" />
            <path d={svgPaths.p23f33f00} fill="var(--fill-0, #312144)" />
            <path d={svgPaths.p10c51200} fill="var(--fill-0, #312144)" />
            <path d={svgPaths.pa1d9900} fill="var(--fill-0, #312144)" />
            <path clipRule="evenodd" d={svgPaths.pe4b4e00} fill="var(--fill-0, #312144)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function InputContent17() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0" data-name="Input Content">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#312144] text-[14px] w-full whitespace-pre-wrap">Save Palette</p>
    </div>
  );
}

function InputContent16() {
  return (
    <div className="content-stretch flex gap-[6px] h-[28px] items-center relative shrink-0 w-full" data-name="Input Content">
      <OutlineGeneralPalette />
      <InputContent17 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#e2dfe7] content-stretch flex flex-col items-start px-[12px] py-[2px] relative rounded-[4px] shrink-0">
      <InputContent16 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame15 />
      <Frame13 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#353535] text-[18px] w-[504px] whitespace-pre-wrap">My Palettes</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame29 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-solid border-t inset-0 pointer-events-none" />
      <Frame16 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#9747ff] relative rounded-[4px] shrink-0 size-[20px]">
      <div className="flex flex-col justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="bg-[#9747ff] relative rounded-[4px] shrink-0 size-[20px]">
      <div className="flex flex-col justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="bg-[#9747ff] relative rounded-[4px] shrink-0 size-[20px]">
      <div className="flex flex-col justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="bg-[#9747ff] relative rounded-[4px] shrink-0 size-[20px]">
      <div className="flex flex-col justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="bg-[#9747ff] relative rounded-[4px] shrink-0 size-[20px]">
      <div className="flex flex-col justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="bg-[#9747ff] relative rounded-[4px] shrink-0 size-[20px]">
      <div className="flex flex-col justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="bg-[#9747ff] relative rounded-[4px] shrink-0 size-[20px]">
      <div className="flex flex-col justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="bg-[#9747ff] relative rounded-[4px] shrink-0 size-[20px]">
      <div className="flex flex-col justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="bg-[#9747ff] relative rounded-[4px] shrink-0 size-[20px]">
      <div className="flex flex-col justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="bg-[#9747ff] relative rounded-[4px] shrink-0 size-[20px]">
      <div className="flex flex-col justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-center flex flex-wrap gap-[6px] items-center relative shrink-0 w-full">
      <Frame5 />
      <Frame47 />
      <Frame48 />
      <Frame49 />
      <Frame52 />
      <Frame53 />
      <Frame54 />
      <Frame55 />
      <Frame56 />
      <Frame57 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[5px] items-start justify-center px-[12px] py-[8px] relative w-full">
          <Frame51 />
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#353535] text-[14px] w-full whitespace-pre-wrap">Sunshine and a super long name</p>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#9747ff] relative rounded-[4px] shrink-0 size-[20px]">
      <div className="flex flex-col justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="bg-[#9747ff] relative rounded-[4px] shrink-0 size-[20px]">
      <div className="flex flex-col justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Frame65() {
  return (
    <div className="bg-[#9747ff] relative rounded-[4px] shrink-0 size-[20px]">
      <div className="flex flex-col justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Frame66() {
  return (
    <div className="bg-[#9747ff] relative rounded-[4px] shrink-0 size-[20px]">
      <div className="flex flex-col justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Frame67() {
  return (
    <div className="bg-[#9747ff] relative rounded-[4px] shrink-0 size-[20px]">
      <div className="flex flex-col justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Frame68() {
  return (
    <div className="bg-[#9747ff] relative rounded-[4px] shrink-0 size-[20px]">
      <div className="flex flex-col justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Frame69() {
  return (
    <div className="bg-[#9747ff] relative rounded-[4px] shrink-0 size-[20px]">
      <div className="flex flex-col justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Frame70() {
  return (
    <div className="bg-[#9747ff] relative rounded-[4px] shrink-0 size-[20px]">
      <div className="flex flex-col justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Frame71() {
  return (
    <div className="bg-[#9747ff] relative rounded-[4px] shrink-0 size-[20px]">
      <div className="flex flex-col justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Frame72() {
  return (
    <div className="bg-[#9747ff] relative rounded-[4px] shrink-0 size-[20px]">
      <div className="flex flex-col justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Frame73() {
  return (
    <div className="bg-[#9747ff] relative rounded-[4px] shrink-0 size-[20px]">
      <div className="flex flex-col justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Frame74() {
  return (
    <div className="bg-[#9747ff] relative rounded-[4px] shrink-0 size-[20px]">
      <div className="flex flex-col justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Frame75() {
  return (
    <div className="bg-[#9747ff] relative rounded-[4px] shrink-0 size-[20px]">
      <div className="flex flex-col justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Frame76() {
  return (
    <div className="bg-[#9747ff] relative rounded-[4px] shrink-0 size-[20px]">
      <div className="flex flex-col justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Frame77() {
  return (
    <div className="bg-[#9747ff] relative rounded-[4px] shrink-0 size-[20px]">
      <div className="flex flex-col justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-center flex flex-wrap gap-[6px] items-center relative shrink-0 w-full">
      <Frame6 />
      <Frame64 />
      <Frame65 />
      <Frame66 />
      <Frame67 />
      <Frame68 />
      <Frame69 />
      <Frame70 />
      <Frame71 />
      <Frame72 />
      <Frame73 />
      <Frame74 />
      <Frame75 />
      <Frame76 />
      <Frame77 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[5px] items-start justify-center px-[12px] py-[8px] relative w-full">
          <Frame63 />
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#353535] text-[14px] w-full whitespace-pre-wrap">Attic 24 Meadow Blanket Colours</p>
        </div>
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame62 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame50 />
      <Frame58 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame46 />
      <Frame59 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="bg-white col-1 content-stretch flex flex-col gap-[28px] h-[656px] items-start ml-0 mt-0 p-[24px] relative row-1 w-[358px]">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-l border-solid border-t inset-0 pointer-events-none" />
      <Frame61 />
      <Frame60 />
    </div>
  );
}

function Group5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Frame27 />
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-black">
        <span className="font-['Inter:Bold',sans-serif] font-bold leading-[normal]">155</span>
        <span className="leading-[normal]">{` colours available  `}</span>
        <span className="font-['Inter:Bold',sans-serif] font-bold leading-[normal]">1</span>
        <span className="leading-[normal]">{` selected`}</span>
      </p>
    </div>
  );
}

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

function Frame80() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+112.25px)] size-[16px] top-[calc(50%-21px)]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame 30">
          <rect fill="var(--fill-0, black)" height="16" rx="4" width="16" />
          <path d="M5 8.33334L7.00001 10L11 6" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%+112.25px)] top-[calc(50%-21px)]">
      <Frame80 />
    </div>
  );
}

function YarnCard() {
  return (
    <div className="flex-[1_0_0] h-[68px] min-h-px min-w-px relative" data-name="Yarn card">
      <div className="absolute flex inset-[0_76.44%_0_0] items-center justify-center">
        <div className="-rotate-90 flex-none h-[58.677px] w-[68px]">
          <div className="relative rounded-tl-[8px] rounded-tr-[8px] size-full" data-name="Color Display">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full" src={imgColorDisplay} />
          </div>
        </div>
      </div>
      <Frame />
      <Frame1 />
      <Group6 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[2px] inset-[0_-0.2%_0_29.38%] items-start justify-center p-[12px] rounded-br-[8px] rounded-tr-[8px]">
      <div aria-hidden="true" className="absolute border-[#cdcdcd] border-b border-r border-solid border-t inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#0c0a1c] text-[14px] w-full whitespace-pre-wrap">Olive</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[12px] not-italic opacity-85 relative shrink-0 text-[#5a5866] text-[12px] tracking-[0.12px] w-full whitespace-pre-wrap">Stylecraft Special DK</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute bg-[#58502e] inset-[0_70.62%_0_23.34%]">
      <div className="flex flex-col justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function YarnCard1() {
  return (
    <div className="flex-[1_0_0] h-[68px] min-h-px min-w-px relative" data-name="Yarn card">
      <div className="absolute flex inset-[0_76.66%_0_0] items-center justify-center">
        <div className="-rotate-90 flex-none h-[58.117px] w-[68px]">
          <div className="relative rounded-tl-[8px] rounded-tr-[8px] size-full" data-name="Color Display">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full" src={imgColorDisplay1} />
          </div>
        </div>
      </div>
      <Frame2 />
      <Frame9 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[2px] inset-[0_-0.2%_0_29.38%] items-start justify-center p-[12px] rounded-br-[8px] rounded-tr-[8px]">
      <div aria-hidden="true" className="absolute border-[#cdcdcd] border-b border-r border-solid border-t inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#0c0a1c] text-[14px] w-full whitespace-pre-wrap">Aster</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[12px] not-italic opacity-85 overflow-hidden relative shrink-0 text-[#5a5866] text-[12px] text-ellipsis tracking-[0.12px] w-full whitespace-nowrap">Stylecraft Special DK dsadsadsadsad</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute bg-[#5485c7] inset-[0_70.62%_0_23.34%]">
      <div className="flex flex-col justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Frame81() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+112.25px)] size-[16px] top-[calc(50%-21px)]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame 30">
          <rect fill="var(--fill-0, black)" height="16" rx="4" width="16" />
          <path d="M5 8.33334L7.00001 10L11 6" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%+112.25px)] top-[calc(50%-21px)]">
      <Frame81 />
    </div>
  );
}

function YarnCard2() {
  return (
    <div className="flex-[1_0_0] h-[68px] min-h-px min-w-px relative" data-name="Yarn card">
      <div className="absolute flex inset-[0_76.44%_0_0] items-center justify-center">
        <div className="-rotate-90 flex-none h-[58.677px] w-[68px]">
          <div className="relative rounded-tl-[8px] rounded-tr-[8px] size-full" data-name="Color Display">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full" src={imgColorDisplay} />
          </div>
        </div>
      </div>
      <Frame10 />
      <Frame11 />
      <Group7 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[2px] inset-[0_-0.2%_0_29.38%] items-start justify-center p-[12px] rounded-br-[8px] rounded-tr-[8px]">
      <div aria-hidden="true" className="absolute border-[#cdcdcd] border-b border-r border-solid border-t inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#0c0a1c] text-[14px] w-full whitespace-pre-wrap">Olive</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[12px] not-italic opacity-85 relative shrink-0 text-[#5a5866] text-[12px] tracking-[0.12px] w-full whitespace-pre-wrap">Stylecraft Special DK</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute bg-[#58502e] inset-[0_70.62%_0_23.34%]">
      <div className="flex flex-col justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function YarnCard3() {
  return (
    <div className="flex-[1_0_0] h-[68px] min-h-px min-w-px relative" data-name="Yarn card">
      <div className="absolute flex inset-[0_76.66%_0_0] items-center justify-center">
        <div className="-rotate-90 flex-none h-[58.117px] w-[68px]">
          <div className="relative rounded-tl-[8px] rounded-tr-[8px] size-full" data-name="Color Display">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full" src={imgColorDisplay1} />
          </div>
        </div>
      </div>
      <Frame12 />
      <Frame14 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <YarnCard />
      <YarnCard1 />
      <YarnCard2 />
      <YarnCard3 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[2px] inset-[0_-0.2%_0_29.38%] items-start justify-center p-[12px] rounded-br-[8px] rounded-tr-[8px]">
      <div aria-hidden="true" className="absolute border-[#cdcdcd] border-b border-r border-solid border-t inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#0c0a1c] text-[14px] w-full whitespace-pre-wrap">Aster</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[12px] not-italic opacity-85 overflow-hidden relative shrink-0 text-[#5a5866] text-[12px] text-ellipsis tracking-[0.12px] w-full whitespace-nowrap">Stylecraft Special DK dsadsadsadsad</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute bg-[#5485c7] inset-[0_70.62%_0_23.34%]">
      <div className="flex flex-col justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Frame82() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+112.25px)] size-[16px] top-[calc(50%-21px)]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame 30">
          <rect fill="var(--fill-0, black)" height="16" rx="4" width="16" />
          <path d="M5 8.33334L7.00001 10L11 6" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Group8() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%+112.25px)] top-[calc(50%-21px)]">
      <Frame82 />
    </div>
  );
}

function YarnCard4() {
  return (
    <div className="flex-[1_0_0] h-[68px] min-h-px min-w-px relative" data-name="Yarn card">
      <div className="absolute flex inset-[0_76.44%_0_0] items-center justify-center">
        <div className="-rotate-90 flex-none h-[58.677px] w-[68px]">
          <div className="relative rounded-tl-[8px] rounded-tr-[8px] size-full" data-name="Color Display">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full" src={imgColorDisplay} />
          </div>
        </div>
      </div>
      <Frame19 />
      <Frame20 />
      <Group8 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[2px] inset-[0_-0.2%_0_29.38%] items-start justify-center p-[12px] rounded-br-[8px] rounded-tr-[8px]">
      <div aria-hidden="true" className="absolute border-[#cdcdcd] border-b border-r border-solid border-t inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#0c0a1c] text-[14px] w-full whitespace-pre-wrap">Olive</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[12px] not-italic opacity-85 relative shrink-0 text-[#5a5866] text-[12px] tracking-[0.12px] w-full whitespace-pre-wrap">Stylecraft Special DK</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="absolute bg-[#58502e] inset-[0_70.62%_0_23.34%]">
      <div className="flex flex-col justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function YarnCard5() {
  return (
    <div className="flex-[1_0_0] h-[68px] min-h-px min-w-px relative" data-name="Yarn card">
      <div className="absolute flex inset-[0_76.66%_0_0] items-center justify-center">
        <div className="-rotate-90 flex-none h-[58.117px] w-[68px]">
          <div className="relative rounded-tl-[8px] rounded-tr-[8px] size-full" data-name="Color Display">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full" src={imgColorDisplay1} />
          </div>
        </div>
      </div>
      <Frame21 />
      <Frame22 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[2px] inset-[0_-0.2%_0_29.38%] items-start justify-center p-[12px] rounded-br-[8px] rounded-tr-[8px]">
      <div aria-hidden="true" className="absolute border-[#cdcdcd] border-b border-r border-solid border-t inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#0c0a1c] text-[14px] w-full whitespace-pre-wrap">Aster</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[12px] not-italic opacity-85 overflow-hidden relative shrink-0 text-[#5a5866] text-[12px] text-ellipsis tracking-[0.12px] w-full whitespace-nowrap">Stylecraft Special DK dsadsadsadsad</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="absolute bg-[#5485c7] inset-[0_70.62%_0_23.34%]">
      <div className="flex flex-col justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Frame83() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+112.25px)] size-[16px] top-[calc(50%-21px)]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame 30">
          <rect fill="var(--fill-0, black)" height="16" rx="4" width="16" />
          <path d="M5 8.33334L7.00001 10L11 6" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Group11() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%+112.25px)] top-[calc(50%-21px)]">
      <Frame83 />
    </div>
  );
}

function YarnCard6() {
  return (
    <div className="flex-[1_0_0] h-[68px] min-h-px min-w-px relative" data-name="Yarn card">
      <div className="absolute flex inset-[0_76.44%_0_0] items-center justify-center">
        <div className="-rotate-90 flex-none h-[58.677px] w-[68px]">
          <div className="relative rounded-tl-[8px] rounded-tr-[8px] size-full" data-name="Color Display">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full" src={imgColorDisplay} />
          </div>
        </div>
      </div>
      <Frame23 />
      <Frame24 />
      <Group11 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[2px] inset-[0_-0.2%_0_29.38%] items-start justify-center p-[12px] rounded-br-[8px] rounded-tr-[8px]">
      <div aria-hidden="true" className="absolute border-[#cdcdcd] border-b border-r border-solid border-t inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#0c0a1c] text-[14px] w-full whitespace-pre-wrap">Olive</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[12px] not-italic opacity-85 relative shrink-0 text-[#5a5866] text-[12px] tracking-[0.12px] w-full whitespace-pre-wrap">Stylecraft Special DK</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="absolute bg-[#58502e] inset-[0_70.62%_0_23.34%]">
      <div className="flex flex-col justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function YarnCard7() {
  return (
    <div className="flex-[1_0_0] h-[68px] min-h-px min-w-px relative" data-name="Yarn card">
      <div className="absolute flex inset-[0_76.66%_0_0] items-center justify-center">
        <div className="-rotate-90 flex-none h-[58.117px] w-[68px]">
          <div className="relative rounded-tl-[8px] rounded-tr-[8px] size-full" data-name="Color Display">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full" src={imgColorDisplay1} />
          </div>
        </div>
      </div>
      <Frame25 />
      <Frame26 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <YarnCard4 />
      <YarnCard5 />
      <YarnCard6 />
      <YarnCard7 />
    </div>
  );
}

function Frame85() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[2px] inset-[0_-0.2%_0_29.38%] items-start justify-center p-[12px] rounded-br-[8px] rounded-tr-[8px]">
      <div aria-hidden="true" className="absolute border-b border-black border-r border-solid border-t inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#0c0a1c] text-[14px] w-full whitespace-pre-wrap">Astersds dsadsadsad</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[12px] not-italic opacity-85 overflow-hidden relative shrink-0 text-[#5a5866] text-[12px] text-ellipsis tracking-[0.12px] w-full whitespace-nowrap">Stylecraft Specsdsdsdial DK</p>
    </div>
  );
}

function Frame86() {
  return (
    <div className="absolute bg-[#5485c7] inset-[0_70.62%_0_23.34%]">
      <div className="flex flex-col justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Frame87() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] inset-[0_-0.2%_0_0] items-start justify-center p-[12px] rounded-[8px]">
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#0c0a1c] text-[14px] w-full whitespace-pre-wrap">{` `}</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[12px] not-italic opacity-85 overflow-hidden relative shrink-0 text-[#5a5866] text-[12px] text-ellipsis tracking-[0.12px] w-full whitespace-nowrap">{` `}</p>
    </div>
  );
}

function YarnCard8() {
  return (
    <div className="flex-[1_0_0] h-[68px] min-h-px min-w-px relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25),0px_1px_4px_0px_rgba(12,12,13,0.3)]" data-name="Yarn card">
      <div className="absolute flex inset-[0_76.44%_0_0] items-center justify-center">
        <div className="-rotate-90 flex-none h-[58.677px] w-[68px]">
          <div className="relative rounded-tl-[8px] rounded-tr-[8px] size-full" data-name="Color Display">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full" src={imgColorDisplay} />
          </div>
        </div>
      </div>
      <Frame85 />
      <Frame86 />
      <Frame87 />
    </div>
  );
}

function Frame88() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[2px] inset-[0_-0.2%_0_29.38%] items-start justify-center p-[12px] rounded-br-[8px] rounded-tr-[8px]">
      <div aria-hidden="true" className="absolute border-[#cdcdcd] border-b border-r border-solid border-t inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#0c0a1c] text-[14px] w-full whitespace-pre-wrap">Olive</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[12px] not-italic opacity-85 relative shrink-0 text-[#5a5866] text-[12px] tracking-[0.12px] w-full whitespace-pre-wrap">Stylecraft Special DK</p>
    </div>
  );
}

function Frame89() {
  return (
    <div className="absolute bg-[#58502e] inset-[0_70.62%_0_23.34%]">
      <div className="flex flex-col justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function YarnCard9() {
  return (
    <div className="flex-[1_0_0] h-[68px] min-h-px min-w-px relative" data-name="Yarn card">
      <div className="absolute flex inset-[0_76.66%_0_0] items-center justify-center">
        <div className="-rotate-90 flex-none h-[58.117px] w-[68px]">
          <div className="relative rounded-tl-[8px] rounded-tr-[8px] size-full" data-name="Color Display">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full" src={imgColorDisplay1} />
          </div>
        </div>
      </div>
      <Frame88 />
      <Frame89 />
    </div>
  );
}

function Frame90() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[2px] inset-[0_-0.2%_0_29.38%] items-start justify-center p-[12px] rounded-br-[8px] rounded-tr-[8px]">
      <div aria-hidden="true" className="absolute border-[#cdcdcd] border-b border-r border-solid border-t inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#0c0a1c] text-[14px] w-full whitespace-pre-wrap">Aster</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[12px] not-italic opacity-85 overflow-hidden relative shrink-0 text-[#5a5866] text-[12px] text-ellipsis tracking-[0.12px] w-full whitespace-nowrap">Stylecraft Special DK dsadsadsadsad</p>
    </div>
  );
}

function Frame91() {
  return (
    <div className="absolute bg-[#5485c7] inset-[0_70.62%_0_23.34%]">
      <div className="flex flex-col justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Frame92() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+112.25px)] size-[16px] top-[calc(50%-21px)]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame 30">
          <rect fill="var(--fill-0, black)" height="16" rx="4" width="16" />
          <path d="M5 8.33334L7.00001 10L11 6" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Group12() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%+112.25px)] top-[calc(50%-21px)]">
      <Frame92 />
    </div>
  );
}

function YarnCard10() {
  return (
    <div className="flex-[1_0_0] h-[68px] min-h-px min-w-px relative" data-name="Yarn card">
      <div className="absolute flex inset-[0_76.44%_0_0] items-center justify-center">
        <div className="-rotate-90 flex-none h-[58.677px] w-[68px]">
          <div className="relative rounded-tl-[8px] rounded-tr-[8px] size-full" data-name="Color Display">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full" src={imgColorDisplay} />
          </div>
        </div>
      </div>
      <Frame90 />
      <Frame91 />
      <Group12 />
    </div>
  );
}

function Frame93() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[2px] inset-[0_-0.2%_0_29.38%] items-start justify-center p-[12px] rounded-br-[8px] rounded-tr-[8px]">
      <div aria-hidden="true" className="absolute border-[#cdcdcd] border-b border-r border-solid border-t inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#0c0a1c] text-[14px] w-full whitespace-pre-wrap">Olive</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[12px] not-italic opacity-85 relative shrink-0 text-[#5a5866] text-[12px] tracking-[0.12px] w-full whitespace-pre-wrap">Stylecraft Special DK</p>
    </div>
  );
}

function Frame94() {
  return (
    <div className="absolute bg-[#58502e] inset-[0_70.62%_0_23.34%]">
      <div className="flex flex-col justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function YarnCard11() {
  return (
    <div className="flex-[1_0_0] h-[68px] min-h-px min-w-px relative" data-name="Yarn card">
      <div className="absolute flex inset-[0_76.66%_0_0] items-center justify-center">
        <div className="-rotate-90 flex-none h-[58.117px] w-[68px]">
          <div className="relative rounded-tl-[8px] rounded-tr-[8px] size-full" data-name="Color Display">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full" src={imgColorDisplay1} />
          </div>
        </div>
      </div>
      <Frame93 />
      <Frame94 />
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <YarnCard8 />
      <YarnCard9 />
      <YarnCard10 />
      <YarnCard11 />
    </div>
  );
}

function Frame96() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[2px] inset-[0_-0.2%_0_29.38%] items-start justify-center p-[12px] rounded-br-[8px] rounded-tr-[8px]">
      <div aria-hidden="true" className="absolute border-[#cdcdcd] border-b border-r border-solid border-t inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#0c0a1c] text-[14px] w-full whitespace-pre-wrap">Aster</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[12px] not-italic opacity-85 overflow-hidden relative shrink-0 text-[#5a5866] text-[12px] text-ellipsis tracking-[0.12px] w-full whitespace-nowrap">Stylecraft Special DK dsadsadsadsad</p>
    </div>
  );
}

function Frame97() {
  return (
    <div className="absolute bg-[#5485c7] inset-[0_70.62%_0_23.34%]">
      <div className="flex flex-col justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Frame98() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+112.25px)] size-[16px] top-[calc(50%-21px)]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame 30">
          <rect fill="var(--fill-0, black)" height="16" rx="4" width="16" />
          <path d="M5 8.33334L7.00001 10L11 6" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Group13() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%+112.25px)] top-[calc(50%-21px)]">
      <Frame98 />
    </div>
  );
}

function YarnCard12() {
  return (
    <div className="flex-[1_0_0] h-[68px] min-h-px min-w-px relative" data-name="Yarn card">
      <div className="absolute flex inset-[0_76.44%_0_0] items-center justify-center">
        <div className="-rotate-90 flex-none h-[58.677px] w-[68px]">
          <div className="relative rounded-tl-[8px] rounded-tr-[8px] size-full" data-name="Color Display">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full" src={imgColorDisplay} />
          </div>
        </div>
      </div>
      <Frame96 />
      <Frame97 />
      <Group13 />
    </div>
  );
}

function Frame99() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[2px] inset-[0_-0.2%_0_29.38%] items-start justify-center p-[12px] rounded-br-[8px] rounded-tr-[8px]">
      <div aria-hidden="true" className="absolute border-[#cdcdcd] border-b border-r border-solid border-t inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#0c0a1c] text-[14px] w-full whitespace-pre-wrap">Olive</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[12px] not-italic opacity-85 relative shrink-0 text-[#5a5866] text-[12px] tracking-[0.12px] w-full whitespace-pre-wrap">Stylecraft Special DK</p>
    </div>
  );
}

function Frame100() {
  return (
    <div className="absolute bg-[#58502e] inset-[0_70.62%_0_23.34%]">
      <div className="flex flex-col justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function YarnCard13() {
  return (
    <div className="flex-[1_0_0] h-[68px] min-h-px min-w-px relative" data-name="Yarn card">
      <div className="absolute flex inset-[0_76.66%_0_0] items-center justify-center">
        <div className="-rotate-90 flex-none h-[58.117px] w-[68px]">
          <div className="relative rounded-tl-[8px] rounded-tr-[8px] size-full" data-name="Color Display">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full" src={imgColorDisplay1} />
          </div>
        </div>
      </div>
      <Frame99 />
      <Frame100 />
    </div>
  );
}

function Frame101() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[2px] inset-[0_-0.2%_0_29.38%] items-start justify-center p-[12px] rounded-br-[8px] rounded-tr-[8px]">
      <div aria-hidden="true" className="absolute border-[#cdcdcd] border-b border-r border-solid border-t inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#0c0a1c] text-[14px] w-full whitespace-pre-wrap">Aster</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[12px] not-italic opacity-85 overflow-hidden relative shrink-0 text-[#5a5866] text-[12px] text-ellipsis tracking-[0.12px] w-full whitespace-nowrap">Stylecraft Special DK dsadsadsadsad</p>
    </div>
  );
}

function Frame102() {
  return (
    <div className="absolute bg-[#5485c7] inset-[0_70.62%_0_23.34%]">
      <div className="flex flex-col justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Frame103() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+112.25px)] size-[16px] top-[calc(50%-21px)]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame 30">
          <rect fill="var(--fill-0, black)" height="16" rx="4" width="16" />
          <path d="M5 8.33334L7.00001 10L11 6" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Group14() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%+112.25px)] top-[calc(50%-21px)]">
      <Frame103 />
    </div>
  );
}

function YarnCard14() {
  return (
    <div className="flex-[1_0_0] h-[68px] min-h-px min-w-px relative" data-name="Yarn card">
      <div className="absolute flex inset-[0_76.44%_0_0] items-center justify-center">
        <div className="-rotate-90 flex-none h-[58.677px] w-[68px]">
          <div className="relative rounded-tl-[8px] rounded-tr-[8px] size-full" data-name="Color Display">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full" src={imgColorDisplay} />
          </div>
        </div>
      </div>
      <Frame101 />
      <Frame102 />
      <Group14 />
    </div>
  );
}

function Frame104() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[2px] inset-[0_-0.2%_0_29.38%] items-start justify-center p-[12px] rounded-br-[8px] rounded-tr-[8px]">
      <div aria-hidden="true" className="absolute border-[#cdcdcd] border-b border-r border-solid border-t inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#0c0a1c] text-[14px] w-full whitespace-pre-wrap">Olive</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[12px] not-italic opacity-85 relative shrink-0 text-[#5a5866] text-[12px] tracking-[0.12px] w-full whitespace-pre-wrap">Stylecraft Special DK</p>
    </div>
  );
}

function Frame105() {
  return (
    <div className="absolute bg-[#58502e] inset-[0_70.62%_0_23.34%]">
      <div className="flex flex-col justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function YarnCard15() {
  return (
    <div className="flex-[1_0_0] h-[68px] min-h-px min-w-px relative" data-name="Yarn card">
      <div className="absolute flex inset-[0_76.66%_0_0] items-center justify-center">
        <div className="-rotate-90 flex-none h-[58.117px] w-[68px]">
          <div className="relative rounded-tl-[8px] rounded-tr-[8px] size-full" data-name="Color Display">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full" src={imgColorDisplay1} />
          </div>
        </div>
      </div>
      <Frame104 />
      <Frame105 />
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <YarnCard12 />
      <YarnCard13 />
      <YarnCard14 />
      <YarnCard15 />
    </div>
  );
}

function Frame107() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[2px] inset-[0_-0.2%_0_29.38%] items-start justify-center p-[12px] rounded-br-[8px] rounded-tr-[8px]">
      <div aria-hidden="true" className="absolute border-[#cdcdcd] border-b border-r border-solid border-t inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#0c0a1c] text-[14px] w-full whitespace-pre-wrap">Astersds dsadsadsad</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[12px] not-italic opacity-85 overflow-hidden relative shrink-0 text-[#5a5866] text-[12px] text-ellipsis tracking-[0.12px] w-full whitespace-nowrap">Stylecraft Special DK dsadsadsadsad</p>
    </div>
  );
}

function Frame108() {
  return (
    <div className="absolute bg-[#5485c7] inset-[0_70.62%_0_23.34%]">
      <div className="flex flex-col justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function YarnCard16() {
  return (
    <div className="flex-[1_0_0] h-[68px] min-h-px min-w-px relative shadow-[0px_1px_11px_0px_rgba(12,12,13,0.15)]" data-name="Yarn card">
      <div className="absolute flex inset-[0_76.44%_0_0] items-center justify-center">
        <div className="-rotate-90 flex-none h-[58.677px] w-[68px]">
          <div className="relative rounded-tl-[8px] rounded-tr-[8px] size-full" data-name="Color Display">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full" src={imgColorDisplay} />
          </div>
        </div>
      </div>
      <Frame107 />
      <Frame108 />
    </div>
  );
}

function Frame109() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[2px] inset-[0_-0.2%_0_29.38%] items-start justify-center p-[12px] rounded-br-[8px] rounded-tr-[8px]">
      <div aria-hidden="true" className="absolute border-[#cdcdcd] border-b border-r border-solid border-t inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#0c0a1c] text-[14px] w-full whitespace-pre-wrap">Olive</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[12px] not-italic opacity-85 relative shrink-0 text-[#5a5866] text-[12px] tracking-[0.12px] w-full whitespace-pre-wrap">Stylecraft Special DK</p>
    </div>
  );
}

function Frame110() {
  return (
    <div className="absolute bg-[#58502e] inset-[0_70.62%_0_23.34%]">
      <div className="flex flex-col justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function YarnCard17() {
  return (
    <div className="flex-[1_0_0] h-[68px] min-h-px min-w-px relative" data-name="Yarn card">
      <div className="absolute flex inset-[0_76.66%_0_0] items-center justify-center">
        <div className="-rotate-90 flex-none h-[58.117px] w-[68px]">
          <div className="relative rounded-tl-[8px] rounded-tr-[8px] size-full" data-name="Color Display">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full" src={imgColorDisplay1} />
          </div>
        </div>
      </div>
      <Frame109 />
      <Frame110 />
    </div>
  );
}

function Frame111() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[2px] inset-[0_-0.2%_0_29.38%] items-start justify-center p-[12px] rounded-br-[8px] rounded-tr-[8px]">
      <div aria-hidden="true" className="absolute border-[#cdcdcd] border-b border-r border-solid border-t inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#0c0a1c] text-[14px] w-full whitespace-pre-wrap">Aster</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[12px] not-italic opacity-85 overflow-hidden relative shrink-0 text-[#5a5866] text-[12px] text-ellipsis tracking-[0.12px] w-full whitespace-nowrap">Stylecraft Special DK dsadsadsadsad</p>
    </div>
  );
}

function Frame112() {
  return (
    <div className="absolute bg-[#5485c7] inset-[0_70.62%_0_23.34%]">
      <div className="flex flex-col justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Frame113() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+112.25px)] size-[16px] top-[calc(50%-21px)]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame 30">
          <rect fill="var(--fill-0, black)" height="16" rx="4" width="16" />
          <path d="M5 8.33334L7.00001 10L11 6" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Group15() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%+112.25px)] top-[calc(50%-21px)]">
      <Frame113 />
    </div>
  );
}

function YarnCard18() {
  return (
    <div className="flex-[1_0_0] h-[68px] min-h-px min-w-px relative" data-name="Yarn card">
      <div className="absolute flex inset-[0_76.44%_0_0] items-center justify-center">
        <div className="-rotate-90 flex-none h-[58.677px] w-[68px]">
          <div className="relative rounded-tl-[8px] rounded-tr-[8px] size-full" data-name="Color Display">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full" src={imgColorDisplay} />
          </div>
        </div>
      </div>
      <Frame111 />
      <Frame112 />
      <Group15 />
    </div>
  );
}

function Frame114() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[2px] inset-[0_-0.2%_0_29.38%] items-start justify-center p-[12px] rounded-br-[8px] rounded-tr-[8px]">
      <div aria-hidden="true" className="absolute border-[#cdcdcd] border-b border-r border-solid border-t inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#0c0a1c] text-[14px] w-full whitespace-pre-wrap">Olive</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[12px] not-italic opacity-85 relative shrink-0 text-[#5a5866] text-[12px] tracking-[0.12px] w-full whitespace-pre-wrap">Stylecraft Special DK</p>
    </div>
  );
}

function Frame115() {
  return (
    <div className="absolute bg-[#58502e] inset-[0_70.62%_0_23.34%]">
      <div className="flex flex-col justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function YarnCard19() {
  return (
    <div className="flex-[1_0_0] h-[68px] min-h-px min-w-px relative" data-name="Yarn card">
      <div className="absolute flex inset-[0_76.66%_0_0] items-center justify-center">
        <div className="-rotate-90 flex-none h-[58.117px] w-[68px]">
          <div className="relative rounded-tl-[8px] rounded-tr-[8px] size-full" data-name="Color Display">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full" src={imgColorDisplay1} />
          </div>
        </div>
      </div>
      <Frame114 />
      <Frame115 />
    </div>
  );
}

function Frame106() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <YarnCard16 />
      <YarnCard17 />
      <YarnCard18 />
      <YarnCard19 />
    </div>
  );
}

function Frame117() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[2px] inset-[0_-0.2%_0_29.38%] items-start justify-center p-[12px] rounded-br-[8px] rounded-tr-[8px]">
      <div aria-hidden="true" className="absolute border-[#cdcdcd] border-b border-r border-solid border-t inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#0c0a1c] text-[14px] w-full whitespace-pre-wrap">Aster</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[12px] not-italic opacity-85 overflow-hidden relative shrink-0 text-[#5a5866] text-[12px] text-ellipsis tracking-[0.12px] w-full whitespace-nowrap">Stylecraft Special DK dsadsadsadsad</p>
    </div>
  );
}

function Frame118() {
  return (
    <div className="absolute bg-[#5485c7] inset-[0_70.62%_0_23.34%]">
      <div className="flex flex-col justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Frame119() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+112.25px)] size-[16px] top-[calc(50%-21px)]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame 30">
          <rect fill="var(--fill-0, black)" height="16" rx="4" width="16" />
          <path d="M5 8.33334L7.00001 10L11 6" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Group16() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%+112.25px)] top-[calc(50%-21px)]">
      <Frame119 />
    </div>
  );
}

function YarnCard20() {
  return (
    <div className="flex-[1_0_0] h-[68px] min-h-px min-w-px relative" data-name="Yarn card">
      <div className="absolute flex inset-[0_76.44%_0_0] items-center justify-center">
        <div className="-rotate-90 flex-none h-[58.677px] w-[68px]">
          <div className="relative rounded-tl-[8px] rounded-tr-[8px] size-full" data-name="Color Display">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full" src={imgColorDisplay} />
          </div>
        </div>
      </div>
      <Frame117 />
      <Frame118 />
      <Group16 />
    </div>
  );
}

function Frame120() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[2px] inset-[0_-0.2%_0_29.38%] items-start justify-center p-[12px] rounded-br-[8px] rounded-tr-[8px]">
      <div aria-hidden="true" className="absolute border-[#cdcdcd] border-b border-r border-solid border-t inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#0c0a1c] text-[14px] w-full whitespace-pre-wrap">Olive</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[12px] not-italic opacity-85 relative shrink-0 text-[#5a5866] text-[12px] tracking-[0.12px] w-full whitespace-pre-wrap">Stylecraft Special DK</p>
    </div>
  );
}

function Frame121() {
  return (
    <div className="absolute bg-[#58502e] inset-[0_70.62%_0_23.34%]">
      <div className="flex flex-col justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function YarnCard21() {
  return (
    <div className="flex-[1_0_0] h-[68px] min-h-px min-w-px relative" data-name="Yarn card">
      <div className="absolute flex inset-[0_76.66%_0_0] items-center justify-center">
        <div className="-rotate-90 flex-none h-[58.117px] w-[68px]">
          <div className="relative rounded-tl-[8px] rounded-tr-[8px] size-full" data-name="Color Display">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full" src={imgColorDisplay1} />
          </div>
        </div>
      </div>
      <Frame120 />
      <Frame121 />
    </div>
  );
}

function Frame122() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[2px] inset-[0_-0.2%_0_29.38%] items-start justify-center p-[12px] rounded-br-[8px] rounded-tr-[8px]">
      <div aria-hidden="true" className="absolute border-[#cdcdcd] border-b border-r border-solid border-t inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#0c0a1c] text-[14px] w-full whitespace-pre-wrap">Aster</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[12px] not-italic opacity-85 overflow-hidden relative shrink-0 text-[#5a5866] text-[12px] text-ellipsis tracking-[0.12px] w-full whitespace-nowrap">Stylecraft Special DK dsadsadsadsad</p>
    </div>
  );
}

function Frame123() {
  return (
    <div className="absolute bg-[#5485c7] inset-[0_70.62%_0_23.34%]">
      <div className="flex flex-col justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Frame124() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+112.25px)] size-[16px] top-[calc(50%-21px)]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame 30">
          <rect fill="var(--fill-0, black)" height="16" rx="4" width="16" />
          <path d="M5 8.33334L7.00001 10L11 6" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Group17() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%+112.25px)] top-[calc(50%-21px)]">
      <Frame124 />
    </div>
  );
}

function YarnCard22() {
  return (
    <div className="flex-[1_0_0] h-[68px] min-h-px min-w-px relative" data-name="Yarn card">
      <div className="absolute flex inset-[0_76.44%_0_0] items-center justify-center">
        <div className="-rotate-90 flex-none h-[58.677px] w-[68px]">
          <div className="relative rounded-tl-[8px] rounded-tr-[8px] size-full" data-name="Color Display">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full" src={imgColorDisplay} />
          </div>
        </div>
      </div>
      <Frame122 />
      <Frame123 />
      <Group17 />
    </div>
  );
}

function Frame125() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[2px] inset-[0_-0.2%_0_29.38%] items-start justify-center p-[12px] rounded-br-[8px] rounded-tr-[8px]">
      <div aria-hidden="true" className="absolute border-[#cdcdcd] border-b border-r border-solid border-t inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#0c0a1c] text-[14px] w-full whitespace-pre-wrap">Olive</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[12px] not-italic opacity-85 relative shrink-0 text-[#5a5866] text-[12px] tracking-[0.12px] w-full whitespace-pre-wrap">Stylecraft Special DK</p>
    </div>
  );
}

function Frame126() {
  return (
    <div className="absolute bg-[#58502e] inset-[0_70.62%_0_23.34%]">
      <div className="flex flex-col justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function YarnCard23() {
  return (
    <div className="flex-[1_0_0] h-[68px] min-h-px min-w-px relative" data-name="Yarn card">
      <div className="absolute flex inset-[0_76.66%_0_0] items-center justify-center">
        <div className="-rotate-90 flex-none h-[58.117px] w-[68px]">
          <div className="relative rounded-tl-[8px] rounded-tr-[8px] size-full" data-name="Color Display">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full" src={imgColorDisplay1} />
          </div>
        </div>
      </div>
      <Frame125 />
      <Frame126 />
    </div>
  );
}

function Frame116() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <YarnCard20 />
      <YarnCard21 />
      <YarnCard22 />
      <YarnCard23 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[12px] items-start ml-0 mt-0 relative row-1 w-[1032px]">
      <Frame8 />
      <Frame18 />
      <Frame84 />
      <Frame95 />
      <Frame106 />
      <Frame116 />
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
      <Frame7 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame79 />
      <Group3 />
    </div>
  );
}

function Frame78() {
  return (
    <div className="bg-[#edecf2] col-1 content-stretch flex flex-col h-[655px] items-start ml-0 mt-0 p-[24px] relative row-1 w-[1080px]">
      <Frame17 />
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Frame78 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <Group5 />
      <Group4 />
    </div>
  );
}

export default function Frame36() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[0] relative size-full">
      <Group9 />
      <Group10 />
      <Frame40 />
    </div>
  );
}