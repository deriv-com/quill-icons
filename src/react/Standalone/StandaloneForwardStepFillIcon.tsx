import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneForwardStepFillIcon = (
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
      d='M11.82 23.727c-.416.312-.872.364-1.367.156-.443-.235-.677-.612-.703-1.133v-12.5c.026-.52.26-.898.703-1.133.495-.208.95-.156 1.367.156l7.5 6.25.43.391V10.25c0-.365.117-.664.352-.898.234-.235.533-.352.898-.352s.664.117.898.352c.235.234.352.533.352.898v12.5c0 .365-.117.664-.352.898-.234.235-.533.352-.898.352s-.664-.117-.898-.352c-.235-.234-.352-.533-.352-.898v-5.664l-.43.39-7.5 6.25Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneForwardStepFillIcon);
export default ForwardRef;
