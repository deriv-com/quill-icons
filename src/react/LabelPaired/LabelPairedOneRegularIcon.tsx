import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedOneRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 8 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M4.5 5.5V18h3c.313.02.48.188.5.5-.02.313-.187.48-.5.5h-7c-.312-.02-.48-.187-.5-.5.02-.312.188-.48.5-.5h3V6.438L1.281 7.906c-.27.146-.5.104-.687-.125-.146-.27-.104-.5.125-.687l3-2a.536.536 0 0 1 .531-.032.49.49 0 0 1 .25.438'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h8v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedOneRegularIcon);
export default ForwardRef;
