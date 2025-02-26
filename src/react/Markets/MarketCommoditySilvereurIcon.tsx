import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketCommoditySilvereurIcon = (
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
    <g clipPath='url(#f9aff13fafe3c26880ba0fbb44e2a234__a)'>
      <path fill='#DFDFDF' d='M20 11a8.999 8.999 0 1 1-17.998 0A8.999 8.999 0 0 1 20 11' />
      <path
        fill='#F8F8F8'
        d='M16.738 4.067a9 9 0 0 0-1.251-.87L3.197 15.486q.385.664.87 1.251zM6.345 18.702a9 9 0 0 1-1.775-1.407L17.296 4.57a9 9 0 0 1 1.407 1.774zM8.974 19.77a9 9 0 0 1-.828-.233L19.538 8.145q.136.406.232.828z'
      />
      <path fill='#D1D1D1' d='M18.312 11A7.312 7.312 0 1 1 3.69 11a7.312 7.312 0 0 1 14.623 0' />
      <path
        fill='#C4C4C4'
        d='M11 18.312A7.312 7.312 0 0 0 17.46 7.57a14.53 14.53 0 0 0-9.889 9.888 7.3 7.3 0 0 0 3.43.853'
      />
      <path
        fill='#ADADAD'
        d='M16.444 6.119A7.312 7.312 0 0 0 6.12 16.444 7.312 7.312 0 1 1 16.444 6.119'
      />
    </g>
    <path fill='#283991' d='M30 21a8.999 8.999 0 1 1-17.998 0A8.999 8.999 0 0 1 30 21' />
    <path
      fill='#F8D12E'
      d='m21.199 14.464-.22-.675-.22.675h-.71l.575.417-.22.675.575-.417.575.417-.22-.675.575-.417zM21.199 27.208l-.22-.676-.22.676h-.71l.575.417-.22.675.575-.417.575.417-.22-.675.575-.417zM24.477 14.919l.219.675h.71l-.575.417.22.675-.574-.417-.575.417.22-.675-.575-.417h.71zM27.082 17.948l-.22-.675-.219.675h-.71l.575.417-.22.675.575-.417.574.417-.22-.675.575-.417zM26.92 23.22l.219.676h.71l-.575.417.22.675-.575-.417-.574.417.22-.675-.575-.417h.71zM15.401 17.948l-.22-.675-.218.675h-.71l.574.417-.22.675.575-.417.574.417-.22-.675.575-.417zM27.416 20.11l.219.675h.71l-.574.417.219.675-.574-.417-.575.417.22-.675-.575-.418h.71zM14.859 20.785l-.22-.675-.219.675h-.71l.574.417-.219.675.575-.417.574.417-.22-.675.575-.418zM15.105 23.22l.22.676h.709l-.574.417.219.675-.574-.417-.574.417.219-.675-.574-.417h.71zM24.799 26.35l-.22-.675-.219.675h-.71l.575.418-.22.675.575-.417.574.417-.22-.675.575-.418zM17.595 14.919l.22.675h.71l-.575.417.22.675-.575-.417-.574.417.22-.675-.575-.417h.71zM17.555 26.308l-.219-.676-.22.676h-.71l.575.417-.22.675.575-.417.574.417-.219-.675.574-.417z'
    />
    <defs>
      <clipPath id='f9aff13fafe3c26880ba0fbb44e2a234__a'>
        <path fill='#fff' d='M2.002 2.001H20v17.998H2.002z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketCommoditySilvereurIcon);
export default ForwardRef;
