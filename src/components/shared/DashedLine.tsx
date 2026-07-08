const DashedLine = () => {
  return (
    <div className='relative z-1 w-full'>
      <div className='top-1/2 inset-x-0 border-t-2 border-dashed border-neutral-300' />
      <div className='absolute top-1/2 -translate-y-1/2 -left-2.5 size-5 bg-neutral-100 rounded-full' />
      <div className='absolute top-1/2 -translate-y-1/2 -right-2.5 size-5 bg-neutral-100 rounded-full' />
    </div>
  );
};

export default DashedLine;
