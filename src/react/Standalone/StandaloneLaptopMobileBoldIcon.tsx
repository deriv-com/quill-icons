import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneLaptopMobileBoldIcon = (
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
      d='M8.5 8.375c-.39.026-.599.234-.625.625v10h9.375v2.5H5.375a2.038 2.038 0 0 1-1.328-.547 2.038 2.038 0 0 1-.547-1.328c.026-.39.234-.599.625-.625H6V9c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742H21c.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758v1.25h-1.875V9c-.026-.39-.234-.599-.625-.625H8.5Zm10 5c.026-.52.208-.963.547-1.328.364-.339.807-.521 1.328-.547h6.25c.52.026.963.208 1.328.547.339.364.521.807.547 1.328v11.25c-.026.52-.208.963-.547 1.328-.364.339-.807.521-1.328.547h-6.25a2.038 2.038 0 0 1-1.328-.547 2.038 2.038 0 0 1-.547-1.328v-11.25Zm1.875 0v11.25h6.25v-11.25h-6.25Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneLaptopMobileBoldIcon);
export default ForwardRef;
