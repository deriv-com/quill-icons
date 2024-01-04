import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const CurrencyMaticIcon = (
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
        fill='#8247E5'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16Z'
      />
      <path
        fill='#fff'
        d='M20.63 12.924c-.33-.188-.753-.188-1.129 0l-2.632 1.551-1.785.987-2.585 1.55c-.33.189-.752.189-1.128 0L9.35 15.792a1.146 1.146 0 0 1-.564-.987v-2.35c0-.376.188-.752.564-.987l2.02-1.175c.33-.188.753-.188 1.129 0l2.02 1.222c.33.188.565.564.565.987v1.551l1.785-1.034V11.42a1.16 1.16 0 0 0-.564-.987l-3.76-2.209c-.328-.188-.751-.188-1.127 0L7.564 10.48a1.034 1.034 0 0 0-.564.94v4.418c0 .376.188.752.564.987l3.807 2.209c.329.188.752.188 1.128 0l2.585-1.504 1.785-1.034 2.585-1.504c.33-.188.752-.188 1.128 0l2.021 1.175c.33.188.564.564.564.987v2.35c0 .376-.188.752-.564.987l-1.974 1.175c-.329.188-.752.188-1.128 0l-2.02-1.175a1.146 1.146 0 0 1-.565-.987V18l-1.786 1.034v1.55c0 .377.188.753.564.988l3.807 2.209c.33.188.752.188 1.128 0l3.807-2.21c.329-.187.564-.563.564-.986V16.12c0-.376-.188-.752-.564-.987l-3.807-2.209Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(CurrencyMaticIcon);
export default ForwardRef;
