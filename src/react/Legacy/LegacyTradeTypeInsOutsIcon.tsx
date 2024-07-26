import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyTradeTypeInsOutsIcon = (
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
    <g clipPath='url(#43330f72ec33f89a5931e5a206d4f6c9__a)'>
      <path
        fill='#333'
        d='M15.5 15a.5.5 0 0 1 .09.992L15.5 16H.5a.5.5 0 0 1-.09-.992L.5 15zM5 12.292l2.146-2.146a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 .057.638l-.057.07-3.013 3.012a.5.5 0 0 1-.236.123l-.036.005h-.002l-.014.003-.026.001h.02l.019-.004L4.5 14a.5.5 0 0 1-.151-.023l-.04-.015a1 1 0 0 1-.076-.04l-.035-.024-.005-.003-.001-.001-.046-.04.042.037.01.007-.04-.033-3.012-3.011a.5.5 0 0 1 .638-.765l.07.057L4 12.292V8H.5a.5.5 0 0 1-.09-.992L.5 7H4V.5a.5.5 0 0 1 .41-.492L4.5 0a.5.5 0 0 1 .492.41L5 .5V7h6V2.707L8.854 4.854a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1-.057-.638l.057-.07 3.013-3.012a.5.5 0 0 1 .236-.123l.036-.006L11.5 1h.011q.032 0 .063.005l.031.006.046.012.04.015a1 1 0 0 1 .076.04l.039.026.048.042-.043-.038.011.01.02.017 3.012 3.011a.5.5 0 0 1-.638.765l-.07-.057L12 2.707V7h3.5a.5.5 0 0 1 .09.992L15.5 8H12v6.5a.5.5 0 0 1-.41.492L11.5 15a.5.5 0 0 1-.492-.41L11 14.5V8H5z'
      />
    </g>
    <defs>
      <clipPath id='43330f72ec33f89a5931e5a206d4f6c9__a'>
        <path fill='#fff' d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyTradeTypeInsOutsIcon);
export default ForwardRef;
