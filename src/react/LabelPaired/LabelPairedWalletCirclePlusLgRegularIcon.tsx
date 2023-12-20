import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedWalletCirclePlusLgRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 25 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M0 9.875A3.11 3.11 0 0 1 3.125 6.75h15c.313 0 .625.313.625.625a.642.642 0 0 1-.625.625h-15C2.07 8 1.25 8.86 1.25 9.875v11.25C1.25 22.18 2.07 23 3.125 23h10.117c.235.469.508.898.82 1.25H3.126C1.367 24.25 0 22.883 0 21.125zm3.75 0c0-.312.273-.625.625-.625h12.5A3.134 3.134 0 0 1 20 12.375v.664c-.234 0-.43-.039-.625-.039-.234 0-.43.04-.625.04v-.665c0-1.016-.86-1.875-1.875-1.875h-12.5a.617.617 0 0 1-.625-.625m10 10c0-3.086 2.5-5.625 5.625-5.625 3.086 0 5.625 2.54 5.625 5.625a5.626 5.626 0 0 1-5.625 5.625 5.602 5.602 0 0 1-5.625-5.625m1.25 0a4.368 4.368 0 0 0 4.375 4.375c2.383 0 4.375-1.953 4.375-4.375 0-2.383-1.992-4.375-4.375-4.375-2.422 0-4.375 1.992-4.375 4.375m1.25 0c0-.312.273-.625.625-.625h1.875v-1.875c0-.312.273-.625.625-.625.313 0 .625.313.625.625v1.875h1.875c.313 0 .625.313.625.625a.642.642 0 0 1-.625.625H20v1.875a.642.642 0 0 1-.625.625.617.617 0 0 1-.625-.625V20.5h-1.875a.617.617 0 0 1-.625-.625'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWalletCirclePlusLgRegularIcon);
export default ForwardRef;
