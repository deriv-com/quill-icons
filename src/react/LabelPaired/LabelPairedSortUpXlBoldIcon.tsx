import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedSortUpXlBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 15 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M7.5 10.078 3.328 14.25h8.344zM6.422 7.922A1.564 1.564 0 0 1 7.5 7.5c.406 0 .766.14 1.078.422l6 6c.438.5.547 1.047.328 1.64-.281.594-.75.907-1.406.938h-12c-.656-.031-1.125-.344-1.406-.937-.219-.594-.11-1.141.328-1.641z'
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
