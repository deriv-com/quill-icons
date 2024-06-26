import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyCalendarDateTo2pxIcon = (
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
      <path d='M11 10.25H4.25v1.5H11a.75.75 0 0 0 0-1.5M4.25 9A.75.75 0 0 1 5 8.25h5.339a1 1 0 1 1 0 1.5H5A.75.75 0 0 1 4.25 9' />
      <path
        fillRule='evenodd'
        d='M6 2a1 1 0 0 0-2 0 3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3 1 1 0 1 0-2 0zm6 2a1 1 0 0 1 1 1H3a1 1 0 0 1 1-1zm-9 8V7h10v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1'
        clipRule='evenodd'
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LegacyCalendarDateTo2pxIcon);
export default ForwardRef;
