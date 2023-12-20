import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedSearchSmBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 14 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M10.063 9.438c0-.784-.192-1.514-.575-2.188a4.56 4.56 0 0 0-1.613-1.613 4.458 4.458 0 0 0-4.375 0A4.56 4.56 0 0 0 1.887 7.25a4.358 4.358 0 0 0-.574 2.188c0 .783.19 1.512.574 2.187A4.56 4.56 0 0 0 3.5 13.238a4.458 4.458 0 0 0 4.375 0 4.56 4.56 0 0 0 1.613-1.613 4.358 4.358 0 0 0 .575-2.187m-.848 4.457c-.985.802-2.16 1.212-3.527 1.23-1.605-.037-2.945-.592-4.02-1.668C.592 12.382.036 11.042 0 9.437c.036-1.604.592-2.944 1.668-4.019 1.075-1.076 2.415-1.632 4.02-1.668 1.604.036 2.944.592 4.019 1.668 1.076 1.075 1.631 2.415 1.668 4.02-.018 1.367-.428 2.542-1.23 3.527l3.664 3.664c.255.31.255.62 0 .93-.31.255-.62.255-.93 0z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSearchSmBoldIcon);
export default ForwardRef;
