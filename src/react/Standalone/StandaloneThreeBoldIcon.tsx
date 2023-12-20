import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneThreeBoldIcon = (
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
      d='M9.75 8.688c.052-.573.365-.886.938-.938h10c.416.026.703.221.859.586.156.39.091.73-.195 1.016l-5.82 5.586h1.562c1.458.025 2.669.533 3.633 1.523.99.963 1.497 2.174 1.523 3.633-.026 1.458-.534 2.669-1.523 3.633-.964.99-2.175 1.497-3.633 1.523h-3.555a3.717 3.717 0 0 1-2.11-.625 4.097 4.097 0 0 1-1.523-1.602l-.039-.156c-.208-.547-.078-.963.39-1.25.548-.208.964-.078 1.25.39l.079.157c.443.781 1.094 1.185 1.953 1.211h3.555c.937-.026 1.705-.352 2.304-.977.625-.599.951-1.367.977-2.304-.026-.938-.352-1.706-.977-2.305-.599-.625-1.367-.95-2.304-.977h-3.907c-.416-.026-.703-.22-.859-.585-.156-.391-.091-.73.195-1.016l5.82-5.586h-7.655c-.573-.052-.886-.365-.938-.937'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneThreeBoldIcon);
export default ForwardRef;
