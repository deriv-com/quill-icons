import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedSevenCaptionBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 8 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M.25 4.813c.031-.344.219-.532.563-.563h6.375c.218 0 .382.094.492.281a.598.598 0 0 1 0 .563l-5.625 9.375c-.203.281-.461.351-.774.21-.281-.202-.343-.46-.187-.773l5.11-8.531H.812C.469 5.344.28 5.156.25 4.813'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSevenCaptionBoldIcon);
export default ForwardRef;
