import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneCreditCardRegularIcon = (
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
    <path d='M7.75 9q-.547 0-.898.352-.352.35-.352.898v1.25h20v-1.25q0-.547-.352-.898Q25.798 9 25.25 9zM6.5 12.75v2.5h20v-2.5zm0 3.75v6.25q0 .547.352.898.35.352.898.352h17.5q.547 0 .898-.352.352-.35.352-.898V16.5zm-1.25-6.25q.039-1.055.742-1.758T7.75 7.75h17.5q1.055.039 1.758.742t.742 1.758v12.5q-.039 1.055-.742 1.758-.704.703-1.758.742H7.75q-1.055-.039-1.758-.742-.703-.704-.742-1.758zM9 20.875q.039-.585.625-.625h2.5q.585.039.625.625-.039.585-.625.625h-2.5q-.585-.039-.625-.625m5 0q.039-.585.625-.625h5q.585.039.625.625-.039.585-.625.625h-5q-.585-.039-.625-.625' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCreditCardRegularIcon);
export default ForwardRef;
