import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedMobileNotchLgBoldIcon = (
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
        d='M10 7.375V8c-.026.39-.234.599-.625.625h-3.75C5.235 8.599 5.026 8.391 5 8v-.625H3.75c-.365 0-.664.117-.898.352-.235.234-.352.533-.352.898v13.75c0 .365.117.664.352.898.234.235.533.352.898.352h7.5c.365 0 .664-.117.898-.352.235-.234.352-.533.352-.898V8.625c0-.365-.117-.664-.352-.898-.234-.235-.533-.352-.898-.352zM.625 8.625c.026-.885.326-1.628.898-2.227.6-.572 1.342-.872 2.227-.898h7.5c.885.026 1.628.326 2.227.898.572.6.872 1.342.898 2.227v13.75c-.026.885-.325 1.628-.898 2.227-.6.572-1.342.872-2.227.898h-7.5c-.885-.026-1.628-.326-2.227-.898-.572-.6-.872-1.342-.898-2.227z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileNotchLgBoldIcon);
export default ForwardRef;
