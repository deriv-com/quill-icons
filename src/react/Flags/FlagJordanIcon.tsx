import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const FlagJordanIcon = (
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
    <g clipPath='url(#a)'>
      <path fill='#fff' d='M7.5 11 12 8 7.5 5H24v6z' />
      <path
        fill='#E6223A'
        d='M0 2v12c0 .612.275 1.16.709 1.527L12 8 .709.473A1.996 1.996 0 0 0 0 2'
      />
      <path fill='#333' d='M2 0A2 2 0 0 0 .709.473L7.5 5H24V2a2 2 0 0 0-2-2z' />
      <path fill='#199E56' d='M7.5 11H24v3a2 2 0 0 1-2 2H2a2 2 0 0 1-1.291-.473z' />
      <path
        fill='#000'
        fillOpacity={0.08}
        fillRule='evenodd'
        d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z'
        clipRule='evenodd'
      />
      <path
        fill='#fff'
        fillRule='evenodd'
        d='m4.667 9-.868.802.086-1.179-1.168-.178.975-.668-.589-1.024 1.13.346L4.667 6l.434 1.099 1.13-.346-.59 1.024.976.668-1.168.178.086 1.179z'
        clipRule='evenodd'
      />
      <path
        fill='#000'
        fillOpacity={0.08}
        fillRule='evenodd'
        d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h24v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(FlagJordanIcon);
export default ForwardRef;
