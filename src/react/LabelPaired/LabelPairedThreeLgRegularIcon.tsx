import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedThreeLgRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 13 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M.25 7.375c.026-.39.234-.599.625-.625H11.5c.287 0 .482.13.586.39a.7.7 0 0 1-.156.704L4.977 14.25H7.75c1.406.026 2.591.508 3.555 1.445.937.964 1.419 2.149 1.445 3.555-.026 1.406-.508 2.591-1.445 3.555-.964.937-2.149 1.419-3.555 1.445H3.727a3.687 3.687 0 0 1-1.954-.547A3.529 3.529 0 0 1 .406 22.18l-.078-.157c-.156-.364-.065-.638.274-.82.338-.156.612-.065.82.274l.078.156c.495.885 1.237 1.341 2.227 1.367H7.75c1.068-.026 1.953-.39 2.656-1.094.703-.703 1.068-1.588 1.094-2.656-.026-1.068-.39-1.953-1.094-2.656-.703-.703-1.588-1.068-2.656-1.094H3.375c-.286 0-.482-.13-.586-.39a.701.701 0 0 1 .156-.704L9.898 8H.875c-.39-.026-.599-.234-.625-.625'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThreeLgRegularIcon);
export default ForwardRef;
