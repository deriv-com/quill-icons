import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const CurrencySingleCollateralDaiIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath='url(#507416aa68141a28bd22a87d7880cc79__a)'>
      <path
        fill='#F5AC37'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#fff'
        d='M31 16c0 8.284-6.716 15-15 15S1 24.284 1 16 7.716 1 16 1s15 6.716 15 15'
      />
      <path fill='#FFCC80' d='M6 16h10v10z' />
      <path fill='#F7B14A' d='M16 9V6L6 16l10 3v-6l-3 3H9z' />
      <path fill='#F7C57B' d='M26 16H16v10z' />
      <path fill='#F7B14A' d='M16 9V6l10 10-10 3v-6l3 3h4z' />
    </g>
    <defs>
      <clipPath id='507416aa68141a28bd22a87d7880cc79__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(CurrencySingleCollateralDaiIcon);
export default ForwardRef;
