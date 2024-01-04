import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneEllipsisVerticalBoldIcon = (
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
      d='M16 20.875c.703.026 1.25.338 1.64.938.313.625.313 1.25 0 1.875-.39.599-.937.911-1.64.937-.703-.026-1.25-.338-1.64-.938-.313-.625-.313-1.25 0-1.875.39-.599.937-.911 1.64-.937Zm0-6.25c.703.026 1.25.338 1.64.938.313.624.313 1.25 0 1.874-.39.6-.937.912-1.64.938-.703-.026-1.25-.338-1.64-.938-.313-.625-.313-1.25 0-1.875.39-.598.937-.911 1.64-.937Zm1.875-4.375c-.026.703-.338 1.25-.938 1.64-.625.313-1.25.313-1.875 0-.598-.39-.911-.937-.937-1.64.026-.703.338-1.25.938-1.64.624-.313 1.25-.313 1.874 0 .6.39.912.937.938 1.64Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneEllipsisVerticalBoldIcon);
export default ForwardRef;
