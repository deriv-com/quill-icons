import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneCompressRegularIcon = (
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
    <path d='M13.5 8.375v5q-.039.585-.625.625h-5q-.585-.039-.625-.625.039-.585.625-.625h4.375V8.375q.039-.585.625-.625.585.039.625.625M7.875 19h5q.585.039.625.625v5q-.039.585-.625.625-.585-.039-.625-.625V20.25H7.875q-.585-.039-.625-.625.039-.585.625-.625M19.75 8.375v4.375h4.375q.585.039.625.625-.039.585-.625.625h-5q-.585-.039-.625-.625v-5q.039-.585.625-.625.585.039.625.625M19.125 19h5q.585.039.625.625-.039.585-.625.625H19.75v4.375q-.039.585-.625.625-.585-.039-.625-.625v-5q.039-.585.625-.625' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCompressRegularIcon);
export default ForwardRef;
