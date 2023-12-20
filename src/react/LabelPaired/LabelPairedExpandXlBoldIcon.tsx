import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedExpandXlBoldIcon = (
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
        d='M6.375 7.5c.688.063 1.063.438 1.125 1.125-.062.688-.437 1.063-1.125 1.125H2.25v4.125c-.062.688-.437 1.063-1.125 1.125C.438 14.938.063 14.563 0 13.875v-5.25C.063 7.938.438 7.563 1.125 7.5zM0 22.125c.063-.687.438-1.062 1.125-1.125.688.063 1.063.438 1.125 1.125v4.125h4.125c.688.063 1.063.438 1.125 1.125-.062.688-.437 1.063-1.125 1.125h-5.25C.438 28.438.063 28.063 0 27.375zM19.875 7.5c.688.063 1.063.438 1.125 1.125v5.25c-.062.688-.437 1.063-1.125 1.125-.687-.062-1.062-.437-1.125-1.125V9.75h-4.125c-.687-.062-1.062-.437-1.125-1.125.063-.687.438-1.062 1.125-1.125zM18.75 22.125c.063-.687.438-1.062 1.125-1.125.688.063 1.063.438 1.125 1.125v5.25c-.062.688-.437 1.063-1.125 1.125h-5.25c-.687-.062-1.062-.437-1.125-1.125.063-.687.438-1.062 1.125-1.125h4.125z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExpandXlBoldIcon);
export default ForwardRef;
