import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneArrowUpRightFromSquareRegularIcon = (
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
    <path d='M19.125 6.5h6.25q.585.039.625.625v6.25q-.039.585-.625.625-.585-.039-.625-.625V8.648l-9.57 9.532q-.43.39-.86 0-.39-.43 0-.86l9.532-9.57h-4.727q-.585-.039-.625-.625.039-.585.625-.625M8.5 7.75h5.625q.585.039.625.625-.039.585-.625.625H8.5q-.547 0-.898.352-.352.35-.352.898V24q0 .547.352.898.35.352.898.352h13.75q.547 0 .898-.352.352-.35.352-.898v-5.625q.039-.585.625-.625.585.039.625.625V24q-.039 1.055-.742 1.758-.704.703-1.758.742H8.5q-1.055-.039-1.758-.742Q6.04 25.054 6 24V10.25q.039-1.055.742-1.758T8.5 7.75' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowUpRightFromSquareRegularIcon);
export default ForwardRef;
