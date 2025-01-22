import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyAccountLimitsIcon = (
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
      <path d='M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0m0 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1m2.854 4.146a.5.5 0 0 1 .057.638l-.057.07-1.131 1.13a2 2 0 1 1-.707-.707l1.13-1.13a.5.5 0 0 1 .708 0M8 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0-5a6 6 0 0 1 6 6 .5.5 0 0 1-1 0A5 5 0 0 0 3 8a.5.5 0 0 1-1 0 6 6 0 0 1 6-6' />
    </g>
    <defs>
      <clipPath id='23b826d5cd09f9a7893239789bcd7b88__a'>
        <path d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyAccountLimitsIcon);
export default ForwardRef;
