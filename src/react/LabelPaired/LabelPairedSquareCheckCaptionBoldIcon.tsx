import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedSquareCheckCaptionBoldIcon = (
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
        d='M1.75 5.375c-.234.016-.36.14-.375.375v7.5c.016.234.14.36.375.375h7.5c.234-.016.36-.14.375-.375v-7.5c-.016-.234-.14-.36-.375-.375zm-1.5.375c.016-.422.164-.773.445-1.055.282-.28.633-.43 1.055-.445h7.5c.422.016.773.164 1.055.445.28.282.43.633.445 1.055v7.5a1.515 1.515 0 0 1-.445 1.055c-.282.28-.633.43-1.055.445h-7.5a1.515 1.515 0 0 1-1.055-.445A1.515 1.515 0 0 1 .25 13.25zm7.898 2.648-3 3c-.265.22-.53.22-.796 0l-1.5-1.5c-.22-.265-.22-.53 0-.796.265-.22.53-.22.796 0l1.102 1.101 2.602-2.601c.265-.22.53-.22.796 0 .22.265.22.53 0 .796'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSquareCheckCaptionBoldIcon);
export default ForwardRef;
