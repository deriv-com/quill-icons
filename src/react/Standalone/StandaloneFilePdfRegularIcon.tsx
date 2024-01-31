import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneFilePdfRegularIcon = (
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
    <path d='M8.5 25.25h1.25v1.25H8.5q-1.055-.039-1.758-.742Q6.04 25.054 6 24V9q.039-1.055.742-1.758T8.5 6.5h6.094q.78 0 1.328.547l4.531 4.531q.547.547.547 1.328v4.844h-1.25V14h-4.375a2.04 2.04 0 0 1-1.328-.547 2.04 2.04 0 0 1-.547-1.328V7.75h-5q-.547 0-.898.352-.352.35-.352.898v15q0 .547.352.898.35.352.898.352m11.25-12.5a1 1 0 0 0-.195-.273l-4.532-4.532a.6.6 0 0 0-.273-.156v4.336q.039.585.625.625zm-6.875 7.5h1.25q.938.039 1.563.625.585.625.624 1.563-.039.937-.625 1.562-.624.585-1.562.625H13.5v1.25q-.039.585-.625.625-.585-.039-.625-.625v-5q.039-.585.625-.625m1.25 3.125q.859-.079.938-.937-.079-.86-.938-.938H13.5v1.875zm3.75-3.125h1.25q.78.039 1.328.547.508.546.547 1.328v2.5q-.039.78-.547 1.328-.546.508-1.328.547h-1.25q-.585-.039-.625-.625v-5q.039-.585.625-.625m1.25 5q.585-.039.625-.625v-2.5q-.039-.585-.625-.625H18.5v3.75zm3.125-4.375q.039-.585.625-.625h1.875q.585.039.625.625-.039.585-.625.625H23.5v1.25h1.25q.585.039.625.625-.039.585-.625.625H23.5v1.875q-.039.585-.625.625-.585-.039-.625-.625v-5' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneFilePdfRegularIcon);
export default ForwardRef;
