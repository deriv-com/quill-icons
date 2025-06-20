import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacySecurityIcon = (
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
      <path d='M8 0a1 1 0 0 1 .73.28l.224.207A6.8 6.8 0 0 0 13.36 2.18 1.71 1.71 0 0 1 15 3.84v.5l.031.5a16.9 16.9 0 0 1-.771 5.92 8 8 0 0 1-2 3A10.6 10.6 0 0 1 8.38 16H8l-.23-.1h-.16a10.5 10.5 0 0 1-3.89-2.24 8.1 8.1 0 0 1-2-3A16.9 16.9 0 0 1 1 4.33v-.5a1.71 1.71 0 0 1 1.68-1.66A6.8 6.8 0 0 0 7.29.27L7.392.19C7.569.066 7.782 0 8 0m0 1-.23.212a7.8 7.8 0 0 1-5.08 1.959.71.71 0 0 0-.69.68v.53a16.1 16.1 0 0 0 .68 5.98A7 7 0 0 0 4.41 13a9.5 9.5 0 0 0 3.52 2h.17a9.4 9.4 0 0 0 3.48-2 7.1 7.1 0 0 0 1.68-2.65c.594-1.941.818-3.977.66-6v-.51a.71.71 0 0 0-.69-.68A7.8 7.8 0 0 1 8 1m2 6a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm0 1H6v3h4zm-2 .5a.5.5 0 0 1 .25.933v.578a.25.25 0 1 1-.5 0v-.577A.5.5 0 0 1 8 8.501M8 3a2 2 0 0 1 2 2v1a.5.5 0 0 1-1 0V5a1 1 0 1 0-2 0v1a.5.5 0 1 1-1 0V5a2 2 0 0 1 2-2' />
    </g>
    <defs>
      <clipPath id='4fa9c3ab0ec3f0137b0606dcc67c7d00__a'>
        <path d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacySecurityIcon);
export default ForwardRef;
