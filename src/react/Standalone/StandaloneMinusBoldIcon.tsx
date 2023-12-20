import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneMinusBoldIcon = (
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
      d='M24.125 16.5c-.052.573-.365.885-.937.938H8.813c-.573-.053-.886-.365-.938-.938.052-.573.365-.885.938-.937h14.375c.572.052.885.364.937.937'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneMinusBoldIcon);
export default ForwardRef;
