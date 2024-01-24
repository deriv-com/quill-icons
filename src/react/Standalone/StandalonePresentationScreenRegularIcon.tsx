import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandalonePresentationScreenRegularIcon = (
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
    <path d='M5.375 6.5h21.25q.585.039.625.625-.039.585-.625.625H5.375q-.585-.039-.625-.625.039-.585.625-.625M6 9h1.25v8.75q0 .547.352.898.35.352.898.352h15q.547 0 .898-.352.352-.35.352-.898V9H26v8.75q-.039 1.055-.742 1.758-.704.703-1.758.742h-6.875v1.602l3.555 3.593q.39.43 0 .86-.43.39-.86 0L16 23.023l-3.32 3.282q-.43.39-.86 0-.39-.43 0-.86l3.555-3.593V20.25H8.5q-1.055-.039-1.758-.742Q6.04 18.804 6 17.75z' />
  </svg>
);
const ForwardRef = forwardRef(StandalonePresentationScreenRegularIcon);
export default ForwardRef;
