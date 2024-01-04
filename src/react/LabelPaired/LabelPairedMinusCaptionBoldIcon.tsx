import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedMinusCaptionBoldIcon = (
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
        d='M10.375 9.5c-.031.344-.219.531-.563.563H1.188C.844 10.03.655 9.842.625 9.5c.031-.344.219-.531.563-.563h8.624c.344.032.532.22.563.563Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMinusCaptionBoldIcon);
export default ForwardRef;
