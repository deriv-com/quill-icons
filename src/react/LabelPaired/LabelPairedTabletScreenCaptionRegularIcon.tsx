import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedTabletScreenCaptionRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M9.25 4.25h-7.5a.73.73 0 0 0-.54.21A.73.73 0 0 0 1 5v6h9V5a.73.73 0 0 0-.21-.54.73.73 0 0 0-.54-.21Zm.75 7.5H1V14c0 .219.07.398.21.54.142.14.321.21.54.21h7.5a.73.73 0 0 0 .54-.21A.73.73 0 0 0 10 14v-2.25ZM1.75 3.5h7.5c.422.016.773.164 1.055.445.28.282.43.633.445 1.055v9a1.515 1.515 0 0 1-.445 1.055c-.282.28-.633.43-1.055.445h-7.5a1.515 1.515 0 0 1-1.055-.445A1.515 1.515 0 0 1 .25 14V5c.016-.422.164-.773.445-1.055.282-.28.633-.43 1.055-.445Zm2.625 9.75c.016-.234.14-.36.375-.375h1.5c.234.016.36.14.375.375-.016.234-.14.36-.375.375h-1.5c-.234-.016-.36-.14-.375-.375Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTabletScreenCaptionRegularIcon);
export default ForwardRef;
