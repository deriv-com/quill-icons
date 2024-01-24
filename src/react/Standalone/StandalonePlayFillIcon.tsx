import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandalonePlayFillIcon = (
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
    <path d='m11.352 8.023 11.25 6.875q.858.587.898 1.602-.04 1.055-.898 1.602l-11.25 6.875q-.937.546-1.875.039-.938-.547-.977-1.641V9.625q.04-1.094.977-1.64.938-.509 1.875.038' />
  </svg>
);
const ForwardRef = forwardRef(StandalonePlayFillIcon);
export default ForwardRef;
