import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneBellBoldIcon = (
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
      d='M16 6.5c.365 0 .664.117.898.352.235.234.352.533.352.898v.703c1.458.26 2.643.925 3.555 1.992.937 1.068 1.419 2.357 1.445 3.867v1.29a7.908 7.908 0 0 0 1.719 4.882l.586.743c.208.312.247.638.117.976a.991.991 0 0 1-.86.547H8.188a.991.991 0 0 1-.859-.547c-.156-.338-.117-.664.117-.976l.586-.743a7.908 7.908 0 0 0 1.719-4.882v-1.29c.026-1.51.508-2.799 1.445-3.867.912-1.067 2.097-1.731 3.555-1.992V7.75c0-.365.117-.664.352-.898.234-.235.533-.352.898-.352m0 3.75h-.312c-1.146.026-2.11.417-2.891 1.172-.755.781-1.146 1.745-1.172 2.89v1.29c-.026 1.927-.547 3.685-1.562 5.273h11.875c-1.042-1.588-1.563-3.346-1.563-5.273v-1.29c-.026-1.145-.417-2.109-1.172-2.89-.781-.755-1.745-1.146-2.89-1.172zM18.5 24c0 .677-.247 1.263-.742 1.758-.495.495-1.08.742-1.758.742-.677 0-1.263-.247-1.758-.742-.495-.495-.742-1.08-.742-1.758H16z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneBellBoldIcon);
export default ForwardRef;
