import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const FlagGreeceIcon = (
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
    <path fill='#fff' d='M0 14h24a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2Z' />
    <path
      fill='#006CC7'
      fillRule='evenodd'
      d='M0 13.5h24v.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-.5Z'
      clipRule='evenodd'
    />
    <path fill='#fff' d='M24 11.5H0v2h24v-2Z' />
    <path fill='#006CC7' d='M24 9H0v2.5h24V9Z' />
    <path fill='#fff' d='M24 7H0v2h24V7Z' />
    <path fill='#006CC7' d='M24 4.5H0V7h24V4.5Z' />
    <path fill='#fff' d='M24 2.5H0v2h24v-2Z' />
    <path fill='#006CC7' d='M2 0h20a2 2 0 0 1 2 2v.5H0V2a2 2 0 0 1 2-2Z' />
    <path
      fill='#006CC7'
      fillRule='evenodd'
      d='M11 7v2H0V7h11Zm0-4.5v2H0v-2h11Z'
      clipRule='evenodd'
    />
    <path
      fill='#fff'
      fillRule='evenodd'
      d='M6.875 0v4.5H11V7H6.875v4.5h-2.75V7H0V4.5h4.125V0h2.75Z'
      clipRule='evenodd'
    />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1ZM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagGreeceIcon);
export default ForwardRef;
