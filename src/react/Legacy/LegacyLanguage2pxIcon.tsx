import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyLanguage2pxIcon = (
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
    <g fill='#333' clipPath='url(#61a1e4081daac8c411769377a1c844d5__a)'>
      <path d='M4 4.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zM3.25 7A.75.75 0 0 1 4 6.25h8a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 3.25 7M4 8.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z' />
      <path
        fillRule='evenodd'
        d='M3 0a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h2.586l1.707 1.707a1 1 0 0 0 1.414 0L10.414 14H13a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3zM2 3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.586A2 2 0 0 0 9 12.586l-1 1-1-1A2 2 0 0 0 5.586 12H3a1 1 0 0 1-1-1z'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='61a1e4081daac8c411769377a1c844d5__a'>
        <path fill='#fff' d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyLanguage2pxIcon);
export default ForwardRef;
