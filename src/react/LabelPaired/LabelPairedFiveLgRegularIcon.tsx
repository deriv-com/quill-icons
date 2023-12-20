import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedFiveLgRegularIcon = (
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
        d='M2.164 7.219c.078-.287.273-.443.586-.469h8.125c.39.026.599.234.625.625-.026.39-.234.599-.625.625H3.258l-1.563 6.25H7.75c1.406.026 2.591.508 3.555 1.445.937.964 1.419 2.149 1.445 3.555-.026 1.406-.508 2.591-1.445 3.555-.964.937-2.149 1.419-3.555 1.445H3.57c-.677 0-1.289-.17-1.836-.508a3.279 3.279 0 0 1-1.25-1.406l-.156-.313c-.156-.338-.065-.611.274-.82.364-.156.638-.065.82.274l.195.312c.417.781 1.068 1.185 1.953 1.211h4.18c1.068-.026 1.953-.39 2.656-1.094.703-.703 1.068-1.588 1.094-2.656-.026-1.068-.39-1.953-1.094-2.656-.703-.703-1.588-1.068-2.656-1.094H.875a.63.63 0 0 1-.508-.234.78.78 0 0 1-.117-.547z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFiveLgRegularIcon);
export default ForwardRef;
