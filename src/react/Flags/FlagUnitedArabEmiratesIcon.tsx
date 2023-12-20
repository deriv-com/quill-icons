import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const FlagUnitedArabEmiratesIcon = (
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
    <path fill='#333' d='M6 11h18v3a2 2 0 0 1-2 2H6z' />
    <path fill='#fff' d='M6 5h18v6H6z' />
    <path fill='#12833B' d='M6 0h16a2 2 0 0 1 2 2v3H6z' />
    <path fill='#FF323E' d='M2 0h4v16H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2' />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagUnitedArabEmiratesIcon);
export default ForwardRef;
