import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketStocksBayerIcon = (
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
    <g clipPath='url(#ea365b92c6011ef8e48639b06c50d046__a)'>
      <path
        fill='#0D3650'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#fff'
        d='M27.967 15.244a11.99 11.99 0 0 0-23.934 0q.007.381.063.759a11.77 11.77 0 0 0 2.242 5.624A11.94 11.94 0 0 0 16 26.517a10.52 10.52 0 0 1-10.483-9.756 6 6 0 0 1-.032-.758 6 6 0 0 1 .032-.759A10.517 10.517 0 0 1 16 5.488a11.94 11.94 0 0 1 9.662 4.894 11.77 11.77 0 0 1 2.242 5.62q.054.361.063.727.002-.189.016-.379t.016-.379a6 6 0 0 0-.032-.727'
      />
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M17.516 7.888a1.03 1.03 0 0 1 .244 1.115 1 1 0 0 1-.935.625h-2.31v-3.32h2.275a.984.984 0 0 1 .975.976c-.03.22-.116.427-.25.604m-2.242-.316h1.389a.284.284 0 1 0 0-.569h-1.389zm0 1.326h1.42a.316.316 0 1 0 0-.632h-1.42zM18.053 13.571H17.2l-.253-.568h-1.863l-.252.568h-.853l1.646-3.315h.758zM16 11.108l-.569 1.2h1.137z'
        clipRule='evenodd'
      />
      <path
        fill='#fff'
        d='M17.137 14.297h.947l-1.674 2.147v1.169h-.785v-1.169l-1.674-2.147h.947l1.137 1.516zM21.526 14.297v.73h-2.21v.57h2.146v.725h-2.146v.631h2.21v.727h-3v-3.383z'
      />
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M23.958 16.35h-.6v1.263h-.79v-3.316h2.025a1.034 1.034 0 0 1 .284 2.021l.975 1.295h-.947zm.567-1.358H23.39v.636h1.136a.316.316 0 0 0 .316-.316.34.34 0 0 0-.316-.32M14.295 17.613h-.853l-.252-.569h-1.864l-.252.569h-.848l1.673-3.316h.758zm-2.053-2.463-.568 1.2h1.168zM9.467 15.877a1.02 1.02 0 0 1 .243 1.114 1 1 0 0 1-.937.622h-2.34v-3.316h2.273a.985.985 0 0 1 .975.98 1 1 0 0 1-.217.6zm-2.241-.316H8.61a.284.284 0 0 0 0-.569H7.226zm0 1.326h1.416a.316.316 0 0 0 0-.632H7.226z'
        clipRule='evenodd'
      />
      <path
        fill='#fff'
        d='M17.52 18.308v.726h-2.214v.568h2.147v.726h-2.147v.632h2.21v.726h-3v-3.374z'
      />
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M14.488 25.76v-3.316h2.21a1.024 1.024 0 0 1 1.011 1.042 1 1 0 0 1-.631.947l1.01 1.327h-.951l-.947-1.264h-.916v1.264zm2.463-2.305a.3.3 0 0 0-.316-.316h-1.357v.631h1.357a.3.3 0 0 0 .312-.315z'
        clipRule='evenodd'
      />
      <path
        fill='#fff'
        d='M7.79 24.753a12 12 0 0 1-3.757-7.992A6 6 0 0 1 4 16.034c0-.126.008-.253.016-.38.008-.125.016-.252.016-.377q.009.364.063.726a11.77 11.77 0 0 0 2.242 5.624A11.94 11.94 0 0 0 16 26.517a10.493 10.493 0 0 0 10.483-9.756q.04-.378.032-.758a6 6 0 0 0-.032-.759A10.517 10.517 0 0 0 16 5.488a11.94 11.94 0 0 1 9.662 4.894 11.77 11.77 0 0 1 2.242 5.62q.055.378.063.759A11.99 11.99 0 0 1 7.79 24.753'
      />
    </g>
    <defs>
      <clipPath id='ea365b92c6011ef8e48639b06c50d046__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksBayerIcon);
export default ForwardRef;
