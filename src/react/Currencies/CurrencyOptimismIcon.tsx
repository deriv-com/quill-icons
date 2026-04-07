import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const CurrencyOptimismIcon = (
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
    <g clipPath='url(#3a3c463d6b9556b0b0e3148fe9fa811f__a)'>
      <path
        fill='#FF0421'
        d='M16.036 12.1a8.4 8.4 0 0 0 3.864 3.864v.072a8.4 8.4 0 0 0-3.864 3.864h-.072a8.4 8.4 0 0 0-3.864-3.864v-.072a8.4 8.4 0 0 0 3.864-3.864z'
      />
      <path
        fill='#FF0421'
        fillRule='evenodd'
        d='M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0m0 10.232A7.885 7.885 0 0 0 16 26v-4.232A7.885 7.885 0 0 0 16 6z'
        clipRule='evenodd'
      />
      <path
        fill='#FAFAF9'
        d='M16 6a7.885 7.885 0 0 1 0 15.768V26a7.885 7.885 0 0 1 0-15.768zm-.036 6.1a8.4 8.4 0 0 1-3.864 3.864v.072a8.4 8.4 0 0 1 3.864 3.864h.072a8.4 8.4 0 0 1 3.864-3.864v-.072a8.4 8.4 0 0 1-3.864-3.864z'
      />
    </g>
    <defs>
      <clipPath id='3a3c463d6b9556b0b0e3148fe9fa811f__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(CurrencyOptimismIcon);
export default ForwardRef;
