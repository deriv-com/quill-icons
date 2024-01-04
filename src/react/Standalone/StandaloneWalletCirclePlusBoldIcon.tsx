import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneWalletCirclePlusBoldIcon = (
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
      d='M3.5 11.188A3.443 3.443 0 0 1 6.938 7.75h14.375a.95.95 0 0 1 .937.938c0 .546-.43.937-.938.937H6.938c-.898 0-1.562.703-1.562 1.563v10.624c0 .899.664 1.563 1.563 1.563h9.53c.235.703.626 1.328 1.095 1.875H6.938A3.418 3.418 0 0 1 3.5 21.812V11.188Zm3.75 1.25c0-.508.39-.938.938-.938h11.874c1.563 0 2.891 1.094 3.282 2.54-.157 0-.313-.04-.469-.04-.508 0-1.016.078-1.484.156-.274-.43-.782-.781-1.328-.781H8.188c-.547 0-.938-.39-.938-.938Zm10 8.437c0-3.086 2.5-5.625 5.625-5.625 3.086 0 5.625 2.54 5.625 5.625a5.626 5.626 0 0 1-5.625 5.625 5.602 5.602 0 0 1-5.625-5.625Zm2.5 0c0 .352.273.625.625.625h1.875v1.875c0 .352.273.625.625.625a.642.642 0 0 0 .625-.625V21.5h1.875a.642.642 0 0 0 .625-.625c0-.313-.313-.625-.625-.625H23.5v-1.875c0-.313-.313-.625-.625-.625a.642.642 0 0 0-.625.625v1.875h-1.875a.642.642 0 0 0-.625.625Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneWalletCirclePlusBoldIcon);
export default ForwardRef;
