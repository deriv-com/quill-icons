import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneArrowDownFillIcon = (
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
    <path d='m15.102 24.898-6.25-6.25a1.205 1.205 0 0 1 0-1.757 1.205 1.205 0 0 1 1.757 0l4.141 4.101V9c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25v11.992l4.102-4.101a1.205 1.205 0 0 1 1.757 0c.508.468.508 1.289 0 1.757l-6.25 6.25a1.205 1.205 0 0 1-1.757 0' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowDownFillIcon);
export default ForwardRef;
