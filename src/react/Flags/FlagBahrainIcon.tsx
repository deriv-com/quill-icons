import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const FlagBahrainIcon = (
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
      fill='#DE233C'
      d='M21.991 16H7l2-1.6-2-1.6 2-1.6-2-1.6L9 8 7 6.4l2-1.6-2-1.6 2-1.6L7 0h14.991C23.098 0 24 .893 24 1.994v12.012c0 1.1-.9 1.994-2.009 1.994Z'
    />
    <path
      fill='#fff'
      d='M2.009 0A2.003 2.003 0 0 0 0 1.994v12.012C0 15.106.9 16 2.009 16H7l2-1.6-2-1.6 2-1.6-2-1.6L9 8 7 6.4l2-1.6-2-1.6 2-1.6L7 0H2.009Z'
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
const ForwardRef = forwardRef(FlagBahrainIcon);
export default ForwardRef;
