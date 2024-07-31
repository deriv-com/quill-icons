import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyLogout2pxIcon = (
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
    <g fill='#333' clipPath='url(#fdd01d7acdd30c29cdb6f8e0979097e8__a)'>
      <path d='M0 3a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3v1a1 1 0 1 1-2 0V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-1a1 1 0 1 1 2 0v1a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3z' />
      <path d='M5.25 8A.75.75 0 0 1 6 7.25h7.19l-1.22-1.22a.75.75 0 0 1 1.06-1.06l2.5 2.5a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 1 1-1.06-1.06l1.22-1.22H6A.75.75 0 0 1 5.25 8' />
    </g>
    <defs>
      <clipPath id='fdd01d7acdd30c29cdb6f8e0979097e8__a'>
        <path fill='#fff' d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyLogout2pxIcon);
export default ForwardRef;
