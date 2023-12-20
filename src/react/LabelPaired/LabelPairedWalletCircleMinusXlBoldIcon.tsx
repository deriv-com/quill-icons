import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedWalletCircleMinusXlBoldIcon = (
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
        d='M0 11.625A4.131 4.131 0 0 1 4.125 7.5h17.25c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125H4.125a1.851 1.851 0 0 0-1.875 1.875v12.75c0 1.078.797 1.875 1.875 1.875h11.438c.28.844.75 1.594 1.312 2.25H4.125A4.101 4.101 0 0 1 0 24.375zm4.5 1.5c0-.61.469-1.125 1.125-1.125h14.25c1.875 0 3.469 1.313 3.938 3.047-.188 0-.375-.047-.563-.047-.61 0-1.219.094-1.781.188-.328-.516-.938-.938-1.594-.938H5.625c-.656 0-1.125-.469-1.125-1.125m12 10.125c0-3.703 3-6.75 6.75-6.75 3.703 0 6.75 3.047 6.75 6.75C30 27 26.953 30 23.25 30c-3.75 0-6.75-3-6.75-6.75m3 0c0 .422.328.75.75.75h6c.375 0 .75-.328.75-.75 0-.375-.375-.75-.75-.75h-6c-.422 0-.75.375-.75.75'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWalletCircleMinusXlBoldIcon);
export default ForwardRef;
