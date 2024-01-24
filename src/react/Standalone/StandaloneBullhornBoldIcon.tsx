import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneBullhornBoldIcon = (
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
    <path d='m22.875 9.39-.43.43a12.7 12.7 0 0 1-3.828 2.578 12.4 12.4 0 0 1-4.492.977v5q2.383.078 4.492.977a12.7 12.7 0 0 1 3.828 2.578l.43.43zM12.25 11.5h1.602q2.07 0 3.945-.781a10.2 10.2 0 0 0 3.32-2.227l1.485-1.484q.663-.585 1.367-.274.703.274.781 1.133v5.664q.547.273.898.899.352.624.352 1.445 0 .82-.352 1.445-.35.625-.898.899v5.664q-.078.859-.781 1.133-.704.312-1.367-.274l-1.485-1.484a10.3 10.3 0 0 0-3.203-2.188 11 11 0 0 0-3.789-.82v4.063q-.039.937-.625 1.562-.625.585-1.562.625h-1.25q-.938-.039-1.563-.625-.585-.625-.625-1.562V20.25q-1.055-.039-1.758-.742Q6.04 18.804 6 17.75V14q.039-1.055.742-1.758T8.5 11.5zm-1.875 8.75v4.063q.039.273.313.312h1.25q.273-.039.312-.312V20.25zM8.5 13.375q-.586.039-.625.625v3.75q.039.585.625.625h3.75v-5z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneBullhornBoldIcon);
export default ForwardRef;
