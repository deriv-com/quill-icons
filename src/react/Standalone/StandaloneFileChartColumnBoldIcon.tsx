import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneFileChartColumnBoldIcon = (
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
    <path d='M10.375 24q.039.585.625.625h10q.585-.039.625-.625V12.75H18.5q-.547 0-.898-.352-.352-.35-.352-.898V8.375H11q-.585.039-.625.625zM11 6.5h6.484q1.015 0 1.758.742l3.516 3.516q.742.742.742 1.797V24q-.039 1.055-.742 1.758-.704.703-1.758.742H11q-1.055-.039-1.758-.742Q8.54 25.054 8.5 24V9q.039-1.055.742-1.758T11 6.5m5.938 10.938v5q-.079.858-.938.937-.86-.079-.937-.937v-5q.078-.86.937-.938.859.078.938.938m3.437 1.25v3.75q-.078.858-.937.937-.86-.079-.938-.937v-3.75q.078-.86.938-.938.858.078.937.938m-6.875 1.25v2.5q-.079.858-.937.937-.86-.079-.938-.937v-2.5q.078-.86.938-.938.858.078.937.938' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneFileChartColumnBoldIcon);
export default ForwardRef;
