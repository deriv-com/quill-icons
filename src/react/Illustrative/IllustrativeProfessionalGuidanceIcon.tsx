import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const IllustrativeProfessionalGuidanceIcon = (
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
      <path d='M26.667 14H26v-.667c0-1.1-.9-2-2-2h-6a3.33 3.33 0 0 0-2.667 1.354 3.31 3.31 0 0 0-2.666-1.354h-6c-1.1 0-2 .9-2 2V14H4c-1.1 0-2 .9-2 2v11.333c0 1.1.9 2 2 2h9.453a1.994 1.994 0 0 0 1.88 1.334 2 2 0 0 0 1.88-1.334h9.454c1.1 0 2-.9 2-2V16c0-1.1-.9-2-2-2ZM18 12.667h6c.367 0 .667.3.667.666v8.12a2.004 2.004 0 0 0-.667-.12h-6c-.753 0-1.44.26-2 .687v-7.353c0-1.1.9-2 2-2ZM6 23.333c0-.366.3-.666.667-.666h6c1.1 0 2 .9 2 2 0 .366-.3.666-.667.666H6.667A.669.669 0 0 1 6 24.667v-1.334Zm18.667 0v1.334c0 .366-.3.666-.667.666h-7.333a.669.669 0 0 1-.667-.666c0-1.1.9-2 2-2h6c.367 0 .667.3.667.666ZM6 13.333c0-.366.3-.666.667-.666h6c1.1 0 2 .9 2 2v7.353a3.326 3.326 0 0 0-2-.687h-6c-.234 0-.46.047-.667.12v-8.12Zm21.333 14c0 .367-.3.667-.666.667h-10c-.367 0-.667.3-.667.667 0 .366-.3.666-.667.666a.669.669 0 0 1-.666-.666c0-.367-.3-.667-.667-.667H4a.669.669 0 0 1-.667-.667V16c0-.367.3-.667.667-.667h.667v9.334c0 1.1.9 2 2 2H14c.513 0 .98-.2 1.333-.52.354.32.82.52 1.334.52H24c1.1 0 2-.9 2-2v-9.334h.667c.366 0 .666.3.666.667v11.333Z' />
      <path d='M8 16.667h4c.367 0 .667-.3.667-.667 0-.367-.3-.667-.667-.667H8c-.367 0-.667.3-.667.667 0 .367.3.667.667.667ZM8 19.333h2.667c.366 0 .666-.3.666-.666 0-.367-.3-.667-.666-.667H8c-.367 0-.667.3-.667.667 0 .366.3.666.667.666ZM19.333 16.667h3.334c.366 0 .666-.3.666-.667 0-.367-.3-.667-.666-.667h-3.334c-.366 0-.666.3-.666.667 0 .367.3.667.666.667ZM18.667 19.333h4c.366 0 .666-.3.666-.666 0-.367-.3-.667-.666-.667h-4c-.367 0-.667.3-.667.667 0 .366.3.666.667.666ZM25.667 1.333a4.333 4.333 0 1 0 0 8.667 4.333 4.333 0 0 0 0-8.667Zm0 7.334c-1.654 0-3-1.347-3-3 0-1.654 1.346-3 3-3 1.653 0 3 1.346 3 3 0 1.653-1.347 3-3 3Z' />
      <path d='M25 6.167v.666c0 .367.3.667.667.667.366 0 .666-.3.666-.667v-.666c0-.367-.3-.667-.666-.667-.367 0-.667.3-.667.667Z' />
      <path d='M25.667 5.5a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IllustrativeProfessionalGuidanceIcon);
export default ForwardRef;