import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedMobileNotchSmBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 11 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M7.25 5.063V5.5c-.018.273-.164.42-.437.438H4.188c-.274-.019-.42-.165-.438-.438v-.437h-.875a.852.852 0 0 0-.629.246.852.852 0 0 0-.246.628v9.625c0 .256.082.465.246.63a.852.852 0 0 0 .629.245h5.25a.852.852 0 0 0 .629-.246.852.852 0 0 0 .246-.628V5.938a.852.852 0 0 0-.246-.63.852.852 0 0 0-.629-.245zm-6.562.875c.018-.62.227-1.14.628-1.56.42-.4.94-.61 1.559-.628h5.25c.62.018 1.14.228 1.559.629.4.42.61.939.629 1.559v9.625c-.019.62-.228 1.139-.63 1.558-.419.401-.938.61-1.558.629h-5.25c-.62-.018-1.14-.228-1.559-.629-.4-.42-.61-.939-.629-1.558z'
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
