import type { EmblaCarouselType } from 'embla-carousel';

type DotIndicatorProps = {
  count: number;
  api: EmblaCarouselType | undefined;
  current: number;
};

const DotIndicator = ({ count, api, current }: DotIndicatorProps) => {
  return (
    <div className='flex justify-center gap-2'>
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          onClick={() => api?.scrollTo(index)}
          className={`h-2 w-2 rounded-full transition-all cursor-pointer ${
            current === index ? 'bg-primary-100' : 'bg-[#D9D9D9]'
          }`}
        />
      ))}
    </div>
  );
};

export default DotIndicator;
