import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const FlagBoliviaIcon = (
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
    <path fill='#007A30' d='M0 11h24v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z' />
    <path fill='#FFE200' d='M24 5H0v6h24z' />
    <path fill='#009BBE' fillRule='evenodd' d='M10.5 7.5h1v1h-1zm2 0h1v1h-1z' clipRule='evenodd' />
    <path
      fill='#D7280F'
      fillRule='evenodd'
      d='M13.5 7.5h1v2h-1zm-1-1h1v1h-1zm-2 0h1v1h-1zm-1 1h1v2h-1z'
      clipRule='evenodd'
    />
    <path fill='#007B30' fillRule='evenodd' d='M11.5 8.5h1v1h-1z' clipRule='evenodd' />
    <path fill='#3F291F' fillRule='evenodd' d='M11.5 6.5h1v1h-1z' clipRule='evenodd' />
    <path fill='#EAA400' fillRule='evenodd' d='M12.5 8.5h1v1h-1zm-2 0h1v1h-1z' clipRule='evenodd' />
    <path fill='#3B5B27' fillRule='evenodd' d='M11.5 7.5h1v1h-1z' clipRule='evenodd' />
    <path fill='#D7280F' d='M2 0h20a2 2 0 0 1 2 2v3H0V2a2 2 0 0 1 2-2' />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagBoliviaIcon);
export default ForwardRef;
