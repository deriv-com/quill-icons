import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const FlagSpainIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path
      fill='#DD172C'
      d='M0 2a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v2H0zM0 12h24v2a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z'
    />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z'
      clipRule='evenodd'
    />
    <path
      fill='#FFCB00'
      fillRule='evenodd'
      d='M24 4H0v8h24zM7 5H6v.893l-.074-.019-.1-.026c-.358-.093-.634-.165-.756.152H5l.025.025C4.43 6.19 4 6.66 4 7.22V7H3v4h1V9.74c0 .697.674 1.26 1.5 1.262h2c.828 0 1.5-.56 1.5-1.26V11h1V7H9v.222c0-.556-.432-1.027-1.026-1.196L8 6h-.07c-.122-.314-.396-.243-.753-.15-.057.014-.116.03-.177.043z'
      clipRule='evenodd'
    />
    <path
      fill='#C8B47C'
      fillRule='evenodd'
      d='M9 7.222v2.52c0 .7-.672 1.26-1.5 1.26h-2C4.674 11 4 10.437 4 9.74V7.22c0-.572.448-1.05 1.064-1.205.186-.52.758-.054 1.436-.054.682 0 1.25-.463 1.436.055C8.55 6.175 9 6.654 9 7.222'
      clipRule='evenodd'
    />
    <path fill='#B5B5B5' fillRule='evenodd' d='M9 8h1v3H9zM3 8h1v3H3z' clipRule='evenodd' />
    <path fill='#165C96' fillRule='evenodd' d='M9 10h1v1H9zm-6 0h1v1H3z' clipRule='evenodd' />
    <path fill='#A0790A' fillRule='evenodd' d='M9 7h1v1H9zM3 7h1v1H3z' clipRule='evenodd' />
    <path fill='#D20636' fillRule='evenodd' d='M5 7h1v1.5H5zm2 2h1v1.5H7z' clipRule='evenodd' />
    <path fill='#A18793' fillRule='evenodd' d='M7 7h1v1.5H7z' clipRule='evenodd' />
    <path fill='#FFE100' fillRule='evenodd' d='M5 9h1v1.5H5z' clipRule='evenodd' />
    <path fill='#B6161A' fillRule='evenodd' d='M6 7 5 6h3L7 7z' clipRule='evenodd' />
    <path fill='#AC9300' fillRule='evenodd' d='M6 5h1v1H6z' clipRule='evenodd' />
  </svg>
);
const ForwardRef = forwardRef(FlagSpainIcon);
export default ForwardRef;
