import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneSquareCheckFillIcon = (
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
      d='M9.75 7.75h12.5c.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758v12.5c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742H9.75c-.703-.026-1.29-.273-1.758-.742-.469-.469-.716-1.055-.742-1.758v-12.5c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742m10.664 6.914c.365-.443.365-.885 0-1.328-.443-.365-.885-.365-1.328 0l-4.336 4.336-1.836-1.836c-.443-.365-.885-.365-1.328 0-.365.443-.365.885 0 1.328l2.5 2.5c.443.365.885.365 1.328 0z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneSquareCheckFillIcon);
export default ForwardRef;
