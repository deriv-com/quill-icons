import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneCheckFillIcon = (
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
    <path d='M24.36 10.64c.507.47.507 1.29 0 1.758l-10 10a1.205 1.205 0 0 1-1.758 0l-5-5a1.205 1.205 0 0 1 0-1.757 1.205 1.205 0 0 1 1.757 0l4.141 4.101 9.102-9.101a1.205 1.205 0 0 1 1.757 0' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCheckFillIcon);
export default ForwardRef;
