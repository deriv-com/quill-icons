import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneCircleSterlingBoldIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='M24.125 16.5q0-2.226-1.094-4.062-1.054-1.837-2.968-2.97A8.06 8.06 0 0 0 16 8.376a8.06 8.06 0 0 0-4.062 1.094q-1.915 1.133-2.97 2.969-1.092 1.835-1.093 4.062t1.094 4.063q1.055 1.836 2.969 2.968A8.06 8.06 0 0 0 16 24.625a8.06 8.06 0 0 0 4.063-1.094q1.914-1.132 2.968-2.968 1.094-1.837 1.094-4.063M6 16.5q.04-2.735 1.328-5Q8.657 9.235 11 7.828 13.382 6.5 16 6.5t5 1.328q2.344 1.407 3.672 3.672 1.29 2.265 1.328 5-.04 2.735-1.328 5-1.329 2.265-3.672 3.672-2.382 1.328-5 1.328t-5-1.328Q8.657 23.765 7.328 21.5q-1.29-2.265-1.328-5m10.234-3.75q-.507 0-.859.352-.351.35-.352.859v1.289h1.602q.585.039.625.625-.039.585-.625.625h-1.562v.39q0 1.095-.391 2.11h4.14q.86.078.938.938-.078.858-.937.937h-5.625a.87.87 0 0 1-.782-.43q-.273-.469-.039-.937l.352-.742a3.85 3.85 0 0 0 .469-1.875V16.5h-.313q-.585-.039-.625-.625.039-.585.625-.625h.313l-.04-1.29q.04-1.328.899-2.187.86-.858 2.187-.898.587 0 1.133.234l1.172.47q.78.39.508 1.21-.39.742-1.211.508l-1.172-.469a1.4 1.4 0 0 0-.43-.078' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCircleSterlingBoldIcon);
export default ForwardRef;
