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
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M0 15.5c.052-.573.365-.885.938-.938h23.125c.572.053.885.365.937.938-.052.573-.365.885-.938.938H.938C.366 16.384.052 16.073 0 15.5Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHorizontalRuleLgBoldIcon);
export default ForwardRef;
