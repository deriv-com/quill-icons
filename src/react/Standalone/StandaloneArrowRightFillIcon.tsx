import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneArrowRightFillIcon = (
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
    <path d='m24.36 17.398-6.25 6.25a1.205 1.205 0 0 1-1.758 0 1.205 1.205 0 0 1 0-1.757l4.101-4.141H8.5c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25h11.953l-4.101-4.102a1.205 1.205 0 0 1 0-1.757 1.205 1.205 0 0 1 1.757 0l6.25 6.25c.508.468.508 1.289 0 1.757' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowRightFillIcon);
export default ForwardRef;
