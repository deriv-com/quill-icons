import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCalendarCaptionBoldIcon = (
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
        d='M3.813 4.063V5h3.375v-.937c.03-.344.218-.532.562-.563.344.031.531.219.563.563V5h.937c.422.016.773.164 1.055.445.28.282.43.633.445 1.055V14a1.515 1.515 0 0 1-.445 1.055c-.282.28-.633.43-1.055.445h-7.5a1.515 1.515 0 0 1-1.055-.445A1.515 1.515 0 0 1 .25 14V6.5c.016-.422.164-.773.445-1.055.282-.28.633-.43 1.055-.445h.938v-.937c.03-.344.218-.532.562-.563.344.031.531.219.563.563M1.374 8v6c.016.234.14.36.375.375h7.5c.234-.016.36-.14.375-.375V8z'
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
