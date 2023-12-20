import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCircleDotFillIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M8 20c-1.458-.02-2.792-.375-4-1.062C2.792 18.229 1.813 17.25 1.063 16 .354 14.73 0 13.396 0 12s.354-2.73 1.063-4C1.813 6.75 2.792 5.77 4 5.063 5.208 4.375 6.542 4.02 8 4c1.458.02 2.792.375 4 1.063C13.208 5.77 14.188 6.75 14.938 8 15.646 9.27 16 10.604 16 12s-.354 2.73-1.062 4c-.75 1.25-1.73 2.23-2.938 2.938-1.208.687-2.542 1.041-4 1.062M8 9c-.542 0-1.042.135-1.5.406A3.007 3.007 0 0 0 5 12a3.007 3.007 0 0 0 1.5 2.594c.458.27.958.406 1.5.406s1.042-.135 1.5-.406A3.007 3.007 0 0 0 11 12a3.007 3.007 0 0 0-1.5-2.594A2.896 2.896 0 0 0 8 9'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleDotFillIcon);
export default ForwardRef;
