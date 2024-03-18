import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneEuroSignRegularIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='M11.078 15.25h-.703a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h.977c1.054-3.594 4.414-6.25 8.398-6.25h1.914c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H19.75c-3.281 0-6.055 2.11-7.11 5h7.735c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-8.047c-.078.43-.078.86-.078 1.25 0 .43.04.86.078 1.25h8.047c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-7.734a7.54 7.54 0 0 0 7.109 5h1.914c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H19.75c-3.984 0-7.344-2.617-8.398-6.25h-.977a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h.703C11 17.36 11 16.93 11 16.5c0-.39 0-.82.078-1.25' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneEuroSignRegularIcon);
export default ForwardRef;
