import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedExclamationCaptionRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={2}
    height={18}
    viewBox='0 0 2 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.375 4.625v7.125c-.016.234-.14.36-.375.375-.234-.016-.36-.14-.375-.375V4.625c.016-.234.14-.36.375-.375.234.016.36.14.375.375ZM1 14.563C.656 14.53.469 14.342.437 14c.032-.344.22-.531.563-.563.344.032.531.22.563.563-.032.344-.22.531-.563.563Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h2v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExclamationCaptionRegularIcon);
export default ForwardRef;
