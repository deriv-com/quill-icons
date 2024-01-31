import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneFileExcelBoldIcon = (
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
    <path d='M10.875 24q.039.585.625.625h10q.585-.039.625-.625V12.75H19q-.547 0-.898-.352-.352-.35-.352-.898V8.375H11.5q-.585.039-.625.625zM11.5 6.5h6.484q1.015 0 1.758.742l3.516 3.516Q24 11.5 24 12.555V24q-.039 1.055-.742 1.758-.704.703-1.758.742h-10q-1.055-.039-1.758-.742Q9.04 25.054 9 24V9q.039-1.055.742-1.758T11.5 6.5m3.555 9.102 1.445 1.875 1.445-1.875q.586-.626 1.328-.157.626.586.157 1.328L17.672 19l1.758 2.227q.468.741-.157 1.328-.741.468-1.328-.157L16.5 20.523l-1.445 1.875q-.586.626-1.328.157-.626-.586-.157-1.328L15.328 19l-1.758-2.227q-.468-.741.157-1.328.741-.468 1.328.157' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneFileExcelBoldIcon);
export default ForwardRef;
