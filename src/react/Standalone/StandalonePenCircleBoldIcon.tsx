import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandalonePenCircleBoldIcon = (
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
    <path d='M24.125 16.5c0-2.89-1.562-5.547-4.062-7.031-2.54-1.446-5.625-1.446-8.125 0-2.54 1.484-4.063 4.14-4.063 7.031a8.13 8.13 0 0 0 4.063 7.07c2.5 1.446 5.585 1.446 8.124 0 2.5-1.484 4.063-4.14 4.063-7.07M6 16.5a9.93 9.93 0 0 1 5-8.633c3.086-1.797 6.875-1.797 10 0 3.086 1.797 5 5.078 5 8.633 0 3.594-1.914 6.875-5 8.672-3.125 1.797-6.914 1.797-10 0-3.125-1.797-5-5.078-5-8.672m13.945-4.531.586.586c.586.586.586 1.562 0 2.187l-.86.86-2.773-2.774.86-.86c.586-.585 1.601-.585 2.187 0m-8.047 5.82 4.141-4.102 2.773 2.774-4.14 4.102a1.6 1.6 0 0 1-.547.351l-2.383.586c-.195.04-.43 0-.586-.156-.156-.157-.195-.39-.156-.625l.586-2.344c.039-.195.156-.43.312-.586' />
  </svg>
);
const ForwardRef = forwardRef(StandalonePenCircleBoldIcon);
export default ForwardRef;
