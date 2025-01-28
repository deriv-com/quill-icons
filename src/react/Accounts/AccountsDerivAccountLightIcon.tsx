import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const AccountsDerivAccountLightIcon = (
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
    <g clipPath='url(#8827bbbc916952a140d6f6288a904cdb__a)'>
      <path
        fill='#414652'
        d='M0 6a6 6 0 0 1 6-6h20a6 6 0 0 1 6 6v20a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6z'
      />
      <path
        fill='#EF8933'
        d='M17 19c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2z'
      />
      <path
        fill='#4B6FA8'
        d='M7 19c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2H9c-1.1 0-2-.9-2-2z'
      />
      <path
        fill='#76C0E3'
        d='M17 9c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2z'
      />
      <path
        fill='#FF444F'
        d='M7 9c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2H9c-1.1 0-2-.9-2-2z'
      />
      <path
        fill='#303541'
        d='M6 0a6 6 0 0 0-6 6v.174l29.914-4.721A5.98 5.98 0 0 0 26 0zM30.532 2.068 25.044 32H26a6 6 0 0 0 6-6V6c0-1.504-.553-2.88-1.468-3.932'
      />
    </g>
    <defs>
      <clipPath id='8827bbbc916952a140d6f6288a904cdb__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(AccountsDerivAccountLightIcon);
export default ForwardRef;
