import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneMoneyBillBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path
      fillOpacity={0.72}
      d='M9.125 10.875c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742v6.25c.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758h13.75c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742v-6.25c-.703-.026-1.29-.273-1.758-.742-.469-.469-.716-1.055-.742-1.758H9.125ZM4.75 11.5c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742h17.5c.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758v10c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742H7.25c-.703-.026-1.29-.273-1.758-.742-.469-.469-.716-1.055-.742-1.758v-10ZM16 12.75c.677 0 1.302.17 1.875.508A3.759 3.759 0 0 1 19.75 16.5a3.759 3.759 0 0 1-1.875 3.242A3.62 3.62 0 0 1 16 20.25a3.62 3.62 0 0 1-1.875-.508A3.759 3.759 0 0 1 12.25 16.5a3.759 3.759 0 0 1 1.875-3.242A3.62 3.62 0 0 1 16 12.75Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneMoneyBillBoldIcon);
export default ForwardRef;
