import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyDelete2pxIcon = (
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
    <g fill='#333' clipPath='url(#f0a33b9a730a28368b31a18414e9d741__a)'>
      <path d='M5.75 7a.75.75 0 0 0-1.5 0v5a.75.75 0 0 0 1.5 0zM8 6.25a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0V7A.75.75 0 0 1 8 6.25M11.75 7a.75.75 0 0 0-1.5 0v5a.75.75 0 0 0 1.5 0z' />
      <path
        fillRule='evenodd'
        d='M5 0a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V5a1 1 0 1 0 0-2h-2V2a2 2 0 0 0-2-2zM3 13V5h10v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1m8-10V2H5v1z'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='f0a33b9a730a28368b31a18414e9d741__a'>
        <path fill='#fff' d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyDelete2pxIcon);
export default ForwardRef;
