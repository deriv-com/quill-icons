import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneRightFromBracketRegularIcon = (
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
    <path d='m24.71 16.422-5.155-4.844q-.078-.078-.157-.078a.305.305 0 0 0-.273.273V14q-.039.585-.625.625h-4.687q-.274.039-.313.313v3.124q.039.274.313.313H18.5q.585.039.625.625v2.227a.305.305 0 0 0 .273.273q.08 0 .157-.078l5.156-4.844q.039-.039.039-.078t-.04-.078M26 16.5q0 .585-.43.977l-5.156 4.882a1.46 1.46 0 0 1-1.016.391q-.663 0-1.093-.43-.43-.429-.43-1.093v-1.602h-4.062q-.665 0-1.094-.469a1.42 1.42 0 0 1-.469-1.093v-3.125q0-.665.469-1.094a1.42 1.42 0 0 1 1.094-.469h4.062v-1.602q0-.664.43-1.093.429-.43 1.093-.43.587 0 1.016.43l5.156 4.843q.43.39.43.977M12.875 9h-3.75q-.781.039-1.328.547-.508.546-.547 1.328v11.25q.039.78.547 1.328.546.508 1.328.547h3.75q.585.039.625.625-.039.585-.625.625h-3.75q-1.328-.04-2.227-.898-.859-.9-.898-2.227v-11.25q.04-1.328.898-2.227.9-.858 2.227-.898h3.75q.585.039.625.625-.039.585-.625.625' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneRightFromBracketRegularIcon);
export default ForwardRef;
