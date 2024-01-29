import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneTrashRegularIcon = (
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
    <path d='M14.203 7.75a.61.61 0 0 0-.547.313L13.07 9h5.86l-.586-.937a.61.61 0 0 0-.547-.313zM20.414 9h3.711q.585.039.625.625-.039.585-.625.625h-.703l-1.016 13.945a2.45 2.45 0 0 1-.781 1.64q-.704.627-1.719.665h-7.812q-1.016-.039-1.719-.664a2.45 2.45 0 0 1-.781-1.64L8.578 10.25h-.703q-.585-.039-.625-.625.039-.585.625-.625h3.711l1.016-1.602q.585-.859 1.601-.898h3.594q1.015.04 1.601.898zm1.758 1.25H9.828l1.016 13.828q.039.508.39.82.352.352.86.352h7.812q.508 0 .86-.352.351-.312.39-.82z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneTrashRegularIcon);
export default ForwardRef;
