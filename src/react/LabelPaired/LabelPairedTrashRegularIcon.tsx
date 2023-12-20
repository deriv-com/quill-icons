import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedTrashRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 14 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M5.563 5a.49.49 0 0 0-.438.25L4.656 6h4.688l-.469-.75A.49.49 0 0 0 8.438 5zm4.968 1H13.5c.313.02.48.188.5.5-.02.313-.187.48-.5.5h-.562l-.813 11.156a1.96 1.96 0 0 1-.625 1.313c-.375.333-.833.51-1.375.531h-6.25c-.542-.02-1-.198-1.375-.531a1.96 1.96 0 0 1-.625-1.313L1.063 7H.5c-.312-.02-.48-.187-.5-.5.02-.312.188-.48.5-.5H3.469l.812-1.281c.313-.459.74-.698 1.282-.719h2.875c.541.02.968.26 1.28.719zm1.406 1H2.063l.812 11.063c.02.27.125.49.313.656a.936.936 0 0 0 .687.281h6.25c.27 0 .5-.094.688-.281a.938.938 0 0 0 .312-.657z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTrashRegularIcon);
export default ForwardRef;
