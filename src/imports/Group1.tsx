function Frame() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[4px] h-[68px] items-start justify-center left-[78px] p-[12px] rounded-br-[8px] rounded-tr-[8px] top-0 w-[253px]">
      <div aria-hidden="true" className="absolute border-[#f1f3fe] border-b border-r border-solid border-t inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]" />
      <p className="font-['Urbanist:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#0c0a1c] text-[18px] w-full whitespace-pre-wrap">Yarn colour here</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[12px] not-italic opacity-85 relative shrink-0 text-[#5a5866] text-[12px] tracking-[0.12px] w-full whitespace-pre-wrap">Stylecraft DK</p>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] size-full">
      <div className="absolute flex h-[68px] items-center justify-center left-0 top-0 w-[78px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[#6d57fc] h-[78px] rounded-tl-[8px] rounded-tr-[8px] w-[68px]" data-name="Color Display" />
        </div>
      </div>
      <Frame />
    </div>
  );
}