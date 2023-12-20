import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedComputerMouseScrollwheelLgBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 15 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M13.125 19.25v-7.5c-.026-1.25-.456-2.279-1.29-3.086C11.03 7.831 10 7.401 8.75 7.375h-2.5c-1.25.026-2.279.456-3.086 1.29-.833.806-1.263 1.835-1.289 3.085v7.5c.026 1.25.456 2.279 1.29 3.086.806.833 1.835 1.263 3.085 1.289h2.5c1.25-.026 2.279-.456 3.086-1.29.833-.806 1.263-1.835 1.289-3.085M0 11.75c.052-1.77.664-3.242 1.836-4.414C3.008 6.164 4.479 5.552 6.25 5.5h2.5c1.77.052 3.242.664 4.414 1.836C14.336 8.508 14.948 9.979 15 11.75v7.5c-.052 1.77-.664 3.242-1.836 4.414-1.172 1.172-2.643 1.784-4.414 1.836h-2.5c-1.77-.052-3.242-.664-4.414-1.836C.664 22.492.052 21.021 0 19.25zm7.5-2.5c.365 0 .664.117.898.352.235.234.352.533.352.898v1.25c0 .365-.117.664-.352.898-.234.235-.533.352-.898.352s-.664-.117-.898-.352c-.235-.234-.352-.533-.352-.898V10.5c0-.365.117-.664.352-.898.234-.235.533-.352.898-.352'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedComputerMouseScrollwheelLgBoldIcon);
export default ForwardRef;
