import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedFourXlBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 18 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M8.86 9.14 3 20.25h9.75v-7.125c.063-.687.438-1.062 1.125-1.125.688.063 1.063.438 1.125 1.125v7.125h1.875c.688.063 1.063.438 1.125 1.125-.062.688-.437 1.063-1.125 1.125H15v4.875c-.062.688-.437 1.063-1.125 1.125-.687-.062-1.062-.437-1.125-1.125V22.5H1.125c-.406 0-.734-.187-.984-.562-.188-.344-.188-.704 0-1.079L6.89 8.11c.375-.593.875-.75 1.5-.468.593.375.75.875.468 1.5'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFourXlBoldIcon);
export default ForwardRef;
