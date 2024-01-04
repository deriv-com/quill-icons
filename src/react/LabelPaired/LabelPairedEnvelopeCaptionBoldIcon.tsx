import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedEnvelopeCaptionBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.5 6.125c-.234.016-.36.14-.375.375v.516l4.055 3.328a1.372 1.372 0 0 0 1.664 0l4.031-3.328V6.5c-.016-.234-.14-.36-.375-.375h-9Zm-.375 2.344V12.5c.016.234.14.36.375.375h9c.234-.016.36-.14.375-.375V8.469L7.547 11.21a2.485 2.485 0 0 1-3.094 0L1.125 8.469ZM0 6.5c.016-.422.164-.773.445-1.055.282-.28.633-.43 1.055-.445h9c.422.016.773.164 1.055.445.28.282.43.633.445 1.055v6a1.515 1.515 0 0 1-.445 1.055c-.282.28-.633.43-1.055.445h-9a1.515 1.515 0 0 1-1.055-.445A1.515 1.515 0 0 1 0 12.5v-6Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEnvelopeCaptionBoldIcon);
export default ForwardRef;
