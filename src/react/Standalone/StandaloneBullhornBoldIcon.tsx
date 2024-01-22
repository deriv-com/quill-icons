import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneBullhornBoldIcon = (
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
    <path d='m22.875 9.39-.43.43a12.708 12.708 0 0 1-3.828 2.578 12.398 12.398 0 0 1-4.492.977v5c1.588.052 3.086.378 4.492.977a12.708 12.708 0 0 1 3.828 2.578l.43.43zM12.25 11.5h1.602a10.205 10.205 0 0 0 7.266-3.008l1.484-1.484c.442-.39.898-.482 1.367-.274.468.183.729.56.781 1.133v5.664c.365.182.664.482.898.899.235.416.352.898.352 1.445s-.117 1.029-.352 1.445c-.234.417-.533.716-.898.899v5.664c-.052.573-.312.95-.781 1.133-.469.208-.925.117-1.367-.274l-1.485-1.484a10.306 10.306 0 0 0-3.203-2.188 10.972 10.972 0 0 0-3.789-.82v4.063c-.026.625-.234 1.145-.625 1.562-.417.39-.937.599-1.562.625h-1.25c-.626-.026-1.146-.234-1.563-.625-.39-.417-.599-.937-.625-1.562V20.25c-.703-.026-1.29-.273-1.758-.742-.469-.469-.716-1.055-.742-1.758V14c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742zm-1.875 8.75v4.063c.026.182.13.286.313.312h1.25c.182-.026.286-.13.312-.312V20.25zM8.5 13.375c-.39.026-.599.234-.625.625v3.75c.026.39.234.599.625.625h3.75v-5z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneBullhornBoldIcon);
export default ForwardRef;
