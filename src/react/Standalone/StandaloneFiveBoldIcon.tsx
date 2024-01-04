import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneFiveBoldIcon = (
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
      d='M11 8.531c.13-.495.443-.755.938-.781h8.124c.573.052.886.365.938.938-.052.572-.365.885-.938.937H12.72l-.899 5.313h5.274c1.458.025 2.669.533 3.633 1.523.99.963 1.497 2.174 1.523 3.633-.026 1.458-.534 2.669-1.523 3.633-.964.99-2.175 1.497-3.633 1.523h-3.711c-.73 0-1.393-.182-1.992-.547a3.529 3.529 0 0 1-1.368-1.523l-.195-.313c-.182-.547-.039-.976.43-1.289.547-.182.963-.039 1.25.43l.195.312c.365.677.925 1.029 1.68 1.055h3.71c.938-.026 1.706-.352 2.305-.977.625-.599.951-1.367.977-2.304-.026-.938-.352-1.706-.977-2.305-.599-.625-1.367-.95-2.304-.977h-6.407a.852.852 0 0 1-.703-.351.95.95 0 0 1-.234-.742L11 8.53Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneFiveBoldIcon);
export default ForwardRef;
