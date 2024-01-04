import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneVideoBoldIcon = (
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
      d='M7.25 10.875c-.39.026-.599.234-.625.625v10c.026.39.234.599.625.625h10c.39-.026.599-.234.625-.625v-10c-.026-.39-.234-.599-.625-.625h-10Zm-2.5.625c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742h10c.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758v10c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742h-10c-.703-.026-1.29-.273-1.758-.742-.469-.469-.716-1.055-.742-1.758v-10Zm20.625 9.18v-8.36L21 14.273v-2.07l4.063-1.797c.208-.104.43-.156.664-.156.416 0 .768.156 1.054.469.313.286.469.65.469 1.094v9.414c0 .416-.156.768-.469 1.054a1.375 1.375 0 0 1-1.054.469c-.235 0-.456-.04-.665-.117L21 20.797v-2.07l4.375 1.953Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneVideoBoldIcon);
export default ForwardRef;
