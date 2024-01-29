import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneFileCircleInfoBoldIcon = (
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
    <path d='M7.25 24.625h8.633a6.6 6.6 0 0 0 1.758 1.836q-.195.039-.391.039h-10q-1.055-.039-1.758-.742Q4.79 25.054 4.75 24V9q.039-1.055.742-1.758T7.25 6.5h6.484q1.016 0 1.758.742l3.516 3.516q.742.742.742 1.797v1.718a6.7 6.7 0 0 0-1.875.82V12.75H14.75q-.547 0-.898-.352-.352-.35-.352-.898V8.375H7.25q-.585.039-.625.625v15q.039.585.625.625m14.375-9.375q1.523 0 2.813.742a5.64 5.64 0 0 1 2.07 2.07 5.7 5.7 0 0 1 .742 2.813 5.7 5.7 0 0 1-.742 2.813 5.64 5.64 0 0 1-2.07 2.07 5.54 5.54 0 0 1-2.813.742 5.54 5.54 0 0 1-2.812-.742 5.64 5.64 0 0 1-2.07-2.07A5.7 5.7 0 0 1 16 20.875q0-1.485.742-2.812a5.64 5.64 0 0 1 2.07-2.07 5.54 5.54 0 0 1 2.813-.743m0 3.75q.859-.078.938-.937-.079-.86-.938-.938-.86.078-.937.938.078.858.937.937m-1.25 1.875q.039.585.625.625v1.875q-.585.039-.625.625.039.585.625.625h1.25q.585-.039.625-.625-.039-.585-.625-.625v-2.5q-.039-.585-.625-.625H21q-.585.039-.625.625' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneFileCircleInfoBoldIcon);
export default ForwardRef;
