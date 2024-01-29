import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneInfoRegularIcon = (
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
    <path d='M14.75 9q0-.547.352-.898.35-.352.898-.352.547 0 .898.352.352.35.352.898 0 .547-.352.898-.35.352-.898.352-.547 0-.898-.352-.352-.35-.352-.898m-1.875 4.375q.039-.585.625-.625H16q.585.039.625.625V24h2.5q.585.039.625.625-.039.585-.625.625h-6.25q-.585-.039-.625-.625.039-.585.625-.625h2.5V14H13.5q-.585-.039-.625-.625' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneInfoRegularIcon);
export default ForwardRef;
