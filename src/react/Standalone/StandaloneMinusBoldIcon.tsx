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
      d='M24.125 16.5c-.052.573-.365.885-.938.938H8.813c-.572-.053-.885-.365-.937-.938.052-.573.365-.885.938-.938h14.374c.573.053.886.365.938.938Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneMinusBoldIcon);
export default ForwardRef;
