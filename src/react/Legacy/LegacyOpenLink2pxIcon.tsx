import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyOpenLink2pxIcon = (
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
    <g fill='#333' clipPath='url(#afbf953f575d70fb95fbbbc717bfc337__a)'>
      <path d='M0 3a3 3 0 0 1 3-3h2a1 1 0 0 1 0 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-2a1 1 0 1 1 2 0v2a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3z' />
      <path d='M10 1a1 1 0 0 1 1-1h3a2 2 0 0 1 2 2v3a1 1 0 1 1-2 0V3.414L8.707 8.707a1 1 0 0 1-1.414-1.414L12.586 2H11a1 1 0 0 1-1-1' />
    </g>
    <defs>
      <clipPath id='afbf953f575d70fb95fbbbc717bfc337__a'>
        <path fill='#fff' d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyOpenLink2pxIcon);
export default ForwardRef;
