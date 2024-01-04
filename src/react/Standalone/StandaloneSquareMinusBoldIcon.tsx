import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneSquareMinusBoldIcon = (
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
      d='M9.75 9.625c-.39.026-.599.234-.625.625v12.5c.026.39.234.599.625.625h12.5c.39-.026.599-.234.625-.625v-12.5c-.026-.39-.234-.599-.625-.625H9.75Zm-2.5.625c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742h12.5c.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758v12.5c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742H9.75c-.703-.026-1.29-.273-1.758-.742-.469-.469-.716-1.055-.742-1.758v-12.5Zm5.938 5.313h5.624c.573.052.886.364.938.937-.052.573-.365.885-.938.938h-5.625c-.572-.053-.885-.365-.937-.938.052-.573.365-.885.938-.938Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneSquareMinusBoldIcon);
export default ForwardRef;
