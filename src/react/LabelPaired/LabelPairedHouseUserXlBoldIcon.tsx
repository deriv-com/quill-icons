import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHouseUserXlBoldIcon = (
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
      <path d='M12.75 6.281a1.196 1.196 0 0 1 1.453 0l12.375 10.5c.469.422.563 1.125.14 1.594a1.17 1.17 0 0 1-1.593.14L24 17.532v8.719c0 2.11-1.687 3.75-3.75 3.75H6.75C4.64 30 3 28.36 3 26.25v-8.719l-1.172.985a1.17 1.17 0 0 1-1.594-.141 1.17 1.17 0 0 1 .141-1.594zm-7.5 9.328V26.25c0 .844.656 1.5 1.5 1.5h13.5c.797 0 1.5-.656 1.5-1.5V15.61L13.5 8.624zm5.25.891c0-1.031.563-2.016 1.5-2.578.89-.516 2.063-.516 3 0 .89.562 1.5 1.547 1.5 2.578 0 1.078-.61 2.063-1.5 2.625-.937.516-2.11.516-3 0a3.05 3.05 0 0 1-1.5-2.625M12 21h3a3.76 3.76 0 0 1 3.75 3.75c0 .422-.375.75-.75.75H9a.74.74 0 0 1-.75-.75C8.25 22.688 9.89 21 12 21' />
    </g>
    <defs>
      <clipPath id='ebe36f5c0cf0bd00b546e62fa771b468__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHouseUserXlBoldIcon);
export default ForwardRef;
