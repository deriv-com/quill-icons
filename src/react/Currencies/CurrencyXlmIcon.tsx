import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const CurrencyXlmIcon = (
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
    <path
      fill='#000'
      d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16Z'
    />
    <path
      fill='#fff'
      d='M24 9.85v1.383L8 19.386v-1.383l.581-.296a1.232 1.232 0 0 0 .67-1.19 6.77 6.77 0 0 1 10.726-5.994l-1.268.645a5.542 5.542 0 0 0-8.197 5.555L24 9.851ZM24 12.617v1.378l-.582.296a1.233 1.233 0 0 0-.668 1.19 6.77 6.77 0 0 1-10.727 5.996l1.196-.61.067-.035a5.542 5.542 0 0 0 8.205-5.559L8 22.147v-1.381l16-8.15Z'
    />
  </svg>
);
const ForwardRef = forwardRef(CurrencyXlmIcon);
export default ForwardRef;
