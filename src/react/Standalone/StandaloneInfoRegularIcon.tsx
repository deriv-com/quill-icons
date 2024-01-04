import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneInfoRegularIcon = (
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
      d='M14.75 9c0-.365.117-.664.352-.898.234-.235.533-.352.898-.352s.664.117.898.352c.235.234.352.533.352.898s-.117.664-.352.898c-.234.235-.533.352-.898.352s-.664-.117-.898-.352c-.235-.234-.352-.533-.352-.898Zm-1.875 4.375c.026-.39.234-.599.625-.625H16c.39.026.599.234.625.625V24h2.5c.39.026.599.234.625.625-.026.39-.234.599-.625.625h-6.25c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625h2.5V14H13.5c-.39-.026-.599-.234-.625-.625Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneInfoRegularIcon);
export default ForwardRef;
