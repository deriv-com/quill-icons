import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyNotification2pxIcon = (
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
    <g clipPath='url(#b9cd328590be7fbdcb8c852b55da2a4f__a)'>
      <path
        fill='#333'
        fillRule='evenodd'
        d='M6.1 1.374a2 2 0 0 1 3.8 0A5 5 0 0 1 13 6v4.764l.894 1.789A1 1 0 0 1 13 14h-3a2 2 0 1 1-4 0H3a1 1 0 0 1-.894-1.447L3 10.763V6a5 5 0 0 1 3.1-4.626M5 6a3 3 0 0 1 6 0v5.236l.382.764H4.618L5 11.236z'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='b9cd328590be7fbdcb8c852b55da2a4f__a'>
        <path fill='#fff' d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyNotification2pxIcon);
export default ForwardRef;
