import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneArrowUpLeftBoldIcon = (
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
      d='M10.688 10.25h9.375c.572.052.885.365.937.938-.052.572-.365.885-.937.937h-7.11l9.024 9.023c.364.443.364.886 0 1.329-.443.364-.886.364-1.329 0l-9.023-9.024v7.11c-.052.572-.365.885-.937.937-.573-.052-.886-.365-.938-.937v-9.375c.052-.573.365-.886.938-.938'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowUpLeftBoldIcon);
export default ForwardRef;
