import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedTabletScreenCaptionBoldIcon = (
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
        d='M1.375 14c.016.234.14.36.375.375h7.5c.234-.016.36-.14.375-.375v-1.875h-8.25V14Zm0-3h8.25V5c-.016-.234-.14-.36-.375-.375h-7.5c-.234.016-.36.14-.375.375v6ZM.25 5c.016-.422.164-.773.445-1.055.282-.28.633-.43 1.055-.445h7.5c.422.016.773.164 1.055.445.28.282.43.633.445 1.055v9a1.515 1.515 0 0 1-.445 1.055c-.282.28-.633.43-1.055.445h-7.5a1.515 1.515 0 0 1-1.055-.445A1.515 1.515 0 0 1 .25 14V5Zm4.5 7.875h1.5c.234.016.36.14.375.375-.016.234-.14.36-.375.375h-1.5c-.234-.016-.36-.14-.375-.375.016-.234.14-.36.375-.375Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTabletScreenCaptionBoldIcon);
export default ForwardRef;
