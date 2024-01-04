import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandalonePlusBoldIcon = (
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
      d='M16.938 9.313v6.25h6.25c.572.052.885.364.937.937-.052.573-.365.885-.938.938h-6.25v6.25c-.052.572-.364.885-.937.937-.573-.052-.885-.365-.938-.938v-6.25h-6.25c-.572-.052-.885-.364-.937-.937.052-.573.365-.885.938-.938h6.25v-6.25c.052-.572.364-.885.937-.937.573.052.885.365.938.938Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandalonePlusBoldIcon);
export default ForwardRef;
