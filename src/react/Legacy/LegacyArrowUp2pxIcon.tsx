import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyArrowUp2pxIcon = (
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
      <path
        fillRule='evenodd'
        d='M7.293.293a1 1 0 0 1 1.414 0l7 7a1 1 0 0 1-1.414 1.414L9 3.414V15a1 1 0 1 1-2 0V3.414L1.707 8.707A1 1 0 0 1 .293 7.293z'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='bdfb8141f755c5c15fe5304059e66271__a'>
        <path d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyArrowUp2pxIcon);
export default ForwardRef;
