import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCalendarCaptionBoldIcon = (
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
        d='M3.813 4.063V5h3.374v-.938c.032-.343.22-.53.563-.562.344.031.531.219.563.563V5h.937c.422.016.773.164 1.055.445.28.282.43.633.445 1.055V14a1.515 1.515 0 0 1-.445 1.055c-.282.28-.633.43-1.055.445h-7.5a1.515 1.515 0 0 1-1.055-.445A1.515 1.515 0 0 1 .25 14V6.5c.016-.422.164-.773.445-1.055.282-.28.633-.43 1.055-.445h.938v-.938c.03-.343.218-.53.562-.562.344.031.531.219.563.563ZM1.374 8v6c.016.234.14.36.375.375h7.5c.234-.016.36-.14.375-.375V8h-8.25Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCalendarCaptionBoldIcon);
export default ForwardRef;
