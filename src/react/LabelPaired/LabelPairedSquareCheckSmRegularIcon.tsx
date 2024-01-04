import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedSquareCheckSmRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2.125 5.5a.852.852 0 0 0-.629.246.852.852 0 0 0-.246.629v8.75c0 .255.082.465.246.629a.852.852 0 0 0 .629.246h8.75a.852.852 0 0 0 .629-.246.852.852 0 0 0 .246-.629v-8.75a.852.852 0 0 0-.246-.629.852.852 0 0 0-.629-.246h-8.75Zm-1.75.875c.018-.492.191-.902.52-1.23.328-.329.738-.502 1.23-.52h8.75c.492.018.902.191 1.23.52.329.328.502.738.52 1.23v8.75c-.018.492-.191.902-.52 1.23-.328.329-.738.502-1.23.52h-8.75c-.492-.018-.902-.191-1.23-.52-.329-.328-.502-.738-.52-1.23v-8.75Zm9.05 2.926-3.5 3.5c-.2.182-.4.182-.6 0l-1.75-1.75c-.183-.2-.183-.401 0-.602.2-.182.4-.182.6 0l1.45 1.422 3.2-3.172c.2-.182.4-.182.6 0 .183.2.183.401 0 .602Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSquareCheckSmRegularIcon);
export default ForwardRef;
