import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneWindowMaximizeRegularIcon = (
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
    <path d='M8.5 9q-.547 0-.898.352-.352.35-.352.898V14h17.5v-3.75q0-.547-.352-.898Q24.048 9 23.5 9zm-1.25 6.25v7.5q0 .547.352.898.35.352.898.352h15q.547 0 .898-.352.352-.35.352-.898v-7.5zm-1.25-5q.039-1.055.742-1.758T8.5 7.75h15q1.055.039 1.758.742T26 10.25v12.5q-.039 1.055-.742 1.758-.704.703-1.758.742h-15q-1.055-.039-1.758-.742Q6.04 23.804 6 22.75z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneWindowMaximizeRegularIcon);
export default ForwardRef;
