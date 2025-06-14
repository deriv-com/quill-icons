import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyTradeTypeUpsDownsIcon = (
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
      <path d='M4.511 0q.031 0 .063.005l.031.006.046.012.04.015a1 1 0 0 1 .076.04l.039.026.048.042L4.81.108l.011.01.02.017 3.012 3.011a.5.5 0 0 1-.638.765l-.07-.057L5 1.707V15.5a.5.5 0 0 1-.41.492L4.5 16a.5.5 0 0 1-.492-.41L4 15.5V1.707L1.854 3.854a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1-.057-.638l.057-.07L4.16.134a.5.5 0 0 1 .236-.123l.036-.006L4.5 0zM11.5 16a.5.5 0 0 1-.151-.023l-.04-.015a1 1 0 0 1-.076-.04l-.035-.024-.005-.003-.001-.001-.046-.04.042.037.01.007-.04-.033-3.012-3.011a.5.5 0 0 1 .638-.765l.07.057L11 14.292V.5a.5.5 0 0 1 .41-.492L11.5 0a.5.5 0 0 1 .492.41L12 .5v13.792l2.146-2.146a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 .057.638l-.057.07-3.013 3.012a.5.5 0 0 1-.19.11l-.046.013-.036.005h-.002l-.014.003-.026.002.02-.001.019-.004z' />
    </g>
    <defs>
      <clipPath id='cffa2ff173c2efbcb06f1bbb9999205f__a'>
        <path d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyTradeTypeUpsDownsIcon);
export default ForwardRef;
