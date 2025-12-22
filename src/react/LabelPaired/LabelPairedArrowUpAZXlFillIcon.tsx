import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpAZXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m8.578 8.016 4.125 4.5c.563.609.516 1.547-.094 2.109a1.487 1.487 0 0 1-2.109-.094L9 12.891V27c0 .844-.703 1.5-1.5 1.5A1.48 1.48 0 0 1 6 27V12.89l-1.547 1.641c-.562.61-1.5.656-2.11.094a1.487 1.487 0 0 1-.093-2.11l4.125-4.5A1.5 1.5 0 0 1 7.5 7.5c.422 0 .797.188 1.078.516M15 21c0-.797.656-1.5 1.5-1.5h6c.61 0 1.125.375 1.36.938a1.52 1.52 0 0 1-.329 1.64l-3.422 3.469H22.5c.797 0 1.5.656 1.5 1.5 0 .797-.703 1.5-1.5 1.5h-6c-.61 0-1.172-.375-1.406-.938a1.52 1.52 0 0 1 .328-1.64l3.422-3.469H16.5A1.48 1.48 0 0 1 15 21m4.5-13.5c.563 0 1.078.328 1.313.844l3 6 .75 1.5c.375.75.093 1.64-.657 2.015s-1.64.094-2.015-.656l-.328-.703H17.39l-.328.703c-.375.75-1.266 1.031-2.016.656s-1.031-1.265-.656-2.015l.75-1.5 3-6c.234-.516.75-.844 1.359-.844m-.984 6.75h1.922l-.938-1.875z' />
    </g>
    <defs>
      <clipPath id='c244d1849276f34403e5f93ebc427398__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpAZXlFillIcon);
export default ForwardRef;
