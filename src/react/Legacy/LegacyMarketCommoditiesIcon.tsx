import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyMarketCommoditiesIcon = (
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
      <path d='M10 3a.5.5 0 0 1 .447.276L12.308 7H13.5a.5.5 0 0 1 .398.197l.05.08 2 4A.5.5 0 0 1 15.5 12H.5a.5.5 0 0 1-.447-.724l2-4A.5.5 0 0 1 2.5 7h1.19l1.863-3.724a.5.5 0 0 1 .354-.267L6 3zm3.19 5H9.846l-1.125 3h5.969zM6.153 8H2.809l-1.5 3h5.969zm2.625 0H7.22L8 10.076zm.912-4H6.309l-1.5 3h6.381z' />
    </g>
    <defs>
      <clipPath id='0f6abce50f6bf1362508081aaa2ec480__a'>
        <path d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyMarketCommoditiesIcon);
export default ForwardRef;
