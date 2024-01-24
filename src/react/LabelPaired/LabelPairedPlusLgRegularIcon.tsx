import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedPlusLgRegularIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M9.625 8v6.875H16.5q.585.039.625.625-.039.585-.625.625H9.625V23q-.039.585-.625.625-.585-.039-.625-.625v-6.875H1.5q-.585-.039-.625-.625.039-.585.625-.625h6.875V8q.039-.585.625-.625.585.039.625.625' />
    </g>
    <defs>
      <clipPath id='51d4437b0f174546e3a8ec48d9237aee__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlusLgRegularIcon);
export default ForwardRef;
