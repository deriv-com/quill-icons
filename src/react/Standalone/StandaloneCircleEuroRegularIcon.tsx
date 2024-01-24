import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneCircleEuroRegularIcon = (
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
    <path d='M24.75 16.5q-.04-2.383-1.172-4.375a9 9 0 0 0-3.203-3.203Q18.305 7.75 16 7.75t-4.375 1.172a9 9 0 0 0-3.203 3.203Q7.289 14.117 7.25 16.5q.04 2.383 1.172 4.375a9 9 0 0 0 3.203 3.203Q13.695 25.25 16 25.25t4.375-1.172a9 9 0 0 0 3.203-3.203q1.133-1.992 1.172-4.375M6 16.5q.04-2.735 1.328-5Q8.657 9.235 11 7.828 13.382 6.5 16 6.5t5 1.328q2.344 1.407 3.672 3.672 1.29 2.265 1.328 5-.04 2.735-1.328 5-1.329 2.265-3.672 3.672-2.382 1.328-5 1.328t-5-1.328Q8.657 23.765 7.328 21.5q-1.29-2.265-1.328-5m5 .625h.938a5 5 0 0 1-.04-.586q0-.352.04-.664H11q-.585-.039-.625-.625.039-.585.625-.625h1.328a4.3 4.3 0 0 1 1.602-1.797q1.054-.703 2.383-.703h1.601q.585.039.625.625-.039.585-.625.625h-1.602q-1.6.04-2.5 1.25h3.438q.585.039.625.625-.039.585-.625.625h-4.023a2.7 2.7 0 0 0-.079.664q0 .312.079.586h4.023q.585.039.625.625-.039.585-.625.625h-3.516q.938 1.25 2.579 1.328h1.601q.585.04.625.625-.039.547-.625.625h-1.602q-1.366-.039-2.421-.742a4.27 4.27 0 0 1-1.563-1.836H11q-.585-.039-.625-.625.039-.585.625-.625' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCircleEuroRegularIcon);
export default ForwardRef;
