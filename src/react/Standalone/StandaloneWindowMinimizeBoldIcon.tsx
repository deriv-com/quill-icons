import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneWindowMinimizeBoldIcon = (
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
      d='M6.938 23.375h18.125c.572.052.885.365.937.938-.052.572-.365.885-.937.937H6.938c-.573-.052-.886-.365-.938-.937.052-.573.365-.886.938-.938'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneWindowMinimizeBoldIcon);
export default ForwardRef;
