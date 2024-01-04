import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneWindowMaximizeRegularIcon = (
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
      d='M8.5 9c-.365 0-.664.117-.898.352-.235.234-.352.533-.352.898V14h17.5v-3.75c0-.365-.117-.664-.352-.898C24.164 9.117 23.865 9 23.5 9h-15Zm-1.25 6.25v7.5c0 .365.117.664.352.898.234.235.533.352.898.352h15c.365 0 .664-.117.898-.352.235-.234.352-.533.352-.898v-7.5H7.25Zm-1.25-5c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742h15c.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758v12.5c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742h-15c-.703-.026-1.29-.273-1.758-.742-.469-.469-.716-1.055-.742-1.758v-12.5Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneWindowMaximizeRegularIcon);
export default ForwardRef;
