import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneThreeRegularIcon = (
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
      d='M9.75 8.375c.026-.39.234-.599.625-.625H21c.287 0 .482.13.586.39a.7.7 0 0 1-.156.704l-6.953 6.406h2.773c1.406.026 2.591.508 3.555 1.445.937.964 1.419 2.149 1.445 3.555-.026 1.406-.508 2.591-1.445 3.555-.964.937-2.149 1.419-3.555 1.445h-4.023a3.688 3.688 0 0 1-1.954-.547 3.53 3.53 0 0 1-1.367-1.523l-.078-.157c-.156-.364-.065-.638.274-.82.338-.156.611-.065.82.274l.078.156c.495.885 1.237 1.341 2.227 1.367h4.023c1.068-.026 1.953-.39 2.656-1.094.703-.703 1.068-1.588 1.094-2.656-.026-1.068-.39-1.953-1.094-2.656-.703-.703-1.588-1.068-2.656-1.094h-4.375c-.287 0-.482-.13-.586-.39a.701.701 0 0 1 .156-.704L19.398 9h-9.023c-.39-.026-.599-.234-.625-.625'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneThreeRegularIcon);
export default ForwardRef;
