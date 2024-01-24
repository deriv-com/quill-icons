import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneTriangleExclamationRegularIcon = (
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
    <path d='M7.367 22.906a.75.75 0 0 0-.117.39q.078.666.703.704h16.094q.624-.039.703-.703 0-.195-.078-.39L16.82 9.468Q16.508 8.999 16 9q-.507 0-.781.469zm-1.094-.625 7.852-13.437Q14.79 7.789 16 7.75q1.21.039 1.875 1.094l7.852 13.437q.273.469.273 1.016-.039.82-.586 1.367t-1.367.586H7.953q-.82-.039-1.367-.586T6 23.297q0-.547.273-1.016M16 12.75q.585.039.625.625v5q-.039.585-.625.625-.585-.039-.625-.625v-5q.039-.585.625-.625m-.937 8.75q.078-.86.937-.937.859.078.938.937-.079.859-.938.938-.86-.079-.937-.938' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneTriangleExclamationRegularIcon);
export default ForwardRef;
