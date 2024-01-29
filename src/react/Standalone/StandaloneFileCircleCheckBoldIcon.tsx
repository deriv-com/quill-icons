import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneFileCircleCheckBoldIcon = (
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
    <path d='M11 24.625h10q.585-.039.625-.625V12.75H18.5q-.547 0-.898-.352-.352-.35-.352-.898V8.375H11q-.585.039-.625.625v15q.039.585.625.625M11 6.5h6.484q1.015 0 1.758.742l3.516 3.516q.742.742.742 1.797V24q-.039 1.055-.742 1.758-.704.703-1.758.742H11q-1.055-.039-1.758-.742Q8.54 25.054 8.5 24V9q.039-1.055.742-1.758T11 6.5m8.79 10.469-4.18 4.14a.9.9 0 0 1-.665.274.9.9 0 0 1-.664-.274l-2.07-2.07q-.548-.664 0-1.328.664-.547 1.328 0l1.406 1.406 3.516-3.476q.664-.547 1.328 0 .547.663 0 1.328' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneFileCircleCheckBoldIcon);
export default ForwardRef;
