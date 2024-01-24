import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneSixBoldIcon = (
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
    <path d='M20.375 19q-.039-1.875-1.29-3.086-1.21-1.25-3.085-1.289-1.953.04-3.203 1.406l-.195.235q-.978 1.21-.977 2.734.039 1.875 1.29 3.086 1.21 1.25 3.085 1.289 1.875-.039 3.086-1.29 1.25-1.21 1.289-3.085m-4.922-6.21q.273-.04.547-.04 2.656.078 4.414 1.836T22.25 19q-.078 2.656-1.836 4.414T16 25.25q-2.655-.078-4.414-1.836T9.75 19q.04-2.5 1.64-4.219l5.43-6.68q.626-.624 1.328-.156.626.626.157 1.328z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneSixBoldIcon);
export default ForwardRef;
