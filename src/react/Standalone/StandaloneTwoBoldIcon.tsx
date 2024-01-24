import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneTwoBoldIcon = (
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
    <path d='M15.531 9.625q-1.64.04-2.773 1.133l-1.406 1.406q-.664.548-1.329 0-.546-.664 0-1.328l1.407-1.367q1.68-1.68 4.101-1.719h.274q2.343.078 3.906 1.602 1.524 1.562 1.602 3.906-.039 2.383-1.758 4.023l-6.485 6.094h8.243q.858.078.937.938-.079.858-.937.937H10.688q-.626-.039-.86-.586-.195-.586.235-1.016l8.242-7.734q1.094-1.094 1.133-2.656-.04-1.524-1.055-2.578-1.055-1.016-2.578-1.055z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneTwoBoldIcon);
export default ForwardRef;
