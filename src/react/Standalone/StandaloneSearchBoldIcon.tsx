import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneSearchBoldIcon = (
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
    <path d='M20.375 14.625q0-1.68-.82-3.125a6.5 6.5 0 0 0-2.305-2.305 6.37 6.37 0 0 0-3.125-.82 6.37 6.37 0 0 0-3.125.82A6.5 6.5 0 0 0 8.695 11.5a6.2 6.2 0 0 0-.82 3.125q0 1.68.82 3.125A6.5 6.5 0 0 0 11 20.055q1.485.82 3.125.82a6.37 6.37 0 0 0 3.125-.82 6.5 6.5 0 0 0 2.305-2.305q.82-1.445.82-3.125m-1.21 6.367q-2.11 1.719-5.04 1.758-3.438-.078-5.742-2.383Q6.078 18.063 6 14.625q.078-3.438 2.383-5.742 2.304-2.305 5.742-2.383 3.438.078 5.742 2.383 2.305 2.304 2.383 5.742-.039 2.93-1.758 5.04l5.235 5.233q.546.665 0 1.329-.665.546-1.329 0z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneSearchBoldIcon);
export default ForwardRef;
