import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedHorizontalRuleLgRegularIcon = (
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
      <path d='M0 15.5q.039-.585.625-.625h23.75q.585.039.625.625-.039.585-.625.625H.625Q.04 16.086 0 15.5' />
    </g>
    <defs>
      <clipPath id='cef77b429c2bc47918ddba04ebc8f237__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHorizontalRuleLgRegularIcon);
export default ForwardRef;
