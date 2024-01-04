import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneAtRegularIcon = (
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
      d='M16 7.75c-1.64.026-3.112.43-4.414 1.21a8.187 8.187 0 0 0-3.125 3.126C7.68 13.388 7.276 14.859 7.25 16.5c.026 1.64.43 3.112 1.21 4.414a8.187 8.187 0 0 0 3.126 3.125c1.302.781 2.773 1.185 4.414 1.211.39.026.599.234.625.625-.026.39-.234.599-.625.625-1.875-.026-3.555-.482-5.04-1.367a9.907 9.907 0 0 1-3.593-3.594C6.482 20.055 6.026 18.375 6 16.5c.026-1.875.482-3.555 1.367-5.04a9.907 9.907 0 0 1 3.594-3.593C12.445 6.982 14.125 6.526 16 6.5c1.875.026 3.555.482 5.04 1.367a9.907 9.907 0 0 1 3.593 3.594c.885 1.484 1.341 3.164 1.367 5.039v.938c-.026.963-.365 1.77-1.016 2.421-.65.651-1.458.99-2.422 1.016-.65 0-1.25-.17-1.796-.508a3.209 3.209 0 0 1-1.211-1.289c-.86 1.146-2.045 1.745-3.555 1.797-1.25-.026-2.279-.456-3.086-1.29-.833-.806-1.263-1.835-1.289-3.085.026-1.25.456-2.279 1.29-3.086.806-.833 1.835-1.263 3.085-1.289 1.25.026 2.292.469 3.125 1.328v-.078c.026-.39.234-.599.625-.625.39.026.599.234.625.625v4.063c.026.625.234 1.145.625 1.562.417.39.938.599 1.563.625.625-.026 1.145-.234 1.562-.625.39-.417.599-.938.625-1.563V16.5c-.026-1.64-.43-3.112-1.21-4.414a8.187 8.187 0 0 0-3.126-3.125C19.112 8.18 17.641 7.776 16 7.75Zm3.125 8.75c-.026-1.172-.547-2.07-1.563-2.695-1.041-.573-2.083-.573-3.125 0-1.015.625-1.536 1.523-1.562 2.695.026 1.172.547 2.07 1.563 2.695 1.041.573 2.083.573 3.124 0 1.016-.625 1.537-1.523 1.563-2.695Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneAtRegularIcon);
export default ForwardRef;
