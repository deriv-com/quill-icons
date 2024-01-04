import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const FlagDenmarkIcon = (
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
      fill='#EF264D'
      d='M11 0h11a2 2 0 0 1 2 2v4H11V0ZM7 0H2a2 2 0 0 0-2 2v4h7V0ZM0 10v4a2 2 0 0 0 2 2h5v-6H0ZM11 16h11a2 2 0 0 0 2-2v-4H11v6Z'
    />
    <path fill='#fff' fillRule='evenodd' d='M11 0v6h13v4H11v6H7v-6H0V6h7V0h4Z' clipRule='evenodd' />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1ZM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagDenmarkIcon);
export default ForwardRef;
