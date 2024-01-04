import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneOneBoldIcon = (
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
      d='M16.938 8.688v14.687h3.125c.572.052.885.365.937.938-.052.572-.365.885-.938.937h-8.125c-.572-.052-.885-.365-.937-.938.052-.572.365-.885.938-.937h3.124V10.367l-2.656 1.602c-.495.26-.924.169-1.289-.274-.234-.52-.13-.95.313-1.289l4.062-2.5c.313-.182.638-.195.977-.039a.89.89 0 0 1 .468.82Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneOneBoldIcon);
export default ForwardRef;
