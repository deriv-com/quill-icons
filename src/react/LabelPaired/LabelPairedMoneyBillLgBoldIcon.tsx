import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedMoneyBillLgBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 23 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M4.625 9.875c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742v6.25c.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758h13.75c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742v-6.25c-.703-.026-1.29-.273-1.758-.742-.469-.469-.716-1.055-.742-1.758zM.25 10.5c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742h17.5c.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758v10c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742H2.75c-.703-.026-1.29-.273-1.758-.742C.523 21.789.276 21.203.25 20.5zm11.25 1.25c.677 0 1.302.17 1.875.508A3.759 3.759 0 0 1 15.25 15.5a3.759 3.759 0 0 1-1.875 3.242 3.62 3.62 0 0 1-1.875.508 3.62 3.62 0 0 1-1.875-.508A3.759 3.759 0 0 1 7.75 15.5a3.759 3.759 0 0 1 1.875-3.242 3.62 3.62 0 0 1 1.875-.508'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMoneyBillLgBoldIcon);
export default ForwardRef;
