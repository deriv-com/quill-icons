import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
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
    <path d='M24.125 16.5q-.039 1.055-.937 1.64-.937.47-1.875 0-.9-.585-.938-1.64.039-1.055.938-1.64.938-.47 1.875 0 .898.585.937 1.64m-6.25 0q-.039 1.055-.937 1.64-.937.47-1.875 0-.9-.585-.938-1.64.038-1.055.938-1.64.937-.47 1.874 0 .9.585.938 1.64M9.75 18.375q-1.055-.039-1.64-.937-.47-.937 0-1.875.585-.9 1.64-.938 1.055.038 1.64.938.47.937 0 1.874-.585.9-1.64.938' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneEllipsisBoldIcon);
export default ForwardRef;
