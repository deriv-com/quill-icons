import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneArrowLeftToLineBoldIcon = (
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
      d='M7.25 23.063V9.938c.052-.573.365-.886.938-.938.572.052.885.365.937.938v13.124c-.052.573-.365.886-.938.938-.572-.052-.885-.365-.937-.938Zm5.313-7.227 5.312-5c.443-.365.872-.352 1.29.039.364.443.35.885-.04 1.328l-3.555 3.36h8.242c.573.052.886.364.938.937-.052.573-.365.885-.938.938H15.57l3.594 3.398c.365.417.378.86.04 1.328-.444.365-.886.378-1.329.04l-5.313-5c-.208-.21-.312-.444-.312-.704 0-.26.104-.482.313-.664Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowLeftToLineBoldIcon);
export default ForwardRef;
