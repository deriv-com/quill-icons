import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyWithdrawalIcon = (
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
      <path d='M4.5 0a4.49 4.49 0 0 1 4.242 2.989H12.5a2.5 2.5 0 0 1 2.5 2.5v2.779A2 2 0 0 1 16 10v2a2 2 0 0 1-1.016 1.741C14.844 14.995 13.786 16 12.5 16H2.54C1.16 16 .003 14.84.003 13.46V5h.024A4.5 4.5 0 0 1 4.5 0m8 3.989H8.972Q9 4.243 9 4.5a4.5 4.5 0 0 1-7.997 2.832v6.128c0 .828.709 1.54 1.537 1.54h9.96c.64 0 1.187-.425 1.402-1H11a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h3V5.489a1.5 1.5 0 0 0-1.5-1.5M14 9h-3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1m-2 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2M4.5 1a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7M6 4a.5.5 0 0 1 0 1H3a.5.5 0 0 1 0-1z' />
    </g>
    <defs>
      <clipPath id='40ebe86d6167179fb3cfc27ca1ddaa0d__a'>
        <path d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyWithdrawalIcon);
export default ForwardRef;
