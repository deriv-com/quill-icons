import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const CurrencyIdkIcon = (
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
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16Z'
      />
      <path
        fill='#EE3549'
        d='M12.244 12.332V3.648a12.898 12.898 0 0 0-8.62 8.684h8.62Zm3.091 2.146 8.628-8.628A12.903 12.903 0 0 0 16 3.091c-.21 0-.43.007-.665.02v11.367Zm-12.228.945c-.01.205-.016.394-.016.577 0 2.885.977 5.695 2.76 7.963l6.393-6.394v-2.146H3.107ZM8.038 26.15A12.905 12.905 0 0 0 16 28.909c7.118 0 12.909-5.791 12.909-12.91 0-2.884-.976-5.693-2.758-7.96L8.038 26.15ZM16 32a15.99 15.99 0 0 1-10.154-3.64l-.008.008-.315-.269a17.757 17.757 0 0 1-1.347-1.308l-.014-.014a8.651 8.651 0 0 1-.145-.16l-.01-.012a3.786 3.786 0 0 1-.12-.142l-.153-.196A15.99 15.99 0 0 1 0 16C0 7.178 7.178 0 16 0a15.99 15.99 0 0 1 10.197 3.675l.009-.007.271.232a14.887 14.887 0 0 1 1.61 1.608l.036.037.005.01.165.187-.008.014A15.99 15.99 0 0 1 32 16c0 8.823-7.177 16-16 16Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(CurrencyIdkIcon);
export default ForwardRef;
