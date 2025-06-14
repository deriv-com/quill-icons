import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const CurrencyMultiCollateralDaiIcon = (
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
    <g clipPath='url(#88dd6ead8bb97393ae63e4a96eca9c1e__a)'>
      <path
        fill='#F5AC37'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#FEFEFD'
        d='M22.67 17.13c.129 0 .19 0 .2-.17q.075-.93 0-1.86c0-.12-.06-.17-.19-.17h-12.1c-.15 0-.19.05-.19.19v1.78c0 .23 0 .23.24.23zm-.48-4.28a.2.2 0 0 0 0-.14 4 4 0 0 0-.36-.63 5 5 0 0 0-.741-.93 2.5 2.5 0 0 0-.46-.45 7.2 7.2 0 0 0-3-1.52 7.5 7.5 0 0 0-1.7-.18h-5.37c-.15 0-.17.06-.17.19v3.55c0 .15 0 .19.19.19h11.54s.1-.02.12-.08zm0 6.36a2.3 2.3 0 0 0-.51 0H10.59c-.15 0-.2 0-.2.2v3.47c0 .16 0 .2.2.2h5.12q.369.029.73-.05a7.6 7.6 0 0 0 2.17-.48 4 4 0 0 0 .73-.34h.07a6.5 6.5 0 0 0 2.79-2.808s.07-.151-.01-.19zM8.38 24.88v-5.53c0-.13 0-.15-.16-.15H6.05c-.12 0-.17 0-.17-.16v-1.9H8.2c.13 0 .18 0 .18-.17v-1.88c0-.12 0-.15-.16-.15H6.05c-.12 0-.17 0-.17-.159v-1.76c0-.11 0-.14.16-.14h2.15c.15 0 .19 0 .19-.19v-5.39c0-.16 0-.2.2-.2h7.5q.817.033 1.62.18a9.8 9.8 0 0 1 3.13 1.16 8.8 8.8 0 0 1 1.76 1.36q.593.62 1.07 1.33c.314.48.575.994.78 1.53a.26.26 0 0 0 .3.21h1.79c.23 0 .23 0 .24.22v1.641c0 .16-.06.2-.221.2h-1.38c-.14 0-.18 0-.17.18q.081.915 0 1.83c0 .17 0 .19.19.19h1.58c.07.09 0 .18 0 .27q.015.175 0 .35v1.21c0 .17-.05.22-.2.22h-1.89a.25.25 0 0 0-.29.19 8 8 0 0 1-2.101 3.06q-.51.46-1.07.86c-.4.23-.79.47-1.2.66-.756.34-1.548.59-2.36.75-.772.138-1.555.2-2.34.19h-6.94v-.01z'
      />
    </g>
    <defs>
      <clipPath id='88dd6ead8bb97393ae63e4a96eca9c1e__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(CurrencyMultiCollateralDaiIcon);
export default ForwardRef;
