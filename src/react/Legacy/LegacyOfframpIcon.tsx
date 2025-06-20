import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyOfframpIcon = (
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
      <path d='M4 0a4 4 0 0 1 3.838 5.13l3.032 3.032A4 4 0 1 1 12 16l-.04-.001L2.5 16a2.5 2.5 0 0 1-2.495-2.336L0 13.5V4a4 4 0 0 1 4-4m8 9a3 3 0 0 0-.03 6H12a3 3 0 1 0 0-6M7.4 6.107a3.997 3.997 0 0 1-6.4.539V13.5a1.5 1.5 0 0 0 1.356 1.493L2.5 15h6.854a3.997 3.997 0 0 1 .539-6.4zm5.031 3.076v.67c.53.176.895.673.895 1.238v.112h-.82v-.112a.485.485 0 1 0-.485.487 1.308 1.308 0 0 1 .41 2.548v.67h-.819v-.67a1.31 1.31 0 0 1-.895-1.238v-.113h.82v.113c0 .268.217.486.484.486a.486.486 0 0 0 0-.974 1.308 1.308 0 0 1-.409-2.547v-.67zM4 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6m5.784 2.089.07.057L12 5.293V4.5a.5.5 0 0 1 .41-.492L12.5 4a.5.5 0 0 1 .492.41L13 4.5v2a.5.5 0 0 1-.788.41l-.066-.056-3-3a.5.5 0 0 1 .638-.765m-6.178-1.46v.666h.664v-.667h.665v.667a.997.997 0 0 1 .737 1.668c.168.186.26.427.26.677a.995.995 0 0 1-.997.992V6.3H4.27v-.667h-.664V6.3h-.664v-.667h-.665v-.668h.665V2.962h-.665v-.667h.665v-.667zm1.33 2.668h-1.33v.667h1.33a.33.33 0 0 0 .33-.333.33.33 0 0 0-.33-.334m0-1.335h-1.33v.668h1.33a.33.33 0 0 0 .33-.334.33.33 0 0 0-.33-.334' />
    </g>
    <defs>
      <clipPath id='65accac2b7099c361245b12bb942e635__a'>
        <path d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyOfframpIcon);
export default ForwardRef;
