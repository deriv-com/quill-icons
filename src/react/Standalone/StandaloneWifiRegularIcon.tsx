import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneWifiRegularIcon = (
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
      d='M4.555 13.688c-.287.26-.573.26-.86 0-.26-.287-.26-.573 0-.86a17.15 17.15 0 0 1 5.547-3.71C11.325 8.231 13.578 7.775 16 7.75c2.422.026 4.674.482 6.758 1.367a17.15 17.15 0 0 1 5.547 3.711c.26.287.26.573 0 .86-.287.26-.573.26-.86 0a16.557 16.557 0 0 0-5.156-3.438C20.336 9.443 18.24 9.026 16 9c-2.24.026-4.336.443-6.29 1.25a16.556 16.556 0 0 0-5.155 3.438ZM16 15.25c-1.38 0-2.67.26-3.867.781A10.041 10.041 0 0 0 8.93 18.18c-.287.234-.573.234-.86 0-.26-.313-.26-.612 0-.899a11.08 11.08 0 0 1 3.555-2.383C12.979 14.3 14.438 14 16 14c1.563 0 3.02.3 4.375.898a11.08 11.08 0 0 1 3.555 2.383c.26.287.26.586 0 .899-.287.234-.573.234-.86 0a10.04 10.04 0 0 0-3.203-2.149c-1.198-.52-2.487-.781-3.867-.781Zm0 6.25c-.365 0-.664.117-.898.352-.235.234-.352.533-.352.898s.117.664.352.898c.234.235.533.352.898.352s.664-.117.898-.352c.235-.234.352-.533.352-.898s-.117-.664-.352-.898c-.234-.235-.533-.352-.898-.352Zm0 3.75c-.938-.026-1.654-.443-2.148-1.25-.47-.833-.47-1.667 0-2.5.494-.807 1.21-1.224 2.148-1.25.938.026 1.654.443 2.148 1.25.47.833.47 1.667 0 2.5-.494.807-1.21 1.224-2.148 1.25Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneWifiRegularIcon);
export default ForwardRef;
