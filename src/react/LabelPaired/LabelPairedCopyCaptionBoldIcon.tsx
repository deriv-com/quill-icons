import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCopyCaptionBoldIcon = (
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
        d='M9.25 11.375c.234-.016.36-.14.375-.375V6.219L8.031 4.625H4.75c-.234.016-.36.14-.375.375v6c.016.234.14.36.375.375h4.5ZM4.75 12.5a1.515 1.515 0 0 1-1.055-.445A1.515 1.515 0 0 1 3.25 11V5c.016-.422.164-.773.445-1.055.282-.28.633-.43 1.055-.445h3.281c.313 0 .578.11.797.328l1.594 1.594c.219.219.328.484.328.797V11a1.515 1.515 0 0 1-.445 1.055c-.282.28-.633.43-1.055.445h-4.5Zm-3-6h.75v1.125h-.75c-.234.016-.36.14-.375.375v6c.016.234.14.36.375.375h4.5c.234-.016.36-.14.375-.375v-.75H7.75V14a1.515 1.515 0 0 1-.445 1.055c-.282.28-.633.43-1.055.445h-4.5a1.515 1.515 0 0 1-1.055-.445A1.515 1.515 0 0 1 .25 14V8c.016-.422.164-.773.445-1.055.282-.28.633-.43 1.055-.445Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCopyCaptionBoldIcon);
export default ForwardRef;
