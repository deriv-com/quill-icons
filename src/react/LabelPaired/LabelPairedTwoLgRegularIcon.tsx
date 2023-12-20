import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedTwoLgRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 13 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M6.031 8c-1.172.026-2.174.443-3.008 1.25L1.93 10.305c-.287.26-.573.26-.86 0-.26-.287-.26-.573 0-.86l1.055-1.093C3.219 7.31 4.521 6.776 6.031 6.75c1.537.026 2.826.56 3.867 1.602 1.016 1.015 1.55 2.291 1.602 3.828-.026 1.562-.599 2.877-1.719 3.945L2.477 23h9.648c.39.026.599.234.625.625-.026.39-.234.599-.625.625H.875c-.286 0-.482-.13-.586-.39a.701.701 0 0 1 .156-.704l8.477-7.93c.86-.833 1.302-1.848 1.328-3.046-.026-1.172-.443-2.162-1.25-2.97C8.219 8.43 7.23 8.027 6.031 8'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTwoLgRegularIcon);
export default ForwardRef;
