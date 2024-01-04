import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneTiktokIcon = (
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
      d='M24.75 14.703c-1.77 0-3.372-.508-4.805-1.523v6.953c0 1.354-.377 2.565-1.133 3.633-.729 1.067-1.718 1.849-2.968 2.343-1.276.443-2.54.508-3.79.196-1.25-.313-2.33-.977-3.242-1.992a6.47 6.47 0 0 1-1.523-3.477c-.13-1.276.117-2.513.742-3.711.651-1.172 1.55-2.057 2.696-2.656 1.171-.573 2.421-.781 3.75-.625v3.515c-.625-.182-1.224-.169-1.797.04-.573.182-1.055.533-1.446 1.054a2.932 2.932 0 0 0-.546 1.719c0 .599.182 1.172.546 1.719.391.494.886.833 1.485 1.015.573.209 1.172.209 1.797 0a2.956 2.956 0 0 0 1.445-1.054 2.82 2.82 0 0 0 .547-1.72V6.5h3.437c0 .286.026.573.078.86.287 1.327.99 2.37 2.11 3.124.807.521 1.68.795 2.617.82v3.4Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneTiktokIcon);
export default ForwardRef;
