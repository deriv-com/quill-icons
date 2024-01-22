import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const FlagCroatiaIcon = (
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
    <path fill='#150A99' d='M0 11h24v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z' />
    <path fill='#fff' d='M24 5H0v6h24z' />
    <path fill='red' d='M2 0h20a2 2 0 0 1 2 2v3H0V2a2 2 0 0 1 2-2' />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z'
      clipRule='evenodd'
    />
    <path
      fill='red'
      fillRule='evenodd'
      d='M14.45 10c.033-.162.05-.329.05-.5V9h-1V8h1V7h-1V6h-1v1h-1V6h-1v1h-1v1h1v1h-1v.5c0 .171.017.338.05.5h.95v1H10c.142.19.31.358.5.5V11h1v.95a2.504 2.504 0 0 0 1 0V11h1v.5c.19-.142.358-.31.5-.5h-.5v-1zm-1.95 0V9h1v1zm-1 0v1h1v-1zm0-1h1V8h1V7h-1v1h-1V7h-1v1h1zm0 0h-1v1h1z'
      clipRule='evenodd'
    />
    <path fill='#fff' d='M12.5 9V8h-1v1z' />
    <path
      fill='#fff'
      fillRule='evenodd'
      d='M14.5 9V8h-1V7h1V6h-1v1h-1V6h-1v1h-1V6h-1v1h1v1h-1v1h1v1h-.95c.075.37.232.71.45 1h.5v.5a2.487 2.487 0 0 0 1 .45V11h1v.95c.37-.075.71-.232 1-.45V11h.5a2.487 2.487 0 0 0 .45-1h-.95V9zm-2 0h1V8h-1V7h-1v1h-1v1h1v1h-1v1h1v-1h1v1h1v-1h-1z'
      clipRule='evenodd'
    />
    <path
      fill='#0091E0'
      fillRule='evenodd'
      d='M9.5 5h1v1h-1zm2-1h1v2h-1zm2 1h1v1h-1z'
      clipRule='evenodd'
    />
    <path fill='#150A99' fillRule='evenodd' d='M12.5 4h1v2h-1zm-2 0h1v2h-1z' clipRule='evenodd' />
  </svg>
);
const ForwardRef = forwardRef(FlagCroatiaIcon);
export default ForwardRef;
