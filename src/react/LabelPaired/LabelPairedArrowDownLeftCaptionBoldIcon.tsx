import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowDownLeftCaptionBoldIcon = (
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
        d='M1.313 13.25c-.344-.031-.532-.219-.563-.563V7.064c.031-.344.219-.532.563-.563.343.031.53.219.562.563v4.265l5.414-5.414c.266-.219.531-.219.797 0 .219.266.219.531 0 .797l-5.414 5.414h4.265c.344.031.532.219.563.563-.031.343-.219.53-.563.562H1.313Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownLeftCaptionBoldIcon);
export default ForwardRef;
