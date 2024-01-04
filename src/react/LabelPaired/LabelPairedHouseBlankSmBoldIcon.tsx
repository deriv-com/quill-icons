import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedHouseBlankSmBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m8.438 3.914 7.218 6.125c.274.274.292.583.055.93-.274.273-.574.291-.902.054l-.684-.546v5.085c-.018.62-.228 1.14-.629 1.56-.42.4-.939.61-1.559.628H4.064c-.62-.018-1.14-.228-1.56-.629-.4-.42-.61-.939-.628-1.558v-5.086l-.684.546c-.328.237-.629.22-.902-.054-.237-.347-.219-.656.055-.93l7.218-6.125c.292-.219.584-.219.875 0Zm4.374 5.441L8 5.281 3.187 9.355v6.207c0 .256.083.465.247.63a.852.852 0 0 0 .628.245h7.875a.852.852 0 0 0 .63-.246.852.852 0 0 0 .245-.628V9.354Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHouseBlankSmBoldIcon);
export default ForwardRef;
