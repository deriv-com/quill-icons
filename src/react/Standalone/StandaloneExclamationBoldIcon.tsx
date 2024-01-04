import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneExclamationBoldIcon = (
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
      d='M16.938 8.688v11.25c-.053.572-.365.885-.938.937-.573-.052-.885-.365-.938-.938V8.688c.053-.572.365-.885.938-.937.573.052.885.365.938.938ZM16 25.25c-.365 0-.664-.117-.898-.352-.235-.234-.352-.533-.352-.898s.117-.664.352-.898c.234-.235.533-.352.898-.352s.664.117.898.352c.235.234.352.533.352.898s-.117.664-.352.898c-.234.235-.533.352-.898.352Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneExclamationBoldIcon);
export default ForwardRef;
