import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacySellTimeIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 16 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath='url(#1b657c82a998cbd2dd1fabb256606779__a)'>
      <path
        fill='#4BB4B3'
        d='M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0m0 1.143a6.857 6.857 0 1 0 0 13.714A6.857 6.857 0 0 0 8 1.143M9.5 2.5a.5.5 0 0 1 .09.992L9.5 3.5h-1v1.028a4.5 4.5 0 1 1-1 0V3.5h-1a.5.5 0 0 1-.492-.41L6 3a.5.5 0 0 1 .41-.492L6.5 2.5zM8 5.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7m1.95 1.649a.5.5 0 0 1 .054.638l-.058.069L8.35 9.429a.5.5 0 0 1-.76-.643l.058-.069 1.594-1.573a.5.5 0 0 1 .707.005'
      />
    </g>
    <defs>
      <clipPath id='1b657c82a998cbd2dd1fabb256606779__a'>
        <path fill='#fff' d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacySellTimeIcon);
export default ForwardRef;
