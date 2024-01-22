import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneImageRegularIcon = (
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
    <path d='M8.5 9c-.365 0-.664.117-.898.352-.235.234-.352.533-.352.898v9.102l2.656-2.618A1.5 1.5 0 0 1 11 16.266a1.5 1.5 0 0 1 1.094.468l2.656 2.618 5.156-5.118A1.5 1.5 0 0 1 21 13.766a1.5 1.5 0 0 1 1.094.468l2.656 2.618V10.25c0-.365-.117-.664-.352-.898C24.164 9.117 23.865 9 23.5 9zM7.25 21.148v1.602c0 .365.117.664.352.898.234.235.533.352.898.352h1.602l3.75-3.75-2.618-2.656a.39.39 0 0 0-.468 0zm13.984-6.054a.39.39 0 0 0-.468 0L11.898 24H23.5c.365 0 .664-.117.898-.352.235-.234.352-.533.352-.898v-4.102zM6 10.25c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742h15c.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758v12.5c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742h-15c-.703-.026-1.29-.273-1.758-.742-.469-.469-.716-1.055-.742-1.758zm6.25 1.875c-.026-.39-.234-.599-.625-.625-.39.026-.599.234-.625.625.026.39.234.599.625.625.39-.026.599-.234.625-.625m-2.5 0c.026-.703.338-1.25.938-1.64.624-.313 1.25-.313 1.874 0 .6.39.912.937.938 1.64-.026.703-.338 1.25-.937 1.64-.626.313-1.25.313-1.876 0-.598-.39-.911-.937-.937-1.64' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneImageRegularIcon);
export default ForwardRef;
