import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneBarcodeBoldIcon = (
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
    <path d='M6.938 7.75q.859.078.937.938v15.625q-.078.858-.937.937-.86-.079-.938-.937V8.688q.078-.86.938-.938m3.437 0q.585.039.625.625v16.25q-.039.585-.625.625-.585-.039-.625-.625V8.375q.039-.585.625-.625m2.813 0q.858.078.937.938v15.625q-.079.858-.937.937-.86-.079-.938-.937V8.688q.078-.86.938-.938m4.374 0q.86.078.938.938v15.625q-.078.858-.937.937-.86-.079-.938-.937V8.688q.078-.86.938-.938m6.563.938q.078-.86.938-.938.858.078.937.938v15.625q-.079.858-.937.937-.86-.079-.938-.937zm-2.5-.313q.039-.585.625-.625.585.039.625.625v16.25q-.039.585-.625.625-.585-.039-.625-.625z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneBarcodeBoldIcon);
export default ForwardRef;
