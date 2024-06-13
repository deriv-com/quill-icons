import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const CurrencyDashIcon = (
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
    <g clipPath='url(#da47e0e5ccda1803494f61f2d65f0ec7__a)'>
      <path
        fill='#4165A5'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M22.89 20.221q.975-1.804.975-4.232 0-2.451-.976-4.256-.975-1.804-2.87-2.768Q18.123 8 15.468 8h-5.084v5.26H8.13v1.804h2.254V24h5.084q2.655 0 4.55-.987t2.871-2.792m-10.44-5.157v7.075h2.86q3.131 0 4.788-1.611 1.657-1.612 1.657-4.54t-1.646-4.55q-1.646-1.622-4.8-1.622h-2.86v3.444h4.098v1.804z'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='da47e0e5ccda1803494f61f2d65f0ec7__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(CurrencyDashIcon);
export default ForwardRef;
