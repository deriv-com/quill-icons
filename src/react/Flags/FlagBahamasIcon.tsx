import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const FlagBahamasIcon = (
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
      <path fill='#FBE22B' d='M7.5 11 12 8 7.5 5H24v6z' />
      <path fill='#333' d='M0 2v12c0 .612.275 1.16.709 1.527L12 8 .709.473A1.996 1.996 0 0 0 0 2' />
      <path
        fill='#00ABCB'
        d='M2 0A2 2 0 0 0 .709.473L7.5 5H24V2a2 2 0 0 0-2-2zM7.5 11H24v3a2 2 0 0 1-2 2H2a2 2 0 0 1-1.291-.473z'
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
const ForwardRef = forwardRef(FlagBahamasIcon);
export default ForwardRef;
