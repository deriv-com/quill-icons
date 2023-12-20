import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneFileCircleCheckRegularIcon = (
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
      d='M21 25.25c.365 0 .664-.117.898-.352.235-.234.352-.533.352-.898V14h-4.375a2.038 2.038 0 0 1-1.328-.547A2.038 2.038 0 0 1 16 12.125V7.75h-5c-.365 0-.664.117-.898.352-.235.234-.352.533-.352.898v15c0 .365.117.664.352.898.234.235.533.352.898.352zm-3.125-12.5h4.375a1.042 1.042 0 0 0-.195-.273l-4.532-4.532a.58.58 0 0 0-.273-.156v4.336c.026.39.234.599.625.625M11 6.5h6.094c.52 0 .963.182 1.328.547l4.531 4.531c.365.365.547.807.547 1.328V24c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742H11c-.703-.026-1.29-.273-1.758-.742-.469-.469-.716-1.055-.742-1.758V9c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742m8.555 11.484-4.14 4.18c-.313.234-.613.234-.9 0l-2.07-2.11c-.26-.286-.26-.572 0-.859.287-.234.573-.234.86 0l1.64 1.64 3.75-3.75c.287-.233.573-.233.86 0 .26.313.26.613 0 .9'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneFileCircleCheckRegularIcon);
export default ForwardRef;
