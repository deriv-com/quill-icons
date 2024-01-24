import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
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
    <path d='M16 20.875q1.055.039 1.64.938.47.938 0 1.875-.585.898-1.64.937-1.055-.039-1.64-.937-.47-.937 0-1.875.585-.9 1.64-.938m0-6.25q1.055.038 1.64.938.47.937 0 1.874-.585.9-1.64.938-1.055-.039-1.64-.937-.47-.937 0-1.875.585-.9 1.64-.938m1.875-4.375q-.039 1.055-.937 1.64-.937.47-1.875 0-.9-.585-.938-1.64.038-1.055.938-1.64.937-.47 1.874 0 .9.585.938 1.64' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneEllipsisVerticalBoldIcon);
export default ForwardRef;
