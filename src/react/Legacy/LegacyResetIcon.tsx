import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyResetIcon = (
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
    <g clipPath='url(#619672c224a7b212676e611aae65d4cb__a)'>
      <path
        fill='#333'
        d='M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0m0 1.143a6.857 6.857 0 1 0 0 13.714A6.857 6.857 0 0 0 8 1.143M5 7.5a.5.5 0 0 1 .5.5 2.5 2.5 0 0 0 4 2.001L8.5 10a.5.5 0 0 1-.09-.992L8.5 9h2a.5.5 0 0 1 .492.41L11 9.5v2a.5.5 0 0 1-.992.09L10 11.5v-.628A3.5 3.5 0 0 1 4.5 8a.5.5 0 0 1 .5-.5M5.5 4a.5.5 0 0 1 .492.41L6 4.5v.627A3.5 3.5 0 0 1 11.5 8a.5.5 0 0 1-1 0 2.5 2.5 0 0 0-4-2h1a.5.5 0 0 1 .09.992L7.5 7h-2a.5.5 0 0 1-.492-.41L5 6.5v-2a.5.5 0 0 1 .5-.5'
      />
    </g>
    <defs>
      <clipPath id='619672c224a7b212676e611aae65d4cb__a'>
        <path fill='#fff' d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyResetIcon);
export default ForwardRef;
