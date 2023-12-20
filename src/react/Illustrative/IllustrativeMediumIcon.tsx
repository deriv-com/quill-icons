import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const IllustrativeMediumIcon = (
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
    <g fillOpacity={0.72}>
      <path d='M24 4.667H8A3.335 3.335 0 0 0 4.667 8v16A3.335 3.335 0 0 0 8 27.333h16A3.335 3.335 0 0 0 27.333 24V8A3.335 3.335 0 0 0 24 4.667M26 24c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2z' />
      <path d='M19.807 13.427h-7.62c-.367 0-.667.3-.667.666 0 .367.3.667.667.667h7.62c.366 0 .666-.3.666-.667 0-.366-.3-.666-.666-.666M19.807 17.24h-7.62c-.367 0-.667.3-.667.667 0 .366.3.666.667.666h7.62c.366 0 .666-.3.666-.666 0-.367-.3-.667-.666-.667' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IllustrativeMediumIcon);
export default ForwardRef;
