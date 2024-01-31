import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneBriefcaseBoldIcon = (
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
    <path d='M12.875 8.688v1.562h6.25V8.688q-.039-.274-.312-.313h-5.625q-.274.039-.313.313M11 10.25V8.688q.039-.938.625-1.563.625-.585 1.563-.625h5.624q.938.039 1.563.625.585.625.625 1.563v1.562h2.5q1.055.039 1.758.742T26 12.75v10q-.039 1.055-.742 1.758-.704.703-1.758.742h-15q-1.055-.039-1.758-.742Q6.04 23.804 6 22.75v-10q.039-1.055.742-1.758T8.5 10.25zm-3.125 8.125v4.375q.039.585.625.625h15q.585-.039.625-.625v-4.375H18.5V19q0 .547-.352.898-.35.352-.898.352h-2.5q-.547 0-.898-.352-.352-.35-.352-.898v-.625zM13.5 16.5h10.625v-3.75q-.039-.585-.625-.625h-15q-.586.039-.625.625v3.75z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneBriefcaseBoldIcon);
export default ForwardRef;
