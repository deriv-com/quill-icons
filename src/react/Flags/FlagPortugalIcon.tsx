import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const FlagPortugalIcon = (
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
      fill='#fff'
      d='M22 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z'
    />
    <path
      fill='#FF2936'
      d='M22 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z'
    />
    <path fill='#128415' d='M8 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6V0Z' />
    <path
      fill='#FAF94F'
      fillRule='evenodd'
      d='M8 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM4 8a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z'
      clipRule='evenodd'
    />
    <path
      fill='#fff'
      d='M6.5 6.341c0-.188.145-.341.333-.341h2.334c.184 0 .333.152.333.341v2.327C9.5 9.404 8.907 10 8.175 10h-.35C7.093 10 6.5 9.41 6.5 8.668V6.341Z'
    />
    <path
      fill='#1D50B5'
      d='M8 8.92c.414 0 .75-1.086.75-1.5a.75.75 0 0 0-1.5 0c0 .414.336 1.5.75 1.5Z'
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
const ForwardRef = forwardRef(FlagPortugalIcon);
export default ForwardRef;
