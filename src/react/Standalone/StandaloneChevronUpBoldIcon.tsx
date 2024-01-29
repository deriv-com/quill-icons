import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneChevronUpBoldIcon = (
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
    <path d='M15.336 10.836q.664-.548 1.328 0l7.5 7.5q.547.664 0 1.328-.664.547-1.328 0L16 12.828l-6.836 6.836q-.664.547-1.328 0-.548-.664 0-1.328z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneChevronUpBoldIcon);
export default ForwardRef;
