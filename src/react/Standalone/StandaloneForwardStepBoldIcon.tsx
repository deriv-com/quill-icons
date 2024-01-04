import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneForwardStepBoldIcon = (
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
      d='M19.125 9.938c.052-.573.365-.886.938-.938.572.052.885.365.937.938v13.125c-.052.572-.365.885-.938.937-.572-.052-.885-.365-.937-.938v-4.101l-6.914 4.844c-.208.13-.43.195-.664.195-.339 0-.612-.117-.82-.352-.235-.208-.352-.481-.352-.82V10.172c0-.339.117-.612.352-.82.208-.235.481-.352.82-.352.26 0 .482.065.664.195l6.914 4.844V9.938Zm0 6.718v-.312l-6.875-4.805V21.5l6.875-4.844Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneForwardStepBoldIcon);
export default ForwardRef;
