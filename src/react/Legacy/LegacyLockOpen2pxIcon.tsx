import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyLockOpen2pxIcon = (
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
      <path d='M8 12.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3' />
      <path
        fillRule='evenodd'
        d='M6 4a2 2 0 1 1 4 0v2H5a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V9a3 3 0 0 0-2-2.83V4a4 4 0 0 0-8 0 1 1 0 0 0 2 0m5 4H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='bee297aa0edf651a6cb2d9b2be39155e__a'>
        <path d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyLockOpen2pxIcon);
export default ForwardRef;
