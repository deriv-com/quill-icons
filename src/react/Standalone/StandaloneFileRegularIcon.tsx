import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneFileRegularIcon = (
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
    <path d='M22.75 24V14h-4.375a2.04 2.04 0 0 1-1.328-.547 2.04 2.04 0 0 1-.547-1.328V7.75h-5q-.547 0-.898.352-.352.35-.352.898v15q0 .547.352.898.35.352.898.352h10q.547 0 .898-.352.352-.35.352-.898m0-11.25a1 1 0 0 0-.195-.273l-4.532-4.532a.6.6 0 0 0-.273-.156v4.336q.039.585.625.625zM9 9q.039-1.055.742-1.758T11.5 6.5h6.094q.78 0 1.328.547l4.531 4.531q.547.547.547 1.328V24q-.039 1.055-.742 1.758-.704.703-1.758.742h-10q-1.055-.039-1.758-.742Q9.04 25.054 9 24z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneFileRegularIcon);
export default ForwardRef;
