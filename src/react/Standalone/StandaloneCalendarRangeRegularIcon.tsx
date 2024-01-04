import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneCalendarRangeRegularIcon = (
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
      d='M11.625 6.5c.39.026.599.234.625.625V9h7.5V7.125c.026-.39.234-.599.625-.625.39.026.599.234.625.625V9h1.25c.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758V24c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742H9.75c-.703-.026-1.29-.273-1.758-.742-.469-.469-.716-1.055-.742-1.758V11.5c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742H11V7.125c.026-.39.234-.599.625-.625ZM23.5 14h-15v10c0 .365.117.664.352.898.234.235.533.352.898.352h12.5c.365 0 .664-.117.898-.352.235-.234.352-.533.352-.898V14Zm-1.25-3.75H9.75c-.365 0-.664.117-.898.352-.235.234-.352.533-.352.898v1.25h15V11.5c0-.365-.117-.664-.352-.898-.234-.235-.533-.352-.898-.352Zm0 6.875c-.026.39-.234.599-.625.625h-6.25c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625h6.25c.39.026.599.234.625.625Zm-5.625 5.625h-6.25c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625h6.25c.39.026.599.234.625.625-.026.39-.234.599-.625.625ZM11 17.125c.026.39.234.599.625.625.39-.026.599-.234.625-.625-.026-.39-.234-.599-.625-.625-.39.026-.599.234-.625.625ZM11.625 19c-.703-.026-1.25-.338-1.64-.938-.313-.625-.313-1.25 0-1.875.39-.599.937-.911 1.64-.937.703.026 1.25.338 1.64.938.313.625.313 1.25 0 1.875-.39.599-.937.911-1.64.937Zm8.75 3.75c.39-.026.599-.234.625-.625-.026-.39-.234-.599-.625-.625-.39.026-.599.234-.625.625.026.39.234.599.625.625Zm1.875-.625c-.026.703-.338 1.25-.938 1.64-.625.313-1.25.313-1.875 0-.599-.39-.911-.937-.937-1.64.026-.703.338-1.25.938-1.64.625-.313 1.25-.313 1.875 0 .599.39.911.937.937 1.64Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCalendarRangeRegularIcon);
export default ForwardRef;
