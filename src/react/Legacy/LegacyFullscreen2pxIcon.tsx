import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyFullscreen2pxIcon = (
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
    <g fill='#333' clipPath='url(#0be744c21f4a255d6bea7f5a20e3750a__a)'>
      <path d='M2 3a1 1 0 0 1 1-1h2a1 1 0 0 0 0-2H3a3 3 0 0 0-3 3v2a1 1 0 0 0 2 0zM11 0a1 1 0 1 0 0 2h2a1 1 0 0 1 1 1v2a1 1 0 1 0 2 0V3a3 3 0 0 0-3-3zM1 10a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2H3a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1M16 11a1 1 0 1 0-2 0v2a1 1 0 0 1-1 1h-2a1 1 0 1 0 0 2h2a3 3 0 0 0 3-3z' />
    </g>
    <defs>
      <clipPath id='0be744c21f4a255d6bea7f5a20e3750a__a'>
        <path fill='#fff' d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyFullscreen2pxIcon);
export default ForwardRef;
