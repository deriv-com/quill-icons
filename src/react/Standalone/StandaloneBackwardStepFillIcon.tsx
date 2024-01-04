import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneBackwardStepFillIcon = (
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
      d='m20.219 23.727-7.5-6.25-.469-.391v5.664c0 .365-.117.664-.352.898-.234.235-.533.352-.898.352s-.664-.117-.898-.352c-.235-.234-.352-.533-.352-.898v-12.5c0-.365.117-.664.352-.898.234-.235.533-.352.898-.352s.664.117.898.352c.235.234.352.533.352.898v5.664l.469-.39 7.5-6.25c.39-.313.833-.365 1.328-.157.443.235.677.612.703 1.133v12.5c-.026.52-.26.898-.703 1.133-.495.208-.938.156-1.328-.156Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneBackwardStepFillIcon);
export default ForwardRef;
