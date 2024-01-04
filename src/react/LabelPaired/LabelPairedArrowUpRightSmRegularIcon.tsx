import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowUpRightSmRegularIcon = (
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
        d='M9.438 6.375c.273.018.419.164.437.438v6.125c-.018.273-.164.419-.438.437-.273-.018-.419-.164-.437-.438V7.88l-7.137 7.11c-.2.182-.4.182-.601 0-.183-.201-.183-.402 0-.602l7.11-7.137h-5.06c-.273-.018-.419-.164-.437-.438.018-.273.164-.419.438-.437h6.124Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightSmRegularIcon);
export default ForwardRef;
