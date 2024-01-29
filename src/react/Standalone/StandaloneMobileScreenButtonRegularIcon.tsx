import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneMobileScreenButtonRegularIcon = (
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
    <path d='M19.75 7.75h-7.5q-.547 0-.898.352Q11 8.452 11 9v10h10V9q0-.547-.352-.898-.35-.352-.898-.352M21 20.25H11V24q0 .547.352.898.35.352.898.352h7.5q.547 0 .898-.352Q21 24.548 21 24zM12.25 6.5h7.5q1.055.039 1.758.742.703.704.742 1.758v15q-.039 1.055-.742 1.758-.704.703-1.758.742h-7.5q-1.055-.039-1.758-.742Q9.79 25.054 9.75 24V9q.039-1.055.742-1.758T12.25 6.5m1.875 16.25q.039-.585.625-.625h2.5q.585.039.625.625-.039.585-.625.625h-2.5q-.585-.039-.625-.625' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneMobileScreenButtonRegularIcon);
export default ForwardRef;
