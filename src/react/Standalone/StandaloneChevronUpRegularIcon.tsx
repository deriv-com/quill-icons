import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneChevronUpRegularIcon = (
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
    <path d='M15.57 11.07q.43-.39.86 0l7.5 7.5q.39.43 0 .86-.43.39-.86 0L16 12.398 8.93 19.43q-.43.39-.86 0-.39-.43 0-.86z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneChevronUpRegularIcon);
export default ForwardRef;
