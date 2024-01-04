import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedWindowMaximizeSmRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.75 5.5a.852.852 0 0 0-.629.246.852.852 0 0 0-.246.629V9h12.25V6.375a.852.852 0 0 0-.246-.629.852.852 0 0 0-.629-.246H1.75ZM.875 9.875v5.25c0 .255.082.465.246.629A.852.852 0 0 0 1.75 16h10.5a.852.852 0 0 0 .629-.246.852.852 0 0 0 .246-.629v-5.25H.875ZM0 6.375c.018-.492.191-.902.52-1.23.328-.329.738-.502 1.23-.52h10.5c.492.018.902.191 1.23.52.329.328.502.738.52 1.23v8.75c-.018.492-.191.902-.52 1.23-.328.329-.738.502-1.23.52H1.75c-.492-.018-.902-.191-1.23-.52-.329-.328-.502-.738-.52-1.23v-8.75Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWindowMaximizeSmRegularIcon);
export default ForwardRef;
