import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const FlagBotswanaIcon = (
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
      fill='#73A9DD'
      d='M2 0h20a2 2 0 0 1 2 2v3H0V2a2 2 0 0 1 2-2ZM0 11v3a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-3H0Z'
    />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1ZM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Z'
      clipRule='evenodd'
    />
    <path fill='#fff' d='M0 5h24v1H0V5ZM0 10h24v1H0v-1Z' />
    <path fill='#333' d='M0 6h24v4H0V6Z' />
  </svg>
);
const ForwardRef = forwardRef(FlagBotswanaIcon);
export default ForwardRef;
