import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyCalendarPrevious2pxIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.53 9.53a.75.75 0 0 0-1.06-1.06l-1 1a.75.75 0 0 0 0 1.06l1 1a.75.75 0 0 0 1.06-1.06L7.06 10zM10.53 8.47a.75.75 0 0 1 0 1.06l-.47.47.47.47a.75.75 0 1 1-1.06 1.06l-1-1a.75.75 0 0 1 0-1.06l1-1a.75.75 0 0 1 1.06 0' />
      <path
        fillRule='evenodd'
        d='M11 1a1 1 0 0 1 1 1 3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3 1 1 0 0 1 2 0h4a1 1 0 0 1 1-1M3 5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1zm0 2v5a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V7z'
        clipRule='evenodd'
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LegacyCalendarPrevious2pxIcon);
export default ForwardRef;
