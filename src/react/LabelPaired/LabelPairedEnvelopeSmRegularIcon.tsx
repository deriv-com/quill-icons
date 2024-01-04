import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedEnvelopeSmRegularIcon = (
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
        d='M1.75 6.375a.852.852 0 0 0-.629.246.852.852 0 0 0-.246.629v1.094l5.36 3.91c.51.346 1.02.346 1.53 0l5.36-3.91V7.25a.852.852 0 0 0-.246-.629.852.852 0 0 0-.629-.246H1.75ZM.875 9.438v4.812c0 .255.082.465.246.629a.852.852 0 0 0 .629.246h10.5a.852.852 0 0 0 .629-.246.852.852 0 0 0 .246-.629V9.437l-4.84 3.528A2.068 2.068 0 0 1 7 13.402c-.474 0-.902-.145-1.285-.437L.875 9.438ZM0 7.25c.018-.492.191-.902.52-1.23.328-.329.738-.502 1.23-.52h10.5c.492.018.902.191 1.23.52.329.328.502.738.52 1.23v7c-.018.492-.191.902-.52 1.23-.328.329-.738.502-1.23.52H1.75c-.492-.018-.902-.191-1.23-.52-.329-.328-.502-.738-.52-1.23v-7Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEnvelopeSmRegularIcon);
export default ForwardRef;
