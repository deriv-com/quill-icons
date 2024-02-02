import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketStocksJpMorganChaseIcon = (
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
    <g clipPath='url(#80c4291e1dd16a6c__a)'>
      <path
        fill='#0079C1'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#fff'
        d='M12.884 6.054a.7.7 0 0 1 .27-.054h6.413l5.953 5.654H12.447V6.706a.71.71 0 0 1 .437-.652M25.946 12.88a.7.7 0 0 1 .054.271v6.415l-5.655 5.952V12.446h4.948a.71.71 0 0 1 .653.435M18.847 25.997a.703.703 0 0 0 .704-.707v-4.95H6.477l5.954 5.653h6.416zM6.053 19.113a.7.7 0 0 1-.053-.27v-6.414l5.655-5.953v13.073h-4.95a.705.705 0 0 1-.652-.436'
      />
    </g>
    <defs>
      <clipPath id='80c4291e1dd16a6c__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksJpMorganChaseIcon);
export default ForwardRef;
