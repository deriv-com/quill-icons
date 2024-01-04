import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneSevenBoldIcon = (
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
      d='M9.75 8.688c.052-.573.365-.886.938-.938h10.624a.89.89 0 0 1 .82.469.996.996 0 0 1 0 .937l-9.374 15.625c-.339.469-.768.586-1.29.352-.468-.339-.572-.768-.312-1.29l8.516-14.218h-8.985c-.572-.052-.885-.365-.937-.938Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneSevenBoldIcon);
export default ForwardRef;
