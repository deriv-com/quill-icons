import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCopyLgRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 18 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M15.25 19.25c.365 0 .664-.117.898-.352.235-.234.352-.533.352-.898v-7.969a.52.52 0 0 0-.195-.43l-2.657-2.656a.52.52 0 0 0-.43-.195H9c-.365 0-.664.117-.898.352-.235.234-.352.533-.352.898v10c0 .365.117.664.352.898.234.235.533.352.898.352zm1.953-10.547c.365.365.547.807.547 1.328V18c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742H9c-.703-.026-1.29-.273-1.758-.742-.469-.469-.716-1.055-.742-1.758V8c.026-.703.273-1.29.742-1.758C7.711 5.773 8.297 5.526 9 5.5h4.219c.52 0 .963.182 1.328.547zM2.75 10.5h2.5v1.25h-2.5c-.365 0-.664.117-.898.352-.235.234-.352.533-.352.898v10c0 .365.117.664.352.898.234.235.533.352.898.352H9c.365 0 .664-.117.898-.352.235-.234.352-.533.352-.898v-1.25h1.25V23c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742H2.75c-.703-.026-1.29-.273-1.758-.742C.523 24.289.276 23.703.25 23V13c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCopyLgRegularIcon);
export default ForwardRef;
