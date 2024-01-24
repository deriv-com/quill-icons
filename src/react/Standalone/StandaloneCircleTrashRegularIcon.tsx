import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneCircleTrashRegularIcon = (
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
    <path d='M24.75 16.5q-.04-2.383-1.172-4.375a9 9 0 0 0-3.203-3.203Q18.305 7.75 16 7.75t-4.375 1.172a9 9 0 0 0-3.203 3.203Q7.289 14.117 7.25 16.5q.04 2.383 1.172 4.375a9 9 0 0 0 3.203 3.203Q13.695 25.25 16 25.25t4.375-1.172a9 9 0 0 0 3.203-3.203q1.133-1.992 1.172-4.375M6 16.5q.04-2.735 1.328-5Q8.657 9.235 11 7.828 13.382 6.5 16 6.5t5 1.328q2.344 1.407 3.672 3.672 1.29 2.265 1.328 5-.04 2.735-1.328 5-1.329 2.265-3.672 3.672-2.382 1.328-5 1.328t-5-1.328Q8.657 23.765 7.328 21.5q-1.29-2.265-1.328-5m6.25-4.375h1.602l.468-.43a.52.52 0 0 1 .43-.195h2.5a.52.52 0 0 1 .43.195l.468.43h1.602q.585.039.625.625-.039.585-.625.625h-.078l-.469 6.953a1.17 1.17 0 0 1-.39.82q-.352.352-.86.352h-3.906q-.508 0-.86-.352a1.17 1.17 0 0 1-.39-.82l-.469-6.953h-.078q-.585-.039-.625-.625.039-.585.625-.625m6.172 1.25h-4.844l.469 6.875h3.906z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCircleTrashRegularIcon);
export default ForwardRef;
