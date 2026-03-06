import svgPaths from "./svg-jtlwx8nino";
import imgScreenshot20260218At1828021 from "figma:asset/03c7653d1df9b8de44a492628b034737280de063.png";

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

function InputContent1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-between min-h-px min-w-px relative" data-name="Input Content">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6c7280] text-[16px] w-full whitespace-pre-wrap">Search yarn colours...</p>
    </div>
  );
}

function InputContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px relative" data-name="Input Content">
      <InputContent1 />
    </div>
  );
}

function Select() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[10px] h-[58px] items-center left-[20px] px-[16px] py-[8px] rounded-[8px] top-[100px] w-[655px]" data-name="Select">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Search />
      <InputContent />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[20px] top-[100px]">
      <Select />
    </div>
  );
}

function InputContent3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-between min-h-px min-w-px relative" data-name="Input Content">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] w-full whitespace-pre-wrap">All Brands</p>
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

function InputContent2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] h-full items-center min-h-px min-w-px relative" data-name="Input Content">
      <InputContent3 />
      <FiChevronDown />
    </div>
  );
}

function Select1() {
  return (
    <div className="absolute bg-white content-stretch flex h-[50px] items-center left-[20px] px-[16px] py-[8px] rounded-[8px] top-[168px] w-[321px]" data-name="Select">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <InputContent2 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[20px] top-[168px]">
      <Select1 />
    </div>
  );
}

function InputContent5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-between min-h-px min-w-px relative" data-name="Input Content">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] w-full whitespace-pre-wrap">All Weights</p>
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

function InputContent4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] h-full items-center min-h-px min-w-px relative" data-name="Input Content">
      <InputContent5 />
      <FiChevronDown1 />
    </div>
  );
}

function Select2() {
  return (
    <div className="absolute bg-white content-stretch flex h-[50px] items-center left-[354px] px-[16px] py-[8px] rounded-[8px] top-[168px] w-[321px]" data-name="Select">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <InputContent4 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[354px] top-[168px]">
      <Select2 />
    </div>
  );
}

function BuildingBlocksButtonGroupConnectedSegmentsXSmall() {
  return <div className="absolute bg-[#5e18eb] content-stretch flex flex-col h-[38px] items-center justify-center left-[538px] min-w-[48px] overflow-clip rounded-[4px] top-[33px] w-[135px]" data-name="Building Blocks/Button group/Connected segments/XSmall" />;
}

function BuildingBlocksButtonGroupConnectedSegmentsXSmall1() {
  return (
    <div className="absolute bg-[#fafafa] h-[38px] left-[417px] min-w-[48px] rounded-[4px] top-[33px] w-[111px]" data-name="Building Blocks/Button group/Connected segments/XSmall">
      <div className="content-stretch flex flex-col items-center justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full" />
      <div aria-hidden="true" className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[12px] px-[8px] top-[23px]">
      <div className="flex flex-col font-['Yaro_Rg:Black',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#423277] text-[25.2px] tracking-[0.18px] whitespace-nowrap">
        <p className="leading-[36px]">Yarn palette generator</p>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[12px] top-[23px]">
      <Frame />
    </div>
  );
}

export default function Group4() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[236px] left-0 top-0 w-[690px]" data-name="Screenshot 2026-02-18 at 18.28.02 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot20260218At1828021} />
      </div>
      <Group />
      <Group1 />
      <Group2 />
      <BuildingBlocksButtonGroupConnectedSegmentsXSmall />
      <BuildingBlocksButtonGroupConnectedSegmentsXSmall1 />
      <div className="absolute h-[22px] left-[427px] top-[41px] w-[91px]" data-name="Screenshot 2026-02-18 at 18.28.02 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[1072.73%] left-[-468.1%] max-w-none top-[-186.36%] w-[758.24%]" src={imgScreenshot20260218At1828021} />
        </div>
      </div>
      <div className="absolute h-[22px] left-[548px] top-[40px] w-[118px]" data-name="Screenshot 2026-02-18 at 18.28.02 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[1072.73%] left-[-464.41%] max-w-none top-[-186.36%] w-[584.75%]" src={imgScreenshot20260218At1828021} />
        </div>
      </div>
      <Group3 />
    </div>
  );
}