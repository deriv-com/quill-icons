import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightLessThanEightIconKycIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill='#C7E5E5'>
      <path d='M10.007 20.545a1.18 1.18 0 0 1-.739-.265l-6.99-5.64a3.37 3.37 0 0 1 0-5.287l6.99-5.64a1.175 1.175 0 0 1 1.633.161 1.126 1.126 0 0 1-.165 1.604l-6.99 5.64a1.11 1.11 0 0 0 0 1.756l6.99 5.64c.376.308.518.812.355 1.265a1.17 1.17 0 0 1-1.084.766M11.655 15.832c-.046-1.872 1.3-3.498 3.176-3.835v-.177c-1.617-.467-2.72-1.935-2.697-3.59 0-2.384 1.898-3.983 5.193-3.983S22.52 5.846 22.52 8.23c.023 1.655-1.08 3.123-2.697 3.59v.177c1.875.337 3.222 1.963 3.176 3.835 0 2.57-1.997 4.503-5.672 4.503s-5.672-1.933-5.672-4.503m8.668-.451c0-1.54-1.089-2.453-2.996-2.453s-2.996.913-2.996 2.453v.451c0 1.53 1.089 2.453 2.996 2.453s2.996-.893 2.996-2.423zm-.32-6.543v-.383c0-1.402-.928-2.128-2.676-2.128-1.747 0-2.696.775-2.696 2.177v.383c0 1.403.999 2.188 2.696 2.188s2.676-.824 2.676-2.237' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(DerivLightLessThanEightIconKycIcon);
export default ForwardRef;
