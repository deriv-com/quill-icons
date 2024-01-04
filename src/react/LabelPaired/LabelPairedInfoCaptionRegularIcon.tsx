import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedInfoCaptionRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={5}
    height={18}
    viewBox='0 0 5 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.75 5a.73.73 0 0 1 .21-.54.73.73 0 0 1 .54-.21.73.73 0 0 1 .54.21c.14.142.21.321.21.54a.73.73 0 0 1-.21.54.73.73 0 0 1-.54.21.73.73 0 0 1-.54-.21.73.73 0 0 1-.21-.54ZM.625 7.625c.016-.234.14-.36.375-.375h1.5c.234.016.36.14.375.375V14h1.5c.234.016.36.14.375.375-.016.234-.14.36-.375.375H.625c-.234-.016-.36-.14-.375-.375.016-.234.14-.36.375-.375h1.5V8H1c-.234-.016-.36-.14-.375-.375Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h5v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedInfoCaptionRegularIcon);
export default ForwardRef;
