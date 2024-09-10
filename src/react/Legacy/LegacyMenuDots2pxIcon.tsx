import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyMenuDots2pxIcon = (
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
      <path d='M8 12a2 2 0 1 1 0 4 2 2 0 0 1 0-4m0-6a2 2 0 1 1 0 4 2 2 0 0 1 0-4m0-6a2 2 0 1 1 0 4 2 2 0 0 1 0-4' />
    </g>
    <defs>
      <clipPath id='e8d21ffa8ae442390920996fe1972f05__a'>
        <path d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyMenuDots2pxIcon);
export default ForwardRef;
