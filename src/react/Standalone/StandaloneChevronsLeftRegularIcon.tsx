import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneChevronsLeftRegularIcon = (
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
    <path d='m8.031 16.07 7.5-7.5a.66.66 0 0 1 .899 0 .66.66 0 0 1 0 .899L9.36 16.5l7.07 7.07a.66.66 0 0 1 0 .899.66.66 0 0 1-.899 0l-7.5-7.5a.66.66 0 0 1 0-.899m15-7.5a.66.66 0 0 1 .899 0 .66.66 0 0 1 0 .899L16.86 16.5l7.07 7.07a.66.66 0 0 1 0 .899.66.66 0 0 1-.899 0l-7.5-7.5a.66.66 0 0 1 0-.899z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneChevronsLeftRegularIcon);
export default ForwardRef;
