import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneEnvelopeRegularIcon = (
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
      d='M8.5 10.25c-.365 0-.664.117-.898.352-.235.234-.352.533-.352.898v1.563l7.656 5.585c.73.495 1.459.495 2.188 0l7.656-5.585V11.5c0-.365-.117-.664-.352-.898-.234-.235-.533-.352-.898-.352zm-1.25 4.375V21.5c0 .365.117.664.352.898.234.235.533.352.898.352h15c.365 0 .664-.117.898-.352.235-.234.352-.533.352-.898v-6.875l-6.914 5.04a2.955 2.955 0 0 1-1.836.624c-.677 0-1.29-.208-1.836-.625zM6 11.5c.026-.703.273-1.29.742-1.758C7.211 9.273 7.797 9.026 8.5 9h15c.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758v10c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742h-15c-.703-.026-1.29-.273-1.758-.742-.469-.469-.716-1.055-.742-1.758z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneEnvelopeRegularIcon);
export default ForwardRef;
