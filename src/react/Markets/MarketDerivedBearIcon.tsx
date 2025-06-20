import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketDerivedBearIcon = (
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
    <g clipPath='url(#0c183ea779a5ad0068bf0f4dba0d46c3__a)'>
      <path fill='#414652' d='M32 8a8 8 0 1 1-16 0 8 8 0 0 1 16 0' />
      <path
        fill='#fff'
        d='M28.101 4.082c1.323.393 1.217 2.412-.529 2.917h-.053l.37 1.121.583 1.795c-.477 1.459-2.329 1.907-2.329 1.907l-.423.73a.84.84 0 0 1-.741.448h-1.905a.91.91 0 0 1-.741-.393l-.423-.729s-1.852-.505-2.329-1.907l.582-1.795.37-1.121-.105-.056c-1.746-.505-1.852-2.524-.53-2.917 1.06-.336 1.377.449 1.483.785l.952-.28c.53-.168 1.111-.224 1.694-.224.582 0 1.164.056 1.693.224l.9.28c.052-.336.423-1.121 1.481-.785'
      />
      <path
        fill='#FF444F'
        d='M32 32h-8v-2h4.586L19 20.414l-5 5-14-14V8.586l14 14 5-5 11 11V24h2z'
      />
    </g>
    <defs>
      <clipPath id='0c183ea779a5ad0068bf0f4dba0d46c3__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketDerivedBearIcon);
export default ForwardRef;
