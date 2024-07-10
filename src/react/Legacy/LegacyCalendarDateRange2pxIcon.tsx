import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyCalendarDateRange2pxIcon = (
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
    <g fill='#333'>
      <path d='M4.25 10.25h6.089a1 1 0 1 1 0 1.5H4.25zM5.661 9.75a1 1 0 1 1 0-1.5h6.089v1.5z' />
      <path
        fillRule='evenodd'
        d='M5 1a1 1 0 0 1 1 1h4a1 1 0 1 1 2 0 3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3 1 1 0 0 1 1-1M4 4a1 1 0 0 0-1 1h10a1 1 0 0 0-1-1zM3 7v5a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V7z'
        clipRule='evenodd'
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LegacyCalendarDateRange2pxIcon);
export default ForwardRef;
