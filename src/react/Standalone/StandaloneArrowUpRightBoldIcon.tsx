import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneArrowUpRightBoldIcon = (
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
      d='M21.313 10.25c.572.052.885.365.937.938v9.374c-.052.573-.365.886-.938.938-.572-.052-.885-.365-.937-.938v-7.109l-9.023 9.024c-.443.364-.886.364-1.329 0-.364-.443-.364-.886 0-1.329l9.024-9.023h-7.11c-.572-.052-.885-.365-.937-.938.052-.572.365-.885.938-.937h9.374Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowUpRightBoldIcon);
export default ForwardRef;
