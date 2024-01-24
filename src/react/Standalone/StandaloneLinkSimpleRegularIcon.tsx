import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneLinkSimpleRegularIcon = (
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
    <path d='M4.75 16.5q.078-2.655 1.836-4.414T11 10.25h3.125q.585.039.625.625-.039.585-.625.625H11q-2.109.04-3.555 1.445Q6.04 14.391 6 16.5q.04 2.109 1.445 3.555Q8.891 21.46 11 21.5h3.125q.585.039.625.625-.039.585-.625.625H11q-2.655-.078-4.414-1.836T4.75 16.5m22.5 0q-.078 2.656-1.836 4.414T21 22.75h-3.125q-.585-.039-.625-.625.039-.585.625-.625H21q2.109-.04 3.555-1.445Q25.96 18.609 26 16.5q-.04-2.109-1.445-3.555Q23.109 11.54 21 11.5h-3.125q-.585-.039-.625-.625.039-.585.625-.625H21q2.656.078 4.414 1.836T27.25 16.5m-16.562-.625h10.625q.585.039.625.625-.04.585-.625.625H10.688q-.587-.039-.626-.625.04-.585.626-.625' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneLinkSimpleRegularIcon);
export default ForwardRef;
