import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneLaptopBoldIcon = (
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
      d='M23.5 9.625h-15c-.39.026-.599.234-.625.625V19H6v-8.75c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742h15c.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758V19h-1.875v-8.75c-.026-.39-.234-.599-.625-.625M7.25 23.375h17.5c.86-.052 1.445-.469 1.758-1.25H5.492c.313.781.899 1.198 1.758 1.25M3.5 21.5c0-.365.117-.664.352-.898.234-.235.533-.352.898-.352h22.5c.365 0 .664.117.898.352.235.234.352.533.352.898-.026 1.068-.39 1.953-1.094 2.656-.703.703-1.588 1.068-2.656 1.094H7.25c-1.068-.026-1.953-.39-2.656-1.094-.703-.703-1.068-1.588-1.094-2.656'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneLaptopBoldIcon);
export default ForwardRef;
