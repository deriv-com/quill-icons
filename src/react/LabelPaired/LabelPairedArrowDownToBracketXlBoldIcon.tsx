import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowDownToBracketXlBoldIcon = (
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
        d='m17.297 16.172-6 6c-.531.437-1.063.437-1.594 0l-6-6c-.437-.531-.437-1.063 0-1.594.531-.437 1.063-.437 1.594 0l4.078 4.078V7.125C9.438 6.438 9.813 6.063 10.5 6c.688.063 1.063.438 1.125 1.125v11.531l4.078-4.078c.531-.437 1.063-.437 1.594 0 .437.531.437 1.063 0 1.594M2.25 22.125v3.75c0 .531.188.969.563 1.313.343.375.78.562 1.312.562h12.75c.531 0 .969-.187 1.313-.562.375-.344.562-.782.562-1.313v-3.75c.063-.687.438-1.062 1.125-1.125.688.063 1.063.438 1.125 1.125v3.75c-.031 1.156-.437 2.125-1.219 2.906-.781.782-1.75 1.188-2.906 1.219H4.125c-1.156-.031-2.125-.437-2.906-1.219C.437 28 .03 27.031 0 25.875v-3.75c.063-.687.438-1.062 1.125-1.125.688.063 1.063.438 1.125 1.125'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToBracketXlBoldIcon);
export default ForwardRef;
