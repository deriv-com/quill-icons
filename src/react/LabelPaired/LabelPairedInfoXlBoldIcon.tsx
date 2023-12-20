import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedInfoXlBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 9 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2.625 9.375c.031-.719.344-1.266.938-1.64.624-.313 1.25-.313 1.874 0 .594.374.907.921.938 1.64-.031.719-.344 1.266-.937 1.64-.625.313-1.25.313-1.875 0-.594-.374-.907-.921-.938-1.64m-1.875 6c.063-.687.438-1.062 1.125-1.125H4.5c.688.063 1.063.438 1.125 1.125V27.75h2.25c.688.063 1.063.438 1.125 1.125-.062.688-.437 1.063-1.125 1.125h-6.75C.438 29.938.063 29.563 0 28.875c.063-.687.438-1.062 1.125-1.125h2.25V16.5h-1.5c-.687-.062-1.062-.437-1.125-1.125'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedInfoXlBoldIcon);
export default ForwardRef;
