import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneStopwatchRegularIcon = (
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
    <path d='M12.25 7.125q.039-.585.625-.625h6.25q.585.039.625.625-.039.585-.625.625h-2.5v2.54q2.97.272 5 2.226l1.445-1.446q.43-.39.86 0 .39.43 0 .86l-1.485 1.484q1.641 2.11 1.68 4.961-.078 3.438-2.383 5.742Q19.438 26.422 16 26.5q-3.438-.078-5.742-2.383-2.304-2.304-2.383-5.742.078-3.28 2.188-5.547 2.11-2.226 5.312-2.539V7.75h-2.5q-.585-.039-.625-.625m-3.125 11.25q0 1.875.938 3.438a6.77 6.77 0 0 0 2.5 2.5q1.64.937 3.437.937t3.438-.937a6.77 6.77 0 0 0 2.5-2.5 6.56 6.56 0 0 0 .937-3.438q0-1.875-.937-3.437a6.77 6.77 0 0 0-2.5-2.5Q17.797 11.5 16 11.5t-3.437.938a6.77 6.77 0 0 0-2.5 2.5 6.56 6.56 0 0 0-.938 3.437m7.5-3.75V19q-.039.585-.625.625-.585-.039-.625-.625v-4.375q.039-.585.625-.625.585.039.625.625' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneStopwatchRegularIcon);
export default ForwardRef;
