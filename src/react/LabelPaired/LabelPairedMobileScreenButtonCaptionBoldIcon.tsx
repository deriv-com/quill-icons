import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedMobileScreenButtonCaptionBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.5 14c.016.234.14.36.375.375h5.25c.234-.016.36-.14.375-.375v-1.875h-6V14Zm0-3h6V5c-.016-.234-.14-.36-.375-.375h-5.25c-.234.016-.36.14-.375.375v6ZM.375 5c.016-.422.164-.773.445-1.055.282-.28.633-.43 1.055-.445h5.25c.422.016.773.164 1.055.445.28.282.43.633.445 1.055v9a1.515 1.515 0 0 1-.445 1.055c-.282.28-.633.43-1.055.445h-5.25a1.515 1.515 0 0 1-1.055-.445A1.515 1.515 0 0 1 .375 14V5Zm3.375 7.875h1.5c.234.016.36.14.375.375-.016.234-.14.36-.375.375h-1.5c-.234-.016-.36-.14-.375-.375.016-.234.14-.36.375-.375Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileScreenButtonCaptionBoldIcon);
export default ForwardRef;
