import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneChevronRightRegularIcon = (
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
    <path d='M21.43 16.07q.39.43 0 .86l-7.5 7.5q-.43.39-.86 0-.39-.43 0-.86l7.032-7.07-7.032-7.07q-.39-.43 0-.86.43-.39.86 0z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneChevronRightRegularIcon);
export default ForwardRef;
