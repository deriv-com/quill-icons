import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedWalletCircleMinusSmBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 18 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M.25 7.031a2.41 2.41 0 0 1 2.406-2.406H12.72c.355 0 .656.3.656.656 0 .383-.3.657-.656.657H2.656A1.08 1.08 0 0 0 1.562 7.03v7.438c0 .629.465 1.094 1.094 1.094h6.672c.164.492.438.93.766 1.312H2.656A2.392 2.392 0 0 1 .25 14.469zm2.625.875c0-.355.273-.656.656-.656h8.313c1.094 0 2.023.766 2.297 1.777-.11 0-.22-.027-.328-.027-.356 0-.711.055-1.04.11-.191-.301-.546-.547-.93-.547H3.532a.632.632 0 0 1-.656-.657m7 5.907c0-2.16 1.75-3.938 3.938-3.938 2.16 0 3.937 1.777 3.937 3.938a3.938 3.938 0 0 1-3.937 3.937 3.921 3.921 0 0 1-3.938-3.937m1.75 0c0 .246.191.437.438.437h3.5a.45.45 0 0 0 .437-.437.47.47 0 0 0-.437-.438h-3.5a.45.45 0 0 0-.438.438'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWalletCircleMinusSmBoldIcon);
export default ForwardRef;
