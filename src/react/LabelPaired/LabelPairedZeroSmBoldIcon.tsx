import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedZeroSmBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M.125 9C.161 7.76.59 6.73 1.41 5.91c.82-.82 1.85-1.249 3.09-1.285 1.24.036 2.27.465 3.09 1.285.82.82 1.249 1.85 1.285 3.09v3.5c-.036 1.24-.465 2.27-1.285 3.09-.82.82-1.85 1.248-3.09 1.285-1.24-.037-2.27-.465-3.09-1.285C.59 14.77.161 13.74.125 12.5V9ZM4.5 5.937c-.875.019-1.595.32-2.16.903-.583.565-.884 1.285-.902 2.16v3.5c.018.875.319 1.595.902 2.16.565.583 1.285.884 2.16.902.875-.018 1.595-.319 2.16-.902.583-.565.884-1.285.902-2.16V9c-.018-.875-.319-1.595-.902-2.16-.565-.583-1.285-.884-2.16-.902Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedZeroSmBoldIcon);
export default ForwardRef;
