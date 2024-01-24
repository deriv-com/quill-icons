import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandalonePlayRegularIcon = (
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
    <path d='M10.688 9.078a.66.66 0 0 0-.626 0 .61.61 0 0 0-.312.547v13.75q0 .352.313.547a.66.66 0 0 0 .624 0l11.25-6.875a.61.61 0 0 0 .313-.547.61.61 0 0 0-.312-.547zM9.477 7.984q.938-.507 1.875.04l11.25 6.874q.858.547.898 1.602-.04 1.055-.898 1.602l-11.25 6.875q-.937.546-1.875.039-.938-.547-.977-1.641V9.625q.04-1.094.977-1.64' />
  </svg>
);
const ForwardRef = forwardRef(StandalonePlayRegularIcon);
export default ForwardRef;
