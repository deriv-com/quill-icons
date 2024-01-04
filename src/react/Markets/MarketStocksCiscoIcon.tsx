import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const MarketStocksCiscoIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fill='#00A7E0'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16Z'
      />
      <path
        fill='#fff'
        d='M10.633 10.154a.525.525 0 0 1 .154.37v5.535a.525.525 0 1 1-1.05 0v-5.534a.525.525 0 0 1 .896-.371ZM7.914 12.49a.525.525 0 0 0-1.042 0v2.534a.525.525 0 0 0 1.042 0V12.49ZM4.891 13.56c.097.1.151.231.151.37v1.094a.525.525 0 0 1-1.042 0V13.93a.525.525 0 0 1 .525-.524c.138.001.27.058.366.156ZM15.833 19.329a3.517 3.517 0 0 0-.825-.128c-.42 0-.652.142-.652.337 0 .195.307.346.48.398l.292.097a1.253 1.253 0 0 1 .998 1.193c0 1.042-.923 1.395-1.733 1.395-.38-.002-.759-.04-1.132-.113v-.93c.322.095.655.148.99.158.525 0 .75-.158.75-.39 0-.233-.203-.338-.465-.413l-.225-.075c-.585-.187-1.072-.532-1.072-1.222s.577-1.305 1.552-1.305c.346.006.69.052 1.027.135l.015.863Z'
      />
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M25.49 21.73c.237-.37.357-.801.347-1.24a2.145 2.145 0 0 0-2.205-2.151 2.205 2.205 0 1 0 1.859 3.39Zm-2.475-2.155c.183-.12.398-.182.617-.179a1.08 1.08 0 0 1 1.087 1.095 1.102 1.102 0 1 1-1.704-.916Z'
        clipRule='evenodd'
      />
      <path
        fill='#fff'
        d='M9.34 19.606a1.831 1.831 0 0 0-.886-.225 1.125 1.125 0 0 0 0 2.25c.31 0 .613-.078.885-.225v1.117a3 3 0 0 1-.96.15 2.159 2.159 0 1 1 0-4.312c.325.004.648.052.96.143v1.102ZM19.44 19.381c.31 0 .614.076.885.225v-1.102a3.619 3.619 0 0 0-.96-.143 2.16 2.16 0 1 0 0 4.312c.326 0 .65-.05.96-.15v-1.117a1.867 1.867 0 0 1-.885.225 1.125 1.125 0 0 1 0-2.25ZM10.786 18.406h1.05v4.17h-1.05v-4.17ZM13.651 12.49a.524.524 0 0 0-1.042 0v2.534a.526.526 0 0 0 1.042 0V12.49ZM16.364 13.563a.518.518 0 0 1 .152.366v1.095a.517.517 0 0 1-1.035 0V13.93a.517.517 0 0 1 .883-.366ZM19.388 12.49a.525.525 0 0 0-1.043 0v2.534a.525.525 0 0 0 1.043 0V12.49ZM22.087 10.195a.524.524 0 0 1 .173.33v5.534a.525.525 0 1 1-1.043 0v-5.534a.525.525 0 0 1 .87-.33ZM25.132 12.49a.525.525 0 0 0-1.05 0v2.534a.525.525 0 1 0 1.05 0V12.49ZM27.976 13.71c.022.071.03.146.02.22v1.094a.526.526 0 0 1-1.042 0V13.93a.525.525 0 0 1 1.022-.219ZM27.396 22.028v.068h-.187v.48h-.075v-.48h-.188v-.068h.45ZM27.554 22.028h-.12v.548h.075v-.45h.007l.158.45h.075l.165-.45v.45h.082v-.548h-.12l-.157.45-.165-.45Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksCiscoIcon);
export default ForwardRef;
