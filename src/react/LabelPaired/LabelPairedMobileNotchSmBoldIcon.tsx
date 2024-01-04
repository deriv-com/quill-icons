import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedMobileNotchSmBoldIcon = (
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
        d='M7.25 5.063V5.5c-.018.273-.164.42-.438.438H4.188c-.273-.019-.419-.165-.437-.438v-.438h-.875a.852.852 0 0 0-.629.247.852.852 0 0 0-.246.628v9.625c0 .256.082.465.246.63a.852.852 0 0 0 .629.245h5.25a.852.852 0 0 0 .629-.246.852.852 0 0 0 .246-.628V5.937a.852.852 0 0 0-.246-.628.852.852 0 0 0-.629-.247H7.25Zm-6.563.875c.019-.62.228-1.14.63-1.56.419-.4.938-.61 1.558-.628h5.25c.62.018 1.14.228 1.559.629.4.42.61.939.629 1.559v9.625c-.019.62-.228 1.139-.63 1.558-.419.401-.938.61-1.558.629h-5.25c-.62-.018-1.14-.228-1.559-.629-.4-.42-.61-.939-.629-1.558V5.937Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileNotchSmBoldIcon);
export default ForwardRef;
