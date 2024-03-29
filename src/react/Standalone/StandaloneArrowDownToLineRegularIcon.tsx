import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneArrowDownToLineRegularIcon = (
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
    <path d='M9.125 25.25a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h13.75c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625zm7.305-3.906a.66.66 0 0 1-.899 0l-5-5a.66.66 0 0 1 0-.899.66.66 0 0 1 .899 0l3.945 3.946V8.375c0-.312.273-.625.625-.625.313 0 .625.313.625.625V19.39l3.906-3.945a.66.66 0 0 1 .899 0 .66.66 0 0 1 0 .899z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowDownToLineRegularIcon);
export default ForwardRef;
