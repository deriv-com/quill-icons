import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneExpandRegularIcon = (
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
    <path d='M12.875 7.75q.585.039.625.625-.039.585-.625.625H8.5v4.375q-.039.585-.625.625-.585-.039-.625-.625v-5q.039-.585.625-.625zM7.25 19.625q.039-.585.625-.625.585.039.625.625V24h4.375q.585.039.625.625-.039.585-.625.625h-5q-.585-.039-.625-.625zM24.125 7.75q.585.039.625.625v5q-.039.585-.625.625-.585-.039-.625-.625V9h-4.375q-.585-.039-.625-.625.039-.585.625-.625zM23.5 19.625q.039-.585.625-.625.585.039.625.625v5q-.039.585-.625.625h-5q-.585-.039-.625-.625.039-.585.625-.625H23.5z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneExpandRegularIcon);
export default ForwardRef;
