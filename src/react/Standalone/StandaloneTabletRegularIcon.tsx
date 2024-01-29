import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneTabletRegularIcon = (
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
    <path d='M9.75 7.75q-.547 0-.898.352Q8.5 8.452 8.5 9v15q0 .547.352.898.35.352.898.352h12.5q.547 0 .898-.352.352-.35.352-.898V9q0-.547-.352-.898-.35-.352-.898-.352zM7.25 9q.039-1.055.742-1.758T9.75 6.5h12.5q1.055.039 1.758.742.703.704.742 1.758v15q-.039 1.055-.742 1.758-.704.703-1.758.742H9.75q-1.055-.039-1.758-.742Q7.29 25.054 7.25 24zm7.5 13.125h2.5q.585.039.625.625-.039.585-.625.625h-2.5q-.585-.039-.625-.625.039-.585.625-.625' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneTabletRegularIcon);
export default ForwardRef;
