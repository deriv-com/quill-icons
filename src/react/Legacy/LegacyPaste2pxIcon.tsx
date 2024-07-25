import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyPaste2pxIcon = (
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
    <g
      fill='#333'
      fillRule='evenodd'
      clipPath='url(#d63f5d1d4dcc9ada33f95a7193d3a3b8__a)'
      clipRule='evenodd'
    >
      <path d='M7.75 7.5a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75M7.75 10a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75M7.75 12.5a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75' />
      <path d='M2.762 1.01A2 2 0 0 1 4.5 0h2a2 2 0 0 1 1.738 1.01A3 3 0 0 1 11 4h2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H8a3 3 0 0 1-2.83-2H3a3 3 0 0 1-3-3V4a3 3 0 0 1 2.762-2.99M5 12V7a3 3 0 0 1 3-3h1a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1zm3-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1z' />
    </g>
    <defs>
      <clipPath id='d63f5d1d4dcc9ada33f95a7193d3a3b8__a'>
        <path fill='#fff' d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyPaste2pxIcon);
export default ForwardRef;
