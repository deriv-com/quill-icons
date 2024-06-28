import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyTradeTypeHighLowIcon = (
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
    <g clipPath='url(#decae0c3bb71a4b58581a4bcb94c33c7__a)'>
      <path
        fill='#333'
        d='M15.5 15a.5.5 0 0 1 .09.992L15.5 16h-8a.5.5 0 0 1-.09-.992L7.5 15zM4.784 1.089l.07.057 3 3a.5.5 0 0 1-.638.765l-.07-.057L5 2.707V15.5a.5.5 0 0 1-.41.492L4.5 16a.5.5 0 0 1-.492-.41L4 15.5V2.707L1.854 4.854a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1-.057-.638l.057-.07 3-3a.5.5 0 0 1 .638-.057M11.5 15a.5.5 0 0 1-.151-.023l-.04-.015a1 1 0 0 1-.076-.04l-.035-.024-.005-.003-.001-.001-.046-.04.042.037.01.007-.04-.033-3.012-3.011a.5.5 0 0 1 .638-.765l.07.057L11 13.292V.5a.5.5 0 0 1 .41-.492L11.5 0a.5.5 0 0 1 .492.41L12 .5v12.792l2.146-2.146a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 .057.638l-.057.07-3.013 3.012a.5.5 0 0 1-.19.11l-.046.013-.036.005h-.002l-.014.003-.026.001h.02l.019-.004zm-3-15a.5.5 0 0 1 .09.992L8.5 1h-8A.5.5 0 0 1 .41.008L.5 0z'
      />
    </g>
    <defs>
      <clipPath id='decae0c3bb71a4b58581a4bcb94c33c7__a'>
        <path fill='#fff' d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyTradeTypeHighLowIcon);
export default ForwardRef;
