import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedPlusXlBoldIcon = (
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
        d='M11.625 9.375v7.5h7.5c.688.063 1.063.438 1.125 1.125-.062.688-.437 1.063-1.125 1.125h-7.5v7.5c-.062.688-.437 1.063-1.125 1.125-.687-.062-1.062-.437-1.125-1.125v-7.5h-7.5C1.188 19.063.813 18.688.75 18c.063-.687.438-1.062 1.125-1.125h7.5v-7.5c.063-.687.438-1.062 1.125-1.125.688.063 1.063.438 1.125 1.125'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlusXlBoldIcon);
export default ForwardRef;
