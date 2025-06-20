import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const CurrencyIdkIcon = (
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
    <g clipPath='url(#0ae82bfd376feac704e52b47bc8f11f2__a)'>
      <path
        fill='#fff'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#EE3549'
        d='M12.244 12.332V3.648a12.9 12.9 0 0 0-8.62 8.684zm3.091 2.146 8.628-8.628A12.9 12.9 0 0 0 16 3.091q-.314 0-.665.02zm-12.228.945c-.01.205-.016.394-.016.577 0 2.885.977 5.695 2.76 7.963l6.393-6.394v-2.146zM8.038 26.15A12.9 12.9 0 0 0 16 28.909c7.118 0 12.909-5.791 12.909-12.91 0-2.884-.976-5.693-2.758-7.96zM16 32a16 16 0 0 1-10.154-3.64l-.008.008-.315-.269a18 18 0 0 1-1.347-1.308l-.014-.014-.145-.16-.01-.012a4 4 0 0 1-.12-.142l-.153-.196A16 16 0 0 1 0 16C0 7.178 7.178 0 16 0a16 16 0 0 1 10.197 3.675l.009-.007.271.232a14.887 14.887 0 0 1 1.61 1.608l.036.037.005.01.165.187-.008.014A16 16 0 0 1 32 16c0 8.823-7.177 16-16 16'
      />
    </g>
    <defs>
      <clipPath id='0ae82bfd376feac704e52b47bc8f11f2__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(CurrencyIdkIcon);
export default ForwardRef;
