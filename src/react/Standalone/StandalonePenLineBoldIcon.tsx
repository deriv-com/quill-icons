import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandalonePenLineBoldIcon = (
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
    <path d='m5.258 23.648.898-3.046a3.3 3.3 0 0 1 .899-1.446L18.93 7.242a2.47 2.47 0 0 1 1.758-.703q.975 0 1.757.703l1.563 1.563q.156.156.312.39a2.5 2.5 0 0 1 .39 1.602 2.5 2.5 0 0 1-.702 1.523L12.133 24.195l-.156.157q-.586.507-1.329.742l-3.046.898-1.641.469q-.547.156-.938-.234-.351-.39-.234-.938zm2.46-1.601-.663 2.148 2.148-.625.938-.273q.35-.118.664-.39l8.906-8.946-2.422-2.422-8.906 8.906-.078.078a2 2 0 0 0-.352.586zm6.72 2.578h11.875q.858.078.937.938-.079.858-.937.937H14.438q-.86-.079-.938-.937.078-.86.938-.938' />
  </svg>
);
const ForwardRef = forwardRef(StandalonePenLineBoldIcon);
export default ForwardRef;
