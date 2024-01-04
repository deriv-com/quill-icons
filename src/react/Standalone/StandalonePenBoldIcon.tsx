import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandalonePenBoldIcon = (
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
    <path
      fillOpacity={0.72}
      d='M7.406 20.602a3.324 3.324 0 0 1 .899-1.446L20.18 7.242c.52-.469 1.107-.703 1.758-.703a2.47 2.47 0 0 1 1.757.703l1.563 1.563.312.39a2.5 2.5 0 0 1 .39 1.602 2.505 2.505 0 0 1-.702 1.523L13.383 24.195l-.156.157c-.391.338-.834.585-1.329.742l-3.046.898-1.641.469c-.365.104-.677.026-.938-.234-.26-.26-.338-.573-.234-.938l.469-1.64.898-3.047Zm1.797.507-.234.938-.664 2.148 2.148-.625.938-.273c.234-.078.455-.209.664-.39l8.906-8.946-2.422-2.422-8.906 8.906a32.4 32.4 0 0 1-.04.04l-.038.038a1.95 1.95 0 0 0-.352.586Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandalonePenBoldIcon);
export default ForwardRef;
