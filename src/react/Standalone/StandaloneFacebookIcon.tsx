import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneFacebookIcon = (
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
      d='M25.688 16.5c-.053 2.474-.834 4.583-2.344 6.328-1.51 1.745-3.45 2.826-5.82 3.242v-6.758h2.265l.43-2.812h-2.696v-1.836a1.4 1.4 0 0 1 .313-1.016c.234-.312.651-.468 1.25-.468h1.21v-2.383c-.025-.026-.247-.065-.663-.117a12.786 12.786 0 0 0-1.485-.078c-1.12 0-2.005.325-2.656.976-.65.651-.99 1.576-1.015 2.774V16.5h-2.461v2.813h2.46v6.757c-2.37-.416-4.31-1.497-5.82-3.242-1.51-1.745-2.291-3.854-2.344-6.328.027-1.797.47-3.425 1.329-4.883a9.672 9.672 0 0 1 3.476-3.476c1.458-.86 3.086-1.302 4.883-1.329 1.797.027 3.424.47 4.883 1.329a9.672 9.672 0 0 1 3.476 3.476c.86 1.458 1.302 3.086 1.328 4.883Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneFacebookIcon);
export default ForwardRef;
