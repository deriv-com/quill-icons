import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneChevronsUpRegularIcon = (
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
    <path d='m16.43 8.57 7.5 7.5a.66.66 0 0 1 0 .899.66.66 0 0 1-.899 0L16 9.899l-7.07 7.07a.66.66 0 0 1-.899 0 .66.66 0 0 1 0-.899l7.5-7.5a.66.66 0 0 1 .899 0m7.5 15a.66.66 0 0 1 0 .899.66.66 0 0 1-.899 0L16 17.399l-7.07 7.07a.66.66 0 0 1-.899 0 .66.66 0 0 1 0-.899l7.5-7.5a.66.66 0 0 1 .899 0z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneChevronsUpRegularIcon);
export default ForwardRef;
