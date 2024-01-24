import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandalonePlayBoldIcon = (
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
    <path d='m10.375 23.375 11.25-6.875-11.25-6.875zm-.898-15.39q.938-.509 1.875.038l11.25 6.875q.858.547.898 1.602-.04 1.055-.898 1.602l-11.25 6.875q-.937.546-1.875.039-.938-.547-.977-1.641V9.625q.04-1.094.977-1.64' />
  </svg>
);
const ForwardRef = forwardRef(StandalonePlayBoldIcon);
export default ForwardRef;
