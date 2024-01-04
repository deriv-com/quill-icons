import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneWalletCirclePlusRegularIcon = (
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
      d='M3.5 10.875A3.11 3.11 0 0 1 6.625 7.75h15c.313 0 .625.313.625.625a.642.642 0 0 1-.625.625h-15C5.57 9 4.75 9.86 4.75 10.875v11.25C4.75 23.18 5.57 24 6.625 24h10.117c.235.469.508.898.82 1.25H6.626c-1.758 0-3.125-1.367-3.125-3.125v-11.25Zm3.75 0c0-.313.273-.625.625-.625h12.5a3.134 3.134 0 0 1 3.125 3.125v.664c-.234 0-.43-.039-.625-.039-.234 0-.43.04-.625.04v-.665c0-1.016-.86-1.875-1.875-1.875h-12.5a.617.617 0 0 1-.625-.625Zm10 10c0-3.086 2.5-5.625 5.625-5.625 3.086 0 5.625 2.54 5.625 5.625a5.626 5.626 0 0 1-5.625 5.625 5.602 5.602 0 0 1-5.625-5.625Zm1.25 0a4.368 4.368 0 0 0 4.375 4.375c2.383 0 4.375-1.953 4.375-4.375 0-2.383-1.992-4.375-4.375-4.375-2.422 0-4.375 1.992-4.375 4.375Zm1.25 0c0-.313.273-.625.625-.625h1.875v-1.875c0-.313.273-.625.625-.625.313 0 .625.313.625.625v1.875h1.875c.313 0 .625.313.625.625a.642.642 0 0 1-.625.625H23.5v1.875a.642.642 0 0 1-.625.625.617.617 0 0 1-.625-.625V21.5h-1.875a.617.617 0 0 1-.625-.625Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneWalletCirclePlusRegularIcon);
export default ForwardRef;
