import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneCaretUpRegularIcon = (
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
    <path d='m15.766 12.828-4.688 4.453a.27.27 0 0 0-.078.196.305.305 0 0 0 .273.273h9.454a.305.305 0 0 0 .273-.273.27.27 0 0 0-.078-.196l-4.688-4.453A.4.4 0 0 0 16 12.75a.4.4 0 0 0-.234.078m-.86-.898q.469-.43 1.094-.43t1.094.43l4.687 4.453q.47.428.469 1.094 0 .663-.43 1.093-.429.43-1.093.43h-9.454q-.664 0-1.093-.43-.43-.429-.43-1.093t.469-1.133z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCaretUpRegularIcon);
export default ForwardRef;
