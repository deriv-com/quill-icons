import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedInfoLgRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 8 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2.75 8c0-.365.117-.664.352-.898.234-.235.533-.352.898-.352s.664.117.898.352c.235.234.352.533.352.898s-.117.664-.352.898c-.234.235-.533.352-.898.352s-.664-.117-.898-.352C2.867 8.664 2.75 8.365 2.75 8M.875 12.375c.026-.39.234-.599.625-.625H4c.39.026.599.234.625.625V23h2.5c.39.026.599.234.625.625-.026.39-.234.599-.625.625H.875c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625h2.5V13H1.5c-.39-.026-.599-.234-.625-.625'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h8v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedInfoLgRegularIcon);
export default ForwardRef;
