import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneWindowMaximizeRegularIcon = (
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
    <path d='M8.5 9c-.703 0-1.25.586-1.25 1.25V14h17.5v-3.75c0-.664-.586-1.25-1.25-1.25zm-1.25 6.25v7.5c0 .703.547 1.25 1.25 1.25h15c.664 0 1.25-.547 1.25-1.25v-7.5zm-1.25-5c0-1.367 1.094-2.5 2.5-2.5h15c1.367 0 2.5 1.133 2.5 2.5v12.5c0 1.406-1.133 2.5-2.5 2.5h-15a2.47 2.47 0 0 1-2.5-2.5z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneWindowMaximizeRegularIcon);
export default ForwardRef;
