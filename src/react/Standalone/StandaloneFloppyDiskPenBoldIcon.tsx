import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneFloppyDiskPenBoldIcon = (
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
    <path d='M6.625 10.25v12.5q.039.585.625.625h8.086l-.469 1.875H7.25q-1.055-.039-1.758-.742-.703-.704-.742-1.758v-12.5q.039-1.055.742-1.758T7.25 7.75h9.61q1.015 0 1.757.742l2.89 2.89-1.327 1.329-2.89-2.89-.04-.04v3.906q-.078.86-.937.938h-7.5q-.86-.079-.938-.937V9.625H7.25q-.585.039-.625.625m14.883 1.133q.742.742.742 1.797v2.539l-1.875 1.875V13.18a.64.64 0 0 0-.195-.47zM9.75 9.625v3.125h5.625V9.625zM11 19q.04-1.406 1.25-2.148 1.25-.705 2.5 0Q15.96 17.593 16 19q-.04 1.407-1.25 2.148-1.25.705-2.5 0Q11.04 20.407 11 19m15.234-3.281.547.547q.47.508.469 1.093 0 .626-.469 1.133l-1.133 1.133-2.773-2.773 1.133-1.133q.507-.47 1.094-.469.625 0 1.132.469m-9.297 7.07 5.04-5.039 2.773 2.773-5.04 5.04a1.5 1.5 0 0 1-.585.351l-2.344.586a.68.68 0 0 1-.586-.195.68.68 0 0 1-.195-.586l.586-2.344a1.5 1.5 0 0 1 .352-.586' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneFloppyDiskPenBoldIcon);
export default ForwardRef;
