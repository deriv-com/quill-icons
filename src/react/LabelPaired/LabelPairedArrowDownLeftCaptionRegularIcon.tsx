import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowDownLeftCaptionRegularIcon = (
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
        d='M1.125 13.25c-.234-.016-.36-.14-.375-.375v-5.25c.016-.234.14-.36.375-.375.234.016.36.14.375.375v4.336l6.117-6.094c.172-.156.344-.156.516 0 .156.172.156.344 0 .516L2.039 12.5h4.336c.234.016.36.14.375.375-.016.234-.14.36-.375.375h-5.25Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownLeftCaptionRegularIcon);
export default ForwardRef;
