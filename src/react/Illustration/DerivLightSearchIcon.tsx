import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightSearchIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 128 128'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#C6E4E4'
      fillRule='evenodd'
      d='M48 88c22.091 0 40-17.909 40-40S70.091 8 48 8 8 25.909 8 48s17.909 40 40 40m0 8c26.51 0 48-21.49 48-48S74.51 0 48 0 0 21.49 0 48s21.49 48 48 48'
      clipRule='evenodd'
    />
    <path
      fill='#F2F2F2'
      fillRule='evenodd'
      d='M48 24c-1.557 0-3.075.148-4.543.429a4 4 0 0 1-1.504-7.858A32 32 0 0 1 48 16a4 4 0 0 1 0 8m-15.498.338a4 4 0 0 1-.358 5.645 24 24 0 0 0-3.003 3.171A23.88 23.88 0 0 0 24 48a4 4 0 0 1-8 0 31.88 31.88 0 0 1 6.859-19.799 32 32 0 0 1 3.997-4.22 4 4 0 0 1 5.646.357'
      clipRule='evenodd'
    />
    <path
      fill='#C6E4E4'
      fillRule='evenodd'
      d='M79.172 79.172a4 4 0 0 1 5.656 0l18 18a4 4 0 0 1 0 5.656 4 4 0 0 1-5.656 0l-18-18a4 4 0 0 1 0-5.656'
      clipRule='evenodd'
    />
    <path
      fill='#4BB4B3'
      d='m96.071 84.758 19.586 19.585a8 8 0 0 1-11.314 11.314L84.758 96.071a2 2 0 0 1 0-2.828l8.485-8.486a2 2 0 0 1 2.828 0'
    />
    <path
      fill='#F2F2F2'
      d='M88 124c0 2.209-17.909 4-40 4s-40-1.791-40-4 17.909-4 40-4 40 1.791 40 4'
    />
  </svg>
);
const ForwardRef = forwardRef(DerivLightSearchIcon);
export default ForwardRef;
