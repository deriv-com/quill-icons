import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneBackwardStepBoldIcon = (
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
      d='M12.875 9.938v4.101l6.914-4.844c.182-.13.404-.195.664-.195.339 0 .612.117.82.352.235.208.352.481.352.82v12.656c0 .339-.117.612-.352.82-.208.235-.481.352-.82.352-.234 0-.456-.065-.664-.195l-6.914-4.844v4.102c-.052.572-.365.885-.938.937-.572-.052-.885-.365-.937-.938V9.938c.052-.572.365-.885.938-.937.572.052.885.365.937.938Zm0 6.718L19.75 21.5v-9.96l-6.875 4.804v.312Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneBackwardStepBoldIcon);
export default ForwardRef;
