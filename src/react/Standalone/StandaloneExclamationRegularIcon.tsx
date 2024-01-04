import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneExclamationRegularIcon = (
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
      d='M16.625 8.375V20.25c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625V8.375c.026-.39.234-.599.625-.625.39.026.599.234.625.625ZM16 24.938c-.573-.053-.885-.365-.938-.938.053-.573.365-.885.938-.938.573.053.885.365.938.938-.053.573-.365.885-.938.938Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneExclamationRegularIcon);
export default ForwardRef;
