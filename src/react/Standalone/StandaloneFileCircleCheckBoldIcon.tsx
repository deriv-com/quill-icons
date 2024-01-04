import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneFileCircleCheckBoldIcon = (
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
      d='M11 24.625h10c.39-.026.599-.234.625-.625V12.75H18.5c-.365 0-.664-.117-.898-.352-.235-.234-.352-.533-.352-.898V8.375H11c-.39.026-.599.234-.625.625v15c.026.39.234.599.625.625ZM11 6.5h6.484c.677 0 1.263.247 1.758.742l3.516 3.516c.495.495.742 1.094.742 1.797V24c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742H11c-.703-.026-1.29-.273-1.758-.742-.469-.469-.716-1.055-.742-1.758V9c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742Zm8.79 10.469-4.18 4.14a.904.904 0 0 1-.665.274.904.904 0 0 1-.664-.274l-2.07-2.07c-.365-.443-.365-.885 0-1.328.443-.365.885-.365 1.328 0l1.406 1.406 3.516-3.476c.443-.365.885-.365 1.328 0 .365.442.365.885 0 1.328Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneFileCircleCheckBoldIcon);
export default ForwardRef;
