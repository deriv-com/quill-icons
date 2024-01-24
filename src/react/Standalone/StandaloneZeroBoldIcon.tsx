import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneZeroBoldIcon = (
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
    <path d='M9.75 14q.078-2.655 1.836-4.414T16 7.75q2.656.078 4.414 1.836T22.25 14v5q-.078 2.656-1.836 4.414T16 25.25q-2.655-.078-4.414-1.836T9.75 19zM16 9.625q-1.875.039-3.086 1.29-1.25 1.21-1.289 3.085v5q.039 1.875 1.29 3.086 1.21 1.25 3.085 1.289 1.875-.039 3.086-1.29 1.25-1.21 1.289-3.085v-5q-.039-1.875-1.29-3.086-1.21-1.25-3.085-1.289' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneZeroBoldIcon);
export default ForwardRef;
