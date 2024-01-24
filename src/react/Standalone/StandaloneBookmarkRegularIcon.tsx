import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneBookmarkRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path d='M8.5 8.375q.039-.781.547-1.328.546-.508 1.328-.547h11.25q.78.039 1.328.547.508.546.547 1.328v17.266q-.078.78-.86.859a.73.73 0 0 1-.468-.156L16 22.242l-6.172 4.102a.73.73 0 0 1-.469.156q-.78-.078-.859-.86zm1.875-.625q-.585.039-.625.625v16.523l5.898-3.906a.59.59 0 0 1 .704 0l5.898 3.906V8.375q-.039-.585-.625-.625z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneBookmarkRegularIcon);
export default ForwardRef;
