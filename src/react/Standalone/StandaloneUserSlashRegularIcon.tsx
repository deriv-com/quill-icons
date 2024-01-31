import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneUserSlashRegularIcon = (
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
    <path d='M21.5 11.5q0 1.289-.586 2.344a4.95 4.95 0 0 1-1.523 1.758l-1.055-.82a4.15 4.15 0 0 0 1.406-1.368 3.7 3.7 0 0 0 .508-1.914q-.038-1.602-1.094-2.656Q18.102 7.789 16.5 7.75q-1.327.039-2.266.781a3.67 3.67 0 0 0-1.328 1.953l-1.054-.82q.586-1.406 1.796-2.266 1.25-.859 2.852-.898 2.109.04 3.555 1.445Q21.46 9.391 21.5 11.5m2.031 13.75 1.29 1.016a1.2 1.2 0 0 1-.743.234H8.922q-.508 0-.82-.352-.352-.312-.352-.82.079-2.93 2.031-4.922 1.992-1.953 4.922-2.031h.156l1.563 1.25h-1.719q-2.382.078-3.984 1.64Q9.078 22.868 9 25.25zM5.016 6.617l23.75 18.79q.429.39.117.859-.43.429-.899.117L4.234 7.633q-.429-.43-.117-.899.43-.39.899-.117' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneUserSlashRegularIcon);
export default ForwardRef;
