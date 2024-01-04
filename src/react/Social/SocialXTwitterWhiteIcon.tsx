import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const SocialXTwitterWhiteIcon = (
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
        fill='#fff'
        d='M19.044 13.55 30.957 0h-2.823L17.79 11.765 9.53 0H0l12.493 17.79L0 32h2.823l10.923-12.424L22.471 32H32L19.044 13.55ZM3.84 2.08h4.336l19.96 27.935h-4.337L3.84 2.08Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SocialXTwitterWhiteIcon);
export default ForwardRef;
