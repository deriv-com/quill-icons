import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneEllipsisVerticalRegularIcon = (
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
      d='M16 21.5c.365 0 .664.117.898.352.235.234.352.533.352.898s-.117.664-.352.898c-.234.235-.533.352-.898.352s-.664-.117-.898-.352c-.235-.234-.352-.533-.352-.898s.117-.664.352-.898c.234-.235.533-.352.898-.352Zm0-6.25c.365 0 .664.117.898.352.235.234.352.533.352.898s-.117.664-.352.898c-.234.235-.533.352-.898.352s-.664-.117-.898-.352c-.235-.234-.352-.533-.352-.898s.117-.664.352-.898c.234-.235.533-.352.898-.352Zm1.25-5c0 .365-.117.664-.352.898-.234.235-.533.352-.898.352s-.664-.117-.898-.352c-.235-.234-.352-.533-.352-.898s.117-.664.352-.898C15.336 9.117 15.635 9 16 9s.664.117.898.352c.235.234.352.533.352.898Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneEllipsisVerticalRegularIcon);
export default ForwardRef;
