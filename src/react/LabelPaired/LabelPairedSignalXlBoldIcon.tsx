import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedSignalXlBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 30 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M27 6c.688.063 1.063.438 1.125 1.125v21.75c-.062.688-.437 1.063-1.125 1.125-.687-.062-1.062-.437-1.125-1.125V7.125C25.938 6.438 26.313 6.063 27 6m-6 4.5c.688.063 1.063.438 1.125 1.125v17.25c-.062.688-.437 1.063-1.125 1.125-.687-.062-1.062-.437-1.125-1.125v-17.25c.063-.687.438-1.062 1.125-1.125M15 15c.688.063 1.063.438 1.125 1.125v12.75c-.062.688-.437 1.063-1.125 1.125-.687-.062-1.062-.437-1.125-1.125v-12.75c.063-.687.438-1.062 1.125-1.125m-6 4.5c.688.063 1.063.438 1.125 1.125v8.25C10.063 29.563 9.688 29.938 9 30c-.687-.062-1.062-.437-1.125-1.125v-8.25c.063-.687.438-1.062 1.125-1.125M3 24c.688.063 1.063.438 1.125 1.125v3.75C4.063 29.563 3.688 29.938 3 30c-.687-.062-1.062-.437-1.125-1.125v-3.75C1.938 24.438 2.313 24.063 3 24'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSignalXlBoldIcon);
export default ForwardRef;
