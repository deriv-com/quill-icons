import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneCopyRegularIcon = (
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
      d='M22.25 20.25c.365 0 .664-.117.898-.352.235-.234.352-.533.352-.898v-7.969a.52.52 0 0 0-.195-.43l-2.657-2.656a.52.52 0 0 0-.43-.195H16c-.365 0-.664.117-.898.352-.235.234-.352.533-.352.898v10c0 .365.117.664.352.898.234.235.533.352.898.352h6.25Zm1.953-10.547c.365.365.547.807.547 1.328V19c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742H16c-.703-.026-1.29-.273-1.758-.742-.469-.469-.716-1.055-.742-1.758V9c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742h4.219c.52 0 .963.182 1.328.547l2.656 2.656ZM9.75 11.5h2.5v1.25h-2.5c-.365 0-.664.117-.898.352-.235.234-.352.533-.352.898v10c0 .365.117.664.352.898.234.235.533.352.898.352H16c.365 0 .664-.117.898-.352.235-.234.352-.533.352-.898v-1.25h1.25V24c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742H9.75c-.703-.026-1.29-.273-1.758-.742-.469-.469-.716-1.055-.742-1.758V14c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCopyRegularIcon);
export default ForwardRef;