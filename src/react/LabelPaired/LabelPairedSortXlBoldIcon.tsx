import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedSortXlBoldIcon = (
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
        d='M3.328 14.25h8.344L7.5 10.078zm5.25-6.328 6 6c.438.5.547 1.047.328 1.64-.281.594-.75.907-1.406.938h-12c-.656-.031-1.125-.344-1.406-.937-.219-.594-.11-1.141.328-1.641l6-6A1.564 1.564 0 0 1 7.5 7.5c.406 0 .766.14 1.078.422M3.328 21.75 7.5 25.922l4.172-4.172zm5.25 6.328A1.564 1.564 0 0 1 7.5 28.5c-.406 0-.766-.14-1.078-.422l-6-6c-.438-.5-.547-1.047-.328-1.64.281-.594.75-.907 1.406-.938h12c.656.031 1.125.344 1.406.938.219.593.11 1.14-.328 1.64z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortXlBoldIcon);
export default ForwardRef;
