import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneCircleDotFillIcon = (
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
      d='M16 26.5c-1.823-.026-3.49-.469-5-1.328-1.51-.886-2.734-2.11-3.672-3.672C6.443 19.912 6 18.245 6 16.5s.443-3.412 1.328-5C8.266 9.937 9.49 8.714 11 7.828c1.51-.86 3.177-1.302 5-1.328 1.823.026 3.49.469 5 1.328 1.51.886 2.734 2.11 3.672 3.672.885 1.588 1.328 3.255 1.328 5s-.443 3.412-1.328 5c-.938 1.563-2.162 2.787-3.672 3.672-1.51.86-3.177 1.302-5 1.328Zm0-13.75a3.62 3.62 0 0 0-1.875.508A3.759 3.759 0 0 0 12.25 16.5a3.759 3.759 0 0 0 1.875 3.242A3.62 3.62 0 0 0 16 20.25a3.62 3.62 0 0 0 1.875-.508A3.759 3.759 0 0 0 19.75 16.5a3.759 3.759 0 0 0-1.875-3.242A3.62 3.62 0 0 0 16 12.75Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCircleDotFillIcon);
export default ForwardRef;
