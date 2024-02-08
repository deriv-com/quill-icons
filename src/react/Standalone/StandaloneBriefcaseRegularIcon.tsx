import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneBriefcaseRegularIcon = (
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
    <path d='M12.25 8.375v1.875h7.5V8.375q-.039-.585-.625-.625h-6.25q-.585.039-.625.625M11 10.25V8.375q.039-.781.547-1.328.546-.508 1.328-.547h6.25q.78.039 1.328.547.508.546.547 1.328v1.875h2.5q1.055.039 1.758.742T26 12.75v10q-.039 1.055-.742 1.758-.704.703-1.758.742h-15q-1.055-.039-1.758-.742Q6.04 23.804 6 22.75v-10q.039-1.055.742-1.758T8.5 10.25zm9.375 1.25H8.5q-.547 0-.898.352-.352.35-.352.898v3.75h17.5v-3.75q0-.547-.352-.898-.35-.352-.898-.352zm4.375 6.25h-5.625v1.875q0 .547-.352.898-.35.352-.898.352h-3.75q-.547 0-.898-.352-.352-.35-.352-.898V17.75H7.25v5q0 .547.352.898.35.352.898.352h15q.547 0 .898-.352.352-.35.352-.898zm-10.625 0v1.875h3.75V17.75z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneBriefcaseRegularIcon);
export default ForwardRef;