import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedSixBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 10 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M8.5 14c-.02-1-.365-1.823-1.031-2.469C6.823 10.865 6 10.521 5 10.5c-1.042.02-1.896.396-2.562 1.125l-.157.188A3.393 3.393 0 0 0 1.5 14c.02 1 .365 1.823 1.031 2.469C3.177 17.135 4 17.479 5 17.5c1-.02 1.823-.365 2.469-1.031C8.135 15.823 8.479 15 8.5 14M4.563 9.031A3.09 3.09 0 0 1 5 9c1.417.042 2.594.531 3.531 1.469C9.47 11.406 9.958 12.583 10 14c-.042 1.417-.531 2.594-1.469 3.531C7.594 18.47 6.417 18.958 5 19c-1.417-.042-2.594-.531-3.531-1.469C.53 16.594.042 15.417 0 14c.02-1.333.458-2.458 1.313-3.375l4.343-5.344c.334-.333.688-.375 1.063-.125.333.334.375.688.125 1.063z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSixBoldIcon);
export default ForwardRef;
