import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedFileCircleCheckSmRegularIcon = (
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
        d='M9 16.875a.852.852 0 0 0 .629-.246.852.852 0 0 0 .246-.629V9H6.812a1.427 1.427 0 0 1-.93-.383 1.427 1.427 0 0 1-.382-.93V4.626H2a.852.852 0 0 0-.629.246.852.852 0 0 0-.246.629V16c0 .255.082.465.246.629a.852.852 0 0 0 .629.246h7Zm-2.188-8.75h3.063a.73.73 0 0 0-.137-.191L6.566 4.762a.406.406 0 0 0-.191-.11v3.035c.018.274.164.42.438.438ZM2 3.75h4.266c.364 0 .674.128.93.383l3.171 3.172c.255.255.383.565.383.93V16c-.018.492-.191.902-.52 1.23-.328.329-.738.502-1.23.52H2c-.492-.018-.902-.191-1.23-.52C.44 16.902.268 16.492.25 16V5.5c.018-.492.191-.902.52-1.23.328-.329.738-.502 1.23-.52Zm5.988 8.04L5.09 14.714c-.219.164-.429.164-.63 0l-1.448-1.477c-.183-.2-.183-.4 0-.601.2-.164.4-.164.601 0l1.149 1.148 2.625-2.625c.2-.164.4-.164.601 0 .183.219.183.428 0 .63Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCircleCheckSmRegularIcon);
export default ForwardRef;
