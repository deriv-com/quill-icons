import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedPresentationScreenSmRegularIcon = (
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
        d='M.563 3.75h14.874c.274.018.42.164.438.438-.018.273-.164.419-.438.437H.563c-.274-.018-.42-.164-.438-.438.018-.273.164-.419.438-.437ZM1 5.5h.875v6.125c0 .255.082.465.246.629a.852.852 0 0 0 .629.246h10.5a.852.852 0 0 0 .629-.246.852.852 0 0 0 .246-.629V5.5H15v6.125c-.018.492-.191.902-.52 1.23-.328.329-.738.502-1.23.52H8.437v1.121l2.489 2.516c.182.2.182.4 0 .601-.2.183-.401.183-.602 0L8 15.316l-2.324 2.297c-.2.183-.401.183-.602 0-.182-.2-.182-.4 0-.601l2.489-2.516v-1.121H2.75c-.492-.018-.902-.191-1.23-.52-.329-.328-.502-.738-.52-1.23V5.5Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPresentationScreenSmRegularIcon);
export default ForwardRef;
