import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpLeftSmRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 11 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.563 6.375h6.125c.273.018.419.164.437.438-.018.273-.164.419-.437.437h-5.06l7.11 7.137c.183.2.183.4 0 .601-.2.183-.4.183-.601 0L2 7.878v5.06c-.018.273-.164.419-.437.437-.274-.018-.42-.164-.438-.437V6.812c.018-.273.164-.419.438-.437'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpLeftSmRegularIcon);
export default ForwardRef;
