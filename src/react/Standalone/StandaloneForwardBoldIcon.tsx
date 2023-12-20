import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneForwardBoldIcon = (
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
    <path
      fillOpacity={0.72}
      d='M14.75 10.172c0-.339.117-.612.352-.82.208-.235.481-.352.82-.352.26 0 .495.078.703.234l8.984 6.524c.26.182.391.43.391.742a.86.86 0 0 1-.39.742l-8.985 6.524a1.142 1.142 0 0 1-.703.234c-.339 0-.612-.117-.82-.352-.235-.208-.352-.481-.352-.82v-3.867l-6.914 4.844c-.208.13-.43.195-.664.195-.339 0-.612-.117-.82-.352-.235-.208-.352-.481-.352-.82V10.172c0-.339.117-.612.352-.82.208-.235.481-.352.82-.352.26 0 .482.065.664.195l6.914 4.844zm0 6.172-6.875-4.805V21.5l6.875-4.844zm8.71.156-6.835-4.96v9.92z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneForwardBoldIcon);
export default ForwardRef;
