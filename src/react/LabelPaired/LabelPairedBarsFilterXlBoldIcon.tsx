import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedBarsFilterXlBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 21 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M0 10.125C.063 9.438.438 9.063 1.125 9h18.75c.688.063 1.063.438 1.125 1.125-.062.688-.437 1.063-1.125 1.125H1.125C.438 11.188.063 10.813 0 10.125m3 7.5c.063-.687.438-1.062 1.125-1.125h12.75c.688.063 1.063.438 1.125 1.125-.062.688-.437 1.063-1.125 1.125H4.125c-.687-.062-1.062-.437-1.125-1.125m10.5 7.5c-.062.688-.437 1.063-1.125 1.125h-3.75c-.687-.062-1.062-.437-1.125-1.125.063-.687.438-1.062 1.125-1.125h3.75c.688.063 1.063.438 1.125 1.125'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarsFilterXlBoldIcon);
export default ForwardRef;
