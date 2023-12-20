import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandalonePercentBoldIcon = (
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
      d='m22.914 10.914-12.5 12.5c-.443.365-.885.365-1.328 0-.365-.443-.365-.885 0-1.328l12.5-12.5c.443-.365.885-.365 1.328 0 .365.443.365.885 0 1.328m-10.039.586c-.026.703-.338 1.25-.937 1.64-.626.313-1.25.313-1.876 0-.598-.39-.911-.937-.937-1.64.026-.703.339-1.25.938-1.64.624-.313 1.25-.313 1.874 0 .6.39.912.937.938 1.64m10 10c-.026.703-.338 1.25-.937 1.64-.625.313-1.25.313-1.875 0-.6-.39-.912-.937-.938-1.64.026-.703.338-1.25.938-1.64.625-.313 1.25-.313 1.875 0 .599.39.911.937.937 1.64'
    />
  </svg>
);
const ForwardRef = forwardRef(StandalonePercentBoldIcon);
export default ForwardRef;
