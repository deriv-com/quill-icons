import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneHorizontalRuleBoldIcon = (
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
      d='M3.5 16.5c.052-.573.365-.885.938-.938h23.125c.572.053.885.365.937.938-.052.573-.365.885-.938.938H4.438c-.572-.053-.885-.365-.937-.938Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneHorizontalRuleBoldIcon);
export default ForwardRef;
