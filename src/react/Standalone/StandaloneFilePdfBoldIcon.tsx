import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneFilePdfBoldIcon = (
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
    <path d='M8.5 24.625h1.25V26.5H8.5q-1.055-.039-1.758-.742Q6.04 25.054 6 24V9q.039-1.055.742-1.758T8.5 6.5h6.484q1.016 0 1.758.742l3.516 3.516Q21 11.5 21 12.555v5.195h-1.875v-5H16q-.547 0-.898-.352-.352-.35-.352-.898V8.375H8.5q-.586.039-.625.625v15q.039.585.625.625m4.375-4.375h1.25q.938.039 1.563.625.585.625.624 1.563-.039.937-.625 1.562-.624.585-1.562.625H13.5v1.25q-.039.585-.625.625-.585-.039-.625-.625v-5q.039-.585.625-.625m1.25 3.125q.859-.079.938-.937-.079-.86-.938-.938H13.5v1.875zm3.75-3.125h1.25q.78.039 1.328.547.508.546.547 1.328v2.5q-.039.78-.547 1.328-.546.508-1.328.547h-1.25q-.585-.039-.625-.625v-5q.039-.585.625-.625m1.25 5q.585-.039.625-.625v-2.5q-.039-.585-.625-.625H18.5v3.75zm3.125-4.375q.039-.585.625-.625h1.875q.585.039.625.625-.039.585-.625.625H23.5v1.25h1.25q.585.039.625.625-.039.585-.625.625H23.5v1.875q-.039.585-.625.625-.585-.039-.625-.625v-5' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneFilePdfBoldIcon);
export default ForwardRef;
