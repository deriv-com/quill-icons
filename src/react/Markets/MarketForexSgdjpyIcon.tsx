import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const MarketForexSgdjpyIcon = (
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
    <path fill='#fff' d='M0 12h24v6a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z' />
    <path fill='#E12237' d='M2 4h20a2 2 0 0 1 2 2v6H0V6a2 2 0 0 1 2-2' />
    <path
      fill='#fff'
      d='M4.625 6c.62 0 1.19.205 1.639.547a2.287 2.287 0 0 0-.764-.13c-1.208 0-2.187.932-2.187 2.083 0 1.15.979 2.083 2.187 2.083.269 0 .526-.046.764-.13A2.696 2.696 0 0 1 4.625 11C3.175 11 2 9.88 2 8.5S3.175 6 4.625 6m1.313 3.333c.241 0 .437.187.437.417 0 .23-.196.417-.437.417A.427.427 0 0 1 5.5 9.75c0-.23.196-.417.438-.417m1.75 0c.241 0 .437.187.437.417 0 .23-.196.417-.437.417a.427.427 0 0 1-.438-.417c0-.23.196-.417.438-.417M5.063 7.667c.241 0 .437.186.437.416 0 .23-.196.417-.437.417a.427.427 0 0 1-.438-.417c0-.23.196-.416.438-.416m3.5 0c.241 0 .437.186.437.416 0 .23-.196.417-.437.417a.427.427 0 0 1-.438-.417c0-.23.196-.416.438-.416m-1.75-1.25c.241 0 .437.186.437.416 0 .23-.196.417-.437.417a.427.427 0 0 1-.438-.417c0-.23.196-.416.438-.416'
    />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 5H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1M2 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z'
      clipRule='evenodd'
    />
    <path fill='#fff' d='M8 14a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2z' />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M30 13H10a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V14a1 1 0 0 0-1-1m-20-1a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2z'
      clipRule='evenodd'
    />
    <path fill='#ED293F' d='M24.5 20a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0' />
  </svg>
);
const ForwardRef = forwardRef(MarketForexSgdjpyIcon);
export default ForwardRef;
