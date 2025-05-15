import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyShare2pxIcon = (
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
      <path d='M8.287.307q.134.054.243.163l3 3a.75.75 0 0 1-1.06 1.06L8.75 2.81V9a.75.75 0 0 1-1.5 0V2.81L5.53 4.53a.75.75 0 0 1-1.06-1.06l3-3a.75.75 0 0 1 .817-.163' />
      <path d='M2 8a2 2 0 0 1 2-2h1a1 1 0 0 1 0 2H4v6h8V8h-1a1 1 0 1 1 0-2h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z' />
    </g>
    <defs>
      <clipPath id='6f2ab75774ae37603c88d4dfc488812f__a'>
        <path d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyShare2pxIcon);
export default ForwardRef;
