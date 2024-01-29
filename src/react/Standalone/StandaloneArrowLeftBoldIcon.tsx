import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneArrowLeftBoldIcon = (
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
    <path d='M7.523 17.164a.9.9 0 0 1-.273-.664q0-.39.273-.664l6.875-6.563q.704-.546 1.329 0 .546.704-.04 1.329l-5.156 4.96h13.282q.858.079.937.938-.079.859-.937.938H10.53l5.196 4.96q.546.626 0 1.329-.625.546-1.29 0l-6.874-6.563z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowLeftBoldIcon);
export default ForwardRef;
