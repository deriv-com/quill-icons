import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacySyntheticIndicesIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#fff'
      d='m13 10 1-.5-1-3h9L16 15l-1-2.5-1 .5 1 2.5H6L12 7zM5.5 16.5H15L13 19l1 .5 2-2.5 4 8.5h-9.5l2-3-1-.5-2 3zM27 15.5l-4-9-6.158 9H20v1h-3.25L21 25l6-8.5h-4v-1z'
    />
    <path
      fill='#33658A'
      fillRule='evenodd'
      d='M6 0a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6h20a6 6 0 0 0 6-6V6a6 6 0 0 0-6-6zm7 10 1-.5-1-3h9L16 15l-1-2.5-1 .5 1 2.5H6L12 7zm-7.5 6.5H15L13 19l1 .5 2-2.5 4 8.5h-9.5l2-3-1-.5-2 3zM23 6.5l4 9h-4v1h4L21 25l-4.25-8.5H20v-1h-3.158z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(LegacySyntheticIndicesIcon);
export default ForwardRef;
