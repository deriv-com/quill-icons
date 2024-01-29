import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneImageBoldIcon = (
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
    <path d='M23.5 9.625h-15q-.586.039-.625.625v12.5l.195-.234 3.125-4.375a.86.86 0 0 1 .742-.391q.469 0 .782.39l1.172 1.68 3.242-4.218a.89.89 0 0 1 .742-.352.89.89 0 0 1 .742.352l5.313 6.875.195.273v-12.5q-.039-.585-.625-.625M8.5 7.75h15q1.055.039 1.758.742T26 10.25v12.5q-.039 1.055-.742 1.758-.704.703-1.758.742h-15q-1.055-.039-1.758-.742Q6.04 23.804 6 22.75v-12.5q.039-1.055.742-1.758T8.5 7.75m3.125 7.5q-1.055-.039-1.64-.937-.47-.938 0-1.876.585-.898 1.64-.937 1.055.038 1.64.938.47.937 0 1.874-.585.9-1.64.938' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneImageBoldIcon);
export default ForwardRef;
