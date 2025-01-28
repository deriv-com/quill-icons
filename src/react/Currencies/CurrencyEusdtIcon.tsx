import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const CurrencyEusdtIcon = (
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
    <g clipPath='url(#649c8faaba0536758123d07b8f3f2453__a)'>
      <path
        fill='#53AE94'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#fff'
        d='M17.975 13.868v-2.38h5.443V7.861H8.596v3.627h5.444v2.378c-4.424.203-7.75 1.08-7.75 2.13s3.328 1.925 7.75 2.13v7.623h3.936v-7.624c4.416-.204 7.736-1.08 7.736-2.128s-3.32-1.924-7.736-2.128zm.001 3.611v-.002c-.111.007-.682.041-1.952.041a42 42 0 0 1-1.982-.041v.003c-3.909-.173-6.826-.854-6.826-1.668 0-.815 2.918-1.495 6.826-1.668v2.658c.256.017.988.06 1.999.06 1.213 0 1.824-.05 1.936-.06v-2.658c3.9.174 6.811.855 6.811 1.667 0 .811-2.913 1.492-6.812 1.666'
      />
    </g>
    <defs>
      <clipPath id='649c8faaba0536758123d07b8f3f2453__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(CurrencyEusdtIcon);
export default ForwardRef;
