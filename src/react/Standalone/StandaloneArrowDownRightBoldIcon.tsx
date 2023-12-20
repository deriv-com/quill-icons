import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneArrowDownRightBoldIcon = (
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
      d='M21.313 22.75h-9.375c-.573-.052-.886-.365-.938-.937.052-.573.365-.886.938-.938h7.109l-9.024-9.023c-.364-.443-.364-.886 0-1.329.443-.364.886-.364 1.329 0l9.023 9.024v-7.11c.052-.572.365-.885.938-.937.572.052.885.365.937.938v9.375c-.052.572-.365.885-.937.937'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowDownRightBoldIcon);
export default ForwardRef;
