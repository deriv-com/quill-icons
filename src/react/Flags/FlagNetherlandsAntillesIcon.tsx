import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const FlagNetherlandsAntillesIcon = (
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
    <path fill='#DC171D' d='M15 0H9v5h6zM15 11H9v5h6z' />
    <path
      fill='#fff'
      d='M15 0h7a2 2 0 0 1 2 2v3h-9zM0 2a2 2 0 0 1 2-2h7v5H0zM0 11h9v5H2a2 2 0 0 1-2-2zM15 11h9v3a2 2 0 0 1-2 2h-7z'
    />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z'
      clipRule='evenodd'
    />
    <path fill='#012A87' d='M24 5H0v6h24z' />
    <path
      fill='#fff'
      d='M9.5 7.5h-1v1h1zM11.5 9h-1v1h1zM13.5 9h-1v1h1zM15.5 7.5h-1v1h1zM11.5 6h-1v1h1zM13.5 6h-1v1h1z'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagNetherlandsAntillesIcon);
export default ForwardRef;
