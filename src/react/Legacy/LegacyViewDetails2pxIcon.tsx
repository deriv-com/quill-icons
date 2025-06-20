import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyViewDetails2pxIcon = (
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
      <path d='M6 3.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zM5.25 6A.75.75 0 0 1 6 5.25h4a.75.75 0 0 1 0 1.5H6A.75.75 0 0 1 5.25 6M6 7.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z' />
      <path
        fillRule='evenodd'
        d='M5 0a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h5.113a2.74 2.74 0 0 0 1.887.75c.487 0 .944-.127 1.34-.348l1.13 1.128a.75.75 0 1 0 1.06-1.06l-1.128-1.13c.222-.396.348-.853.348-1.34a2.74 2.74 0 0 0-.75-1.887V3a3 3 0 0 0-3-3zm7 9.25A2.75 2.75 0 0 0 9.25 12H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1zm0 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='de7102e88c2f706645e953be046589c2__a'>
        <path d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyViewDetails2pxIcon);
export default ForwardRef;
