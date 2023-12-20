import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedPasteCaptionBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 12 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.875 5.75H1.5c-.234.016-.36.14-.375.375V12.5c.016.234.14.36.375.375h2.25V14H1.5a1.515 1.515 0 0 1-1.055-.445A1.515 1.515 0 0 1 0 12.5V6.125c.016-.422.164-.773.445-1.055.282-.28.633-.43 1.055-.445h.96a1.25 1.25 0 0 1 .423-.797c.234-.219.523-.328.867-.328s.633.11.867.328c.235.203.375.469.422.797H6c.36 0 .672.11.938.328.25.203.421.469.515.797H6c-.422 0-.805.102-1.148.305a2.358 2.358 0 0 0-.797.82h-1.43a.73.73 0 0 1-.54-.21.73.73 0 0 1-.21-.54zm1.5-.937c.016.234.14.359.375.375.234-.016.36-.141.375-.375-.016-.235-.14-.36-.375-.375-.234.015-.36.14-.375.375M6 14.375h4.5c.234-.016.36-.14.375-.375V9.5H9.75a.73.73 0 0 1-.54-.21.73.73 0 0 1-.21-.54V7.625H6c-.234.016-.36.14-.375.375v6c.016.234.14.36.375.375m4.5 1.125H6a1.515 1.515 0 0 1-1.055-.445A1.515 1.515 0 0 1 4.5 14V8c.016-.422.164-.773.445-1.055.282-.28.633-.43 1.055-.445h3.656c.313 0 .578.11.797.328l1.219 1.219c.219.219.328.484.328.797V14a1.515 1.515 0 0 1-.445 1.055c-.282.28-.633.43-1.055.445'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPasteCaptionBoldIcon);
export default ForwardRef;
