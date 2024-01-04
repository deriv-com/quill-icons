import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneEllipsisBoldIcon = (
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
      d='M24.125 16.5c-.026.703-.338 1.25-.938 1.64-.625.313-1.25.313-1.875 0-.599-.39-.911-.937-.937-1.64.026-.703.338-1.25.938-1.64.625-.313 1.25-.313 1.875 0 .599.39.911.937.937 1.64Zm-6.25 0c-.026.703-.338 1.25-.938 1.64-.625.313-1.25.313-1.875 0-.598-.39-.911-.937-.937-1.64.026-.703.338-1.25.938-1.64.624-.313 1.25-.313 1.874 0 .6.39.912.937.938 1.64ZM9.75 18.375c-.703-.026-1.25-.338-1.64-.938-.313-.625-.313-1.25 0-1.875.39-.598.937-.911 1.64-.937.703.026 1.25.338 1.64.938.313.624.313 1.25 0 1.874-.39.6-.937.912-1.64.938Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneEllipsisBoldIcon);
export default ForwardRef;
