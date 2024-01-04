import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedMobileScreenButtonLgRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M11.25 6.75h-7.5c-.365 0-.664.117-.898.352-.235.234-.352.533-.352.898v10h10V8c0-.365-.117-.664-.352-.898-.234-.235-.533-.352-.898-.352Zm1.25 12.5h-10V23c0 .365.117.664.352.898.234.235.533.352.898.352h7.5c.365 0 .664-.117.898-.352.235-.234.352-.533.352-.898v-3.75ZM3.75 5.5h7.5c.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758v15c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742h-7.5c-.703-.026-1.29-.273-1.758-.742-.469-.469-.716-1.055-.742-1.758V8c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742Zm1.875 16.25c.026-.39.234-.599.625-.625h2.5c.39.026.599.234.625.625-.026.39-.234.599-.625.625h-2.5c-.39-.026-.599-.234-.625-.625Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileScreenButtonLgRegularIcon);
export default ForwardRef;
