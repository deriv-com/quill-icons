import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedSortUpXlBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M7.5 10.078 3.328 14.25h8.344L7.5 10.078ZM6.422 7.922A1.564 1.564 0 0 1 7.5 7.5c.406 0 .766.14 1.078.422l6 6c.438.5.547 1.047.328 1.64-.281.594-.75.907-1.406.938h-12c-.656-.031-1.125-.344-1.406-.938-.219-.593-.11-1.14.328-1.64l6-6Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortUpXlBoldIcon);
export default ForwardRef;
