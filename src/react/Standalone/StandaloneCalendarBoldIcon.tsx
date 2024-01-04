import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneCalendarBoldIcon = (
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
      d='M13.188 7.438V9h5.624V7.437c.053-.572.365-.885.938-.937.573.052.885.365.938.938V9h1.562c.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758V24c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742H9.75c-.703-.026-1.29-.273-1.758-.742-.469-.469-.716-1.055-.742-1.758V11.5c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742h1.563V7.437c.052-.572.364-.885.937-.937.573.052.885.365.938.938ZM9.125 14v10c.026.39.234.599.625.625h12.5c.39-.026.599-.234.625-.625V14H9.125Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCalendarBoldIcon);
export default ForwardRef;
