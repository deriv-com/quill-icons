import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneAppleIcon = (
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
    <path d='M20.96 17.008q-.077.234.274 1.406.352 1.211 2.11 2.188-.235.741-.82 1.835a9.3 9.3 0 0 1-1.407 1.915q-.82.82-1.758.898a3.5 3.5 0 0 1-1.406-.352q-.664-.312-1.601-.351-.977.039-1.68.39a3.7 3.7 0 0 1-1.25.313q-.976-.039-1.836-.937a9.7 9.7 0 0 1-1.484-2.032q-.626-1.172-.899-1.914-.547-1.64-.547-3.164.078-2.618 1.446-3.906 1.327-1.29 3.046-1.328.978.078 1.915.469.663.273 1.093.312.313-.039.938-.273.507-.195 1.172-.391.663-.195 1.328-.156 2.187.195 3.32 1.758-1.993 1.17-1.953 3.32m-2.226-6.406q-1.171 1.367-2.695 1.328-.078-1.641.977-2.813a4.9 4.9 0 0 1 1.21-.937q.743-.39 1.446-.43.078.351-.04 1.094-.155.78-.898 1.758' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneAppleIcon);
export default ForwardRef;
