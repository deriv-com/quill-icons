import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneChartLineUpDownRegularIcon = (
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
    <path d='M7.25 8.375v13.75q.039.78.547 1.328.546.508 1.328.547h16.25q.585.039.625.625-.039.585-.625.625H9.125q-1.328-.04-2.227-.898-.859-.9-.898-2.227V8.375q.039-.585.625-.625.585.039.625.625m13.125 1.875q-.585-.039-.625-.625.039-.585.625-.625h3.75q.585.039.625.625v3.75q-.039.585-.625.625-.585-.039-.625-.625v-2.227l-5.82 5.782q-.43.39-.86 0l-2.695-2.657-3.32 3.282q-.43.39-.86 0-.39-.43 0-.86l3.75-3.75a.52.52 0 0 1 .43-.195.52.52 0 0 1 .43.195l2.695 2.657 5.352-5.352zm0 11.25q-.585-.039-.625-.625.039-.585.625-.625h2.227l-2.657-2.695.86-.86 2.695 2.657v-2.227q.039-.585.625-.625.585.039.625.625v3.75q-.039.585-.625.625z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneChartLineUpDownRegularIcon);
export default ForwardRef;
