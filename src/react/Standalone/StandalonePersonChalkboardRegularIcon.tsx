import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandalonePersonChalkboardRegularIcon = (
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
    <path d='M10.063 8.688q.078.858.937.937.859-.079.938-.937-.079-.86-.938-.938-.86.078-.937.938m3.124 0q-.038 1.25-1.093 1.874-1.095.625-2.188 0-1.054-.624-1.094-1.874.04-1.25 1.094-1.876 1.095-.624 2.188 0 1.055.625 1.094 1.875m-2.695 4.062q-.39 0-.742.156V19h2.5v-6.25zM9.75 25.875q-.039.585-.625.625-.585-.039-.625-.625V14.391l-1.953 3.672q-.312.468-.82.234-.508-.313-.274-.82l2.305-4.336q.898-1.563 2.734-1.641H16V8.375q.039-.781.547-1.328.546-.508 1.328-.547h8.75q.78.039 1.328.547.508.546.547 1.328v8.75q-.039.78-.547 1.328-.546.508-1.328.547h-8.75a2.04 2.04 0 0 1-1.328-.547A2.04 2.04 0 0 1 16 17.125V14h1.25v3.125q.039.585.625.625h8.75q.585-.039.625-.625v-8.75q-.039-.585-.625-.625h-8.75q-.585.039-.625.625V11.5h1.875q.585.039.625.625-.039.585-.625.625H13.5v13.125q-.039.585-.625.625-.585-.039-.625-.625V20.25h-2.5z' />
  </svg>
);
const ForwardRef = forwardRef(StandalonePersonChalkboardRegularIcon);
export default ForwardRef;
