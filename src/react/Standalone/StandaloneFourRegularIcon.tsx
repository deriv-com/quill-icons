import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneFourRegularIcon = (
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
      d='M15.297 8.648 10.14 19h9.609v-6.875c.026-.39.234-.599.625-.625.39.026.599.234.625.625V19h1.875c.39.026.599.234.625.625-.026.39-.234.599-.625.625H21v4.375c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625V20.25H9.125a.634.634 0 0 1-.547-.273.664.664 0 0 1 0-.625l5.625-11.25c.182-.339.456-.43.82-.274.339.208.43.482.274.82'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneFourRegularIcon);
export default ForwardRef;
