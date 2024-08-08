import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyWarningIcon = (
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
    <g clipPath='url(#60bc6d3bf8bad1caaa86b97a652935cc__a)'>
      <path
        fill='#FFAD3A'
        d='M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0m.003 10.667q-.55 0-.943.392-.391.393-.393.944 0 .553.393.942t.943.388.94-.388.39-.942q0-.552-.39-.944a1.27 1.27 0 0 0-.94-.392m-.317-7.968c-.629.157-1.02.655-1.02 1.258.032.365.059.733.09 1.097l.27 4.135c.031.47.449.811.987.811.539 0 .961-.364.988-.839 0-.165.018-.717.031-.839.058-.89.122-1.779.18-2.668l.121-1.729c0-.207-.031-.392-.121-.576-.27-.516-.898-.779-1.526-.65'
      />
    </g>
    <defs>
      <clipPath id='60bc6d3bf8bad1caaa86b97a652935cc__a'>
        <path fill='#fff' d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyWarningIcon);
export default ForwardRef;
