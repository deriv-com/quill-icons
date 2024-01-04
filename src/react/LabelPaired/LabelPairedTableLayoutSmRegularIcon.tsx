import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedTableLayoutSmRegularIcon = (
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
        d='M12.25 5.5H1.75a.852.852 0 0 0-.629.246.852.852 0 0 0-.246.629v1.75h12.25v-1.75a.852.852 0 0 0-.246-.629.852.852 0 0 0-.629-.246ZM.875 15.125c0 .255.082.465.246.629A.852.852 0 0 0 1.75 16h2.625V9h-3.5v6.125ZM5.25 16h7a.852.852 0 0 0 .629-.246.852.852 0 0 0 .246-.629V9H5.25v7ZM1.75 4.625h10.5c.492.018.902.191 1.23.52.329.328.502.738.52 1.23v8.75c-.018.492-.191.902-.52 1.23-.328.329-.738.502-1.23.52H1.75c-.492-.018-.902-.191-1.23-.52-.329-.328-.502-.738-.52-1.23v-8.75c.018-.492.191-.902.52-1.23.328-.329.738-.502 1.23-.52Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTableLayoutSmRegularIcon);
export default ForwardRef;
