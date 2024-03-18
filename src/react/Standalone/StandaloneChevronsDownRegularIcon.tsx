import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneChevronsDownRegularIcon = (
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
    <path d='M8.031 9.469a.66.66 0 0 1 0-.899.66.66 0 0 1 .899 0L16 15.64l7.031-7.07a.66.66 0 0 1 .899 0 .66.66 0 0 1 0 .899l-7.5 7.5a.66.66 0 0 1-.899 0zm0 7.5a.66.66 0 0 1 0-.899.66.66 0 0 1 .899 0L16 23.14l7.031-7.07a.66.66 0 0 1 .899 0 .66.66 0 0 1 0 .899l-7.5 7.5a.66.66 0 0 1-.899 0z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneChevronsDownRegularIcon);
export default ForwardRef;
