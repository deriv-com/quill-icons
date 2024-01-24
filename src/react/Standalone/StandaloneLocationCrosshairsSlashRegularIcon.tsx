import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneLocationCrosshairsSlashRegularIcon = (
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
    <path d='M18.969 22.008h-.04l1.055.82q-1.484.977-3.359 1.133v1.914q-.039.585-.625.625-.585-.039-.625-.625v-1.914q-2.773-.273-4.687-2.148-1.876-1.914-2.149-4.688H6.625Q6.04 17.086 6 16.5q.039-.585.625-.625h1.914q.078-.937.352-1.797l1.054.82A6.6 6.6 0 0 0 9.75 16.5q.078 2.656 1.836 4.414T16 22.75a6.1 6.1 0 0 0 2.969-.742M15.375 9.039V7.125q.039-.585.625-.625.585.039.625.625v1.914q2.774.274 4.688 2.149 1.875 1.913 2.148 4.687h1.914q.585.039.625.625-.039.585-.625.625h-1.914a8 8 0 0 1-.352 1.797l-1.054-.82a6.6 6.6 0 0 0 .195-1.602q-.078-2.655-1.836-4.414T16 10.25q-1.602 0-2.93.742l-1.054-.82q1.484-.977 3.359-1.133M16 20.25q-1.524-.04-2.578-1.016-1.055-.976-1.172-2.5l2.188 1.72q.038 0 .039.038l2.187 1.719q-.352.039-.664.039m-.625-7.46q.313-.04.625-.04 1.524.04 2.578 1.016 1.055.976 1.172 2.5l-2.187-1.72q-.04 0-.04-.038zM4.515 6.616l23.75 18.79q.43.39.118.859-.43.429-.899.117L3.734 7.633q-.429-.43-.117-.899.43-.39.899-.117' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneLocationCrosshairsSlashRegularIcon);
export default ForwardRef;
