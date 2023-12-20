import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandalonePresentationScreenRegularIcon = (
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
      d='M5.375 6.5h21.25c.39.026.599.234.625.625-.026.39-.234.599-.625.625H5.375c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625M6 9h1.25v8.75c0 .365.117.664.352.898.234.235.533.352.898.352h15c.365 0 .664-.117.898-.352.235-.234.352-.533.352-.898V9H26v8.75c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742h-6.875v1.602l3.555 3.593c.26.287.26.573 0 .86-.287.26-.573.26-.86 0L16 23.023l-3.32 3.282c-.287.26-.573.26-.86 0-.26-.287-.26-.573 0-.86l3.555-3.593V20.25H8.5c-.703-.026-1.29-.273-1.758-.742-.469-.469-.716-1.055-.742-1.758z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandalonePresentationScreenRegularIcon);
export default ForwardRef;
