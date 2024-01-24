import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneChartAreaRegularIcon = (
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
    <path d='M7.25 8.375v13.75q.039.78.547 1.328.546.508 1.328.547h16.25q.585.039.625.625-.039.585-.625.625H9.125q-1.328-.04-2.227-.898-.859-.9-.898-2.227V8.375q.039-.585.625-.625.585.039.625.625m10.352 6.523-2.852-2.89-3.555 3.594a.52.52 0 0 0-.195.43v4.218h12.5v-3.672q0-.234-.156-.43l-2.422-2.812-1.524 1.562q-.39.352-.898.352t-.898-.352m0-1.796L18.5 14l.898-.898.665-.665q.39-.351.898-.351.547.04.898.43l2.422 2.851q.47.508.469 1.211v3.672q0 .547-.352.898-.35.352-.898.352H11q-.547 0-.898-.352-.352-.35-.352-.898v-4.219q0-.78.547-1.328l3.555-3.555q.39-.39.898-.39t.898.39z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneChartAreaRegularIcon);
export default ForwardRef;
