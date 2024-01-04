import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedEnvelopeLgRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2.5 9.25c-.365 0-.664.117-.898.352-.235.234-.352.533-.352.898v1.563l7.656 5.585c.73.495 1.459.495 2.188 0l7.656-5.585V10.5c0-.365-.117-.664-.352-.898-.234-.235-.533-.352-.898-.352h-15Zm-1.25 4.375V20.5c0 .365.117.664.352.898.234.235.533.352.898.352h15c.365 0 .664-.117.898-.352.235-.234.352-.533.352-.898v-6.875l-6.914 5.04a2.955 2.955 0 0 1-1.836.624c-.677 0-1.29-.208-1.836-.625L1.25 13.625ZM0 10.5c.026-.703.273-1.29.742-1.758C1.211 8.273 1.797 8.026 2.5 8h15c.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758v10c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742h-15c-.703-.026-1.29-.273-1.758-.742C.273 21.789.026 21.203 0 20.5v-10Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEnvelopeLgRegularIcon);
export default ForwardRef;
