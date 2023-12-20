import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedBarsFilterCaptionBoldIcon = (
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
        d='M.25 5.563C.281 5.219.469 5.03.813 5h9.375c.343.031.53.219.562.563-.031.343-.219.53-.562.562H.813C.469 6.094.28 5.906.25 5.563m1.5 3.75c.031-.344.219-.532.563-.563h6.374c.344.031.532.219.563.563-.031.343-.219.53-.562.562H2.311c-.343-.031-.53-.219-.562-.562M7 13.063c-.031.343-.219.53-.562.562H4.563c-.344-.031-.532-.219-.563-.562.031-.344.219-.532.563-.563h1.875c.343.031.53.219.562.563'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarsFilterCaptionBoldIcon);
export default ForwardRef;
