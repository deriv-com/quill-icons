import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivDarkReceivePaymentIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 96 96'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath='url(#5a051b675bca82af352b3322de50d519__a)'>
      <mask
        id='5a051b675bca82af352b3322de50d519__b'
        width={96}
        height={96}
        x={0}
        y={0}
        maskUnits='userSpaceOnUse'
        style={{
          maskType: 'luminance',
        }}
      >
        <path fill='#fff' d='M96 0H0v96h96z' />
      </mask>
      <g mask='url(#5a051b675bca82af352b3322de50d519__b)'>
        <path
          fill='#9498A2'
          d='M6 0a6 6 0 0 0-6 6v74.28h5.34a3.05 3.05 0 0 1 3.04-2.93c1.64 0 2.97 1.3 3.04 2.93h4.63a3.05 3.05 0 0 1 3.04-2.93c1.64 0 2.97 1.3 3.04 2.93h5.11a3.05 3.05 0 0 1 3.04-2.93c1.64 0 2.97 1.3 3.04 2.93h5.11a3.05 3.05 0 0 1 3.04-2.93c1.64 0 2.97 1.3 3.04 2.93h5.11a3.05 3.05 0 0 1 3.04-2.93c1.64 0 2.97 1.3 3.04 2.93h5.34V6a6 6 0 0 0-6-6z'
        />
        <path
          fill='#CED0D6'
          d='M21.209 15.72a6 6 0 0 0-6 6V96h5.34a3.05 3.05 0 0 1 3.04-2.93c1.64 0 2.97 1.3 3.04 2.93h4.63a3.05 3.05 0 0 1 3.04-2.93c1.64 0 2.97 1.3 3.04 2.93h5.11a3.05 3.05 0 0 1 3.04-2.93c1.64 0 2.97 1.3 3.04 2.93h5.11a3.05 3.05 0 0 1 3.04-2.93c1.64 0 2.97 1.3 3.04 2.93h5.11a3.05 3.05 0 0 1 3.04-2.93c1.64 0 2.97 1.3 3.04 2.93h5.34V21.72a6 6 0 0 0-6-6z'
        />
        <path
          fill='#fff'
          d='M34.69 37.77c0-2.01-1.06-3.15-3.88-3.94-2.02-.57-2.47-.94-2.47-1.77 0-.58.34-1.3 1.56-1.3 1.44 0 1.69.85 1.82 1.37h2.68c-.14-1.47-.98-2.92-3.32-3.28v-1.21h-2.25v1.23c-1.79.34-3.19 1.53-3.19 3.44 0 1.78.93 2.95 4.12 3.87 1.75.5 2.24.95 2.24 1.88 0 .76-.45 1.43-1.84 1.43-1.13 0-1.88-.61-2.1-1.59h-2.68c.15 1.82 1.4 3.16 3.58 3.49v1.52h2.26v-1.52c2.07-.31 3.46-1.5 3.46-3.63zM66.1 48.45H25.39v5.09H66.1zM66.1 58.62H25.39v5.09H66.1zM66.1 68.8H25.39v5.09H66.1zM66.1 78.98H25.39v5.09H66.1z'
        />
        <path
          fill='#FF444F'
          d='M76 68c11.046 0 20-8.954 20-20s-8.954-20-20-20-20 8.954-20 20 8.954 20 20 20'
        />
        <path
          fill='#fff'
          fillRule='evenodd'
          d='m73.08 51.002 10.256-10.247 2.828 2.83-13.085 13.073-7.243-7.244 2.828-2.828z'
          clipRule='evenodd'
        />
      </g>
    </g>
    <defs>
      <clipPath id='5a051b675bca82af352b3322de50d519__a'>
        <path fill='#fff' d='M0 0h96v96H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(DerivDarkReceivePaymentIcon);
export default ForwardRef;
