import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedSquareMinusLgBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
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
      <path d='M2.75 8.625c-.39.026-.599.234-.625.625v12.5c.026.39.234.599.625.625h12.5c.39-.026.599-.234.625-.625V9.25c-.026-.39-.234-.599-.625-.625H2.75Zm-2.5.625c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742h12.5c.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758v12.5c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742H2.75c-.703-.026-1.29-.273-1.758-.742-.469-.469-.716-1.055-.742-1.758V9.25Zm5.938 5.313h5.625c.572.052.885.364.937.937-.052.573-.365.885-.938.938H6.189c-.573-.053-.886-.365-.938-.938.052-.573.365-.885.938-.938Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSquareMinusLgBoldIcon);
export default ForwardRef;
