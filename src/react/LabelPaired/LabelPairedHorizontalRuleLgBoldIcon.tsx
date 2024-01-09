import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedHorizontalRuleLgBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M0 15.5c.052-.573.365-.885.938-.937h23.125c.572.052.885.364.937.937-.052.573-.365.885-.937.938H.938C.365 16.385.051 16.073 0 15.5' />
    </g>
    <defs>
      <clipPath id='2d01a119dae033a5fd5b472ade962e6d__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHorizontalRuleLgBoldIcon);
export default ForwardRef;
