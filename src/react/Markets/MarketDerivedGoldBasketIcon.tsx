import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketDerivedGoldBasketIcon = (
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
    <g fill='#0AA0B0' fillRule='evenodd' clipRule='evenodd'>
      <path d='M17.515 4.857 21.8 12H27a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2h5.2l4.286-7.143a1.766 1.766 0 0 1 3.029 0M13.185 12l2.729-4.605a.1.1 0 0 1 .172 0L18.815 12zM25.72 16a1 1 0 0 1 .97 1.242l-2.5 10a1 1 0 0 1-.97.758H8.78a1 1 0 0 1-.97-.758l-2.5-10A1 1 0 0 1 6.28 16zM10 20a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0zm6-1a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1m4 1a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0z' />
    </g>
    <g clipPath='url(#0cc3c69b6bb4972789a47af6ee3a5533__a)'>
      <path fill='#FFDA5B' d='M32 5a5 5 0 1 1-10 0 5 5 0 0 1 10 0' />
      <path
        fill='#FDF1CA'
        d='M30.188 1.148a5 5 0 0 0-.695-.483l-6.828 6.828q.212.369.483.695zM24.413 9.28a5 5 0 0 1-.986-.782l7.07-7.07c.3.293.564.624.783.985zM25.874 9.873a5 5 0 0 1-.46-.13l6.33-6.33q.075.227.129.46z'
      />
      <path fill='#FFC329' d='M31.063 5a4.062 4.062 0 1 1-8.125 0 4.062 4.062 0 0 1 8.125 0' />
      <path
        fill='#F8B712'
        d='M27 9.063a4.062 4.062 0 0 0 3.589-5.968 8.07 8.07 0 0 0-5.494 5.494A4.05 4.05 0 0 0 27 9.062'
      />
      <path
        fill='#DB9E43'
        d='M30.025 2.288a4.062 4.062 0 0 0-5.737 5.737 4.062 4.062 0 1 1 5.737-5.737'
      />
    </g>
    <defs>
      <clipPath id='0cc3c69b6bb4972789a47af6ee3a5533__a'>
        <path fill='#fff' d='M22 0h10v10H22z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketDerivedGoldBasketIcon);
export default ForwardRef;
