import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const SocialGoogleBrandIcon = (
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
    <g clipPath='url(#af2dcc64d9ed0fc48787d410207a28bb__a)'>
      <path
        fill='#3E82F1'
        d='M32 16.375c0-1.097-.1-2.194-.294-3.273H16.325v6.186h8.787a7.34 7.34 0 0 1-3.256 4.829l5.274 4.02C30.22 25.348 32 21.248 32 16.374'
      />
      <path
        fill='#32A753'
        d='M21.858 24.119c-1.458.962-3.33 1.529-5.53 1.529-4.257 0-7.852-2.815-9.136-6.6l-5.458 4.145c2.77 5.404 8.42 8.82 14.593 8.812 4.412 0 8.108-1.43 10.805-3.876z'
      />
      <path
        fill='#F9BB00'
        d='M7.19 12.966 1.735 8.82a15.77 15.77 0 0 0 0 14.377l5.457-4.145a9.35 9.35 0 0 1 0-6.087'
      />
      <path
        fill='#E74133'
        d='M16.327 0C10.154 0 4.503 3.417 1.734 8.82l5.457 4.146c1.284-3.786 4.88-6.6 9.136-6.6 2.394 0 4.55.81 6.237 2.392l4.687-4.595C24.426 1.583 20.73 0 16.327 0'
      />
    </g>
    <defs>
      <clipPath id='af2dcc64d9ed0fc48787d410207a28bb__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SocialGoogleBrandIcon);
export default ForwardRef;
