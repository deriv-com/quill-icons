import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneSterlingSignRegularIcon = (
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
    <path d='M12.875 12.438V16.5h6.25q.585.039.625.625-.039.585-.625.625h-6.25A15.3 15.3 0 0 1 11.391 24h10.234q.585.039.625.625-.039.585-.625.625h-11.25a.61.61 0 0 1-.547-.312.66.66 0 0 1 0-.625l.04-.079a14.55 14.55 0 0 0 1.757-6.484h-1.25q-.585-.039-.625-.625.039-.585.625-.625h1.25v-4.062q.04-1.993 1.367-3.32 1.329-1.329 3.32-1.368h.274q.781 0 1.484.234l3.125 1.055q.51.235.39.781-.233.547-.78.39L17.68 9.196A3.2 3.2 0 0 0 16.586 9h-.273q-1.446.04-2.422 1.016t-1.016 2.422' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneSterlingSignRegularIcon);
export default ForwardRef;
