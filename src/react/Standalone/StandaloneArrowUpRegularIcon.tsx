import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneArrowUpRegularIcon = (
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
    <path d='m16.43 7.945 6.875 6.875a.66.66 0 0 1 0 .899.66.66 0 0 1-.899 0l-5.781-5.82v14.726a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625V9.898l-5.82 5.82a.66.66 0 0 1-.899 0 .66.66 0 0 1 0-.898l6.875-6.875a.66.66 0 0 1 .899 0' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowUpRegularIcon);
export default ForwardRef;
