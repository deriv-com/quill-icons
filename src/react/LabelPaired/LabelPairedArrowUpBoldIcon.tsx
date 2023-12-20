import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 12 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M6.531 5.219v.031l5.25 5.5c.292.354.292.698 0 1.031-.375.292-.729.292-1.062 0L6.75 7.625V18.25c-.042.458-.292.708-.75.75-.458-.042-.708-.292-.75-.75V7.625L1.281 11.75c-.333.313-.687.323-1.062.031-.292-.333-.292-.687 0-1.062l5.25-5.5A.723.723 0 0 1 6 5c.208 0 .385.073.531.219'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpBoldIcon);
export default ForwardRef;
