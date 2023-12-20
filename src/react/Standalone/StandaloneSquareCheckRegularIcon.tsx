import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneSquareCheckRegularIcon = (
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
      d='M9.75 9c-.365 0-.664.117-.898.352-.235.234-.352.533-.352.898v12.5c0 .365.117.664.352.898.234.235.533.352.898.352h12.5c.365 0 .664-.117.898-.352.235-.234.352-.533.352-.898v-12.5c0-.365-.117-.664-.352-.898-.234-.235-.533-.352-.898-.352zm-2.5 1.25c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742h12.5c.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758v12.5c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742H9.75c-.703-.026-1.29-.273-1.758-.742-.469-.469-.716-1.055-.742-1.758zm12.93 4.18-5 5c-.287.26-.573.26-.86 0l-2.5-2.5c-.26-.287-.26-.573 0-.86.287-.26.573-.26.86 0l2.07 2.032 4.57-4.532c.287-.26.573-.26.86 0 .26.287.26.573 0 .86'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneSquareCheckRegularIcon);
export default ForwardRef;
