import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyRightIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 18 7'
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
        d='M5.959 4A3 3 0 0 1 .04 4H0V3h.041A3 3 0 0 1 5.96 3H18v1z'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='3f8a839f3e9e223d8f106ad520f31666__a'>
        <path d='M0 0h18v7H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyRightIcon);
export default ForwardRef;
