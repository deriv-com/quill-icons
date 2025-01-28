import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyRefresh2pxIcon = (
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
        d='M3 0a1 1 0 0 1 1 1v1.255A7 7 0 0 1 15 8a1 1 0 1 1-2 0 5 5 0 0 0-8-4h2a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1M2 7a1 1 0 0 1 1 1 5 5 0 0 0 8 4H9a1 1 0 1 1 0-2h4a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-1.255A7 7 0 0 1 1 8a1 1 0 0 1 1-1'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='4239a3f3ecf626eaebf1f02fcc996494__a'>
        <path d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyRefresh2pxIcon);
export default ForwardRef;
