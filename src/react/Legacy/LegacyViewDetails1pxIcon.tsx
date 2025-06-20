import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyViewDetails1pxIcon = (
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
      <path d='M11.5 1a1.5 1.5 0 0 1 1.493 1.356L13 2.5v6.671a3 3 0 0 1 1.445 4.567l1.409 1.408a.5.5 0 0 1-.638.765l-.07-.057-1.408-1.409a2.997 2.997 0 0 1-4.239-.788L9.5 14h-5a1.5 1.5 0 0 1-1.493-1.355L3 12.5v-10a1.5 1.5 0 0 1 1.356-1.493L4.5 1zm.5 9a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-.5-8h-7a.5.5 0 0 0-.492.41L4 2.5v10a.5.5 0 0 0 .41.492L4.5 13h4.671A3 3 0 0 1 12 9V2.5a.5.5 0 0 0-.41-.492zm-3 6a.5.5 0 0 1 .09.992L8.5 9h-3a.5.5 0 0 1-.09-.992L5.5 8zm2-2a.5.5 0 0 1 .09.992L10.5 7h-5a.5.5 0 0 1-.09-.992L5.5 6zm0-2a.5.5 0 0 1 .09.992L10.5 5h-5a.5.5 0 0 1-.09-.992L5.5 4z' />
    </g>
    <defs>
      <clipPath id='5efe8a4db774c11420907b31196e7ce4__a'>
        <path d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyViewDetails1pxIcon);
export default ForwardRef;
