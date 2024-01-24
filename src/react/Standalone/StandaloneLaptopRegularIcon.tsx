import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneLaptopRegularIcon = (
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
    <path d='M23.5 9h-15q-.547 0-.898.352-.352.35-.352.898v10H6v-10q.039-1.055.742-1.758T8.5 7.75h15q1.055.039 1.758.742T26 10.25v10h-1.25v-10q0-.547-.352-.898Q24.048 9 23.5 9M6.508 24h18.984q1.29-.078 1.68-1.25H4.828q.39 1.172 1.68 1.25M3.5 22.242q.079-.664.742-.742h23.516q.664.079.742.742-.039 1.29-.86 2.149-.858.82-2.148.859H6.508q-1.29-.039-2.11-.86-.859-.858-.898-2.148' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneLaptopRegularIcon);
export default ForwardRef;
