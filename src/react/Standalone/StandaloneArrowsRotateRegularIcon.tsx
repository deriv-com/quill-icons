import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneArrowsRotateRegularIcon = (
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
    <path d='M8.695 14.742h.04q-.157.47-.665.508-.664-.079-.586-.703.704-2.97 3.047-4.844Q12.837 7.83 16 7.75q2.422.04 4.375 1.172a8.66 8.66 0 0 1 3.125 3.086V9.625q.039-.585.625-.625.585.039.625.625v3.75q-.039.585-.625.625h-3.75q-.585-.039-.625-.625.039-.585.625-.625h2.11a7.34 7.34 0 0 0-2.696-2.734Q18.11 9.039 16 9q-2.696.04-4.687 1.64-1.954 1.563-2.618 4.102m14.61 3.555v-.04q.117-.468.625-.507.664.078.586.703-.705 2.97-3.008 4.844Q19.164 25.17 16 25.25q-2.422-.04-4.375-1.172A8.76 8.76 0 0 1 8.5 21.031v2.344q-.039.585-.625.625-.547-.039-.625-.625v-3.75q.078-.585.625-.625h3.75q.585.039.625.625-.039.585-.625.625h-2.11a7.34 7.34 0 0 0 2.696 2.734Q13.89 23.961 16 24q2.696-.04 4.688-1.64 1.953-1.563 2.617-4.063' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowsRotateRegularIcon);
export default ForwardRef;
