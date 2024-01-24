import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandalonePenLineRegularIcon = (
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
    <path d='M21.547 8.063q-.665-.547-1.328 0l-2.149 2.109 3.008 3.008 2.11-2.149q.546-.664 0-1.328zM7.992 20.25a2.86 2.86 0 0 0-.625 1.094l-1.054 3.593 3.593-1.054q.625-.196 1.094-.625l9.18-9.18-3.008-3.008zM19.32 7.164a2.2 2.2 0 0 1 1.563-.625q.859 0 1.523.625l1.68 1.68q.625.663.625 1.523 0 .9-.625 1.563L11.859 24.156a3.7 3.7 0 0 1-1.562.938L5.57 26.46q-.39.117-.625-.156-.273-.235-.156-.586l1.367-4.727a3.5 3.5 0 0 1 .977-1.601zM14.125 25.25h12.5q.585.039.625.625-.039.585-.625.625h-12.5q-.585-.039-.625-.625.039-.585.625-.625' />
  </svg>
);
const ForwardRef = forwardRef(StandalonePenLineRegularIcon);
export default ForwardRef;
