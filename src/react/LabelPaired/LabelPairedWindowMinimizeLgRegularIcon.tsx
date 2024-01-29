import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedWindowMinimizeLgRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M.625 23h18.75q.585.039.625.625-.039.585-.625.625H.625Q.04 24.211 0 23.625.039 23.04.625 23' />
    </g>
    <defs>
      <clipPath id='f2c512c7dabe253e3690195a6b20aa2e__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWindowMinimizeLgRegularIcon);
export default ForwardRef;
