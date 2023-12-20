import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedBarsCaptionBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 11 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M.25 5.563C.281 5.219.469 5.03.813 5h9.375c.343.031.53.219.562.563-.031.343-.219.53-.562.562H.813C.469 6.094.28 5.906.25 5.563m0 3.75c.031-.344.219-.532.563-.563h9.375c.343.031.53.219.562.563-.031.343-.219.53-.562.562H.813C.469 9.844.28 9.656.25 9.313m10.5 3.75c-.031.343-.219.53-.562.562H.813c-.344-.031-.532-.219-.563-.562.031-.344.219-.532.563-.563h9.375c.343.031.53.219.562.563'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarsCaptionBoldIcon);
export default ForwardRef;
