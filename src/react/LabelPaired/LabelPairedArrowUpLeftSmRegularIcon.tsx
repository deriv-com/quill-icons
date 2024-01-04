import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowUpLeftSmRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.563 6.375h6.125c.273.018.419.164.437.438-.018.273-.164.419-.438.437H2.63l7.11 7.137c.182.2.182.4 0 .601-.201.183-.402.183-.602 0L2 7.878v5.06c-.018.273-.164.419-.438.437-.273-.018-.419-.164-.437-.438V6.814c.018-.274.164-.42.438-.438Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpLeftSmRegularIcon);
export default ForwardRef;
