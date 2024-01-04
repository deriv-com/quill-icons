import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneMobileNotchBoldIcon = (
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
      d='M18.5 8.375V9c-.026.39-.234.599-.625.625h-3.75c-.39-.026-.599-.234-.625-.625v-.625h-1.25c-.365 0-.664.117-.898.352-.235.234-.352.533-.352.898v13.75c0 .365.117.664.352.898.234.235.533.352.898.352h7.5c.365 0 .664-.117.898-.352.235-.234.352-.533.352-.898V9.625c0-.365-.117-.664-.352-.898-.234-.235-.533-.352-.898-.352H18.5Zm-9.375 1.25c.026-.885.326-1.628.898-2.227.6-.572 1.342-.872 2.227-.898h7.5c.885.026 1.628.326 2.227.898.572.6.872 1.342.898 2.227v13.75c-.026.885-.326 1.628-.898 2.227-.6.572-1.342.872-2.227.898h-7.5c-.885-.026-1.628-.326-2.227-.898-.572-.6-.872-1.342-.898-2.227V9.625Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneMobileNotchBoldIcon);
export default ForwardRef;
