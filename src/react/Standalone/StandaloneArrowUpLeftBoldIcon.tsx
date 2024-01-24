import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneArrowUpLeftBoldIcon = (
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
    <path d='M10.688 10.25h9.375q.858.078.937.938-.078.858-.937.937h-7.11l9.024 9.023q.546.665 0 1.329-.665.546-1.329 0l-9.023-9.024v7.11q-.079.858-.937.937-.86-.079-.938-.937v-9.375q.078-.86.938-.938' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowUpLeftBoldIcon);
export default ForwardRef;
